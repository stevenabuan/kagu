import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripe.utils";

import App from "./App";
// import { CartProvider } from "./contexts/cart.context";
import { store } from "./store/store";

import "./index.scss";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <CartProvider> */}
        <Elements stripe={stripePromise}>
          <App />
        </Elements>
        {/* </CartProvider> */}
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
