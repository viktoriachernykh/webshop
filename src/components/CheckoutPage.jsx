import React, { Component } from "react";
import { connect } from "react-redux";
import { updateAfterAdding } from "../store/cart/actions";
import { updateAfterRemove } from "../store/cart/actions";

class CheckoutPage extends Component {
  render() {
    const productsInCart = this.props.cart.map(c => {
      const product = this.props.products.find(p => p.id === c.productId);
      const final = { ...c, ...product };
      return final;
    });

    return (
      <div>
        <p>Welcome to Checkout Page!</p>
        <p>Your cart includes:</p>
        {productsInCart.map(product => (
          <div key={product.id}>
            <h2>
              Product: {product.name}, price: {product.price}, quantity:
              <button
                onClick={() =>
                  this.props.dispatch(updateAfterRemove(product.id))
                }
              >
                -
              </button>
              {product.quantity}
              <button
                onClick={() =>
                  this.props.dispatch(updateAfterAdding(product.id))
                }
              >
                +
              </button>
              total: {product.price * product.quantity}$
            </h2>
          </div>
        ))}
        <h1>
          Total:{" "}
          {productsInCart.reduce(
            (acc, product) => acc + product.price * product.quantity,
            0
          )}
          $
        </h1>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    products: reduxState.catalogue,
    cart: reduxState.cart
  };
}

export default connect(mapStateToProps)(CheckoutPage);
