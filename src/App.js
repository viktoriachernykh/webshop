import React from "react";
import { Switch, Route } from "react-router-dom";
import CataloguePage from "./components/CataloguePage";
// import PaymentPage from "./components/PaymentPage";
import CheckoutPage from "./components/CheckoutPage";
import Toolbar from "./components/Toolbar";
import CategoriesList from "./components/CategoriesList";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/categories/:id/products" component={CategoriesList} />
          {/* <Route path="/a" component={AnotherPage} /> */}
          <Route component={CataloguePage} />
        </Switch>
      </div>
    );
  }
}
