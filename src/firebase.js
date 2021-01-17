import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyATyIYH_keW8r3sx3B0QZnoGWACD8mYnsQ",
    authDomain: "proyecto-ec.firebaseapp.com",
    projectId: "proyecto-ec",
    storageBucket: "proyecto-ec.appspot.com",
    messagingSenderId: "325565169200",
    appId: "1:325565169200:web:cc4a9699f2536295c137f5"
  };

//Da instancia de la app inicializada
const app = firebase.initializeApp(firebaseConfig);

//Da instancia de Firestore inicializado y exporto
export const getFirestore = () => {
    return firebase.firestore(app)
}