"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const initialState = {
  nombre: "",
  empresa: "",
  cargo: "",
  email: "",
  telefono: "",
  industria: "",
  necesidad: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(`Consulta técnica industrial — ${form.empresa || form.nombre || "Nuevo lead"}`);
    const body = encodeURIComponent(
      [
        `Nombre: ${form.nombre}`,
        `Empresa: ${form.empresa}`,
        `Cargo: ${form.cargo}`,
        `Email: ${form.email}`,
        `Teléfono: ${form.telefono}`,
        `Industria: ${form.industria}`,
        "",
        "Necesidad / contexto:",
        form.necesidad,
      ].join("\n"),
    );

    return `mailto:info@qualitytechnoservices.com?subject=${subject}&body=${body}`;
  }, [form]);

  return (
    <form className="grid gap-4 md:grid-cols-2" onSubmit={(e) => e.preventDefault()}>
      <Field label="Nombre" value={form.nombre} onChange={(value) => setForm((prev) => ({ ...prev, nombre: value }))} placeholder="Nombre y apellido" />
      <Field label="Empresa" value={form.empresa} onChange={(value) => setForm((prev) => ({ ...prev, empresa: value }))} placeholder="Nombre de la empresa" />
      <Field label="Cargo" value={form.cargo} onChange={(value) => setForm((prev) => ({ ...prev, cargo: value }))} placeholder="Cargo o área" />
      <Field label="Email" type="email" value={form.email} onChange={(value) => setForm((prev) => ({ ...prev, email: value }))} placeholder="correo@empresa.com" />
      <Field label="Teléfono" value={form.telefono} onChange={(value) => setForm((prev) => ({ ...prev, telefono: value }))} placeholder="Teléfono / WhatsApp" />
      <Field label="Industria" value={form.industria} onChange={(value) => setForm((prev) => ({ ...prev, industria: value }))} placeholder="Sector / industria" />

      <label className="md:col-span-2">
        <span className="mb-2 block text-sm font-medium text-white">Necesidad / contexto</span>
        <textarea
          value={form.necesidad}
          onChange={(e) => setForm((prev) => ({ ...prev, necesidad: e.target.value }))}
          placeholder="Cuéntenos brevemente el reto, la aplicación o el tipo de soporte que necesita."
          rows={6}
          className="min-h-[160px] w-full rounded-[22px] border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/32 focus:outline-none focus:ring-2 focus:ring-gold/35"
        />
      </label>

      <div className="md:col-span-2 flex flex-col gap-4 pt-2 sm:flex-row">
        <Button href={mailtoHref} className="w-full sm:w-auto">
          Abrir email prellenado <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
        <Button
          href="https://wa.me/50768987181?text=Hola%20Quality%20Techno%20Services%2C%20quiero%20compartir%20un%20requerimiento%20t%C3%A9cnico%20industrial."
          variant="secondary"
          className="w-full sm:w-auto"
        >
          Continuar por WhatsApp
        </Button>
      </div>
    </form>
  );
}

type FieldProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
};

function Field({ label, value, onChange, placeholder, type = "text" }: FieldProps) {
  return (
    <label>
      <span className="mb-2 block text-sm font-medium text-white">{label}</span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-[18px] border border-white/10 bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/32 focus:outline-none focus:ring-2 focus:ring-gold/35"
      />
    </label>
  );
}
