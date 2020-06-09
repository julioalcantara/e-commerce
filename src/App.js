import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePange from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact={true} path='/' component={HomePange} />
        <Route exact={true} path='/shop/hats' component={HatsPage} />
      </Switch>
     
    </div>
  );
}

export default App;
