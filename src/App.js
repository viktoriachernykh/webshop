import React from "react";
import { Switch, Route } from "react-router-dom"; // adding router
import CataloguePage from "./components/CataloguePage";
import CheckoutPage from "./components/CheckoutPage"; // for router
import Toolbar from "./components/Toolbar";
import PaymentPage from "./components/PaymentPage";
// import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route path="/catalogue" component={CataloguePage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/checkout" component={PaymentPage} />
          {/* <Route component={Homepage} /> */}
        </Switch>
      </div>
    );
  }
}
