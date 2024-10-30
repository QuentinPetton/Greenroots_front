import { useState } from 'react';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/Logos/Logo_principal.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BurgerMenu from './BurgerMenu';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="fixed bottom-0 left-0 w-full flex items-end bg-greenroots_green z-50 p-18">
        {/* Menu burger */}
        <BurgerMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {/* Logo central */}
        <div className="flex-1 flex justify-center">
          <a href="/">
            <img src={logo} alt="logo" className="w-30 h-30 max-w-14" />
          </a>
        </div>

        {/* Icône du panier */}
        <div className="flex-1 flex justify-end">
          <FontAwesomeIcon icon={faCartShopping} className="w-8 h-8 m-2 text-greenroots_white" />
        </div>
      </header>
    </>
  );
}

export default Header;
