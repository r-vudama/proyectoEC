import React, {useContext} from 'react';
import { contexto } from '../context/cartContext'

const CartWidget = () => {

    const { carrito } = useContext(contexto);
    return(
        <div className="contenedor-carrito">
            <img src="./img/cart.svg" alt="Carrito" className="header__carrito"/>
        </div>
    )
}

export default CartWidget;