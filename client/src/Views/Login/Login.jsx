import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { useState } from "react";



const Login = () => {

const [login, setLogin] = useState({
  user: '',
  password: ''
})

const handlerChange = (event) => {
  const property = event.target.name;
  const value = event.target.value;

  setLogin({...login, [property]: value})
}

  return (
    <div>
      <label>User: </label>
      <input type='text'
      name='user'
      value={login.user}
      onChange={handlerChange}
      autoComplete='on'
      />

      <label>Password: </label>
      <input type='text'
      name='password'
      value={login.password}
      onChange={handlerChange}
      />

      <Link to="/home/login/register">
        <Button>Register</Button>
      </Link>
    </div>
  );
};

export default Login;

