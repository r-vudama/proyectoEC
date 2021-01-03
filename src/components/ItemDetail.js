import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({title, description, img, valor}) => {

    const [cantidad, setCantidad] = useState(1)
    const [carrito, setCarrito] = useState(null)


    const onAdd = (cantidadRef) => {
        setCantidad(cantidadRef)
        // console.log(cantidadRef)
        // console.log('cantidad ' + cantidad)
    }

    const addCarrito = () => {
        setCarrito([title, cantidad])
        // console.log(carrito)
    }

    return(
        <div className="producto-card-detail">
            <img src={img} alt={title}/>
            <div className="producto-info">
                <p className="card-titulo">{title}</p>
                <p className="card-valor">${valor}</p>
                <p>{description}</p>

                <ItemCount 
                    stock={10} 
                    initial={1} 
                    onAdd={onAdd}
                />

                {carrito === null ? <button onClick={addCarrito} className='btn-agregar'>Agregar al carrtio</button> : <Link to='/cart'><button  className="btn-confirmar">Confirmar Compra</button></Link> }

            </div>
        </div>
    )
};

export default ItemDetail;
