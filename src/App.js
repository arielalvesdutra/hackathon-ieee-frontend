import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'

import './App.css';

function App() {
  return (

      <BrowserRouter>
        <Switch>
          <Route path="/" component={DashboardPage}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
