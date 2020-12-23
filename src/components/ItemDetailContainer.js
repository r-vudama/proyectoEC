import React, { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {

    const [item, setItem] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://videogamesapi.herokuapp.com/api/games/5/")
            .then(respuesta => {
              return respuesta.json();
            })
        .then((resultado)=>{
            setItem(resultado)
            // console.log(resultado)
        })
        }, 2000);
    }, [])

    return(
        <div className="lista-productos-detail">
            <h2>{item.title}</h2>
            {item ? 
            <ItemDetail key={item.id} title={item.title} description={item.description} img={item.cover} valor={250}/>
     : 'Cargando producto...'}
        </div>
    )
};

export default ItemDetailContainer;