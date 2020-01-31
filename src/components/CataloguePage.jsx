import React, { Component } from "react";
// import api from "../api";
import { connect } from "react-redux";
import { fetchProducts } from "../store/catalogue/actions";
import { updateProducts } from "../store/cart/actions";
// import CategoriesList from "./CategoriesList";
// import { Link } from "react-router-dom";
import { fetchCategories } from "../store/categories/actions";

// import Product from "./ProductPage"; // for ProductPage

class CataloguePage extends Component {
  componentDidMount = () => {
    // api("/products").then(data => console.log("My products!", data));
    this.props.dispatch(fetchProducts);
    this.props.dispatch(fetchCategories);
  };

  addProduct = obj => {
    // console.log("added!", obj); // {id: 3, categoryId: 4, name: "Product 3", imageUrl: "https://picsum.photos/400?image=277", inStock: false, …}
    // this.props.dispatch(updateProducts(obj));
    this.props.dispatch(updateProducts(obj.id)); // !!!!!
  };

  // onCategoryClick = id => {
  //   // const categoryId = parseInt(this.props.match.params.id, 10);
  //   console.log("id", id);
  //   console.log("products", this.props.products);
  //   const filteredProducts = this.props.products.filter(
  //     product => product.categoryId === id
  //   );
  //   // this.props.dispatch(fetchFilteredCategories);
  //   console.log("filteredProducts", filteredProducts);
  // };

  render() {
    // console.log("from render", this.props.products); // array with 20 objects
    return (
      <div>
        {/* {console.log("from return", this.props.products)} // // array with 20 objects */}
        <p>Welcome to Catalogue Page!</p>
        {!this.props.products ? (
          <p>Loading products...</p>
        ) : (
          <div>
            categories
            {/* {this.props.categories.map((cat, i) => (
              <CategoriesList category={cat} key={i} />
              // <Link key={cat.id} to={`/categories/${cat.id}/products`}>
              //   {cat.name}
              //   <br />
              // </Link>
            ))} */}
            {/* filteredProducts.map(prod => (
              <Card className="product-card" key={prod.id}>
                {prod.name}
              </Card>
            )) */}
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
                // {this.props.products.map((everyProduct, index) => ( // for ProductPage
                // <Product product={everyProduct} key={index} /> // for ProductPage
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  console.log("redux state?", reduxState); // {catalogue: Array(20), cart: Array(0)}
  return {
    categories: reduxState.categories,
    products: reduxState.catalogue,
    cart: reduxState.cart
  };
}

export default connect(mapStateToProps)(CataloguePage);
