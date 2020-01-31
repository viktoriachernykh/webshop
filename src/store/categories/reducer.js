const initialState = [];
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "categories/FETCHED": {
      // console.log("action.payload", action.payload); // returns fetched categories
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
