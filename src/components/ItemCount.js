import React, { useState, useEffect, useRef } from "react";

const ItemCount = ({stock, initial, onAdd}) => {

    const cantidadRef = useRef()

    const [contador, setContador] = useState(initial);

    useEffect(() => {
            if (contador < initial) {setContador(initial)}
            if (contador > stock) {setContador(stock)}
          }, [contador, stock, initial]);

    const sumar = () => {
        onAdd(cantidadRef.current.value)
        setContador(contador + 1)
    }

    const restar = () => {
        onAdd(cantidadRef.current.value)
        setContador(contador -1)
    }

    return(
        <div className="contador">
            <div className="botones">
                <button onClick={restar}>-</button>
                <input 
                    type="number" 
                    ref={cantidadRef}
                    value={contador} 
                    disabled
                />
                <button onClick={sumar}>+</button>
            </div>
        </div>
    )
}

export default ItemCount;
