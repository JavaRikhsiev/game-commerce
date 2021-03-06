//import { Switch } from "@mui/material";
import React, { useEffect } from "react";
//import { Route, Router } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import NFTHome from "./NFTHome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Orders from "./Orders";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Footer from "./Footer";

const promise = loadStripe(
  "pk_test_51KkTC1FPcJsZJgiKEliFd9I2ZZYuj1qRHU7hoObxfDhWgGmCp7VGtsGmgmkXjmRTTqFLvKlFA1AM4BnQmuwUGYNp00Dhb9VG3Z"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/Checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/nft">
            <Header />
            <NFTHome />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
