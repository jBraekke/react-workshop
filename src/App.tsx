import React, { useState } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import NoMatch from './NoMatch';
import Loan from './pages/Loan/Loan';
import Home from './pages/Home/Home';
import Account from './pages/Account/Account';

const App: React.FC = () => {

  const [loan, setLoan] = useState("0");

  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <ul data-testid="menu">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/loan">Loan</Link>
              </li>
              <li>
                <Link to="/account">Account</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="App-content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route
              path="/loan"
              render={(props) => <Loan {...props} setLoan={(cash) => setLoan(cash)} />}
            />
            <Route path="/account">
              <Account loan={loan} />
            </Route>
            <Route component={NoMatch} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
