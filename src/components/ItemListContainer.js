import React from 'react';
import ItemCount from './ItemCount'
import ItemList from './ItemList'

const ItemListContainer = ({aviso}) => {
    return(
        <div className="contenedor-items">
            <h1>{aviso}</h1>
            <ItemCount stock={10} initial={1}/>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;