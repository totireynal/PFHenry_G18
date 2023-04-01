import React from "react";

const EmployeeList = ({ employees }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {employees.map((employee) => (
        <div key={employee.id} className="w-64 bg-white shadow-lg rounded-lg m-4">
          <div className="p-4">
            <h2 className="text-xl font-semibold">{employee.name}</h2>
            <p className="text-gray-500">{employee.birthday}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;