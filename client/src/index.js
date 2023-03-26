import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./state/redux/store/store"
import { CookiesProvider } from "react-cookie";

import { Auth0Provider } from '@auth0/auth0-react'

const domain = 'https://dev-zb5ab7mg5ollsy01.us.auth0.com';
const clientId = 'yEXJ9J7A6wYtioS9Y8E1p535jZnzxmYR';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <CookiesProvider>
      <BrowserRouter>
        <Auth0Provider 
          domain={domain} 
          clientId={clientId} 
          authorizationParams={{
            redirect_uri: "http://localhost:3000/authorization",
            //poner la ruta del callback de Auth0
            audience: 'staffsphere identifier',
            scope: 'openid profile email'
          }}
        >
            <App />
        </Auth0Provider>
      </BrowserRouter>
    </CookiesProvider>
  </Provider>
);


// domain
//dev-a5lp6h1utxb70h27.us.auth0.com

//clientID
//KzGcYaMK0yVq39wFL8WaAH8BjmQ7yqlj