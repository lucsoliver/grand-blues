import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Anila from "./pages/fire/Anila";
import Mahira from "./pages/earth/Mahira";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/fire">Fire</Link>
          </li>
          <li>
            <Link to="/earth">Earth</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/fire">
            <Anila />
          </Route>
          <Route path="/earth">
            <Mahira />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Fire() {
  return (
    <div>
      <h2>Fire</h2>
    </div>
  );
}

function Earth() {
  return (
    <div>
      <h2>Earth</h2>
    </div>
  );
}
