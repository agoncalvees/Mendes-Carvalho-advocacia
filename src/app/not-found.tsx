import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70dvh] flex-col justify-center py-20">
      <h1 className="page-title max-w-3xl">Este conteúdo não está disponível.</h1>
      <p className="lead mt-6">Verifique o endereço ou retorne à visão geral do site.</p>
      <div className="mt-9">
        <ButtonLink href="/">Voltar ao início</ButtonLink>
      </div>
    </section>
  );
}
