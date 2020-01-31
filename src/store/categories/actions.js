import api from "../../api";

export function fetchCategories(id) {
  // console.log("id from fetchCategory", id);
  return (dispatch, getState) => {
    // instead of line 5
    api(`/categories/${id}/products`).then(data => {
      console.log("data", data);
      dispatch(categoriesFetched(data));
    });
  };
}

export function categoriesFetched(data) {
  return {
    type: "categories/FETCHED",
    payload: data
  };
}

// export function fetchCategories(dispatch, getState) {
//   // api.get("/categories").then(response => {
//   api("/categories").then(data => {
//     // console.log("DATA", categories);
//     dispatch(categoriesFetched(data));
//   });
// }
