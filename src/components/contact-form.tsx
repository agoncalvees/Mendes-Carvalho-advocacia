"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Send } from "lucide-react";
import { areas } from "@/data/site.mock";

type Errors = Partial<Record<"name" | "company" | "email" | "area" | "message" | "privacy", string>>;

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current !== null) window.clearTimeout(timerRef.current);
    },
    [],
  );

  function validate(formData: FormData) {
    const nextErrors: Errors = {};
    const email = String(formData.get("email") ?? "").trim();
    if (!String(formData.get("name") ?? "").trim()) nextErrors.name = "Informe seu nome.";
    if (!String(formData.get("company") ?? "").trim()) nextErrors.company = "Informe a empresa.";
    if (!email) nextErrors.email = "Informe seu e-mail profissional.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) nextErrors.email = "Informe um e-mail válido.";
    if (!String(formData.get("area") ?? "").trim()) nextErrors.area = "Selecione uma área de interesse.";
    if (String(formData.get("message") ?? "").trim().length < 20)
      nextErrors.message = "Conte um pouco mais sobre o contexto. Use pelo menos 20 caracteres.";
    if (formData.get("privacy") !== "on") nextErrors.privacy = "Confirme o uso demonstrativo dos dados.";
    return nextErrors;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstErrorId = Object.keys(nextErrors)[0];
      document.getElementById(firstErrorId)?.focus();
      return;
    }

    setStatus("submitting");
    timerRef.current = window.setTimeout(() => {
      setStatus("success");
      formRef.current?.reset();
    }, 500);
  }

  if (status === "success") {
    return (
      <div className="border-t border-success bg-white/55 p-8" role="status" aria-live="polite">
        <Check aria-hidden="true" size={30} strokeWidth={1.5} className="text-success" />
        <h2 className="card-title mt-5">Mensagem simulada com sucesso.</h2>
        <p className="mt-4 max-w-xl leading-7 text-muted">
          Este projeto não possui backend e nenhum dado foi enviado ou armazenado.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 min-h-11 font-semibold text-cobalt underline decoration-line underline-offset-8 hover:text-cobalt-hover"
        >
          Preencher novamente
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} noValidate onSubmit={handleSubmit} className="grid gap-6" aria-label="Formulário de contato">
      <div className="grid gap-6 md:grid-cols-2">
        <Field id="name" label="Nome" error={errors.name} required />
        <Field id="company" label="Empresa" error={errors.company} required />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Field id="email" label="E-mail profissional" error={errors.email} type="email" required />
        <Field id="phone" label="Telefone ou WhatsApp" type="tel" helper="Opcional" />
      </div>
      <div>
        <label className="field-label" htmlFor="area">
          Área de interesse <span aria-hidden="true">*</span>
        </label>
        <select
          id="area"
          name="area"
          defaultValue=""
          className="field-control"
          required
          aria-invalid={Boolean(errors.area)}
          aria-describedby={errors.area ? "area-error" : undefined}
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          {areas.map((area) => (
            <option key={area.slug} value={area.slug}>
              {area.name}
            </option>
          ))}
          <option value="outro">Outro tema empresarial</option>
        </select>
        {errors.area ? (
          <p className="field-error" id="area-error">
            {errors.area}
          </p>
        ) : null}
      </div>
      <div>
        <label className="field-label" htmlFor="message">
          Mensagem <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          className="field-control"
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : "message-help"}
        />
        <p id="message-help" className="mt-2 text-sm leading-6 text-muted">
          Descreva o contexto geral. Não inclua dados pessoais sensíveis ou informações confidenciais.
        </p>
        {errors.message ? (
          <p className="field-error" id="message-error">
            {errors.message}
          </p>
        ) : null}
      </div>
      <div>
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-ink" htmlFor="privacy">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            className="mt-1 size-5 shrink-0 accent-cobalt"
            aria-invalid={Boolean(errors.privacy)}
            aria-describedby={errors.privacy ? "privacy-error" : undefined}
          />
          <span>
            Entendo que este é um formulário demonstrativo e que nenhum dado será enviado ou armazenado.
          </span>
        </label>
        {errors.privacy ? (
          <p className="field-error" id="privacy-error">
            {errors.privacy}
          </p>
        ) : null}
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex min-h-[52px] w-full items-center justify-center gap-3 rounded-[2px] border border-cobalt bg-cobalt px-6 py-3 font-semibold text-on-cobalt transition-colors hover:border-cobalt-hover hover:bg-cobalt-hover active:translate-y-px disabled:cursor-wait disabled:opacity-70 sm:w-fit"
      >
        {status === "submitting" ? "Simulando envio..." : "Enviar mensagem"}
        <Send aria-hidden="true" size={17} strokeWidth={1.5} />
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  type = "text",
  helper,
  required = false,
}: {
  id: string;
  label: string;
  error?: string;
  type?: string;
  helper?: string;
  required?: boolean;
}) {
  const describedBy = error ? `${id}-error` : helper ? `${id}-help` : undefined;
  return (
    <div>
      <label className="field-label" htmlFor={id}>
        {label} {required ? <span aria-hidden="true">*</span> : null}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        className="field-control"
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        autoComplete={id === "name" ? "name" : id === "email" ? "email" : id === "phone" ? "tel" : "organization"}
      />
      {helper ? (
        <p id={`${id}-help`} className="mt-2 text-sm text-muted">
          {helper}
        </p>
      ) : null}
      {error ? (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
