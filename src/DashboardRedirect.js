import React from 'react';
import { Redirect } from 'react-router-dom';
function DashboardRedirect() {
const role = localStorage.getItem('role')
  return (
    <div>
      {role == 'admin' && <Redirect to="/admin"/>}
    </div>
  )
}

export default DashboardRedirect
