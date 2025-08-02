import React from 'react';

// Sub-componente em português para o efeito de fundo
function LinhasDeFundo() {
  return (
    <svg
      className="absolute top-0 left-1/2 -translate-x-1/2 max-w-none text-neutral-800/50"
      width="1640"
      height="1100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-214 1100L724 0l1130 955.5"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function AbordEstrat() {
  return (
    <section className="relative overflow-hidden bg-neutral-900 py-24 sm:py-32">
      <LinhasDeFundo />
      <div className="container relative mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Uma Parceria Estratégica para o seu Crescimento
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-neutral-300">
          Não se trata apenas de ferramentas. Nossa abordagem integrada analisa cada aspecto do seu negócio, da automação de marketing à performance de vendas, para criar uma estratégia coesa que maximiza seus resultados de forma sustentável.
        </p>
        <div className="mt-10">
          <a
            href="#"
            className="rounded-md border-2 border-orbita-purple px-6 py-2.5 font-sans text-sm font-semibold text-orbita-purple transition-colors hover:bg-orbita-purple hover:text-white"
          >
            Conheça Nossas Soluções
          </a>
        </div>
      </div>
    </section>
  );
}

export default AbordEstrat;