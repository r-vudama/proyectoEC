import React, {useContext} from 'react';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { contexto } from '../context/cartContext'


const ItemDetail = ({id, title, description, img, valor, stock}) => {

    const { onAdd, cargarItem, carrito, cantidad } = useContext(contexto);

    return(
        
        <div className="producto-card-detail">
            <img src={img} alt={title}/>
            <div className="producto-info">
                <p className="card-titulo">{title}</p>
                <p className="card-valor">${valor}</p>
                <p>{description}</p>

                {stock === 0 ? <h2>PRODUCTO SIN STOCK</h2> :
                <>
                    <ItemCount 
                        stock={stock} 
                        initial={1} 
                        onAdd={onAdd}
                    />
                    <input onClick={()=>cargarItem(id, title, valor, cantidad)} className='btn-agregar' type="button" value={`Agregar al carrito`}/>

                    {carrito.length === 0 ? '' : <Link to='/cart'><button  className="btn-confirmar">Confirmar Compra</button></Link> }
                </>}

            </div>
        </div>
    )
};

export default ItemDetail;
