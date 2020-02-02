import React from "react";

const Products = ({ products, add, remove }) => (
  <div>
    <p>We have {products.filter(p => !p.hidden).length} products!</p>
    <div className="productSection">
      {products
        .filter(p => !p.hidden)
        .map(product => (
          <div className="productDiv" key={product.id}>
            <h2>{product.name}</h2>
            <img src={product.imageUrl} alt="Product" />
            <p>
              Price: {product.price}$
              <button onClick={() => add(product.id)}>Add</button>
              <button onClick={() => remove(product.id)}>Remove</button>
            </p>
          </div>
        ))}
    </div>
  </div>
);

export default Products;
