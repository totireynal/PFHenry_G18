import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import style from "./Login.module.css";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <div className={style.container}>
        <button
          className="m2-2 p-3 bg-sky-700 text-white"
          onClick={() => loginWithRedirect()}
        >
          Login
        </button>

        <div className={style.text}>
          <h2>You are not registered yet, please press the button</h2>
        </div>
        <Link to="/home/login/register">
          <button className="m2-2 p-3 bg-sky-700 text-white">Register</button>
        </Link>

        <Link to="/dashboard">
          <button>Succesful login</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
