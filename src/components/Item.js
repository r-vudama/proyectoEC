import React from 'react';

const Item = ({producto, valor, img}) => {

    return(
        <div className="producto-card">
            <img src={img} alt={producto}/>
            <p>{producto}</p>
            <p>${valor}</p>
        </div>
    )
};

export default Item;

