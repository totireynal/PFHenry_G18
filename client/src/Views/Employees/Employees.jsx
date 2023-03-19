/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import Employee from "./Employee/Employee";
import SearchBar from "./SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../Components/SideBar/SideBar";
import { getEmployees } from "../../state/redux/actions/actions";
import Sort from "../../Components/Sort/Sort";
import Position from "../../Components/Position/Position";
import Area from "../../Components/Area/Area"
import Rol from "../../Components/Rol/Rol"

const Employees = () => {
  const users = useSelector((state) => state.allEmployees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
    console.log("toy");
  }, [dispatch]);

  // const [searchEmployee, setSearchEmployee] = useState("");

  // const handleSearch = (employee) => {
  //   setSearchEmployee(employee);
  // };

  // const filteredUsers = users?.filter(
  //   (user) =>
  //     user?.name?.toLowerCase().includes(searchEmployee.toLowerCase()) ||
  //     user?.lastName?.toLowerCase().includes(searchEmployee.toLowerCase())
  // );

   const handleRefresh = (event) => {
    dispatch(getEmployees());
    }

  return (
    <div className="grid grid-cols-6 grid-rows-1 h-screen">
      <SideBar />
      <div className="col-span-5 px-8 pb-8">
        <div className="flex flex-row items-center justify-center h-24 gap-2.5">
          <SearchBar />
          <Link to={"/addemployee/"}>
            <button className="bg-sky-700 text-white rounded border border-sky-700 overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600">
              Add Employee
            </button>
          </Link>
        </div>
        <Sort></Sort>
          <button
            className="flex relative h-12 w-40 justify-center items-center rounded-md border border-solid border-black" 
            onClick={handleRefresh}
            >Refresh</button>
        <Area/>
        <Position/>
        <Rol></Rol>
        <div className="flex flex-row flex-wrap gap-6 justify-center overflow-auto h-[630px] pt-3 ">
          {users.map((user) => {
            return (
              <Link key={user.id} to={`/employee/${user.id}`}>
                <Employee
                  id={user.id}
                  name={user.name}
                  lastName={user.lastName}
                  // image={user.image}
                  area={user.area}
                  position={user.position}
                  role={user.role}
                />
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
};

export default Employees;
