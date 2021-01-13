import React, {useContext} from 'react';
import { contexto } from '../context/cartContext'

const Cart = () => {

    const { onAdd, cargarItem, productsCount, quitarDelCarrito, total, carrito, cantidad } = useContext(contexto);

    return(
        <div>
            {carrito.map((card, i) => (
                <div key={i} id={card.id}>
                    <h2>item</h2>
                    <input onClick={quitarDelCarrito} type="button" value={`Eliminar carrito`}/>
                </div>
            ))}
        </div>
    )
}

export default Cart;