import React from 'react'
import Star from '../../assets/icons/Star.svg?react'

// Logos for testimonials
import holiLogo from '../../assets/images/holi.png'
import portalIratiLogo from '../../assets/images/portal-irati.png'
import focoLogo from '../../assets/images/foco-educacao.png'
import becoLogo from '../../assets/images/laboratorio-beco.png'

const testimonials = [
  {
    id: 'holi',
    logo: holiLogo,
    name: 'Holi Strategy',
    text: 'A Órbita chegou na Holi para solucionar os problemas que tínhamos em relação à organização dos nossos processos, criando mecanismos para a melhor organização da nossa rotina. Com a ajuda da Órbita, implementamos novos fluxos que proporcionaram para o time mais autonomia e otimização de tempo, além disso, a parceria é muito estratégica para nossos clientes que podem contar com a rede de serviços oferecidos para complementar a estratégia que temos construído. Desejamos que mais pessoas tenham seus negócios impulsionados com a ajuda desse parceiro.',
    rating: 5,
  },
  {
    id: 'portal-irati',
    logo: portalIratiLogo,
    name: 'Portal Irati',
    text: 'Parceria incrível! A Órbita trouxe soluções estratégicas que transformaram nossa gestão, aumentando nossa visibilidade e otimizando a operação. Tudo com muita seriedade e leveza, a parceria se destaca.',
    rating: 5,
  },
  {
    id: 'foco-educacao',
    logo: focoLogo,
    name: 'Foco Educação',
    text: 'Estou gostando demais. Os leads começaram a chegar por diversos lugares e seguindo todo o planejamento e orientação observamos a melhoria. Com vocês, nosso número de seguidores subiu muito bem, ganhamos mais engajamento e consequentemente mais conversões e isso é muito bom.',
    rating: 5,
  },
  {
    id: 'laboratorio-beco',
    logo: becoLogo,
    name: 'Laboratório do Beco',
    text: 'Sou Zé Pereira, proprietário do Laboratório do Beco, um home studio. Sempre quis melhorar minha presença no digital, mas com tantas tarefas, isso parecia impossível. Graças à parceria com a Órbita, consegui alcançar um novo nível. Eles me ofereceram uma consultoria estratégica de negócios e marketing, olhando para o todo e realmente fizeram a diferença.',
    rating: 5,
  },
]

export default function AprovacaoSocial() {
  return (
    <section id="depoimentos" className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-4xl font-extrabold text-neutral-800 font-sans">
          O que falam da Órbita
        </h2>
        <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-orbita-purple" />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map(({ id, logo, name, text, rating }) => (
            <div
              key={id}
              className="bg-white rounded-3xl p-6 shadow-lg flex flex-col justify-between"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={logo}
                  alt={name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <h3 className="text-2xl font-bold text-neutral-900">{name}</h3>
              </div>
              <p className="text-neutral-700 mb-6 leading-relaxed text-justify">{text}</p>
              <div className="flex gap-1">
                {Array.from({ length: rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
