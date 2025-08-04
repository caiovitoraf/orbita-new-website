import React from 'react';

const events = [
  { year: '2020', title: 'Fundação', description: 'Nascemos com o propósito de transformar negócios por meio de performance e automação.' },
  { year: '2021', title: 'Primeiros Clientes', description: 'Iniciamos parcerias com empresas de diferentes segmentos e entregamos nossos primeiros projetos de impacto.' },
  { year: '2022', title: 'Primeira Expansão', description: 'Ampliamos nossa equipe e inauguramos novos escritórios em São Paulo e Rio de Janeiro.' },
  { year: '2023', title: 'Lançamento do Órbita App', description: 'Desenvolvemos nosso sistema próprio de CRM e automação, focado na experiência do cliente.' },
  { year: '2024', title: 'Reconhecimento de Mercado', description: 'Recebemos prêmios de inovação e celebramos parcerias com líderes de diversos setores.' },
  { year: '2025', title: 'Nova Fase', description: 'Expandimos nossa atuação para o mercado internacional e lançamos novas funcionalidades no Órbita App.' }
];

export default function HistoriaLinhaTempo() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-neutral-800 mb-12 text-center">
          Nossa História
        </h2>

        <div className="relative">
          {/* Linha vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 bg-[var(--color-orbita-purple)] h-full rounded-full"></div>

          <ul className="space-y-16">
            {events.map((event, idx) => (
              <li
                key={idx}
                className={`relative flex flex-col items-center`}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                {/* Ponto central */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[var(--color-orbita-purple)] rounded-full z-10"></div>

                {/* Bloco de conteúdo */}
                <div className="mt-6 w-full sm:w-3/4 lg:w-1/2 bg-neutral-100 p-6 rounded-2xl shadow-md">
                  <time className="block text-sm font-medium text-[var(--color-orbita-cyan)]">
                    {event.year}
                  </time>
                  <h3 className="text-xl font-semibold mt-2 text-neutral-800">
                    {event.title}
                  </h3>
                  <p className="text-gray-700 mt-2">{event.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
