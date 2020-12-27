import React from 'react';
import { Route, Switch } from "react-router-dom";
import ItemList from './ItemList';
import Platforms from './secciones/Platforms';

const ItemListContainer = () => {
    return(
        <div className="contenedor-items">

                <Route path="/" exact>
                    <h1>Bienvenido a RETRO GAMES</h1>
                    <ItemList/>
                </Route>
        </div>
    )
}

export default ItemListContainer;