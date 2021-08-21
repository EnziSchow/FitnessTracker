import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navbar,
  Home,
  Register,
  Login,
  Routines,
  Activities,
  UsersRoutines,
} from "./components";
import { getRoutines, getActivities } from "./api";
import { getCurrentUser } from "./auth";
import CreateRoutines from "./components/CreateRoutines";

const App = () => {
  const [user, setUser] = useState(getCurrentUser);
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getRoutines()
      .then((routines) => {
        setRoutines(routines);
      })
      .catch((error) => {
        throw (error, "Big ol' error");
      }, []);

    getActivities()
      .then((activities) => {
        setActivities(activities);
      })
      .catch((error) => {
        throw (error, "Big ol' error");
      }, []);
  }, []);

  return (
    <div className="app">
      <Router>
        <Navbar setUser={setUser} user={user} />
        <Switch>
          <Route path="/" exact component={Home} />
          {!user && (
            <Route path="/login">
              <Login setUser={setUser} />
            </Route>
          )}
          {!user && (
            <Route path="/register">
              <Register setUser={setUser} />
            </Route>
          )}
          <Route path="/createroutines">
            <CreateRoutines user={user} />
          </Route>
          <Route path="/usersroutines">
            <UsersRoutines user={user} routines={routines} />
          </Route>
          <Route path="/routines">
            <Routines routines={routines} />
          </Route>
          <Route path="/activities">
            <Activities user={user} activities={activities} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
