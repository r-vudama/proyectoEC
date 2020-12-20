import React from 'react';
// import ItemCount from './ItemCount'
import ItemList from './ItemList'
import ItemDetailContainer from './ItemDetailContainer'

const ItemListContainer = ({aviso}) => {
    return(
        <div className="contenedor-items">
            <h1>{aviso}</h1>
            <ItemList/>
            <ItemDetailContainer/>
        </div>
    )
}

export default ItemListContainer;