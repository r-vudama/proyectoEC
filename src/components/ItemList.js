import React, { useState, useEffect} from 'react';
import Item from './Item'

const ItemList = () => {

    const [items, cargarItems] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            let promesa = new Promise ((resolver,rechazar)=>{
                resolver([{
                            "id": "1",
                            "producto": "Doom",
                            "valor": 250,
                            "img": "https://t.gamesnostalgia.com/screenshots/d/o/doom/main_small.jpg"
                            },
                            {"id": "2",
                            "producto": "Road Rash",
                            "valor": 300,
                            "img": "https://t.gamesnostalgia.com/screenshots/r/o/road-rash_/main_small.jpg"
                            },
                            {"id": "3",
                            "producto": "Hill Street Blues",
                            "valor": 200,
                            "img": "https://t.gamesnostalgia.com/screenshots/h/i/hill-street-blues/main_small.jpg"
                            }])
        }) 
        .then((resultado)=>{
            cargarItems(resultado)
            // console.log(resultado)
        })
        }, 2000);
    }, [])

    return(
        <div className="lista-productos">
            <h2>Lista de productos</h2>
            {items ? items.map((producto)=>(
            <Item key={producto.id} producto={producto.producto} valor={producto.valor} img={producto.img}/>
    )) : 'Cargando productos...'}
        </div>
    )
};

export default ItemList;