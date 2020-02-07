import React, { useEffect } from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import ClassComponent from './classBaseComponent';
import FunctionalComponent from './functionalComponent';
import PreDefinedHook from './predefinedHooks';
import CustomHook from './customHooks';
import ContextApi from './contextApi';
import Home from './Home';
import { themes } from './components/context/theme';
import { ThemeContext } from './components/context';
function App() {
  const [theme, setTheme] = React.useState(themes.light);
  const toggleTheme = () => {
    setTheme(theme.bg === '#000000' ? themes.light : themes.dark);
  }
  return (
    <ThemeContext.Provider value={
      {
        theme,
        toggleTheme
      }
    }><Router>
        <Route path="/classBasedComponent" component={ClassComponent} />
        <Route path="/functionalComponent" component={FunctionalComponent} />
        <Route path="/predefinedHook" component={PreDefinedHook} />
        <Route path="/customHook" component={CustomHook} />
        <Route path="/contextApi" component={ContextApi} />
        <Route path="/" component={Home} />
      </Router></ThemeContext.Provider>
  );
}

export default App;
