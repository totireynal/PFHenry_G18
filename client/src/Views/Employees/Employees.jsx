import Button from "../../Components/Button";
import { Link } from "react-router-dom";
const Employees = () => {
  return (
    <Link to={`/employees/1`}>
      <Button>Employee</Button>
    </Link>
  );
}

export default Employees;