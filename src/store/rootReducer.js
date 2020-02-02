import { combineReducers } from "redux";
import categories from "./categories/reducer";
import catalogue from "./catalogue/reducer";
import cart from "./cart/reducer";

export default combineReducers({
  categories,
  catalogue,
  cart
});
