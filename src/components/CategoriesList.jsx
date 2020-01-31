import React from "react";
// import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { fetchCategories } from "../store/categories/actions";

// class CategoriesList extends React.Component {
// componentDidMount() {
//   this.props.dispatch(fetchCategories);
// }

// onCategoryClick = id => {
//   // const categoryId = parseInt(this.props.match.params.id, 10);
//   console.log("category id", id);
//   const filteredProducts = this.props.products.filter(
//     product => product.categoryId === id
//   );
//   // this.props.dispatch(fetchFilteredCategories);
//   console.log("filteredProducts from this category", filteredProducts);
// };
const CategoriesList = props => {
  return (
    <div>
      CATEGORIES
      <Link to={`/categories/${props.cat.id}/products`}>
        {props.cat.name}
        <br />
      </Link>
    </div>
  );
};

// function mapStateToProps(reduxState) {
//   return {
//     categories: reduxState.categories,
//     products: reduxState.catalogue
//   };
// }
export default CategoriesList;
// connect(mapStateToProps)(CategoriesList);
