import React, {useContext} from 'react';
import { contexto } from '../context/cartContext'

const Cart = () => {

    const { onAdd, cargarItem, productsCount, quitarDelCarrito, carrito, cantidad } = useContext(contexto);

    return(
        <div>
            {carrito.map((card, i) => (
                <div key={i}>
                    <p>{card.nombre}</p>
                    <p>$ {card.valor}</p>
                    <p>Unidades: {card.cantidad}</p>
                    <p>Subtotal: $ {card.valor * card.cantidad}</p>
                    <input onClick={quitarDelCarrito} type="button" value={`Quitar del carrito`}/>
                </div>
            ))}
        </div>
    )
}

export default Cart;