import React, {useContext} from 'react';
import { contexto } from '../context/cartContext'

const Cart = () => {

    const {carrito, total, quitarDelCarrito, vaciarCarrito } = useContext(contexto);

    const borrarItem = (p) => {
        quitarDelCarrito(p.id);
      };

    return(
        <div className="contenedor-cart">

            {carrito.length === 0 ? <h2>Aún no hay productos en tu carrito</h2> : carrito.map((card, i) => (
                <div key={i} className="cart-card">
                    <div className="card-description">
                        <p>{card.nombre}</p>
                        <p>Unidades: {card.cantidad}</p>
                        <p>Subtotal: $ {card.valor * card.cantidad}</p>
                    </div>
                    <input onClick={() => borrarItem(card)} type="button" value={`Quitar del carrito`}/>
                </div>
            ))}
            
            <div className="cart-total">Total: ${total()}</div>

            {carrito.length === 0 ? '' : <input onClick={vaciarCarrito} type="button" className="btn-eliminar-todo" value={`Vaciar el carrito`}/>}
        </div>
    )
}

export default Cart;