import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CategoriesList extends React.Component {
  render() {
    const catId = parseInt(this.props.match.params.id, 10);
    console.log("catId", catId);
    console.log("this.props.products from CategoriesList", this.props.products);

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
            Choose category:
            <br />
            {this.props.categories.map((cat, i) => (
              <Link key={cat.id} to={`/categories/${cat.id}/products`}>
                {cat.name}
                <br />
              </Link>
            ))}
            {/* <p>We have {this.props.products.length} products!</p> */}
            <div className="productSection">
              {filteredProducts
                ? filteredProducts.map(p => (
                    <div className="productDiv" key={p.id}>
                      <h2>{p.name}</h2>
                      <img src={p.imageUrl} alt="Product" />
                      <p>
                        Price: {p.price}$
                        <button onClick={() => this.addProduct(p)}>
                          Add to cart
                        </button>
                      </p>
                    </div>
                  ))
                : console.log("doesn't work")}
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    categories: reduxState.categories,
    products: reduxState.catalogue
  };
}
export default connect(mapStateToProps)(CategoriesList);
