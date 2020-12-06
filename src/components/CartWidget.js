import React from 'react';
import Cart from './cart.svg';

const CartWidget = () => {
    return(
        <div className="contenedor-carrito">
            <img src={Cart} alt="Carrito" className="header__carrito"/>
        </div>
    )
}

export default CartWidget;