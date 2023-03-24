import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { useEffect } from "react";

const Login = () => {
  const { loginWithRedirect,
          loginWithPopup,
          logout,
          getAccessTokenSilently
  } = useAuth0();

  const callProtectedApi = async () => {
    try {        
        const token = await getAccessTokenSilently();
        console.log(token)
        const response = await axios.get("http://localhost:3001/protected", {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        console.log(response.data.email);
    } catch (error) {
        console.log(error.message);
    }
  }

  useEffect(() => {
    return callProtectedApi();
  },[])


  return (
    <div className="m-auto mt-44 w-1/3 h-80 rounded flex flex-col items-center justify-center gap-6 shadow-slate-400 bg-slate-100 shadow">
      <button
        className="bg-sky-700 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600"
        onClick={() => loginWithRedirect()}
      >
        Login With Redirect
      </button>
      <button
        className="bg-sky-700 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600"
        onClick={() => loginWithPopup()}
      >
        Login With Popup
      </button>
      <button
        className="bg-sky-700 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600"
        onClick={() => logout()}
      >
        Logout
      </button>
      <div className="text-center text-">
        <h2>You are not registered yet, please press the button</h2>
      </div>
      <Link to="/home/login/register">
        <button className="bg-sky-700 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600">
          Register
        </button>
      </Link>

      <Link to="/dashboard">
        <button>Succesful login</button>
      </Link>
    </div>
  );
};

export default Login;
