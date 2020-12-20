import React, { useState, useEffect } from "react";

const ItemCount = ({stock, initial}) => {

    const [contador, cambiarContador] = useState(initial);

    useEffect(() => {
            if (contador < initial) {cambiarContador(initial)}
            if (contador > stock) {cambiarContador(stock)}
          }, [contador, stock, initial]);


    return(
        <div className="contador">
            <div className="botones">
                <button onClick={() => cambiarContador(contador -1)}>-</button>
                <input type="number" value={contador} disabled/>
                <button onClick={() => cambiarContador(contador +1)}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;