import React from 'react';

const Item = ({title, valor, cover}) => {

    return(
        <div className="producto-card">
            <img src={cover} alt={title}/>
            <p>{title}</p>
            <p>${valor}</p>
        </div>
    )
};

export default Item;

