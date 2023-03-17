import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./state/redux/store/store"
import "react-datetime/css/react-datetime.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>

        <App />
    </BrowserRouter>
    </Provider>
);


// domain
//dev-a5lp6h1utxb70h27.us.auth0.com

//clientID
//KzGcYaMK0yVq39wFL8WaAH8BjmQ7yqlj