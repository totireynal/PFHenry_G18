import { Route, Routes } from "react-router-dom";
import "./App.css";
// import SideBar from "./Components/SideBar/SideBar";
import Dashboard from "./Views/Dashboard";
import Employees from "./Views/Employees";
// import Employee from "./Views/Employees/Employee";
import EmployeeDetail from "./Views/Employees/EmployeeDetail/EmployeeDetail";
import EmployeeDetail from "./Views/EmployeeDetail/EmployeeDetail";
import Home from "./Views/Home";
import Login from "./Views/Home/Login";
// import Register from "./Components/Register/Register.jsx"
import Register from "./Components/Register/Register.jsx";
import Payment from "./Components/Payment/Payment.jsx";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/login" element={<Login />} />
        {/* <Route path="/home/login/register" element={<Register />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employee/:id" element={<EmployeeDetail />} />
        {/* <Route path="/employees/:employeeId" element={<Employee />} /> */}
        <Route path="*" element={<h1>Ruta equivocada</h1>} />
      </Routes>
    </div>
  );
}

export default App;
