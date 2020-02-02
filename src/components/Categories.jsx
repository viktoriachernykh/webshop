import React from "react";
import { Link } from "react-router-dom";

const Categories = props => (
  <div>
    Choose category:
    <br />
    {props.categories.map((cat, i) => (
      <Link key={cat.id} to={`/categories/${cat.id}/products`}>
        {cat.name}
        <br />
      </Link>
    ))}
  </div>
);

export default Categories;
