import React, { useState } from 'react';
import CartWidget from './CartWidget'

const NavBar = () => {

  const [links, setLinks] = useState(['pc', 'nes', 'playstation', 'sega', 'nintendo64'])

    return (
      <div className="header-contenedor">
        <header className="header">

          <h1 className="header__titulo">RETRO GAMES</h1>
          <nav className="header__nav">
            <ul className="header__menu">
                {links.map((link, i) => {
                    return (<li key={i}><a href={`/${link}`}>{link}</a></li>)
                })}
            </ul>

            <CartWidget/>
          </nav>

        </header>
      </div>
    );
  }

export default NavBar;