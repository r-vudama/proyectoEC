import React from 'react';
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
      <div className="header-contenedor">
        <header className="header">

          <h1 className="header__titulo">RETRO GAMES</h1>
          <nav className="header__nav">
            <ul className="header__menu">
                <li><a href="#">PC</a></li>
                <li><a href="#">NES</a></li>
                <li><a href="#">PLAYSTATION</a></li>
                <li><a href="#">SEGA</a></li>
                <li><a href="#">SUPER NINTENDO</a></li>
            </ul>

            <CartWidget/>
          </nav>

        </header>
      </div>
    );
  }

export default NavBar;