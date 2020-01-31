import React from "react";
import { Link } from "react-router-dom";

const Product = props => {
  return (
    <div>
      <Link to={`/products/${props.product.id}`}>
        <h2>{props.product.name}</h2>
        <img src={props.product.imageUrl} />
      </Link>
      <p>Price: {props.product.price}</p>
    </div>
  );
};

export default Product;
