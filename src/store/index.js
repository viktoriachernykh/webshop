import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./rootReducer";
import ReduxThunk from "redux-thunk"; // didn't have it from begining

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : x => x;

const enhancer = compose(applyMiddleware(ReduxThunk), devTools); // didn't have it from begining
const store = createStore(reducer, enhancer);

export default store;
