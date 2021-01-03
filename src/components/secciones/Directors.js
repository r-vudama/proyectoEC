import React, { useState, useEffect} from 'react';

const Directors = () => {
    const [items, setItems] = useState(false);

    useEffect(() => {
            fetch("https://videogamesapi.herokuapp.com/api/directors/")
            .then(respuesta => {
              return respuesta.json();
            })
        .then((resultado)=>{
            setItems(resultado.results)
            // console.log(resultado.results)
        })
    }, [])

    return(
        <div className="lista-productos-detail">
            <h2>Directores</h2>
            {items ? items.map((card, i) => (
                            <div key={card.id} className="card-Directors">
                            <p><span>Nombre: </span>{card.name}</p>
                            <p><span>Nacionalidad: </span>{card.born_country}</p>
                         </div>
                        )) : 'Cargando información...'}
        </div>
    )
}

export default Directors
