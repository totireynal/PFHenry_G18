import { useEffect, useRef, useState } from "react";
import { Route, Routes, useLocation, } from "react-router-dom";
import Calendar from "./Views/Calendar/Calendar";
import Dashboard from "./Views/Dashboard";
import Employees from "./Views/Employees";
// import Employee from "./Views/Employees/Employee";
import EmployeeDetail from "./Views/EmployeeDetail/EmployeeDetail";
import Home from "./Views/Home";
import Login from "./Views/Login";
// import Register from "./Components/Register/Register.jsx"
import Register from "./Views/Register";
import MyProfile from "./Views/MyProfile/MyProfile";
// import EditMyProfile from "./Views/MyProfile/EditMyProfile";
import Notifications from "./Views/Notifications/Notifications";
import Organization from "./Views/Organization";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import SideBar from "./Components/SideBar/SideBar";
import Payment from "./Views/Payment/Payment";
import AddEmployee from "./Views/Employees/AddEmployee/AddEmployee";
import AddFisrtEmployee from "./Views/Employees/AddFirstEmployee/AddFirstEmployee"
import EditEmployee from "./Views/EmployeeDetail/EditEmployee/EditEmployee";
import Authorization from "./Views/Authorization/Authorization";
import Authorizationone from "./Views/Authorization/Authorization1";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentEmployee } from './state/redux/actions/actions'
import { Squash as Hamburger } from "hamburger-react";
import Calendar2 from "./Views/Calendar2/Calendar2";
import Form from "./Components/Form/Form"

import { useCookies } from 'react-cookie';


function App() {
  const [isOpen, setOpen] = useState(true);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  
  // const [cookies] = useCookies(['token']);
  // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   if (cookies.token) {
  //     const userData = JSON.parse(atob(cookies.token.split('.')[1]));
  //     setUser(userData);
  //     console.log(userData);
  //   }
  // }, [cookies.token]);
  
  // const [user, setUser] = useState({});

  const user = useSelector(state => state.currentEmployee)

  // if (Object.keys(user).length === 0) {
  //   setUser({id: 1});
  // } else {
  //   setUser(userCookies)
  // }



  console.log(user);

  const refSideBar = useRef()
  
  // useEffect(() => {
  //   dispatch(getCurrentEmployee(user.id));
  // }, []);

  // const [user, setUser] = useState({
  //   id:3,
  //   name: "Juan",
  //   role: "admin",
  // });
  // const login = (user) => {
  //     setUser(user)
  //   }
  
  const fn = () => {
    
    if (isOpen) {
      refSideBar.current.style.transform = 'translateX(-100%)'
    } else {
      refSideBar.current.style.transform = "translateX(0)";
      
    }
      
  
  }
  // console.log(isOpen);



  return (
    <div className="flex bg-slate-100">
      <div
        onClick={fn}
        className=" ssm:fixed sm:hidden  ssm:left-4 ssm:top-1 z-20 "
      >
        {/* <button onClick={e => setOpen(true)}>aca</button> */}
        <Hamburger
          toggled={isOpen}
          toggle={() => setOpen(!isOpen)}
          color="#0369a1"
        />
      </div>
      <div
        ref={refSideBar}
        className=" ssm:m-0 z-10 fixed transition-all duration-200 sm:translate-x-0 ssm:-translate-x-full"
      >
        <div>
          {pathname === "/" ||
          pathname === "/home" ||
          pathname === "/home/login" ||
          pathname === "/home/login/register" ||
          pathname === "/authorizationone" ||
          pathname === "/authorization" ? (
            ""
          ) : (
            <div className="bg-white">
              <SideBar isOpen={isOpen} />
            </div>
          )}
        </div>
      </div>
      {/* <div className="flex-1 pl-16"> */}
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/login" element={<Login />} />
          <Route path="/home/login/register" element={<Payment />} />
          <Route path="/addFirstEmployee" element={<AddFisrtEmployee/>}/>
          {/* <Route path="/home/login/register/payment" element={<Payment />} /> */}
            <Route path="/authorization" element={<Authorization />} />
            <Route path="/authorizationone" element={<Authorizationone />} />
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route
              element={
                <ProtectedRoute
                  isAllowed={!!user && user.role === "User"}
                  redirectTo="/myprofile"
                />
              }
            >
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/employee/:id" element={<EmployeeDetail />} />
              <Route path="/addemployee" element={<AddEmployee />} />
              <Route path="/editemployee/:id" element={<EditEmployee />} />
              <Route path="/organization" element={<Organization />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/notifications" element={<Notifications />} />
            </Route>
            <Route path="/myprofile/:id" element={<MyProfile />} />
            {/* <Route path={`/myprofile/${user.id}`} element={<EditMyProfile />} /> */}
          </Route>
          <Route path="*" element={<h1>Ruta equivocada</h1>} />
        </Routes>
      {/* </div> */}
    </div>
  );
}

export default App;