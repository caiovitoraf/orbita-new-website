import React from 'react';

export default function PropostaValor() {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-neutral-900 leading-tight">
          Transformamos desafios <br className="hidden sm:block" /> em resultados mensuráveis
        </h2>

        <div className="mx-auto mt-6 h-1 w-20 bg-orbita-purple rounded-full" />

        <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-600">
          Em um mercado dinâmico, oferecemos estratégias 360° que alinham processos,
          marketing e tecnologia para impulsionar o crescimento das empresas.
        </p>
      </div>

      {/* Elemento decorativo suave no fundo */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-[var(--color-orbita-purple-light)] rounded-full opacity-10 blur-3xl pointer-events-none" />
    </section>
  );
}