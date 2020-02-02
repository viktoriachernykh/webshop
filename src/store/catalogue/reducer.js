const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "PRODUCTS_FETCHED": {
      return action.payload;
    }
    case "SEARCH": {
      const keyword = action.payload;
      // console.log("keyword from reducer", keyword); // keyword is here
      // console.log(state); // array with 20 objects
      const productsFound = state.map(product => {
        if (!product.name.toLowerCase().includes(keyword.toLowerCase())) {
          product.hidden = true;
        } else {
          product.hidden = false;
        }
        return product;
      });
      // console.log(productsFound); // the same array with 20 objects but with new property "hidden"
      return productsFound;
    }
    default: {
      return state;
    }
  }
}
