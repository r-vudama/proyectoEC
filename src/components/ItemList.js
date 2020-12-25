import React, { useState, useEffect} from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';

const ItemList = () => {

    const [items, setItems] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://videogamesapi.herokuapp.com/api/games/")
            .then(respuesta => {
              return respuesta.json();
            })
        .then((resultado)=>{
            setItems(resultado.results)
            // console.log(resultado)
        })
        }, 2000);
    }, [])

    return(
        <div className="lista-productos-detail">
            {items ? items.map((card, i) => (
                        <Link to={{pathname: `/itemdetail/${card.id}`}} key={i} id={card.id}>
                            <Item id={card.id} title={card.title} cover={card.cover} valor={250}/> 
                        </Link>
                        )) : 'Cargando productos...'}
        </div>
    )
};

export default ItemList;
