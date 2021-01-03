import React, { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = (props) => {

    const [item, setItem] = useState(false);
    let id = props.match.params.id

    useEffect(() => {
            fetch(`https://videogamesapi.herokuapp.com/api/games/${id}`)
            .then(respuesta => {
              return respuesta.json();
            })
        .then((resultado)=>{
            setItem(resultado)
            // console.log(resultado)
        })
    }, [id])

    return(
        <div className="lista-productos-detail">
            {item ? 
            <ItemDetail key={item.id} title={item.title} description={item.description} img={item.cover} valor={250}/>
     : 'Cargando producto...'}
        </div>
    )
};

export default ItemDetailContainer;