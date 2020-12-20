import React from 'react';
import ItemCount from './ItemCount'

const ItemDetail = ({title, description, img, valor}) => {

    return(
        <div className="producto-card-detail">
            <img src={img} alt={title}/>
            <p className="card-titulo">{title}</p>
            <p className="card-valor">${valor}</p>
            <p>{description}</p>
            <ItemCount stock={10} initial={1}/>
        </div>
    )
};

export default ItemDetail;