import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Toolbar extends Component {
  render() {
    return (
      <div className="toolbarNav">
        <Link to={"/"}>Go to Catalogue</Link>
        {/* <p>Total Items: {this.props.cart.length}</p> */}
        {/* {console.log(this.props.cart.reduce((acc, c) => acc + c.quantity, 0))} */}
        <Link to={"/checkout"}>
          Go to Your Cart: items:{" "}
          {this.props.cart.reduce((acc, c) => acc + c.quantity, 0)} sum: $
          {this.props.cart
            .map(c => {
              const product = this.props.products.find(
                p => p.id === c.productId
              );
              return { ...c, ...product };
            })
            .reduce((acc, c) => acc + c.price * c.quantity, 0)}
          {/* {this.props.cart.reduce((acc, c) => acc + c.price * c.quantity, 0)}$ */}
        </Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("reduxState from Toolbar", reduxState); // {catalogue: Array(20), cart: Array(3)} - cart gets renewed
  return {
    products: reduxState.catalogue,
    cart: reduxState.cart
  };
}

export default connect(mapStateToProps)(Toolbar);
