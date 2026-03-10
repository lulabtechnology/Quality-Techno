import Link from "next/link";

const industries = [
  {
    title: "Manufactura",
    description:
      "Soluciones para procesos donde la disponibilidad, el desgaste y la continuidad impactan directamente la productividad.",
  },
  {
    title: "Energía y utilidades",
    description:
      "Aplicaciones que exigen confiabilidad técnica, control de riesgo y criterio para proteger operación y activos críticos.",
  },
  {
    title: "Agua y manejo de fluidos",
    description:
      "Sistemas donde el sellado, el bombeo y la protección del activo requieren selección técnica correcta desde el inicio.",
  },
  {
    title: "Procesos industriales",
    description:
      "Entornos con variables agresivas, criticidad operacional y necesidad de soporte técnico-comercial serio.",
  },
];

const solutions = [
  {
    title: "Soporte técnico especializado",
    description:
      "Lectura de aplicación, variables de servicio y condiciones reales para recomendar con más criterio y menos improvisación.",
  },
  {
    title: "Acompañamiento en sitio",
    description:
      "Validación de contexto, levantamiento operativo y apoyo técnico para acelerar decisiones más bien sustentadas.",
  },
  {
    title: "Selección de soluciones",
    description:
      "Recomendaciones alineadas a criticidad, continuidad operativa, ambiente de trabajo y objetivo de desempeño.",
  },
  {
    title: "Capacitación y soporte técnico-comercial",
    description:
      "Conversaciones mejor preparadas para mantenimiento, operaciones, ingeniería, compras y aprobación interna.",
  },
];

const manufacturers = [
  {
    name: "AGI Industries",
    description:
      "Soluciones y componentes industriales vinculados al manejo de fluidos y aplicaciones de integración técnica.",
  },
  {
    name: "Flowserve",
    description:
      "Portafolio sólido para sellado, control de flujo y confiabilidad en operaciones exigentes.",
  },
  {
    name: "NOV / Fluid Motion Solutions",
    description:
      "Tecnologías de bombeo y movimiento de fluidos orientadas a aplicaciones complejas y condiciones severas.",
  },
  {
    name: "Unique Polymer Systems",
    description:
      "Materiales y recubrimientos para reparación, protección y extensión de vida útil de activos industriales.",
  },
];

const differentiators = [
  "Interlocución técnica y comercial útil para perfiles técnicos y tomadores de decisión.",
  "Respaldo de fabricantes reconocidos para aplicaciones donde la continuidad operativa importa.",
  "Enfoque serio para mantenimiento, compras, operaciones, proyectos e ingeniería.",
  "Presentación clara, sobria y orientada a generar confianza desde el primer contacto.",
];

const processSteps = [
  {
    number: "01",
    title: "Entendemos la aplicación",
    description:
      "Partimos del contexto real de servicio, criticidad, entorno y necesidad operativa.",
  },
  {
    number: "02",
    title: "Evaluamos condición y objetivo",
    description:
      "Revisamos variables que afectan desempeño, desgaste, riesgo y continuidad.",
  },
  {
    number: "03",
    title: "Recomendamos con sustento",
    description:
      "Planteamos una ruta técnica y comercial más clara, defendible y alineada a la operación.",
  },
  {
    number: "04",
    title: "Acompañamos la conversación",
    description:
      "Damos continuidad con soporte, seguimiento, coordinación y claridad en el siguiente paso.",
  },
];

const faqs = [
  {
    question: "¿QTS solo suministra productos o también acompaña técnicamente la solución?",
    answer:
      "La propuesta combina soporte técnico-comercial, lectura de aplicación y recomendación mejor alineada a condiciones reales de operación.",
  },
  {
    question: "¿Pueden apoyar revisiones, mejoras o necesidades en sitio?",
    answer:
      "Sí. La conversación puede avanzar desde una consulta inicial hasta acompañamiento técnico, revisión de contexto o levantamiento en campo según el caso.",
  },
  {
    question: "¿Atienden solo perfiles técnicos?",
    answer:
      "No. El enfoque está preparado para conversar con mantenimiento, operaciones, ingeniería, compras y gerencia con claridad y sustento.",
  },
  {
    question: "¿Cómo se inicia una consulta?",
    answer:
      "Puede iniciar por formulario, correo o WhatsApp compartiendo el contexto de su necesidad, aplicación o requerimiento.",
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8fb7ff]">
      {children}
    </span>
  );
}

