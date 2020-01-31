import api from "../../api";

export function categoriesFetched(data) {
  return {
    type: "categories/FETCHED",
    payload: data
  };
}

export function fetchCategories(dispatch, getState) {
  // console.log("id fetched", id);
  api("/categories").then(data => {
    // console.log("DATA", categories);
    dispatch(categoriesFetched(data));
  });
}
