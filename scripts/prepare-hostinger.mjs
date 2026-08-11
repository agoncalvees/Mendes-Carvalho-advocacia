import { cp, mkdir, readdir, readFile, rm, stat } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const exportDir = path.resolve(projectRoot, "out");
const distDir = path.resolve(projectRoot, "dist");

function assertInsideProject(target) {
  const relative = path.relative(projectRoot, target);
  if (!relative || relative.startsWith("..") || path.isAbsolute(relative)) {
    throw new Error(`Unsafe deployment path: ${target}`);
  }
}

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const target = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(target)));
    else files.push(target);
  }

  return files;
}

async function materializePrefetchPayloads(directory = distDir) {
  const entries = await readdir(directory, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const target = path.join(directory, entry.name);

    if (entry.name.startsWith("__next.")) {
      const pagePayloads = (await walk(target)).filter((file) => path.basename(file) === "__PAGE__.txt");
      for (const pagePayload of pagePayloads) {
        const flattenedName = path.relative(directory, pagePayload).split(path.sep).join(".");
        await cp(pagePayload, path.join(directory, flattenedName));
      }
      continue;
    }

    await materializePrefetchPayloads(target);
  }
}

async function validateDist() {
  const indexPath = path.join(distDir, "index.html");
  const index = await stat(indexPath);
  if (!index.isFile()) throw new Error("dist/index.html was not generated.");

  const files = await walk(distDir);
  const fileSet = new Set(files.map((file) => path.normalize(file).toLowerCase()));
  const forbidden = [
    /file:\/\/\/[A-Z]:/i,
    /[A-Z]:[\\/]+Users[\\/]+/i,
    /mendescarvalho\.example/i,
    /localhost:\d+/i,
  ];

  for (const file of files) {
    if (!new Set([".html", ".css", ".js", ".json", ".txt", ".xml", ".svg"]).has(path.extname(file))) continue;
    const source = await readFile(file, "utf8");
    for (const pattern of forbidden) {
      if (pattern.test(source)) throw new Error(`Forbidden development reference in ${path.relative(distDir, file)}: ${pattern}`);
    }

    if (path.extname(file) !== ".html") continue;

    const references = [
      ...source.matchAll(/(?:href|src)=["']([^"']+)["']/g),
      ...source.matchAll(/srcset=["']([^"']+)["']/g),
    ].flatMap((match) =>
      match[0].startsWith("srcset=")
        ? match[1].split(",").map((candidate) => candidate.trim().split(/\s+/)[0])
        : [match[1]],
    );

    for (const reference of references) {
      if (!reference || /^(?:[a-z]+:|#|\/\/)/i.test(reference)) continue;
      const cleanReference = decodeURIComponent(reference.split(/[?#]/)[0]);
      const resolved = reference.startsWith("/")
        ? path.resolve(distDir, cleanReference.slice(1))
        : path.resolve(path.dirname(file), cleanReference);
      const normalized = path.normalize(resolved).toLowerCase();
      const directoryIndex = path.join(resolved, "index.html").toLowerCase();

      if (!normalized.startsWith(distDir.toLowerCase()) || (!fileSet.has(normalized) && !fileSet.has(directoryIndex))) {
        throw new Error(`Broken local reference in ${path.relative(distDir, file)}: ${reference}`);
      }
    }
  }

  return files;
}

assertInsideProject(exportDir);
assertInsideProject(distDir);
await rm(distDir, { recursive: true, force: true });
await mkdir(distDir, { recursive: true });
await cp(exportDir, distDir, { recursive: true });
await materializePrefetchPayloads();
const files = await validateDist();

const totalBytes = (await Promise.all(files.map(async (file) => (await stat(file)).size))).reduce(
  (sum, size) => sum + size,
  0,
);

process.stdout.write(
  `Hostinger package prepared: ${files.length} files, ${(totalBytes / 1024 / 1024).toFixed(2)} MB.\n`,
);
