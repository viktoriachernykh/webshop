import React, { Component } from "react";
import { connect } from "react-redux";
// import { fetchAddedProducts } from "../store/cart/actions";

class CheckoutPage extends Component {
  // componentDidMount = () => {
  //   // console.log();
  //   // console.log("componentDidMount"); // worked
  //   this.props.dispatch(fetchAddedProducts);
  // };

  render() {
    // console.log(
    //   "this.props from CheckoutPage render",
    //   this.props
    //   // this.props.cart.map(p => p.productId) // {history: {…}, , , products: Array(20), cart: Array(2)}
    // );
    const productsInCart = this.props.cart.map(c => {
      // console.log(c) // added objects with productId
      const product = this.props.products.find(p => p.id === c.productId);
      const final = { ...c, ...product };
      // console.log("product", product);
      // console.log("c + p", final);
      return final;
    });

    return (
      <div>
        <p>Welcome to Checkout Page!</p>
        <p>Your cart includes:</p>
        {productsInCart.map(c => (
          // console.log(c)
          <div key={c.id}>
            <h2>
              Product: {c.name}, price: {c.price}, quantity: {c.quantity},
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
//   {this.props.cart.map(c => (
//         <div key={c.productId}>
//           <h2>
//             Product: {c.name}, price: {c.price}, quantity: {c.quantity},
//             total: {c.price * c.quantity}$
//           </h2>
//         </div>
//       ))}
//   <h1>
//         Total:{" "}
//         {this.props.cart.reduce((acc, c) => acc + c.price * c.quantity, 0)}$
//       </h1>
// {this.props.cart.reduce((acc, c) => acc + c.quantity, 0)}

function mapStateToProps(reduxState) {
  // console.log("reduxState from CheckoutPage", reduxState); // {catalogue: Array(20), cart: Array(2)}
  return {
    products: reduxState.catalogue,
    cart: reduxState.cart
  };
}

export default connect(mapStateToProps)(CheckoutPage);
