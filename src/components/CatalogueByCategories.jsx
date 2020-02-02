import React from "react";
import { connect } from "react-redux";
import { updateAfterAdding } from "../store/cart/actions";
import { updateAfterRemove } from "../store/cart/actions";
import Products from "./Products";
import Categories from "./Categories";

class CatalogueByCategories extends React.Component {
  render() {
    const catId = parseInt(this.props.match.params.id, 10);
    const filteredProducts = this.props.products.filter(
      p => p.categoryId === catId && p
    );

    return (
      <div>
        <p>Welcome to Catalogue Page!</p>
        {!this.props.products || !this.props.categories ? (
          <p>Loading products...</p>
        ) : (
          <div>
            <Categories categories={this.props.categories} />
            <Products
              add={id => this.props.dispatch(updateAfterAdding(id))}
              remove={id => this.props.dispatch(updateAfterRemove(id))}
              products={filteredProducts}
            />
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    categories: reduxState.categories,
    products: reduxState.catalogue,
    cart: reduxState.cart
  };
}

export default connect(mapStateToProps)(CatalogueByCategories);
