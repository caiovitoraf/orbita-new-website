import React from 'react'
import CheckCircleIcon from '../../assets/icons/CheckCircleIcon.svg?react'

const consultingServices = [
  'Diagnóstico completo de operações',
  'Mapeamento e otimização de processos',
  'Gestão de inovação e automação',
  'Marketing estratégico de alta performance',
  'Análise de dados e dashboards',
]

export default function ConsultoriaSection() {
  // Janela macOS ampliada para ocupar boa parte da sessão
  const PlatformWindow = () => (
    <div className="relative w-full max-w-[800px] transform overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Barra de controles */}
      <div className="flex h-9 items-center gap-x-2 rounded-t-xl border-b border-neutral-200 bg-neutral-100 px-4">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>
      {/* Corpo da janela com maior altura */}
      <div className="p-4 h-[380px] sm:h-[450px]">
        {/* Título “Dashboard de Indicadores” */}
        <div className="mb-6 h-6 w-1/2 rounded bg-neutral-200" />
        {/* Gráfico de barras simples */}
        <div className="grid grid-cols-3 gap-4 h-[260px] sm:h-[320px]">
          <div className="h-full bg-orbita-cyan rounded"></div>
          <div className="h-[85%] bg-orbita-cyan/60 rounded"></div>
          <div className="h-[95%] bg-orbita-cyan rounded"></div>
        </div>
      </div>
    </div>
  )

  return (
    <section
      id="consultoria"
      className="relative bg-neutral-900 py-20 sm:py-28 overflow-hidden"
    >
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Texto & Benefícios */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-sans mb-4">
              Consultoria &amp; Assessoria Estratégica
            </h2>
            <p className="text-neutral-300 mb-8 max-w-lg">
              Transforme o futuro da sua empresa com soluções personalizadas, estratégicas e orientadas por dados.
            </p>

            <ul className="space-y-4 mb-8 max-w-md">
              {consultingServices.map((service) => (
                <li key={service} className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-orbita-purple-light" />
                  <span className="text-neutral-200">{service}</span>
                </li>
              ))}
            </ul>

            <a
              href="/consultoria"
              className="inline-block px-8 py-3 bg-orbita-purple text-white font-semibold rounded-full hover:bg-orbita-purple-light transition"
            >
              Saiba Mais
            </a>
          </div>

          {/* Janela macOS ampliada */}
          <div className="lg:w-1/2 flex justify-center">
            <PlatformWindow />
          </div>
        </div>
      </div>
    </section>
  )
}
