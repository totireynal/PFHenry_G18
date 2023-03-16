import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Views/Dashboard";
import Employees from "./Views/Employees";
import Employee from "./Views/Employees/Employee";
import Home from "./Views/Home";
import Login from "./Views/Home/Login";
import Payment from "./Views/Payment/Payment.jsx";
import Register from "./Views/Register/Register.jsx"


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/home/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/employees" element={<Employees />} />
      <Route path="/employees/:employeeId" element={<Employee />} />
      <Route path="*" element={<h1>Ruta equivocada</h1>} /> 
      </Routes>
    </div>
  );
}

export default App;

//prueba de comentario 2
//comentario 3
