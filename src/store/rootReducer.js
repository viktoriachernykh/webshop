import { combineReducers } from "redux";
import categories from "./categories/reducer";
import catalogue from "./catalogue/reducer";
import cart from "./cart/reducer";

export default combineReducers({
  categories,
  catalogue,
  cart
  // we can add more "slice" subreducers here later on...
});

// function havingFunReducer(state = "yes", action) {
//   switch (action.type) {
//     case "SET_HAVING_FUN": {
//       return action.payload;
//     }
//     default: {
//       return state;
//     }
//   }
// }
