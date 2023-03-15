import { Link } from "react-router-dom";
import Button from "../../Components/Button";

const Home = () => {
  return (
    <div className="">
      <Link to={'/home/login'}>
      <Button>Login</Button>
      </Link>
    </div>
    
  )
}


export default Home;