import React, { useState, useEffect } from "react";

const ItemCount = ({stock, initial}) => {

    const [contador, setContador] = useState(initial);

    useEffect(() => {
            if (contador < initial) {setContador(initial)}
            if (contador > stock) {setContador(stock)}
          }, [contador, stock, initial]);


    return(
        <div className="contador">
            <div className="botones">
                <button onClick={() => setContador(contador -1)}>-</button>
                <input type="number" value={contador} disabled/>
                <button onClick={() => setContador(contador +1)}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;