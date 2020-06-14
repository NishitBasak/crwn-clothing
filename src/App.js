import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const TestRouter = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Test React Router</h1>
      <button onClick={() => props.history.push('./')}>Homepage</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={TestRouter} />
      </Switch>
    </div>
  );
}

export default App;
