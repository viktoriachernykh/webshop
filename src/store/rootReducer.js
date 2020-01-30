import { combineReducers } from "redux";

import catalogue from "./catalogue/reducer";
// import post from "./post/reducer";

export default combineReducers({
  catalogue
  // post
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
