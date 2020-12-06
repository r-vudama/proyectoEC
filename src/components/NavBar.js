import React from 'react';
import CartWidget from './CartWidget'

const NavBar = () => {
    return (
      <div className="header-contenedor">
        <header className="header">

          <h1 className="header__titulo">e-commerce</h1>
          <nav className="header__nav">
            <ul className="header__menu">
                <li><a href="#">PC</a></li>
                <li><a href="#">SMARTPHONES</a></li>
                <li><a href="#">SERVICIOS</a></li>
                <li><a href="#">SOBRE NOSOTROS</a></li>
            </ul>

            <CartWidget/>
          </nav>

        </header>
      </div>
    );
  }

export default NavBar;