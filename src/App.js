import React, { Component} from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePange from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './componets/header/header.component';
import SigninAndSignupPage from './pages/signin-singup/signin-signup.component';
import { auth } from './firebase/firebase.utils';


class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact={true} path='/' component={HomePange} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SigninAndSignupPage} />
        </Switch>
       
      </div>
    );
  }
  
}

export default App;
