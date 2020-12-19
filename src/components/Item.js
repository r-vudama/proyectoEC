import React from 'react';

const Item = ({producto, valor, img}) => {

    return(
        <div className="producto-card">
            <p>{producto}</p>
            <p>${valor}</p>
            <img src={img} alt={producto}/>
        </div>
    )
};

export default Item;

