import React from 'react';
import PhoneIcon from '../assets/icons/phone.svg?react';
import MailIcon from '../assets/icons/mail.svg?react';

export default function Contato() {
  return (
    <section className="bg-neutral-900 py-20 px-6 md:px-12 text-white font-sans">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-white">Fale com a gente</h2>
        <p className="text-lg text-neutral-400">
          Estamos prontos para transformar seu negócio. Preencha o formulário ou escolha um canal de atendimento direto.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {/* Formulário */}
        <div className="p-8 rounded-xl shadow-xl bg-neutral-800">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white">Nome</label>
              <input
                type="text"
                className="mt-1 w-full p-3 border border-neutral-700 rounded-md bg-neutral-900 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orbita-purple"
                placeholder="Seu nome completo"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">E-mail</label>
              <input
                type="email"
                className="mt-1 w-full p-3 border border-neutral-700 rounded-md bg-neutral-900 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orbita-purple"
                placeholder="seu@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Assunto</label>
              <input
                type="text"
                className="mt-1 w-full p-3 border border-neutral-700 rounded-md bg-neutral-900 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orbita-purple"
                placeholder="Ex: Dúvidas, Orçamento..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white">Mensagem</label>
              <textarea
                rows="4"
                className="mt-1 w-full p-3 border border-neutral-700 rounded-md bg-neutral-900 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orbita-purple"
                placeholder="Escreva aqui sua mensagem..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 rounded-md text-white bg-orbita-purple hover:bg-orbita-purple-light transition-all duration-300 font-semibold shadow-md"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Contatos */}
        <div className="space-y-6">
          <div className="p-6 rounded-xl shadow-xl bg-neutral-800">
            <h3 className="text-xl font-bold text-orbita-purple mb-2">Comercial</h3>
            <p className="text-sm text-neutral-400">Para orçamentos, propostas e dúvidas sobre serviços.</p>
            <p className="mt-2 text-sm font-medium flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-orbita-purple" /> (00) 90000-0001
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-xl bg-neutral-800">
            <h3 className="text-xl font-bold text-orbita-cyan mb-2">Operacional</h3>
            <p className="text-sm text-neutral-400">Para suporte técnico, operacional ou demandas internas.</p>
            <p className="mt-2 text-sm font-medium flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-orbita-cyan" /> (00) 90000-0002
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-xl bg-neutral-800">
            <h3 className="text-xl font-bold text-emerald-400 mb-2">Financeiro</h3>
            <p className="text-sm text-neutral-400">Para questões de pagamentos, boletos ou contratos.</p>
            <p className="mt-2 text-sm font-medium flex items-center gap-2">
              <PhoneIcon className="w-5 h-5 text-emerald-400" /> (00) 90000-0003
            </p>
          </div>
          <div className="p-6 rounded-xl shadow-xl bg-neutral-800">
            <h3 className="text-xl font-bold text-white mb-2">E-mail Geral</h3>
            <p className="text-sm text-neutral-400">Entre em contato direto por e-mail.</p>
            <p className="mt-2 text-sm font-medium flex items-center gap-2">
              <MailIcon className="w-5 h-5 text-white" /> contato@orbitaestrategica.com.br
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
