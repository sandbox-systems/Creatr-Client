import React, { Component } from 'react';
import "./styles/App.css";
import { Route } from 'react-router-dom'
import Admin from './components/admin/index'
import User from './components/user/index'
import Home from './components/home/index'
import AuthRedirect from './components/common/AuthRedirect'

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
