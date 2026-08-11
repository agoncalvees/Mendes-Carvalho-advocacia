import type { Metadata } from "next";
import { Mail, MessageSquareText, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { siteInfo } from "@/data/site.mock";
import { assets } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Contato",
  description: `Fale com a equipe do Mendes & Carvalho Advogados pelo e-mail ${siteInfo.email} ou telefone ${siteInfo.phone}.`,
};

const contactStructuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: siteInfo.name,
  email: siteInfo.email,
  telephone: siteInfo.phoneE164,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "Atendimento",
      email: siteInfo.email,
      telephone: siteInfo.phoneE164,
      availableLanguage: "Portuguese",
    },
    {
      "@type": "ContactPoint",
      contactType: "WhatsApp",
      telephone: siteInfo.whatsappE164,
      url: siteInfo.whatsappHref,
      availableLanguage: "Portuguese",
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData).replace(/</g, "\\u003c") }}
      />
      <PageHero
        title="Vamos entender a decisão antes de falar sobre a resposta."
        description="Compartilhe o contexto geral do seu negócio. Este formulário é apenas demonstrativo e não envia dados."
        image={assets.contactDesktop}
        mobileImage={assets.contactMobile}
        imageAlt="Rua empresarial arborizada com arquitetura contemporânea em São Paulo"
        imagePosition="object-[70%_center] md:object-center"
      />

      <section className="section-space bg-paper">
        <div className="shell grid gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <h2 className="section-title">Fale com nossa equipe.</h2>
            <p className="body-copy mt-6">
              Os canais abaixo são oficiais. O endereço permanece demonstrativo neste projeto conceitual.
            </p>
            <div className="mt-9 space-y-6 border-t border-line pt-6">
              <ContactLine icon="email" label="E-mail" value={siteInfo.email} href={siteInfo.emailHref} />
              <ContactLine icon="phone" label="Telefone" value={siteInfo.phone} href={siteInfo.phoneHref} />
              <ContactLine
                icon="whatsapp"
                label="WhatsApp secundário"
                value={siteInfo.whatsapp}
                href={siteInfo.whatsappHref}
                external
              />
            </div>
            <div className="mt-10 border-t border-line pt-6">
              <p className="text-sm font-semibold">{siteInfo.city}</p>
              <p className="mt-3 leading-7 text-muted">{siteInfo.address}</p>
              <p className="mt-2 text-xs leading-5 text-muted">{siteInfo.addressNote}</p>
            </div>
          </Reveal>
          <Reveal className="md:col-span-7 md:col-start-6" delay={0.06}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactLine({
  icon,
  label,
  value,
  href,
  external = false,
}: {
  icon: "email" | "phone" | "whatsapp";
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const Icon = icon === "email" ? Mail : icon === "phone" ? Phone : MessageSquareText;
  const content = (
    <>
      <Icon aria-hidden="true" size={19} strokeWidth={1.5} className="mt-0.5 text-cobalt" />
      <span>
        <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-muted">{label}</span>
        <span className="mt-1 block text-sm font-medium">{value}</span>
      </span>
    </>
  );
  return href ? (
    <a
      href={href}
      className="flex min-h-11 gap-4 hover:text-cobalt"
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  ) : (
    <div className="flex min-h-11 gap-4">{content}</div>
  );
}
