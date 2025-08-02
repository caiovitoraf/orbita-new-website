import React from 'react';

function PlatformVisual() {
  return (
    <div className="relative p-4">
      {/* Sombra de fundo para dar profundidade */}
      <div className="absolute inset-0 -bottom-8 rounded-3xl bg-orbita-purple/10 blur-2xl"></div>

      {/* Janela do Navegador (estilo macOS) */}
      <div className="relative transform overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        {/* Barra superior da janela */}
        <div className="flex h-9 items-center gap-x-2 rounded-t-xl border-b border-neutral-200 bg-neutral-100 px-4">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>

        {/* Corpo da aplicação */}
        <div className="flex h-[450px]">
          {/* Sidebar */}
          <div className="w-1/4 border-r border-neutral-200 bg-neutral-50 p-4 lg:w-1/5">
            <div className="mb-6 h-6 w-2/3 rounded-md bg-neutral-200"></div>
            <ul className="space-y-2">
              {['Dashboard', 'Contatos', 'Automações', 'Calendário', 'Funnels'].map((item, index) => (
                <li
                  key={item}
                  className={`h-7 w-full rounded-md ${
                    index === 0 ? 'bg-orbita-purple/10' : 'bg-neutral-200'
                  }`}
                ></li>
              ))}
            </ul>
          </div>

          {/* Conteúdo Principal (Dashboard) */}
          <div className="flex-1 p-6">
            <h3 className="mb-1 h-7 w-1/3 rounded-md bg-neutral-300"></h3>
            <p className="mb-6 h-4 w-1/2 rounded-md bg-neutral-200"></p>
            {/* Cards de KPI */}
            <div className="grid grid-cols-3 gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-24 rounded-lg bg-neutral-100 p-3">
                  <div className="mb-2 h-4 w-2/3 rounded-md bg-neutral-200"></div>
                  <div className="h-8 w-1/2 rounded-md bg-neutral-300"></div>
                </div>
              ))}
            </div>
            {/* Gráfico de Barras Simulado */}
            <div className="mt-6 flex h-48 items-end gap-x-2 rounded-lg border border-neutral-200 p-4">
              <div className="h-2/5 w-full rounded-t-md bg-orbita-cyan/50"></div>
              <div className="h-3/5 w-full rounded-t-md bg-orbita-cyan/50"></div>
              <div className="h-4/5 w-full rounded-t-md bg-orbita-cyan"></div>
              <div className="h-2/5 w-full rounded-t-md bg-orbita-cyan/50"></div>
              <div className="h-3/5 w-full rounded-t-md bg-orbita-cyan"></div>
              <div className="h-1/2 w-full rounded-t-md bg-orbita-cyan/50"></div>
              <div className="h-full w-full rounded-t-md bg-orbita-cyan"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL (HERO) ---
function Hero() {
  return (
    <section className="bg-white">
      {/* Seção da Proposta de Valor */}
      <div className="container mx-auto px-4 pt-24 pb-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Coluna de Texto */}
          <div className="text-center lg:text-left">
            <span className="font-sans text-sm font-bold uppercase tracking-wider text-orbita-purple">
              Plataforma e Agência de Perfomance
            </span>
            <h1 className="mt-4 font-sans text-4xl font-extrabold text-neutral-800 md:text-5xl lg:text-6xl">
              Centralize seu Marketing. Acelere seus Resultados.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-neutral-600 lg:mx-0 mx-auto">
              A Órbita combina uma plataforma de automação de marketing poderosa com a expertise de uma agência de performance para levar sua empresa ao próximo nível.
            </p>
            {/* Botões de Ação (CTAs) */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#"
                className="w-full sm:w-auto transform rounded-full bg-orbita-purple px-8 py-3 font-sans text-sm font-bold text-white shadow-lg shadow-orbita-purple/30 transition-all duration-300 hover:-translate-y-px hover:bg-orbita-purple-light"
              >
                Agendar uma Demonstração
              </a>
              <a
                href="#"
                className="w-full sm:w-auto rounded-full border-2 border-neutral-300 px-8 py-3 font-sans text-sm font-bold text-neutral-700 transition-colors hover:border-neutral-800 hover:bg-neutral-800 hover:text-white"
              >
                Fale com um Especialista
              </a>
            </div>
          </div>
          {/* Coluna Visual */}
          <PlatformVisual />
        </div>
      </div>
    </section>
  );
}

export default Hero;