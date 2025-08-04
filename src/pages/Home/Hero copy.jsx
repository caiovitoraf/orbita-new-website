import React from 'react';

// --- COMPONENTE PRINCIPAL (HERO) ---
function Hero() {
  return (
    <section className="bg-white min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="font-sans text-base sm:text-lg font-bold uppercase tracking-wider text-orbita-purple mb-4">
            Plataforma e Agência de Performance
          </span>
          <h1 className="font-sans text-5xl sm:text-6xl lg:text-7xl font-extrabold text-neutral-800 leading-tight max-w-4xl">
            Centralize seu Marketing. Acelere seus Resultados.
          </h1>
          <p className="mt-6 max-w-2xl text-xl sm:text-2xl text-neutral-600">
            A Órbita combina uma plataforma de automação de marketing poderosa com a expertise de uma agência de performance para levar sua empresa ao próximo nível.
          </p>
          {/* Botões de Ação (CTAs) */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="transform rounded-full bg-orbita-purple px-10 py-4 font-sans text-base sm:text-lg font-bold text-white shadow-xl shadow-orbita-purple/30 transition-all duration-300 hover:-translate-y-1 hover:bg-orbita-purple-light"
            >
              Agendar uma Demonstração
            </a>
            <a
              href="#"
              className="rounded-full border-2 border-neutral-300 px-10 py-4 font-sans text-base sm:text-lg font-bold text-neutral-700 transition-colors hover:border-neutral-800 hover:bg-neutral-800 hover:text-white"
            >
              Fale com um Especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
