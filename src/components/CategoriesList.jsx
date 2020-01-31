import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateAfterAdding } from "../store/cart/actions";
import { updateAfterRemove } from "../store/cart/actions";

class CategoriesList extends React.Component {
  render() {
    const catId = parseInt(this.props.match.params.id, 10);
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
            {this.props.categories.map(cat => (
              <Link key={cat.id} to={`/categories/${cat.id}/products`}>
                {cat.name}
                <br />
              </Link>
            ))}
            <div className="productSection">
              {filteredProducts
                ? filteredProducts.map(p => (
                    <div className="productDiv" key={p.id}>
                      <h2>{p.name}</h2>
                      <img src={p.imageUrl} alt="Product" />
                      <p>
                        Price: {p.price}$
                        <button
                          onClick={() =>
                            this.props.dispatch(updateAfterAdding(p.id))
                          }
                        >
                          Add to cart
                        </button>
                        <button
                          onClick={() =>
                            this.props.dispatch(updateAfterRemove(p.id))
                          }
                        >
                          Remove from cart
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
    products: reduxState.catalogue,
    cart: reduxState.cart
  };
}
export default connect(mapStateToProps)(CategoriesList);
