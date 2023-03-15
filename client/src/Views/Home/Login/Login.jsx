import { Link } from "react-router-dom";
import Register from "./Register";
import Button from "../../../Components/Button";

const Login = () => {
  return (
    <div>
      <Link to="home/login/resgister">
        <Button>
        <Register />

        </Button>
      </Link>
    </div>
  );
}

export default Login;