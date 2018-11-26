import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom'
import Admin from './Admin'
import User from './User'
import Home from './Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home}/>
        <Route path='/admin' component={Admin}/>
        <Route path='/user' component={User}/>
      </div>
    );
  }
}

export default App;
