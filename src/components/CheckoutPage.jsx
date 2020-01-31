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
        {productsInCart.map(c => (
          // console.log(c)
          // if (c.quantity > 0)
          <div key={c.id}>
            <h2>
              Product: {c.name}, price: {c.price}, quantity:
              <button
                onClick={() => this.props.dispatch(updateAfterRemove(c.id))}
              >
                -
              </button>
              {c.quantity}
              <button
                onClick={() => this.props.dispatch(updateAfterAdding(c.id))}
              >
                +
              </button>
              total: {c.price * c.quantity}$
            </h2>
          </div>
        ))}
        <h1>
          Total:{" "}
          {productsInCart.reduce((acc, c) => acc + c.price * c.quantity, 0)}$
        </h1>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("reduxState from CheckoutPage", reduxState); // {catalogue: Array(20), cart: Array(2)}
  return {
    products: reduxState.catalogue,
    cart: reduxState.cart
  };
}

export default connect(mapStateToProps)(CheckoutPage);
