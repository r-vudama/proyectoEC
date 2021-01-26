import React, { useState } from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const [links, setLinks] = useState([
                                      {nombre: 'Juegos', url: '/'}, 
                                      {nombre: 'Sega Genesis', url: '/sega', platform: 'Sega Genesis'}, 
                                      {nombre: 'NES', url: '/nes', platform: 'Nintendo Entertainment System (NES)'}, 
                                      {nombre: 'Super Nintendo', url: '/snes', platform: 'Super Nintendo Entertainment System (SNES)'},
                                      {nombre: 'GameBoy', url: '/gameboy', platform: 'Game Boy'},
                                      {nombre: 'Playstation', url: '/playstation', platform: 'PlayStation'}
                                    ])
    
    return (
      <div className="header-contenedor">
        <header className="header">
          <NavLink to='/' exact><h1 className="header__titulo">RETRO GAMES</h1></NavLink>
          <nav className="header__nav">
            <ul className="header__menu">
                {links.map((link, i) => {
                    return (<li key={i} platform={link.platform}><NavLink to={link.url}>{link.nombre}</NavLink></li>)
                })}
            </ul>
          <NavLink to='/cart'><CartWidget/></NavLink>  
          </nav>
        </header>
      </div>
    );
  }

export default NavBar;