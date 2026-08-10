export default function Loading() {
  return (
    <div className="shell min-h-[70dvh] py-20" aria-live="polite" aria-label="Carregando conteúdo">
      <div className="h-4 w-28 bg-surface-strong" />
      <div className="mt-8 h-16 max-w-2xl bg-surface" />
      <div className="mt-4 h-16 max-w-xl bg-surface" />
      <div className="mt-10 h-64 bg-surface-strong" />
      <span className="sr-only">Carregando</span>
    </div>
  );
}
