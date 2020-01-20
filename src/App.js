import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import ClassComponent from './classBaseComponent';
import FunctionalComponent from './functionalComponent';
import PreDefinedHook from './predefinedHooks';
import CustomHook from './customHooks';
import ContextApi from './contextApi';
import Home from './Home';
function App() {
  return (
    <Router>
      <Route path="/classBasedComponent" component={ClassComponent} />
      <Route path="/functionalComponent" component={FunctionalComponent} />
      <Route path="/predefinedHook" component={PreDefinedHook} />
      <Route path="/customHook" component={CustomHook} />
      <Route path="/contextApi" component={ContextApi} />
      <Route path="/" component={Home} />
    </Router>
  );
}

export default App;
