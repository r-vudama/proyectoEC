import React from 'react';
// import ItemCount from './ItemCount'
import ItemList from './ItemList'
// import ItemDetailContainer from './ItemDetailContainer'

const ItemListContainer = () => {
    return(
        <div className="contenedor-items">
            <h1>Bienvenido a RETRO GAMES</h1>
            <ItemList/>
        </div>
    )
}

export default ItemListContainer;