import React, {useContext} from 'react';
import { contexto } from '../context/cartContext';


const CartForm = () => {

    const {vaciarCarrito, nombre, setNombre, telefono, setTelefono, email, setEmail, confirmarCompra} = useContext(contexto);

    return(
            <form onSubmit={confirmarCompra} className="form-compra">
                <div className="input-form">
                    <input value={nombre} placeholder="Nombre*" required onChange={(e)=>{setNombre(e.target.value)}} type="text"/>
                </div>
                <div className="input-form">
                    <input value={telefono} placeholder="Teléfono*" required onChange={(e)=>{setTelefono(e.target.value)}} type="text"/>
                </div>
                <div className="input-form">
                    <input value={email} placeholder="E-mail*" required onChange={(e)=>{setEmail(e.target.value)}} type="email"/>
                </div>
                <div className="botones">
                <button type="submit" className="btn-comprar">Comprar</button>
                <input onClick={vaciarCarrito} type="button" className="btn-eliminar-todo" value={`Vaciar el carrito`}/>
                </div>
            </form>
    )
}

export default CartForm