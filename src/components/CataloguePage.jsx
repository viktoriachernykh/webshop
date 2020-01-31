import React, { Component } from "react";
import { connect } from "react-redux";
import { updateAfterAdding } from "../store/cart/actions";
import { updateAfterRemove } from "../store/cart/actions";
import { fetchProducts } from "../store/catalogue/actions";
import { fetchCategories } from "../store/categories/actions";
// import CategoriesList from "./CategoriesList";
import { Link } from "react-router-dom";

class CataloguePage extends Component {
  componentDidMount = () => {
    this.props.dispatch(fetchProducts);
    this.props.dispatch(fetchCategories);
  };

  addProduct = obj => {
    this.props.dispatch(updateAfterAdding(obj.id));
  };

  removeProduct = obj => {
    this.props.dispatch(updateAfterRemove(obj.id));
  };

  render() {
    return (
      <div>
        <p>Welcome to Catalogue Page!</p>
        {!this.props.products || !this.props.categories ? (
          <p>Loading products...</p>
        ) : (
          <div>
            Choose category:
            <br />
            {this.props.categories.map((cat, i) => (
              <Link key={cat.id} to={`/categories/${cat.id}/products`}>
                {cat.name}
                <br />
              </Link>
            ))}
            <p>We have {this.props.products.length} products!</p>
            <div className="productSection">
              {this.props.products.map(product => (
                <div className="productDiv" key={product.id}>
                  <h2>{product.name}</h2>
                  <img src={product.imageUrl} alt="Product" />
                  <p>
                    Price: {product.price}$
                    <button onClick={() => this.addProduct(product)}>
                      Add to cart
                    </button>
                    <button onClick={() => this.removeProduct(product)}>
                      Remove from cart
                    </button>
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("reduxState from CataloguePage", reduxState);
  return {
    categories: reduxState.categories,
    products: reduxState.catalogue,
    cart: reduxState.cart
  };
}

export default connect(mapStateToProps)(CataloguePage);
