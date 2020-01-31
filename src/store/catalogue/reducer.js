const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "PRODUCTS_FETCHED": {
      // console.log("action.payload from developers/FETCHED", action.payload); // { count: 105, rows: [] }
      // console.log("state from developers/FETCHED", state); // array with 10 objects
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
