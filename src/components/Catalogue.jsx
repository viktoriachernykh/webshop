import React, { Component } from "react";
import { connect } from "react-redux";
import { updateAfterAdding } from "../store/cart/actions";
import { updateAfterRemove } from "../store/cart/actions";
import { fetchProducts } from "../store/catalogue/actions";
import { fetchCategories } from "../store/categories/actions";
// import CategoriesList from "./CategoriesList";
import Products from "./Products";
import Categories from "./Categories";

class Catalogue extends Component {
  componentDidMount = () => {
    this.props.dispatch(fetchProducts);
    this.props.dispatch(fetchCategories);
  };

  addProduct = id => {
    this.props.dispatch(updateAfterAdding(id));
  };

  removeProduct = id => {
    this.props.dispatch(updateAfterRemove(id));
  };

  render() {
    return (
      <div>
        <p>Welcome to Catalogue Page!</p>
        {!this.props.products || !this.props.categories ? (
          <p>Loading products...</p>
        ) : (
          <div>
            <Categories categories={this.props.categories} />
            <Products
              add={this.addProduct}
              remove={this.removeProduct}
              products={this.props.products}
            />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("reduxState from Catalogue", reduxState);
  return {
    categories: reduxState.categories,
    products: reduxState.catalogue,
    cart: reduxState.cart
  };
}

export default connect(mapStateToProps)(Catalogue);
