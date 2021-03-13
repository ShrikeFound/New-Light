import React from 'react'
import Header from './components/Header.js';
import Home from './components/Home.js';
import Map from './components/Map.js'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Protagonists from './components/Protagonists.js';
import Npcs from './components/Npcs.js';
import GreatLake from './components/GreatLake.js';
import IronDesert from './components/IronDesert.js';
import BurnishedPlains from './components/BurnishedPlains.js';
import Elyss from './components/Elyss.js';
import Shabara from './components/Shabara.js';
import FourOhFour from './components/FourOhFour.js';

function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
    
      <Switch>
          <Route path="/map" >
              <Map/>
          </Route>
        
        <Route exact path="/">
          <Home/>
        </Route>

        <Route path="/protagonists">
          <Protagonists/>
        </Route>

        <Route path="/npcs">
          <Npcs/>
          </Route>
          
        <Route path="/great-lake">
          <GreatLake/> 
          </Route>
          

          <Route path="/iron-desert">
          <IronDesert/> 
        </Route>

        <Route path="/burnished-plains">
          <BurnishedPlains/> 
          </Route>
          
          <Route path="/elyss">
          <Elyss/>
          </Route>
          
          <Route path="/shabara">
          <Shabara/>
          </Route>
          
        <Route path="*">
          <FourOhFour/>
        </Route>

      </Switch>
      </div>
    </Router>
  );
}

export default App;
