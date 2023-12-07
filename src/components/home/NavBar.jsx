import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavBar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className='navbar-container'>
          <Link to="/" className="navbar-logo">
            PASTOS <i className="fa-solid fa-tractor"></i>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            {/* Muda o ícone do menu quando clicado */}
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>Home</Link>
            </li>

            <li className='nav-item'>
              <Link to='/tarefas' className='nav-links' onClick={closeMobileMenu}>Tarefas</Link>
            </li>

            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
