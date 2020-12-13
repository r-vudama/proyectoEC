import React, { useState } from "react";

const ItemCount = ({stock, initial}) => {

    const [contador, cambiarContador] = useState(initial);

    const restar = (e) => {
        if(contador === initial){
            e.target.disabled = true;
            console.log('sin producto');
        } 
        cambiarContador(contador -1);

    }

    const sumar = (e) => {
        if(contador === stock){
            e.target.disabled = true;
            console.log('sin stock');
        }
        cambiarContador(contador +1);
    }

    return(
        <div className="contador">
            <h2>Contador</h2>
            <div className="botones">
                <button onClick={restar}>-</button>
                <input type="number" value={contador} disabled/>
                <button onClick={sumar}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;