import React from 'react';

const Item = ({title, cover}) => {

    return(
        <div className="producto-card">
            <img src={cover} alt={title}/>
            <p>{title}</p>
        </div>
    )
};

export default Item;
