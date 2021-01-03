import React, { useState } from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  const [links, setLinks] = useState([
                                      {nombre: 'Juegos', url: '/'}, 
                                      {nombre: 'Plataformas', url: '/platforms'}, 
                                      {nombre: 'Generos', url: '/genres'}, 
                                      {nombre: 'Directores', url: '/directors'}
                                    ])
    
    return (
      <div className="header-contenedor">
        <header className="header">
          <NavLink to='/' exact><h1 className="header__titulo">RETRO GAMES</h1></NavLink>
          <nav className="header__nav">
            <ul className="header__menu">
                {links.map((link, i) => {
                    return (<li key={i}><NavLink to={link.url}>{link.nombre}</NavLink></li>)
                })}
            </ul>
          <NavLink to='/cart'><CartWidget/></NavLink>  
          </nav>
        </header>
      </div>
    );
  }

export default NavBar;