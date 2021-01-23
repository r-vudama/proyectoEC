import React, {useContext} from 'react';
import { contexto } from '../context/cartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const {carrito, total, quitarDelCarrito, vaciarCarrito, nombre, setNombre, telefono, setTelefono, email, setEmail, compra, setCompra, confirmarCompra} = useContext(contexto);

    const borrarItem = (p) => {
        quitarDelCarrito(p.id);
      };

    return(
        <div className="contenedor-cart">

            {compra === "" ? '' :                             <h2>Compra exitosa! Tu ID de seguimiento es: {compra}</h2>}

            {carrito.length === 0 ?  
                        <>
                            <br/>
                            <h2>No hay productos en tu carrito</h2>
                            <br/>
                            <Link to={{pathname: `/`}}>
                                <input type="button" className="btn-eliminar-todo" value={`Volver al Inicio`}/>
                            </Link>
                        </> : 
                        carrito.map((card, i) => (
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

            {carrito.length === 0 ? '' :            
                <form onSubmit={confirmarCompra} className="form-compra">
                    <div className="input-form">
                        <input value={nombre} placeholder="Nombre*" onChange={(e)=>{setNombre(e.target.value)}} type="text"/>
                    </div>
                    <div className="input-form">
                        <input value={telefono} placeholder="Teléfono*" onChange={(e)=>{setTelefono(e.target.value)}} type="text"/>
                    </div>
                    <div className="input-form">
                        <input value={email} placeholder="E-mail*" onChange={(e)=>{setEmail(e.target.value)}} type="email"/>
                    </div>
                    <div className="botones">
                    <button type="submit" className="btn-comprar">Comprar</button>
                    <input onClick={vaciarCarrito} type="button" className="btn-eliminar-todo" value={`Vaciar el carrito`}/>
                    </div>
                </form>
            }

        </div>
    )
}

export default Cart