function SectionHeading({
  title,
  description,
  align = "left",
}: {
  title: string;
  description: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.8rem] lg:leading-[1.05]">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">{description}</p>
    </div>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-[#06111f] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(51,122,255,0.24),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(0,197,255,0.16),transparent_26%),linear-gradient(180deg,#081321_0%,#06111f_52%,#07172b_100%)]" />
        <div className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:52px_52px]" />
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-[#1f5eff]/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-2rem] h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 pt-6 sm:px-8 md:pb-20 lg:px-10 lg:pb-28 lg:pt-8">
          <header className="mb-10 flex items-center justify-between gap-4 rounded-full border border-white/10 bg-white/5 px-4 py-3 backdrop-blur md:px-6">
            <Link href="#hero" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-sm font-bold tracking-[0.2em] text-white">
                QTS
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-semibold text-white">Quality Techno Services</p>
                <p className="text-xs text-white/50">Industrial Technical Partner</p>
              </div>
            </Link>

            <nav className="hidden items-center gap-7 lg:flex">
              <Link href="#empresa" className="text-sm text-white/70 transition hover:text-white">
                Empresa
              </Link>
              <Link href="#soluciones" className="text-sm text-white/70 transition hover:text-white">
                Soluciones
              </Link>
              <Link href="#industrias" className="text-sm text-white/70 transition hover:text-white">
                Industrias
              </Link>
              <Link href="#marcas" className="text-sm text-white/70 transition hover:text-white">
                Marcas
              </Link>
              <Link href="#contacto" className="text-sm text-white/70 transition hover:text-white">
                Contacto
              </Link>
            </nav>

            <Link
              href="https://wa.me/50768987181"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#081321] transition hover:scale-[1.02]"
            >
              WhatsApp
            </Link>
          </header>

          <div
            id="hero"
            className="grid items-center gap-12 lg:grid-cols-[1.06fr_0.94fr] lg:gap-14"
          >
            <div className="max-w-3xl">
              <SectionEyebrow>Representación técnica industrial</SectionEyebrow>

              <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-7xl lg:leading-[0.95]">
                Soluciones técnicas para operaciones que no pueden detenerse.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/72 sm:text-lg lg:text-[1.12rem]">
                Quality Techno Services S.A. acompaña decisiones industriales con soporte
                consultivo, respaldo de fabricantes internacionales y foco real en continuidad
                operativa, desempeño y protección de activos.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#contacto"
                  className="inline-flex items-center justify-center rounded-full bg-[#2f6bff] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#3d78ff]"
                >
                  Solicitar evaluación técnica
                </Link>
                <Link
                  href="#marcas"
                  className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:border-white/25 hover:bg-white/10"
                >
                  Ver marcas y capacidades
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                    Enfoque
                  </p>
                  <p className="mt-3 text-lg font-semibold text-white">Continuidad operativa</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Bombeo, sellado, protección y manejo de fluidos para entornos exigentes.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">Cobertura</p>
                  <p className="mt-3 text-lg font-semibold text-white">Soporte consultivo B2B</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Conversaciones útiles para mantenimiento, operaciones, ingeniería y compras.
                  </p>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/45">Criterio</p>
                  <p className="mt-3 text-lg font-semibold text-white">Respaldo internacional</p>
                  <p className="mt-2 text-sm leading-6 text-white/65">
                    Portafolio ligado a fabricantes reconocidos para aplicaciones de mayor nivel.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-8 hidden h-28 w-28 rounded-full border border-white/10 bg-white/5 blur-2xl lg:block" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] p-4 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur">
                <div className="grid gap-4 lg:hidden">
                  <div className="overflow-hidden rounded-[1.5rem] border border-dashed border-white/15 bg-[linear-gradient(180deg,rgba(15,25,40,0.92),rgba(8,17,31,0.88))] p-5">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-[#2f6bff]/40 bg-[#2f6bff]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9fbaff]">
                        Hero mobile
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                        Reemplazar luego
                      </span>
                    </div>
                    <div className="mt-5 aspect-[4/5] rounded-[1.25rem] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(51,122,255,0.32),transparent_32%),linear-gradient(180deg,#111f32_0%,#0a1525_100%)] p-4">
                      <div className="flex h-full items-end rounded-[1rem] border border-dashed border-white/10 p-4">
                        <div>
                          <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                            Espacio para imagen mobile
                          </p>
                          <p className="mt-2 max-w-[18rem] text-sm leading-6 text-white/60">
                            Usar imagen vertical específica para celular.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden gap-4 lg:grid">
                  <div className="overflow-hidden rounded-[1.6rem] border border-dashed border-white/15 bg-[linear-gradient(180deg,rgba(15,25,40,0.92),rgba(8,17,31,0.88))] p-5">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-[#2f6bff]/40 bg-[#2f6bff]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9fbaff]">
                        Hero desktop
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-white/35">
                        Reemplazar luego
                      </span>
                    </div>

                    <div className="mt-5 aspect-[16/11] rounded-[1.4rem] border border-white/10 bg-[radial-gradient(circle_at_25%_15%,rgba(76,133,255,0.36),transparent_22%),radial-gradient(circle_at_85%_20%,rgba(0,215,255,0.16),transparent_18%),linear-gradient(180deg,#101b2d_0%,#091424_100%)] p-6">
                      <div className="grid h-full grid-cols-[1.1fr_0.9fr] gap-4">
                        <div className="rounded-[1.2rem] border border-dashed border-white/10 bg-white/[0.02] p-5">
                          <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                            Espacio principal
                          </p>
                          <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">
                            Imagen hero desktop cinematográfica o montaje industrial premium.
                          </p>
                        </div>
                        <div className="flex flex-col gap-4">
                          <div className="flex-1 rounded-[1.2rem] border border-white/10 bg-white/[0.03]" />
                          <div className="grid grid-cols-2 gap-4">
                            <div className="aspect-square rounded-[1rem] border border-white/10 bg-white/[0.03]" />
                            <div className="aspect-square rounded-[1rem] border border-white/10 bg-white/[0.03]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {["Consultivo", "Industrial", "Premium"].map((item) => (
                      <div
                        key={item}
                        className="rounded-[1.2rem] border border-white/10 bg-white/[0.03] px-4 py-5 text-center text-sm text-white/65"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 backdrop-blur sm:grid-cols-2 lg:grid-cols-4 lg:p-6">
            {manufacturers.map((item) => (
              <div
                key={item.name}
                className="rounded-[1.4rem] border border-white/8 bg-[#0a1626]/70 px-5 py-6"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-white/35">Marca</p>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="empresa" className="border-b border-white/10 bg-[#071523]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionEyebrow>Sobre la empresa</SectionEyebrow>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.8rem] lg:leading-[1.05]">
                Una firma orientada a decisiones industriales con más criterio y menos improvisación.
              </h2>
            </div>

            <div className="grid gap-5">
              <p className="text-base leading-8 text-white/72 sm:text-lg">
                Quality Techno Services S.A. articula soporte técnico, acompañamiento consultivo y
                respaldo internacional para atender aplicaciones donde la confiabilidad operativa
                pesa tanto como el precio.
              </p>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-lg font-semibold text-white">Lectura de aplicación</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Se parte de condiciones reales de servicio, desempeño esperado, criticidad y
                    riesgo operativo.
                  </p>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-lg font-semibold text-white">Respaldo de portafolio</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    La necesidad se conecta con soluciones respaldadas por fabricantes reconocidos.
                  </p>
                </div>

                <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-6">
                  <h3 className="text-lg font-semibold text-white">Interlocución útil</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    Preparado para hablar con perfiles técnicos y con quienes deben aprobar la decisión.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="soluciones" className="border-b border-white/10 bg-[#081321]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <SectionEyebrow>Servicios y soluciones</SectionEyebrow>
          <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              title="Más que suministro: criterio aplicado para proteger desempeño y continuidad."
              description="El portafolio debe dejar claro que QTS acompaña decisiones técnicas y comerciales con una lectura más profunda de la aplicación."
            />

            <Link
              href="#contacto"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08] sm:w-auto"
            >
              Hablar con un asesor técnico
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {solutions.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-6"
              >
                <div className="mb-6 h-14 w-14 rounded-2xl border border-white/10 bg-[#0d1b2f]" />
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industrias" className="border-b border-white/10 bg-[#071523]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <SectionEyebrow>Industrias que atendemos</SectionEyebrow>
          <div className="mt-6">
            <SectionHeading
              title="Preparados para entornos donde el desempeño técnico no es opcional."
              description="La propuesta habla con sectores donde una selección deficiente puede comprometer seguridad, disponibilidad, vida útil del activo y costo total de operación."
            />
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {industries.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-[1.8rem] border border-white/10 bg-white/[0.03]"
              >
                <div className="grid md:grid-cols-[0.78fr_1.22fr]">
                  <div className="min-h-[220px] border-b border-white/10 bg-[linear-gradient(180deg,#112038_0%,#0b1728_100%)] p-5 md:min-h-full md:border-b-0 md:border-r">
                    <div className="flex h-full items-end rounded-[1.25rem] border border-dashed border-white/12 p-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-white/35">
                          Espacio para imagen
                        </p>
                        <p className="mt-2 text-sm leading-6 text-white/58">
                          Placeholder visual premium por industria.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 lg:p-7">
                    <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-white/65">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="marcas" className="border-b border-white/10 bg-[#081321]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <SectionEyebrow>Fabricantes y alianzas</SectionEyebrow>
          <div className="mt-6">
            <SectionHeading
              title="Marcas con trayectoria global para conversaciones técnicas de mayor nivel."
              description="La fortaleza comercial crece cuando el cliente percibe respaldo, seriedad y profundidad técnica detrás de cada recomendación."
            />
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {manufacturers.map((item) => (
              <div
                key={item.name}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6 lg:p-7"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-[#8fb7ff]">Marca estratégica</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{item.name}</h3>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
                      {item.description}
                    </p>
                  </div>

                  <div className="hidden h-20 w-20 rounded-3xl border border-white/10 bg-[#0c1a2d] md:block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#071523]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionEyebrow>Diferenciadores</SectionEyebrow>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.8rem] lg:leading-[1.05]">
                Una propuesta digital construida para proyectar autoridad, claridad y preparación.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                La diferencia está en cómo se combinan estructura, mensaje y criterio visual para
                que la marca se perciba más robusta frente a clientes industriales serios.
              </p>
            </div>

            <div className="grid gap-4">
              {differentiators.map((item, index) => (
                <div
                  key={item}
                  className="flex gap-4 rounded-[1.6rem] border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[#0d1b2f] text-sm font-semibold text-[#9fbaff]">
                    0{index + 1}
                  </div>
                  <p className="text-sm leading-7 text-white/68">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#081321]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <SectionEyebrow>Cómo trabajamos</SectionEyebrow>
          <div className="mt-6">
            <SectionHeading
              title="Un método claro para convertir necesidad operativa en solución aplicable."
              description="La relación comercial debe sentirse ordenada, seria y técnicamente bien conducida desde el primer contacto."
            />
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.number}
                className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="text-4xl font-semibold tracking-[-0.04em] text-[#8fb7ff]/90">
                  {step.number}
                </p>
                <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/65">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#071523]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <SectionEyebrow>FAQ</SectionEyebrow>
          <div className="mt-6">
            <SectionHeading
              title="Preguntas frecuentes resueltas con claridad."
              description="Una sección breve para reducir fricción y facilitar que el visitante avance hacia la conversación técnica."
            />
          </div>

          <div className="mt-12 grid gap-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  <span className="text-2xl text-white/45 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-white/65">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-[#06111f]">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="border-b border-white/10 p-7 lg:border-b-0 lg:border-r lg:p-10">
                <SectionEyebrow>Contacto</SectionEyebrow>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Abramos una conversación técnica seria.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/70">
                  Comparta el contexto de su aplicación, necesidad operativa o requerimiento comercial y le daremos continuidad por la vía más conveniente.
                </p>

                <div className="mt-8 grid gap-4">
                  <a
                    href="mailto:info@qualitytechnoservices.com"
                    className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-white/35">Email</p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      info@qualitytechnoservices.com
                    </p>
                  </a>

                  <a
                    href="https://wa.me/50768987181"
                    target="_blank"
                    className="rounded-[1.4rem] border border-white/10 bg-white/[0.03] p-5 transition hover:bg-white/[0.06]"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-white/35">WhatsApp</p>
                    <p className="mt-2 text-lg font-semibold text-white">+507 6898-7181</p>
                  </a>
                </div>
              </div>

              <div className="p-7 lg:p-10">
                <form
                  action="mailto:info@qualitytechnoservices.com"
                  method="post"
                  encType="text/plain"
                  className="grid gap-4"
                >
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      name="nombre"
                      placeholder="Nombre"
                      className="h-14 rounded-2xl border border-white/10 bg-[#0a1627] px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#4f7fff]"
                    />
                    <input
                      name="empresa"
                      placeholder="Empresa"
                      className="h-14 rounded-2xl border border-white/10 bg-[#0a1627] px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#4f7fff]"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      name="cargo"
                      placeholder="Cargo"
                      className="h-14 rounded-2xl border border-white/10 bg-[#0a1627] px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#4f7fff]"
                    />
                    <input
                      name="industria"
                      placeholder="Industria"
                      className="h-14 rounded-2xl border border-white/10 bg-[#0a1627] px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#4f7fff]"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="h-14 rounded-2xl border border-white/10 bg-[#0a1627] px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#4f7fff]"
                    />
                    <input
                      name="telefono"
                      placeholder="Teléfono"
                      className="h-14 rounded-2xl border border-white/10 bg-[#0a1627] px-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#4f7fff]"
                    />
                  </div>

                  <textarea
                    name="necesidad"
                    placeholder="Necesidad / contexto"
                    rows={6}
                    className="rounded-[1.4rem] border border-white/10 bg-[#0a1627] px-4 py-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-[#4f7fff]"
                  />

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-[#2f6bff] px-7 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#3d78ff]"
                    >
                      Abrir email prellenado
                    </button>

                    <a
                      href="https://wa.me/50768987181"
                      target="_blank"
                      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                    >
                      Continuar por WhatsApp
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,#0a1729_0%,#091321_100%)] p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
              <div>
                <SectionEyebrow>CTA final</SectionEyebrow>
                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.8rem] lg:leading-[1.05]">
                  Cuando la operación es crítica, la decisión técnica no puede dejarse al azar.
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
                  Hable con Quality Techno Services S.A. para evaluar una necesidad industrial con una conversación más clara, más seria y mejor orientada al resultado.
                </p>
              </div>

              <div className="flex flex-col gap-4 lg:items-end">
                <Link
                  href="#contacto"
                  className="inline-flex w-full items-center justify-center rounded-full bg-white px-7 py-4 text-sm font-semibold text-[#081321] transition hover:scale-[1.02] lg:w-auto"
                >
                  Solicitar contacto
                </Link>
                <a
                  href="https://wa.me/50768987181"
                  target="_blank"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.08] lg:w-auto"
                >
                  Ir a WhatsApp
                </a>
              </div>
            </div>
          </div>

          <footer className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/45 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="font-semibold text-white/80">Quality Techno Services S.A.</p>
              <p className="mt-1">
                Acompañamiento técnico, soporte consultivo y respaldo internacional para aplicaciones industriales.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-white/55 sm:flex-row sm:items-center sm:gap-6">
              <a href="mailto:info@qualitytechnoservices.com" className="transition hover:text-white">
                info@qualitytechnoservices.com
              </a>
              <a
                href="https://wa.me/50768987181"
                target="_blank"
                className="transition hover:text-white"
              >
                WhatsApp +507 6898-7181
              </a>
            </div>
          </footer>
        </div>
      </section>
    </main>
  );
}
