import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Main from "./components/Main/Main";
import Login from "./components/Login/Login";
import ProtectedRoute from "./components/hoc/ProtectedRoute/ProtectedRoute";
import NotFound from "./components/NotFound/NotFound";
import "./styles/styles.css";

class App extends React.PureComponent {
  state = {
    user: {
      username: "admin",
      password: "111",
      isAuth: false
    }
  };

  handleButtonClick = () => {
    const { user } = this.state;
    if (user.username === "admin" && user.password === "111") {
      this.setState(prevState => ({
        ...prevState,
        user: {
          ...prevState.user,
          isAuth: true
        }
      }));
    }
  };

  render() {
    const { user } = this.state;

    return (
      <Router>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/main" />} />
          <ProtectedRoute
            path="/main"
            exact
            isAuth={user.isAuth}
            component={Main}
          />
          <Route
            path="/login"
            exact
            render={() =>
              user.isAuth ? (
                <Redirect to="/" />
              ) : (
                <Login
                  username={user.username}
                  onButtonClick={this.handleButtonClick}
                  password={user.password}
                />
              )
            }
          />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
