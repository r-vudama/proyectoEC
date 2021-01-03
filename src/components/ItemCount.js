import React, { useState, useEffect } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const [contador, setContador] = useState(initial);

    useEffect(() => {
            if (contador < initial) {return setContador(initial)}
            if (contador > stock) {setContador(stock)}
          }, [contador, stock, initial]);

    const sumar = () => {
        setContador(contador + 1)
        onAdd(contador + 1)
    }

    const restar = () => {
        setContador(contador -1)
        onAdd(contador -1)
    }

    return(
        <div className="contador">
            <div className="botones">
                <button onClick={restar}>-</button>
                <input type="number" value={contador} disabled/>
                <button onClick={sumar}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;
