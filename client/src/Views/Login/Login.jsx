import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div
      className="h-screen w-screen flex justify-center items-center bg-white "
    >
      <div className="w-2/4 h-2/4 border-2 flex flex-col justify-evenly gap-5 items-center p-5 bg-slate-100">
        <div>

        <button
          className="bg-sky-400  text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300"
          onClick={() => loginWithRedirect()}
          >
          Login
        </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">

        <div className="text-center text-">
          <h2>You are not registered yet, please press the button</h2>
        </div>
        <Link to="/home/login/register">
          <button className="bg-sky-400 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300">
            Register
          </button>
        </Link>
        </div>

        <Link to="/dashboard">
          <button>Succesful login</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
