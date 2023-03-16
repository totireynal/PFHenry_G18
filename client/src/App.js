import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Views/Dashboard";
import Employees from "./Views/Employees";
import Employee from "./Views/Employees/Employee";
import Home from "./Views/Home";
import Login from "./Views/Home/Login";
<<<<<<< HEAD
// import Register from "./Components/Register/Register.jsx"
=======
import Register from "./Components/Register/Register.jsx"
import Payment from "./Components/Payment/Payment.jsx"
>>>>>>> 7050622 (Armado del componente Payment)

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      {/* <Register></Register> */}
      <Routes>
=======
      <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/home/login" element={<Login />} />
    </Routes>

      {/* <Register></Register> */}
      {/* <Routes>
>>>>>>> 7050622 (Armado del componente Payment)
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/login" element={<Login />} />
        {/* <Route path="/home/login/register" element={<Register />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employees/:employeeId" element={<Employee />} />
        <Route path="*" element={<h1>Ruta equivocada</h1>} /> 
<<<<<<< HEAD
      </Routes>
=======
      </Routes>  */}
>>>>>>> 7050622 (Armado del componente Payment)
    </div>
  );
}

export default App;

//prueba de comentario 2
//comentario 3
