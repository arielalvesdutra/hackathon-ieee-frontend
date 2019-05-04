import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import DashboardPage from './pages/DashboardPage'
import AlarmCreationPage from './pages/AlarmCreationPage'
import NotFoundPage from './pages/NotFoundPage' 

import './App.css';

function App() {
  return (

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={DashboardPage}/>
          <Route path="/alarm-creation" component={AlarmCreationPage}/>
          <Route path="*" component={NotFoundPage}/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
