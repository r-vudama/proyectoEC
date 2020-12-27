import React, { useState, useEffect} from 'react';
import Item from './Item';
import Pagination from './Pagination'
import { Link } from 'react-router-dom';

const ItemList = () => {

    const [items, setItems] = useState(false);
    const [page, setPage] = useState(1)

    useEffect(() => {
        if (page < 1) {setPage(1)}
        if (page > 4) {setPage(4)}
      }, [page]);

    useEffect(() => {
        setTimeout(() => {
            fetch(`https://videogamesapi.herokuapp.com/api/games/?page=${page}`)
            .then(respuesta => {
              return respuesta.json();
            })
        .then((resultado)=>{
            setItems(resultado.results)
            // console.log(resultado)
        })
        }, 1000);
    }, [page])

    return(
        <div className="lista-productos-detail">
            {items ? items.map((card, i) => (
                        <Link to={{pathname: `/itemdetail/${card.id}`}} key={i} id={card.id}>
                            <Item id={card.id} title={card.title} cover={card.cover} valor={250}/> 
                        </Link>
                        )) : 'Cargando productos...'}
                        <Pagination page={page} setPage={setPage}/>
        </div>
    )
};

export default ItemList;
