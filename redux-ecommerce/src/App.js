import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Auth from "./components/Auth/Auth";
import Layout from "./components/Layout/Layout";
import { fetchData } from "./store/cartAction";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    const sendRequest = async () => {
      const res = await fetch(
        "https://redux-ecom-http-default-rtdb.firebaseio.com/cartItems.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      const data = await res.json();
      console.log(data);
    };
    sendRequest();
  }, [cart]);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      {!isLoggedIn && <Auth />}
      {isLoggedIn && <Layout />}
    </div>
  );
}

export default App;
