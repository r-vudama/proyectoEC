import React, {useContext} from 'react';
import { contexto } from '../context/cartContext'

const CartWidget = () => {

    const { cantidadProducto } = useContext(contexto);
    return(
        <>
        <div className="contenedor-carrito">
            <div>
                <img src="./img/cart.svg" alt="Carrito" className="header__carrito"/>
            </div>
            {cantidadProducto() === 0 ? '' :  <div className="carrito__cantidad">{cantidadProducto()}</div>}
        </div>
        
        </>
    )
}

export default CartWidget;