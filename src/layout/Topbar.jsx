import React from 'react';

import PhoneIcon from '../assets/icons/phone.svg?react';
import MailIcon from '../assets/icons/mail.svg?react';
import InstagramIcon from '../assets/icons/instagram.svg?react';
import FacebookIcon from '../assets/icons/facebook.svg?react';
import LinkedinIcon from '../assets/icons/linkedin.svg?react';
import WhatsAppIcon from '../assets/icons/whatsapp.svg?react';

function Topbar() {
  const socialLinks = [
    { Icon: InstagramIcon, href: '#', name: 'Instagram' },
    { Icon: FacebookIcon, href: '#', name: 'Facebook' },
    { Icon: LinkedinIcon, href: '#', name: 'LinkedIn' },
    { Icon: WhatsAppIcon, href: '#', name: 'WhatsApp' },
  ];

  return (
    <div className="bg-neutral-900 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex h-10 items-center justify-between">
        {/* Informações de Contato */}
        <div className="flex items-center gap-x-6 text-sm text-neutral-400">
          <a href="tel:21987373813" className="flex items-center gap-x-2 transition-colors hover:text-white">
            {/* O ícone herda a cor do <a> */}
            <PhoneIcon className="h-4 w-4" />
            <span>(21) 98737-3813</span>
          </a>
          <a href="mailto:contato@orbitaestrategica.com.br" className="hidden items-center gap-x-2 transition-colors hover:text-white md:flex">
            <MailIcon className="h-4 w-4" />
            <span>contato@orbitaestrategica.com.br</span>
          </a>
        </div>

        {/* Ícones de Redes Sociais */}
        <div className="flex items-center gap-x-5">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              // A cor base do ícone é definida aqui
              className="text-neutral-500 transition-colors hover:text-white"
            >
              {/* O tamanho do ícone é padronizado aqui */}
              <social.Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Topbar;