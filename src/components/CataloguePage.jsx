import React, { Component } from "react";
import { connect } from "react-redux";
import { updateProducts } from "../store/cart/actions";
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
    this.props.dispatch(updateProducts(obj.id));
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
              {this.props.products.map(everyProduct => (
                <div className="productDiv" key={everyProduct.id}>
                  <h2>{everyProduct.name}</h2>
                  <img src={everyProduct.imageUrl} alt="Product" />
                  <p>
                    Price: {everyProduct.price}$
                    <button onClick={() => this.addProduct(everyProduct)}>
                      Add to cart
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
  console.log("reduxState from CataloguePage", reduxState);
  return {
    categories: reduxState.categories,
    products: reduxState.catalogue,
    cart: reduxState.cart
  };
}

export default connect(mapStateToProps)(CataloguePage);
