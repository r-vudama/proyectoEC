import React, { useContext } from 'react';
import CartWidget from './CartWidget';
import { NavLink } from 'react-router-dom';
import { ListaContexto } from '../context/listContext';

const NavBar = () => {

  const { links } = useContext(ListaContexto)

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

