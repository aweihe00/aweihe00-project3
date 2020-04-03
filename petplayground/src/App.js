import React from "react";
import LoginPage from "./pages/LoginPage";
import CreateAccountPage from "./pages/CreateAccountPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar/sidebar";
import Header from "./components/Header/header";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container-fluid">
          <Header />
          <div className="row">
            <Sidebar />
            <div className="col-8">
              <Route exact path="/login" component={LoginPage} />
              <Route
                exact
                path="/createAccount"
                component={CreateAccountPage}
              />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;