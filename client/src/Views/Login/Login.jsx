import { Link } from "react-router-dom";
import style from './Login.module.css';
import { useAuth0 } from '@auth0/auth0-react';



const Login = () => {


const { loginWithRedirect } = useAuth0();

  return (
    <div>
      <div className={style.container}>
        <button className={style.button}
        onClick={() => loginWithRedirect()}>
          Login
        </button>
        
        <div className={style.text}>
        <h2>You are not registered yet, please press the button</h2>      
        </div>
        <Link to="/home/login/register">
          <button className={style.button1}>Register</button>
        </Link>

        <Link to="/dashboard">
          <button >Succesful login</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
