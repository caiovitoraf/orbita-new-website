import React from 'react';

// Ícones principais
import TargetIcon from '../../assets/icons/target.svg?react';
import WorldIcon from '../../assets/icons/world.svg?react';

// Ícones numerados para valores
import Number1 from '../../assets/iconNumbers/one.svg?react';
import Number2 from '../../assets/iconNumbers/two.svg?react';
import Number3 from '../../assets/iconNumbers/three.svg?react';
import Number4 from '../../assets/iconNumbers/four.svg?react';
import Number5 from '../../assets/iconNumbers/five.svg?react';
import Number6 from '../../assets/iconNumbers/six.svg?react';
import Number7 from '../../assets/iconNumbers/seven.svg?react';
import Number8 from '../../assets/iconNumbers/eight.svg?react';

// Card para valores com texto
const ValorCard = ({ icon, title, desc }) => (
  <div className="bg-neutral-800 rounded-xl p-6 shadow-md border border-transparent hover:border-[var(--color-orbita-purple-light)] transition-all duration-300 hover:scale-105">
    <div className="flex items-start gap-4 mb-3">
      <div className="text-[var(--color-orbita-purple-light)] w-11 h-11">{icon}</div>
      <h4 className="text-2xl font-bold text-white">{title}</h4>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed">
      {desc}
    </p>
  </div>
);

// Card simples para missão e visão
const Card = ({ icon, title, desc }) => (
  <div className="bg-neutral-800 rounded-xl p-6 shadow-md flex items-start space-x-4 border border-transparent hover:border-[var(--color-orbita-purple-light)] transition-all duration-300 hover:scale-105">
    {icon}
    <div>
      <h4 className="text-2xl font-semibold text-white">{title}</h4>
      <p className="text-gray-400 text-sm mt-1">{desc}</p>
    </div>
  </div>
);

export default function MissaoVisaoValores() {
  return (
    <section className="bg-neutral-900 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-white">

        {/* Missão e Visão */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white">
          Missão e Visão
        </h2>
        <div className="mx-auto mt-4 mb-16 h-1 w-24 rounded-full bg-[var(--color-orbita-purple-light)]" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <Card
            icon={<TargetIcon className="w-8 h-8 text-red-500 mt-1" />}
            title="Missão"
            desc="Capacitar negócios com soluções integradas de marketing e automação, promovendo excelência operacional e resultados concretos."
          />
          <Card
            icon={<WorldIcon className="w-8 h-8 text-cyan-400 mt-1" />}
            title="Visão"
            desc="Ser referência global em performance 360°, conectando estratégias inovadoras a novas fronteiras de crescimento."
          />
        </div>

        {/* Valores */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center text-white">
          Nossos Valores
        </h2>
        <div className="mx-auto mt-4 mb-12 h-1 w-24 rounded-full bg-[var(--color-orbita-purple-light)]" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ValorCard
            icon={<Number1 className="w-11 h-11" />}
            title="Comprometimento"
            desc="Somos apaixonados pelo que fazemos e levamos cada entrega a sério. Estar comprometido para nós é estar presente, disponível e envolvido em cada desafio dos nossos clientes."
          />
          <ValorCard
            icon={<Number2 className="w-11 h-11" />}
            title="Excelência"
            desc="Buscamos sempre o nosso melhor. Acreditamos que a excelência está nos detalhes, na qualidade do atendimento, e no cuidado com cada etapa dos projetos que executamos."
          />
          <ValorCard
            icon={<Number3 className="w-11 h-11" />}
            title="Transparência"
            desc="Valorizamos relações honestas e diretas. Compartilhamos o que está funcionando e o que precisa ser ajustado, mantendo nossos parceiros sempre informados e confiantes."
          />
          <ValorCard
            icon={<Number4 className="w-11 h-11" />}
            title="Colaboração"
            desc="Acreditamos que os melhores resultados surgem do trabalho conjunto. Por isso, promovemos trocas constantes e construções compartilhadas com nossos parceiros e entre equipes."
          />
          <ValorCard
            icon={<Number5 className="w-11 h-11" />}
            title="Foco no Cliente"
            desc="Escutamos com atenção, compreendemos as necessidades reais e buscamos entregar valor que faça sentido para quem está do outro lado. Nosso sucesso é o sucesso dos nossos clientes."
          />
          <ValorCard
            icon={<Number6 className="w-11 h-11" />}
            title="Resultados"
            desc="Trabalhamos com metas claras e foco em impacto. Não entregamos apenas entregáveis, mas sim transformações que geram valor mensurável e crescimento real."
          />
          <ValorCard
            icon={<Number7 className="w-11 h-11" />}
            title="Inovação"
            desc="Estamos em constante movimento. Questionamos o status quo, testamos ideias, acompanhamos tendências e buscamos soluções criativas que saem do óbvio."
          />
          <ValorCard
            icon={<Number8 className="w-11 h-11" />}
            title="Responsabilidade"
            desc="Assumimos com seriedade tudo o que nos propomos a fazer. Atuamos com ética, respeito às pessoas e responsabilidade social e ambiental em cada decisão."
          />
        </div>
      </div>
    </section>
  );
}
