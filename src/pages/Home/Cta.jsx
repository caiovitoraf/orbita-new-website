import React from 'react';

export default function Cta() {
  return (
    <section className="bg-gradient-to-r from-[var(--color-orbita-purple-dark)] via-[var(--color-orbita-purple)] to-[var(--color-orbita-cyan)] py-20">
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-sans text-4xl sm:text-5xl font-bold text-white mb-4">
          Pronto para transformar seu negócio?
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-white mb-8">
          Junte-se à Órbita Estratégica e impulsione seus resultados com soluções 360° de marketing e automação.
        </p>
        <a
          href="/contato"
          className="
            inline-block
            bg-[var(--color-neutral-50)]
            text-[var(--color-orbita-purple-darkest)]
            font-sans
            font-semibold
            rounded-full
            px-12
            py-4
            text-lg
            sm:text-xl
            shadow-xl
            hover:shadow-2xl
            transform-gpu
            transition-all
            duration-300
            ease-in-out
            hover:scale-105
            animate-pulse
            hover:animate-none
          "
        >
          Fale Conosco
        </a>
      </div>
    </section>
  );
}
