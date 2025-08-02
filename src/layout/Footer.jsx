import React, { useState } from 'react';

// Importando os ícones
import PhoneIcon from '../assets/icons/phone.svg?react';
import MailIcon from '../assets/icons/mail.svg?react';
import InstagramIcon from '../assets/icons/instagram.svg?react';
import FacebookIcon from '../assets/icons/facebook.svg?react';
import LinkedinIcon from '../assets/icons/linkedin.svg?react';
import WhatsAppIcon from '../assets/icons/whatsapp.svg?react';

// --- SUB-COMPONENTES ---

const FooterLogo = () => (
  <a href="/" className="flex flex-row items-center gap-x-4">
    <img src="/logo.png" alt="Logo da Órbita" className="h-16 w-auto" />
    <span className="font-sans text-5xl font-extrabold bg-gradient-to-r from-orbita-purple to-orbita-cyan bg-clip-text text-transparent">
      Órbita
    </span>
  </a>
);

function ContactInfo() {
  const socialLinks = [
    { Icon: InstagramIcon, href: '#', name: 'Instagram' },
    { Icon: FacebookIcon, href: '#', name: 'Facebook' },
    { Icon: LinkedinIcon, href: '#', name: 'LinkedIn' },
    { Icon: WhatsAppIcon, href: '#', name: 'WhatsApp' },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h3 className="font-sans text-xl font-semibold text-white">Fale Conosco</h3>
        <ul className="mt-4 space-y-4 text-base">
          <li className="flex items-center gap-x-3">
            <PhoneIcon className="h-6 w-6 flex-shrink-0 text-orbita-purple" />
            <span>(21) 98737-3813</span>
          </li>
          <li className="flex items-center gap-x-3">
            <MailIcon className="h-6 w-6 flex-shrink-0 text-orbita-purple" />
            <span>contato@orbitaestrategica.com.br</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-sans text-xl font-semibold text-white">Nossas Redes Sociais</h3>
        <div className="mt-4 flex gap-x-4">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-800 text-neutral-400 transition-colors hover:bg-orbita-purple hover:text-white"
            >
              <social.Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function NewsletterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  const isFormValid = name && email && whatsapp;

  return (
    <div className="rounded-lg bg-neutral-800/50 p-8">
      <h3 className="font-sans text-2xl font-semibold text-white">Receba nossas dicas!</h3>
      <form className="mt-6 space-y-4">
        <input
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border-0 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orbita-purple"
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border-0 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orbita-purple"
        />
        <input
          type="text"
          placeholder="Whatsapp"
          value={whatsapp}
          onChange={(e) => setWhatsapp(e.target.value)}
          className="w-full rounded-md border-0 bg-neutral-800 px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-orbita-purple"
        />
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full rounded-md px-6 py-3 font-sans text-sm font-bold text-white transition-colors ${
            isFormValid
              ? 'bg-orbita-purple hover:bg-orbita-purple-light'
              : 'bg-neutral-600 cursor-not-allowed'
          }`}
        >
          Enviar
        </button>
      </form>
    </div>
  );
}

// --- COMPONENTE PRINCIPAL DO FOOTER ---

function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container mx-auto px-4 pt-24 pb-12 sm:px-6 lg:px-8">
        {/* Seção do Logo */}
        <div className="mb-16 flex justify-center">
          <FooterLogo />
        </div>

        {/* Layout responsivo com mais espaço para o formulário */}
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-1 gap-8 border-t border-neutral-800 pt-12 lg:grid-cols-[2fr_1fr] lg:gap-x-12 items-start">
            <NewsletterForm />
            <ContactInfo />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-16 bg-black py-4 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col items-center justify-between gap-y-2 text-center text-sm text-neutral-500 sm:flex-row sm:text-left">
          <p>&copy; {new Date().getFullYear()} Órbita Estratégica. Todos os direitos reservados.</p>
          <p className="hidden md:block">
            Ajudamos nossos clientes a crescer de maneira integrada e eficiente.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
