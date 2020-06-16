import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

// const TestRouter = (props) => {
//   console.log(props);

//   return (
//     <div>
//       <h1>Test React Router</h1>
//       <button onClick={() => props.history.push('./')}>Homepage</button>
//     </div>
//   )
// }

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
