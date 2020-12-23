import React, { useState, useEffect} from 'react';
import Item from './Item'

const ItemList = () => {

    const [items, setItems] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            new Promise ((resolver,rechazar)=>{
                resolver([{
                            "id": "1",
                            "producto": "Doom",
                            "valor": 250,
                            "img": "https://cdn.vox-cdn.com/uploads/chorus_asset/file/6444491/doom_cover_art.0.jpg"
                            },
                            {"id": "2",
                            "producto": "Road Rash",
                            "valor": 300,
                            "img": "https://cdn.vox-cdn.com/thumbor/3m8GttaP_Ea8ckDualfy2EGv7kM=/75x0:885x540/1200x800/filters:focal(75x0:885x540)/cdn.vox-cdn.com/uploads/chorus_image/image/9661203/road_rash.0.png"
                            },
                            {"id": "3",
                            "producto": "Hill Street Blues",
                            "valor": 200,
                            "img": "https://s.uvlist.net/l/y2011/05/85006.jpg"
                            }])
        }) 
        .then((resultado)=>{
            setItems(resultado)
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