import React, { useState, useEffect} from 'react';
import Item from '../Item';
import { Link } from 'react-router-dom';
import { getFirestore } from '../../firebase';

const Snes = () => {
    const [items, setItems] = useState(false);

    useEffect(() => {

        const db = getFirestore()
        const itemsCollection = db.collection('items')
        const query = itemsCollection.where("platform", "==", "Super Nintendo Entertainment System (SNES)")
        query.get()

        .then((resultado) => {
            const data = resultado.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              setItems(data)
        })
        .catch((err) => {console.log(err)})
    },[])

    // console.log(items)

    return(
        <div className="lista-productos-detail">
            {items ? items.map((card, i) => (
                        <Link to={{pathname: `/itemdetail/${card.id}`}} key={i} id={card.id}>
                            <Item id={card.id} title={card.title} cover={card.cover} valor={card.value} stock={card.stock}/> 
                        </Link> 
                        )) : 'Cargando productos...'}
        </div>
    )
}

export default Snes