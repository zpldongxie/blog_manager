import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginUser from './layouts/Login';
import DefaultLayout from './layouts/Default'

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginUser} />
          <Route path="/" component={DefaultLayout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
