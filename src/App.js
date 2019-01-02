import React, { Component } from 'react';
import "./styles/App.css";
import { Route } from 'react-router-dom'
import PrivateRoute from './components/common/PrivateRoute'
import Admin from './components/admin/index'
import User from './components/user/index'
import Home from './components/home/index'
import Student from './components/student/index'

import AuthRedirect from './components/common/AuthRedirect'

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <AuthRedirect/> */}
        <Route exact path='/' component={Home}/>
        <PrivateRoute path='/admin' component={Admin} role="admin"/>
        <PrivateRoute path='/portal' component={Student} role="student"/>
      </div>
    );
  }
}

export default App;
