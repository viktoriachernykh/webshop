// export function updateProducts(obj) {
//   // console.log(obj);
//   // id: 2
//   // categoryId: 1
//   // name: "Product 2"
//   // imageUrl: "https://picsum.photos/400?image=230"
//   // inStock: false
//   // price: "2374"

//   return {
//     type: "ADD_TO_CART",
//     payload: obj
//   };
// }

// !!!!!
export function updateProducts(productId) {
  return {
    type: "ADD_TO_CART",
    payload: productId
  };
}