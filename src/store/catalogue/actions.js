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

// const initialState = {
//   cart: []
// };
// //action creator
// export function productsFetched(data) {
//   return {
//     type: "products/FETCHED",
//     payload: data
//   };
// }
// export function categoriesFetched(data) {
//   return {
//     type: "products/FETCHED_CATEGORIES",
//     payload: data
//   };
// }
// // console.log("action creator", developersFetched);
// //thunk action- a function returns another function
// export function fetchproducts(dispatch, getState) {
//   fetch("http://localhost:4000/products")
//     .then(resp => resp.json())
//     .then(data => {
//       console.log("fetch", data);
//       dispatch(productsFetched(data));
//     });
//   fetch("http://localhost:4000/categories")
//     .then(resp => resp.json())
//     .then(data => {
//       console.log("fetch", data);
//       dispatch(categoriesFetched(data));
//     });
//   // note: just `dispatch` here now
// }
