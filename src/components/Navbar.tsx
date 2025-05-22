
import React from 'react';
import { Link } from 'react-router-dom';
import { logo } from '../assets/images';
import { useIsMobile } from '@/hooks/use-mobile';
import { TooltipProvider } from '@/components/ui/tooltip';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const isMobile = useIsMobile();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { name: 'INÍCIO', path: '/' },
    { name: 'PROGRAMAÇÃO', path: '/programacao' },
    { name: 'MODALIDADES', path: '/modalidades' },
    { name: 'EQUIPES', path: '/equipes' },
    { name: 'HISTÓRICO', path: '/historico' },
    { name: 'GALERIA', path: '/galeria' },
  ];

  return (
    <TooltipProvider>
      <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Jogos IFAL" className="h-10 sm:h-12" />
              <div className="ml-4 font-bold font-title">
                <div className="text-lg sm:text-xl text-ifal-dark">JOGOS IFAL</div>
                <div className="text-xs sm:text-sm text-ifal-red">2025</div>
              </div>
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-1 lg:space-x-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="font-medium text-sm lg:text-base text-ifal-dark hover:text-ifal-green transition-colors border-b-2 border-transparent hover:border-ifal-green px-1 py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contato"
                className="ml-2 lg:ml-4 bg-ifal-red text-white font-medium py-2 px-3 lg:px-6 rounded-md hover:bg-ifal-red/90 transition-colors text-sm lg:text-base"
              >
                CONTATO
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-ifal-dark focus:outline-none"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu*/}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t bg-white/80 backdrop-blur-sm shadow-lg rounded-b-lg">
              <nav className="flex flex-col space-y-4 px-4">
                {links.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="font-medium text-ifal-dark hover:text-ifal-green px-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="/contato"
                  className="bg-ifal-red text-white font-medium py-2 px-6 rounded-md hover:bg-ifal-red/90 transition-colors w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTATO
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </TooltipProvider>
  );
};

export default Navbar;
