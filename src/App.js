import { React, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Aos from "aos";
import "aos/dist/aos.css";
//importing pages
//import LandingPage from "./Pages/landing";
//import HomePage from "./Pages/home";
//import MyOffersPage from "./Pages/myoffers";
//import ProductPage from "./Pages/product";
import NotFound from "./Pages/404";
import LoginPage from "./Pages/Login";
import LandingPage from "./Pages/Landing";
import Map from "./Pages/Map";
//import AccountPage from "./Pages/account";
import NewMap from "./Pages/NewMap"
import Admin from "./Pages/Admin";
import AdminPage from "./Pages/adminPage";
//import AdminPage from "./Pages/adminppp";

function App() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/map">
          <Map />
        </Route>

        <Route exact path="/newmap">
          <NewMap />
        </Route>
        <Route exact path="/admin">
          <Admin />
        </Route>
        <Route exact path="/adminpage">
          <AdminPage />
        </Route>
       
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
