import React, { useState, useEffect} from 'react';

const Platforms = () => {
    const [items, setItems] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://videogamesapi.herokuapp.com/api/platforms/")
            .then(respuesta => {
              return respuesta.json();
            })
        .then((resultado)=>{
            setItems(resultado.results)
            // console.log(resultado.results)
        })
        }, 2000);
    }, [])

    return(
        <div className="lista-productos-detail">
            <h2>Plataformas</h2>
            {items ? items.map((card, i) => (
                            <div key={card.id} className="card-Platforms">
                                <p><span>CPU: </span>{card.cpu}</p>
                                <p><span>Consola: </span>{card.name}</p>
                                <p><span>Developer: </span>{card.developer}</p>
                                <p><span>Generación: </span>{card.generation}</p>
                                <p><span>Fecha de lanzamiento: </span>{card.release_date}</p>
                            </div>
                        )) : 'Cargando información...'}
        </div>
    )
}

export default Platforms
