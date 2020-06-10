import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePange from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './componets/header/header.component';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact={true} path='/' component={HomePange} />
        <Route exact={true} path='/shop' component={ShopPage} />
      </Switch>
     
    </div>
  );
}

export default App;
