import React, { useState, useEffect} from 'react';

const Genres = () => {
    const [items, setItems] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch("https://videogamesapi.herokuapp.com/api/genres/")
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
            <h2>Generos</h2>
            {items ? items.map((card, i) => (
                            <div key={card.id} className="card-Genres">
                                <p><span>Genero: </span>{card.name}</p>
                             </div>
                        )) : 'Cargando...'}
        </div>
    )
}

export default Genres
