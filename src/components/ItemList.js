import React, { useState, useEffect} from 'react';
import Item from './Item'

const ItemList = () => {

    const [items, cargarItems] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            let promesa = new Promise ((resolver,rechazar)=>{
                resolver([{
                            "id": "1",
                            "producto": "Teclado",
                            "valor": 1800,
                            "img": "https://th.bing.com/th/id/OIP.ILLEDppzc4KvdJ73URRc8QHaHa?pid=Api&rs=1"
                            },
                            {"id": "2",
                            "producto": "Monitor",
                            "valor": 3000,
                            "img": "https://officemachines.net/zoomimages/113170-2.jpg"
                            },
                            {"id": "3",
                            "producto": "Mouse",
                            "valor": 1500,
                            "img": "https://images.techhive.com/images/article/2017/03/havitmouse2-100713812-orig.jpg"
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