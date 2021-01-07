import React, { useState } from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({title, description, img, valor}) => {

    const [cantidad, setCantidad] = useState(0);
    const [carrito, setCarrito] = useState([]);


    const onAdd = (cantidadItem) => {
        setCantidad(cantidadItem)
    }

    const cargarItem = () => {
        setCarrito([title, cantidad])
        console.log(carrito)
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
                <button onClick={cargarItem} className='btn-agregar'>Agregar al carrito</button>

                {/* {carrito.length === 0 ? <button onClick={cargarItem} className='btn-agregar'>Agregar al carrito</button> : <Link to='/cart'><button  className="btn-confirmar">Confirmar Compra</button></Link> } */}

            </div>
        </div>
    )
};

export default ItemDetail;
