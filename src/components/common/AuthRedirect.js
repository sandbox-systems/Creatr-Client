import React from 'react';
import AuthContainer from '../../containers/AuthContainer';
import subscribe from "unstated-subscribe-hoc";
import { Redirect } from 'react-router-dom';

function AuthRedirect({authStore}) {
// const role = localStorage.getItem('role')
  authStore.refresh();
  return (
    <div>
      {/* {role == 'admin' && <Redirect to="/admin"/>} */}
    </div>
  )
}

export default subscribe(AuthRedirect, { authStore: AuthContainer });
