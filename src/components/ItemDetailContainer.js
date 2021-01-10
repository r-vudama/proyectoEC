import React, {useContext, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { contexto } from '../context/productContextProvider'

const ItemDetailContainer = () => {

    const { item, setItem } = useContext(contexto);

    const {id} = useParams();

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



