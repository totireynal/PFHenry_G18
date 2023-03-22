/* eslint-disable react-hooks/exhaustive-deps */
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import Employee from "./Employee/Employee";
import SearchBar from "./SearchBar/SearchBar";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../../state/redux/actions/actions";
import Sort from "../../Components/Sort/Sort";
import Position from "../../Components/Position/Position";
import Area from "../../Components/Area/Area";
import Rol from "../../Components/Rol/Rol";

const Employees = () => {
  const users = useSelector((state) => state.allEmployees);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  const handleRefresh = (event) => {
    dispatch(getEmployees());
  };

  return (
    <div className=" relative w-full h-screen overflow-auto xl:pl-72 ssm:pl-36">
      <div className="flex flex-wrap sticky top-0 z-10 bg-slate-100 mb-3 items-center justify-center h-24 gap-2.5">
        <SearchBar />
        <Link to={"/addemployee/"}>
          <button className="bg-sky-700 text-white rounded border border-sky-700 overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600">
            Add Employee
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap h-auto justify-center items-center gap-8 mb-8">
        <button
          className="flex relative bg-sky-700 shadow-sky-600 hover:bg-sky-600 h-8 w-auto justify-center items-center rounded text-white border  "
          onClick={handleRefresh}
        >
          Refresh
        </button>
        <Sort />
        <Area />
        <Position />
        <Rol />
      </div>
      <div className="flex flex-col gap-2 mr-10   pt-3 ">
        {users?.map((user, i) => {
          return (
            <Link key={i} to={`/employee/${user?.id}`}>
              <Employee
                id={user?.id}
                name={user?.name}
                lastName={user?.lastName}
                email={user?.email}
                image={user?.image}
                area={user?.area}
                position={user?.position}
                role={user?.role}
              />
              {console.log(user.email)}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Employees;
