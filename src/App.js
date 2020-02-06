import React from 'react';
import './App.css';
import Login from './pages/login/Login';
import SignUp from './pages/login/SignUp';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import TenantHome from './pages/home/TenantHome';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}/>
          {/* <Route exact path="/" render = {() => <h2>home component comming soon</h2>}/> */}
          <Route exact path="/home" component={TenantHome}/>
          <Route exact default path="/login" component={Login}/>
          <Route exact path="/signup" component={SignUp}/>
          <Route exact path="/password-reset" render = {() => <h2>password-reset component comming soon</h2>}/>
          <Route  render = {() => <h2>404 component comming soon</h2>}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
