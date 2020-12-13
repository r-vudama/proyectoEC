import React, { useState } from "react";

const ItemCount = () => {

    const [contador, cambiarContador] = useState(1);
    const [stock] = useState(10);
    const [sinStock] = useState(0);

    const comprobarStock = () => {
        if(contador === sinStock){
            console.log('sin stock')
        } else if (contador === stock){
            console.log('sin stock')
        }
    }

    const restar = () => {
        cambiarContador(contador -1)
        comprobarStock();
    }

    const sumar = () => {
        cambiarContador(contador +1)
        comprobarStock();
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