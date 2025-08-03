import React from 'react'
import CheckCircleIcon from '../../assets/icons/CheckCircleIcon.svg?react'

const appBenefits = [
  'Funil de vendas visual e automatizado',
  'Chatbot e atendimento por IA',
  'Dashboards em tempo real',
]

export default function OrbitaAppSection() {
  // Janela macOS ampliada para destacar o Órbita App
  const PlatformWindow = () => (
    <div className="relative w-full max-w-[800px] transform overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Barra de controles */}
      <div className="flex h-9 items-center gap-x-2 rounded-t-xl border-b border-neutral-200 bg-neutral-100 px-4">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>
      {/* Corpo da janela com altura ampliada */}
      <div className="p-4 h-[380px] sm:h-[450px]">
        {/* Placeholder de título do painel */}
        <div className="mb-6 h-6 w-1/2 rounded bg-neutral-200" />
        {/* Cards de exemplo */}
        <div className="grid grid-cols-2 gap-4 h-[260px] sm:h-[320px]">
          <div className="bg-neutral-100 rounded p-2">
            <div className="h-4 mb-2 w-3/5 bg-neutral-200 rounded" />
            <div className="h-8 w-full bg-neutral-300 rounded" />
          </div>
          <div className="bg-neutral-100 rounded p-2">
            <div className="h-4 mb-2 w-3/5 bg-neutral-200 rounded" />
            <div className="h-8 w-full bg-neutral-300 rounded" />
          </div>
        </div>
        {/* Legenda simplificada */}
        <div className="mt-6 flex justify-start gap-4 text-sm text-neutral-500">
          <span>Leads</span>
          <span>Conversões</span>
        </div>
      </div>
    </div>
  )

  return (
    <section
      id="orbita-app"
      className="relative bg-neutral-900 py-20 sm:py-28 overflow-hidden"
    >
    <div className="relative container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Visual da plataforma */}
          <div className="lg:w-1/2 flex justify-center">
            <PlatformWindow />
          </div>

          {/* Descrição e benefícios */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-sans mb-4">
              Órbita App – Plataforma All-in-One
            </h2>
            <p className="text-neutral-300 mb-6 max-w-lg">
              Unifique Marketing, Vendas, Atendimento e Financeiro num painel intuitivo e poderoso.
            </p>
            <ul className="space-y-4 mb-8 max-w-md">
              {appBenefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircleIcon className="h-5 w-5 text-orbita-cyan" />
                  <span className="text-neutral-200">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="/orbita-app"
              className="inline-block px-8 py-3 bg-orbita-purple text-white font-semibold rounded-full hover:bg-orbita-purple-light transition"
            >
              Conheça a Plataforma
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}