import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { useEffect } from "react";
import { useCookies } from 'react-cookie';
import { useState } from 'react';



const Login = () => {
  const { loginWithRedirect,
          loginWithPopup,
          logout,
          isAuthenticated,
          getAccessTokenSilently
  } = useAuth0();

  const [cookies] = useCookies(['token']);
  const [name, setName] = useState('');

  useEffect(() => {
    if (cookies.token) {
      const { name } = JSON.parse(atob(cookies.token.split('.')[1]));
      setName(name);
    }
  }, [cookies.token]);

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/authorization",
      },
      authorizationParams: {
        prompt: "login",
      },
    });
  };


  return (
    <div className="m-auto mt-44 w-1/3 h-80 rounded flex flex-col items-center justify-center gap-6 shadow-slate-400 bg-slate-100 shadow">
      
      <h3> {isAuthenticated ? ` ${name} is Logged in` : "User is not logged in"} </h3>

      {/* <div>
        <p>Name: {name}</p>
      </div> */}
      
      <button
        className="bg-sky-400 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600"
        // onClick={() => loginWithRedirect()}
        onClick={handleLogin}
        >
        Login With Redirect
      </button>
      {/* <button
        className="bg-sky-700 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600"
        // onClick={() => loginWithPopup()}
        onClick={handleLogin}
      >
        Login With Popup
      </button> */}
      <button
        className="bg-sky-400 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600"
        onClick={() => logout()}
      >
        Logout
      </button>
      <div className="text-center text-">
        <h2>You are not registered yet, please press the button</h2>
      </div>
      <Link to="/home/login/register">
        <button className="bg-sky-400 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600">
          Register
        </button>
      </Link>

        <Link to="/dashboard">
          <button className="text-gray-200 hover:text-gray-600">Succesful login</button>
        </Link>
      </div>
    
  );
};

export default Login;
