const initialState = [];
// !!!!!
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const newProductId = action.payload;
      const isInCart = state.find(el => el.productId === newProductId);
      if (!isInCart) {
        return [...state, { productId: newProductId, quantity: 1 }];
      } else {
        const updatedCart = state.map(el =>
          el.productId === newProductId
            ? { ...el, quantity: el.quantity + 1 }
            : el
        );
        return updatedCart;
      }
    }
    default: {
      return state;
    }
  }
}

// export default function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "ADD_TO_CART": {
//       console.log("action.payload from reducer", action.payload); // obj === action.playload
//       const newProductId = action.payload;
//       const isInCart = state.find(el => el.productId === newProductId.id);
//       // console.log("SHOULD BE SOMETHING", isInCart);
//       if (!isInCart) {
//         return [
//           ...state,
//           {
//             productId: newProductId.id,
//             name: newProductId.name,
//             price: newProductId.price,
//             quantity: 1
//           }
//         ];
//       } else {
//         const updatedCart = state.map(el =>
//           el.productId === newProductId.id
//             ? { ...el, quantity: el.quantity + 1 }
//             : el
//         );
//         return updatedCart;
//       }
//     }
//     default: {
//       return state;
//     }
//   }
// }
