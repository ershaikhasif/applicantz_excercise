import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from "./scenes/home"
import IntroPage from "./scenes/intro"
import GuidePage from "./scenes/guide"
import ReferencePage from "./scenes/reference"
const  App=() =>{
  return (
      <Router>
         <Switch>
           
            <Route exact path="/developer/documentation" component={ HomePage } />
            <Route exact path="/developer/en/api/dummy1/intro" component={ IntroPage } />
            <Route exact path="/developer/en/api/dummy1/guide" component={ GuidePage } />
            <Route exact path="/developer/en/api/dummy1/reference" component={ ReferencePage } />
            <Route exact path="/" component={ HomePage } />
         </Switch>
      </Router>
   
 
  );
}

export default App;
