import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Calendar from "./Views/Calendar/Calendar";
import Dashboard from "./Views/Dashboard";
import Employees from "./Views/Employees";
import Employee from "./Views/Employees/Employee";
import Home from "./Views/Home";
import Login from "./Views/Login";
import Register from "./Views/Register";
import MyProfile from "./Views/MyProfile/MyProfile";
import Notifications from "./Views/Notifications/Notifications";
import Organization from "./Views/Organization";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  // const [user, setUser] = useState(null);
  const {pathname} = useLocation()
  const [user, setUser] = useState({
    name: "juan",
    role: ["admin"],
  });
  // const login = (user) => {
  //   setUser(user)
  // }

  return (
    <div className="App">
      {/* {(pathname === "/home" ||
        pathname === "/home/login" ||
        pathname === "/home/login/register") ? '' : <SideBar />} */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/login" element={<Login />} />
        <Route path="/home/login/register" element={<Register />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route
            element={
              <ProtectedRoute
                isAllowed={!!user && user.role.includes("admin")}
                redirectTo="/myprofile"
              />
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/employees/:employeeId" element={<Employee />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/notifications" element={<Notifications />} />
          </Route>
          <Route path="/myprofile" element={<MyProfile />} />
        </Route>
        <Route path="*" element={<h1>Ruta equivocada</h1>} />
      </Routes>
    </div>
  );
}

export default App;

//prueba de comentario 2
//comentario 3
