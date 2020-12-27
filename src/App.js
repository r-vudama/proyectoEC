import React from 'react';
import './components/css/main.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Platforms from './components/secciones/Platforms';
import Genres from './components/secciones/Genres';
import Directors from './components/secciones/Directors';
import Screenshots from './components/secciones/Screenshots';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <NavBar/>
          <Switch>
            <Route exact path="/" component={ItemListContainer}/>
            <Route path='/itemdetail/:id' component={ItemDetailContainer}/>
            <Route path="/platforms" component={Platforms}/>
            <Route path="/genres" component={Genres}/>
            <Route path="/directors" component={Directors}/>
            <Route path="/screenshots" component={Screenshots}/>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
