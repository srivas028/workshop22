import { cartActions } from "./cartSlice";

export const fetchData = () => {
  return async () => {
    const fetchHandler = async () => {
      const res = await fetch(
        "https://redux-ecom-http-default-rtdb.firebaseio.com/cartItems.json"
      );
      const data = await res.json();
      return data;
    };
    try {
      const cartData = await fetchHandler();
      console.log(cartData);
    } catch (err) {
      console.log(err);
    }
  };
};

// export const sendCartData = (cart) => {
//   return async () => {
//     const sendRequest = async () => {
//       // Send state as Sending request

//       const res = await fetch(
//         "https://redux-http-bc782-default-rtdb.firebaseio.com/cartItems.json",
//         {
//           method: "PUT",
//           body: JSON.stringify(cart),
//         }
//       );
//       const data = await res.json();
//       // Send state as Request is successful
//     };
//     try {
//       await sendRequest();
//     } catch (err) {
//       alert(err.message);
//     }
//   };
// };
