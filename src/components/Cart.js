import React, {useContext} from 'react';
import { contexto } from '../context/cartContext'

const Cart = () => {

    const { onAdd, cargarItem, productsCount, quitarDelCarrito, carrito, cantidad } = useContext(contexto);

    return(
        <div className="contenedor-cart">

            {carrito.length === 0 ? <h2>Aún no hay productos en tu carrito</h2> : carrito.map((card, i) => (
                <div key={i} className="cart-card">
                    <div className="card-description">
                        <p>{card.nombre}</p>
                        <p>Unidades: {card.cantidad}</p>
                        <p>Subtotal: $ {card.valor * card.cantidad}</p>
                    </div>
                    <input onClick={quitarDelCarrito} type="button" value={`Quitar del carrito`}/>
                </div>
            ))}
            
        </div>
    )
}

export default Cart;