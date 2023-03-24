import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./state/redux/store/store"

import { Auth0Provider } from '@auth0/auth0-react'

const domain = 'dev-a5lp6h1utxb70h27.us.auth0.com';
const clientId = 'KzGcYaMK0yVq39wFL8WaAH8BjmQ7yqlj';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Auth0Provider 
        domain={domain} 
        clientId={clientId} 
        authorizationParams={{
          redirectUri: window.location.origin,
          //poner la ruta del callback de Auth0
          audience: 'staffsphere identifier',
          scope: 'openid profile email'
        }}
      >
          <App />
      </Auth0Provider>
    </BrowserRouter>
    </Provider>
);


// domain
//dev-a5lp6h1utxb70h27.us.auth0.com

//clientID
//KzGcYaMK0yVq39wFL8WaAH8BjmQ7yqlj