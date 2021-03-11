import React from 'react';
import {
  Switch, BrowserRouter as Router, Route, Redirect,
} from 'react-router-dom';

// import PrivateRoute from './components/core/PrivateRoute';
import Wallet from './pages/Wallet';
// import Login from './pages/Login';

export default function App() {
  // const isAuth = useSelector(state => state.app.isAuth);

  return (
    <Router>
      <Switch>
        {/* <Route path="/" exact component={Login} />
        <Route path="/wallet" exact component={Wallet} /> */}

        <Route path="/" exact component={Wallet} />

        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}
