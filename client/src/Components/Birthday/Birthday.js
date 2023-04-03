import React from "react";
import {getBirthday} from "../../state/redux/actions/actions"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";


const EmployeeList = () => {
  const birthday = useSelector(state => state.birthday)
  const currentEmployee = useSelector((state) => state.currentEmployee);
  const CompanyId = currentEmployee ? currentEmployee.CompanyId : null;
  const dispatch = useDispatch();
  useEffect(() => {
     dispatch(getBirthday(CompanyId))
      }, [dispatch]
  )
  console.log(birthday)
    return (
      <div className="flex flex-col justify-center items-center mt-4">
        <h1 className="text-xl font-semibold mb-2">Proximos cumpleaños</h1>
        
        <ul className="grid grid-cols-1 gap-2">
          {birthday.map((employee) => (
            <li key={employee.id} className="bg-white shadow-lg rounded-lg p-2 flex flex-col">
              <h2 className="text-base font-semibold mb-1">{employee.name} {employee.lastName}</h2>
              <p className="text-gray-500 text-xs mb-1">{employee.birthDay}-{employee.birthMonth}</p>
              <div className="flex justify-end">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full text-xs">
                  Ver detalle
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default EmployeeList;