import React from 'react';
import EyeIcon from '../../assets/icons/EyeIcon.svg?react';
import HandshakeIcon from '../../assets/icons/HandshakeIcon.svg?react';
import ShineIcon from '../../assets/icons/shine.svg?react';

const features = [
  {
    name: 'Visão Estratégica',
    description: 'Abraçamos uma visão estratégica que vai além do convencional, explorando oportunidades para nossos clientes em um cenário empresarial dinâmico.',
    Icon: EyeIcon,
    color: 'text-orbita-cyan',
  },
  {
    name: 'Parceria Sustentável',
    description: 'Nossa parceria vai além dos projetos; nos comprometemos a construir relações sustentáveis, onde o sucesso é um esforço conjunto.',
    Icon: HandshakeIcon,
    color: 'text-orbita-purple',
  },
  {
    name: 'Inovação com Propósito',
    description: 'Buscamos inovação com um propósito claro: CONECTAR, INSPIRAR e IMPULSIONAR o crescimento.',
    Icon: ShineIcon,
    color: 'text-orbita-cyan',
  },
];

function Diferenciais() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-sans text-3xl font-bold tracking-tight text-neutral-800 sm:text-4xl">
            Por que escolher a Órbita?
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orbita-purple"></div>
          <p className="mt-6 text-lg text-neutral-600">
            Nossos pilares fundamentais garantem que cada projeto seja construído com excelência, visão de futuro e um compromisso real com seus resultados.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col rounded-lg p-6 text-center shadow-lg transition-transform hover:-translate-y-2">
              <div className="flex justify-center">
                <div className={`flex h-16 w-16 items-center justify-center rounded-xl bg-neutral-100`}>
                  <feature.Icon className={`h-8 w-8 ${feature.color}`} />
                </div>
              </div>
              <h3 className={`mt-5 font-sans text-xl font-semibold ${feature.color}`}>
                {feature.name}
              </h3>
              <p className="mt-2 text-base text-neutral-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Diferenciais;