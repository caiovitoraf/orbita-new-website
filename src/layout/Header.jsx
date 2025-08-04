import React from 'react';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Sobre Nós', href: '/sobre-nos' },
  { name: 'Consultoria e Serviços', href: '/consultoria-e-servicos' },
  { name: 'Órbita App', href: '/orbita-app' },
];

const OrbitaLogo = () => (
  <Link to="/" className="flex items-center gap-x-3">
    <img src="/logo.png" alt="Logo da Órbita" className="h-10 w-auto" />
    <span
      className="
        font-sans font-extrabold text-3xl
        bg-gradient-to-r from-orbita-purple to-orbita-cyan
        bg-clip-text text-transparent
      "
    >
      Órbita
    </span>
  </Link>
);

function Header() {
  return (
    <header className="bg-neutral-900 backdrop-blur-lg sticky top-0 z-50 border-b border-neutral-700/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <OrbitaLogo />
        </div>

        <div className="hidden items-center gap-x-8 lg:flex">
          <nav className="flex items-center gap-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="font-sans font-semibold text-neutral-300 relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-0.5 after:bg-orbita-purple after:transition-all after:duration-300 hover:text-white hover:after:w-full"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div>
            <Link
              to="/contato"
              className="font-sans font-bold text-sm text-white bg-orbita-purple rounded-full px-6 py-3 transition-all duration-300 hover:bg-orbita-purple-light hover:shadow-lg hover:shadow-orbita-purple/40 transform hover:-translate-y-px"
            >
              FALE CONOSCO
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
