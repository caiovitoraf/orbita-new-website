import React from 'react'
import ConsultoriaSection from './ConsultoriaSec'
import OrbitaAppSection from './OrbitaAppSec'

export default function NossasSolucoes() {
  return (
    <>
      {/* Introdução às Soluções */}
      <section
        id="solucoes-intro"
        className="relative bg-neutral-900 py-20 sm:py-28 overflow-hidden"
      >
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white font-sans">
            Nossas Soluções
          </h2>
          <p className="mt-4 text-lg text-neutral-300 max-w-2xl mx-auto">
            Descubra como nossa consultoria estratégica e nossa plataforma All-in-One
            podem transformar seu negócio, otimizando processos, gerando resultados
            e centralizando todas as suas operações.
          </p>
        </div>
      </section>

      <ConsultoriaSection />
      <OrbitaAppSection />
    </>
  )
}