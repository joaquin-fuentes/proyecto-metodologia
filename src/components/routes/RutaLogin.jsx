import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from "../views/Administrador/Login";


function RutaLogin() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}
export default RutaLogin;