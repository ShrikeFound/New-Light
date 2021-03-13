import React from 'react'
import Header from './components/Header.js';
import Home from './components/Home.js';
import Map from './components/Map.js'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

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



      </Switch>
      </div>
    </Router>
  );
}

export default App;
