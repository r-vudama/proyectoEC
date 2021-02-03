import firebase from "firebase/app";
import "firebase/firestore";

const apiKey = process.env.REACT_APP_APIKEY
const appId = process.env.REACT_APP_appId
const authDomain = process.env.REACT_APP_authDomain
const messagingSenderId = process.env.REACT_APP_messagingSenderId
const projectId = process.env.REACT_APP_projectId
const storageBucket = process.env.REACT_APP_storageBucket

const firebaseConfig = {apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId}

//Da instancia de la app inicializada
const app = firebase.initializeApp(firebaseConfig);

//Da instancia de Firestore inicializado y exporto
export const getFirestore = () => {
    return firebase.firestore(app)
}

// console.log(process.env)