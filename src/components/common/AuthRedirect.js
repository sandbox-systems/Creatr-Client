import React from 'react';
import AuthContainer from '../../containers/AuthContainer';
import subscribe from "unstated-subscribe-hoc";
import { Redirect } from 'react-router-dom';

function AuthRedirect({authStore}) {
  if(authStore.state.loggedIn){
    switch (authStore.state.role) {
      case "admin":
        return <Redirect to="/admin"/>
        break;
      case "student":
        return <Redirect to="/portal"/>
        break;
      default:
        return null
        break;
    }
  }else{
    return <Redirect to="/"/>;
  }
  
  // return (
  //   <div>
  //     {role == 'admin' && <Redirect to="/admin"/>}
  //   </div>
  // )
}

export default subscribe(AuthRedirect, { authStore: AuthContainer });
