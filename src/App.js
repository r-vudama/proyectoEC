import React from 'react';
import './components/css/main.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Platforms from './components/secciones/Platforms';
import Genres from './components/secciones/Genres';
import Directors from './components/secciones/Directors';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CarritoProvider from './context/cartContext';

function App() {
  return (
      <div className="App">
        <CarritoProvider>
          <BrowserRouter>
            <NavBar/>
            <Switch>
              <Route exact path="/" component={ItemListContainer}/>
              <Route path='/itemdetail/:id' component={ItemDetailContainer}/>
              <Route path="/platforms" component={Platforms}/>
              <Route path="/genres" component={Genres}/>
              <Route path="/directors" component={Directors}/>
            </Switch>
          </BrowserRouter>
        </CarritoProvider>
      </div>
  );
}

export default App;
