import api from "../../api";

export function fetchProducts(dispatch, getState) {
  api("/products").then(data => {
    // console.log("fetchedProducts from actions.js", data);
    dispatch(productsFetched(data));
  });
}

export function productsFetched(data) {
  return {
    type: "PRODUCTS_FETCHED",
    payload: data
  };
}
