import React from 'react';import {
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home';
import SinglePlayer from './components/SinglePlayer';
import TwoPlayer from './components/TwoPlayer';

function App() {
  return (
    <>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/1P" component={SinglePlayer}/>
      <Route path="/2P" component={TwoPlayer}/>
    </Switch>
    </>
  );
}

export default App;
