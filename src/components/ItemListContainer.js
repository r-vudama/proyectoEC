import React from 'react';
import { Route } from "react-router-dom";
import ItemList from './ItemList';

const ItemListContainer = () => {
    
    return(
        <div className="contenedor-items">

                <Route path="/" exact>
                    <h1>Bienvenido a RETRO GAMES</h1>
                    <h3>Cartuchos y CDs de los mejores juegos clasicos!</h3>
                    <ItemList/>
                </Route>
        </div>
    )
}

export default ItemListContainer;