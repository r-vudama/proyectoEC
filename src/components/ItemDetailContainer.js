import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from '../firebase';

const ItemDetailContainer = () => {

    let [item, setItem] = useState([]);

    const {id} = useParams();

    useEffect(() => {

        const db = getFirestore()
        const itemCollection = db.collection('items')
        const item = itemCollection.doc(id)

        item
        .get()
        .then((resultado) => {
            const data = resultado.data() 
            setItem(data)
        })
        .catch((err) => {console.log(err)})
    },[id])

    // console.log(item)

    return(
        <div className="lista-productos-detail">
            {item ? 
            <ItemDetail key={id} id={id} title={item.title} description={item.description} img={item.cover} valor={item.value} stock={item.stock}/>
     : 'Cargando producto...'}
        </div>
    )
};

export default ItemDetailContainer;
