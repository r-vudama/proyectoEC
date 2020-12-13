import React from 'react';
import ItemCount from './ItemCount'

const ItemListContainer = ({aviso}) => {
    return(
        <div className="contenedor-items">
            <h1>{aviso}</h1>
            <ItemCount/>
        </div>
    )
}

export default ItemListContainer;