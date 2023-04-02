import AreaFormFirstEmployee from "../Employees/AddFirstEmployee/AreaFormFirstEmployee";
import PositionFormFirstEmployee from "../Employees/AddFirstEmployee/PositionFormFirstEmployee";
import { Link } from "react-router-dom";





const AreaPositionFirstEmployee = () => {

return (
    <>
    <AreaFormFirstEmployee/>
    <PositionFormFirstEmployee/>
    <button>
      <Link to="/addFirstEmployee" className="my-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Registre a su administrador
      </Link>
    </button>
    </>
  );
};


export default AreaPositionFirstEmployee;