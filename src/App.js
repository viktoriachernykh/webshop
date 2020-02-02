import React from "react";
import { Switch, Route } from "react-router-dom";
import Catalogue from "./components/Catalogue";
// import PaymentPage from "./components/PaymentPage";
import CheckoutPage from "./components/CheckoutPage";
import Toolbar from "./components/Toolbar";
import CatalogueByCategories from "./components/CatalogueByCategories";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <Switch>
          <Route path="/checkout" component={CheckoutPage} />
          {/* <Route path="/checkout" component={CheckoutPage} /> */}
          <Route
            path="/categories/:id/products"
            component={CatalogueByCategories}
          />
          {/* <Route path="/a" component={AnotherPage} /> */}
          <Route component={Catalogue} />
        </Switch>
      </div>
    );
  }
}
