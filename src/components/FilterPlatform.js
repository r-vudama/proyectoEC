import React, { useState, useEffect} from 'react';
import Item from './Item';
import { Link } from 'react-router-dom';
import { getFirestore } from '../firebase';

//---------------------------------------------
//Filtra los juegos desde el menu
//---------------------------------------------
const FilterPlatform = (props) => {
    const [items, setItems] = useState(false);

    const url = props.match.url

    useEffect(() => {

        const db = getFirestore()
        const itemsCollection = db.collection('items')
        const query = itemsCollection.where("platform", "==", url)
        query.get()

        .then((resultado) => {
            const data = resultado.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
              }));
              setItems(data)
        })
        .catch((err) => {console.log(err)})
    },[url])

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

export default FilterPlatform

