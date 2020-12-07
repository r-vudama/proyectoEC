import React from 'react';
import './components/css/main.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer aviso="Sitio en construcción"/>
    </div>
  );
}

export default App;
