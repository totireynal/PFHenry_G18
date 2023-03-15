import { Link } from "react-router-dom";
import Button from "../../../Components/Button";

const Login = () => {
  return (
    <div>
      <Link to="/home/login/register">
        <Button>Register</Button>
      </Link>
    </div>
  );
};

export default Login;
