import React, { useContext } from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import { ListaContexto } from '../context/listContext';

const ItemList = () => {
    
    const { items } = useContext(ListaContexto)

    return(
        <div className="lista-productos-detail">
            {items ? items.map((card, i) => (
                        <Link to={{pathname: `/itemdetail/${card.id}`}} key={i} id={card.id}>
                            <Item id={card.id} title={card.title} cover={card.cover} valor={card.value} stock={card.stock}/> 
                        </Link> 
                        )) : 'Cargando productos...'}

        </div>
    )
};

export default ItemList;
