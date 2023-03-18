// import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Employee from "./Employee/Employee";
import style from "./Employees.module.css";
import SearchBar from "./SearchBar/SearchBar";
import { users } from "../../utils";
import SideBar from "../../Components/SideBar/SideBar";

const Employees = () => {
  const [numEmployees, setNumEmployees] = useState(10);

  const [filteredUsers, setFilteredUsers] = React.useState(users);

  const loadMoreEmployees = () => {
    setNumEmployees(numEmployees + 4);
  };

  const handleSearch = (term) => {
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="grid grid-cols-6 grid-rows-1 h-screen">
      <SideBar />
      <div className="col-span-5 px-8 pb-8">
        <div className={style.titleContainer}>
          <SearchBar handleSearch={handleSearch} />
          <Link to={"/addemployee/"}>
            <button className={style.addContainer}>Add Employee</button>
          </Link>
        </div>
        <div
          style={{ height: "480px", overflow: "auto" }}
          onScroll={(e) => {
            const element = e.target;
            if (
              element.scrollHeight - element.scrollTop ===
              element.clientHeight
            ) {
              loadMoreEmployees();
            }
          }}
          className={style.cardsContainer}
        >
          {filteredUsers.slice(0, numEmployees).map((user) => {
            return (
              <Link key={user.id} to={`/employee/${user.id}`}>
                <Employee
                  id={user.id}
                  name={user.name}
                  lastName={user.lastName}
                  position={user.position}
                  avatar={user.avatar}
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
