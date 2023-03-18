/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Employee from "./Employee/Employee";
import SearchBar from "./SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../../Components/SideBar/SideBar";
import { getEmployees } from "../../state/redux/actions/actions";

const Employees = () => {
  const users = useSelector((state) => state.allEmployees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, []);

  const [searchEmployee, setSearchEmployee] = useState("");

  const handleSearch = (employee) => {
    setSearchEmployee(employee);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchEmployee.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchEmployee.toLowerCase())
  );

  return (
    <div className="grid grid-cols-6 grid-rows-1 h-screen">
      <SideBar />
      <div className="col-span-5 px-8 pb-8">
        <div className="flex flex-row items-center justify-center h-24 gap-2.5">
          <SearchBar handleSearch={handleSearch} />
          <Link to={"/addemployee/"}>
            <button className="flex relative h-12 w-40 justify-center items-center rounded-md border border-solid border-black">
              Add Employee
            </button>
          </Link>
        </div>
        <div className="flex flex-row flex-wrap gap-6 justify-center">
          {filteredUsers.map((user) => {
            return (
              <Link key={user.id} to={`/employee/${user.id}`}>
                <Employee
                  id={user.id}
                  name={user.name}
                  lastName={user.lastName}
                  email={user.email}
                  area={user.area}
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
