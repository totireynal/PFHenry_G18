/* eslint-disable react-hooks/exhaustive-deps */
import SideBar from "../../../Components/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  resetCreate,
  createEmployee,
} from "../../../state/redux/actions/actions";

const AddEmployee = () => {
  const { employeeCreated } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [employee, setEmployee] = useState({
    name: "",
    lastName: "",
    birthDate: "",
    email: "",
    dni: "",
    tel: "",
    address: "",
    role: "",
    image: "",
  });

  const [errorButton, setErrorButton] = useState(true);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    dispatch(resetCreate());
  }, []);

  const validate = (value) => {
    let errors = {};

    if (!value.name) {
      errors.name = "Name is required";
    } else if (value.name.length < 4 || value.name.length > 25) {
      errors.name = "Name must contain between 4 and 25 characters";
    }

    if (!value.lastName) {
      errors.lastName = "Last Name is required";
    }

    if (!value.birthDate) {
      errors.birthDate = "Birthdate is required";
    }

    if (!value.email) {
      errors.email = "Email is required";
    }

    if (!value.dni) {
      errors.dni = "DNI is required";
    }

    if (!value.tel) {
      errors.tel = "Telephone is required";
    }

    if (!value.address) {
      errors.address = "Address is required";
    }

    if (!value.role) {
      errors.role = "Role is required";
    }

    if (!value.image) {
      errors.image = "Image is required";
    }

    setErrors(errors);
  };

  const handleChange = (event) => {
    setEmployee({
      ...employee,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createEmployee(employee));
  };

  useEffect(() => {
    validate(employee);
  }, [employee]);

  useEffect(() => {
    if (!Object.keys(errors).length) {
      setErrorButton(false);
    } else {
      setErrorButton(true);
    }
  }, [errors]);

  useEffect(() => {
    if (employeeCreated.error) {
      alert(employeeCreated.error);
      dispatch(resetCreate());
    }

    if (employeeCreated.message) {
      alert(employeeCreated.message);
      dispatch(resetCreate());
      setEmployee({
        name: "",
        lastName: "",
        birthDate: "",
        email: "",
        dni: "",
        tel: "",
        address: "",
        role: "",
        image: "",
      });
    }
  }, [employeeCreated]);

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-6 grid-rows-1 h-screen"
    >
      <SideBar />
      <div className="col-span-5 p-8 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-6 px-10 py-4 rounded-2xl shadow-md shadow-slate-500 bg-slate-200">
          <div className="text-center">
            <span className="text-4xl">Add Employee</span>
          </div>
          <div className="flex gap-16">
            <div>
              <div>
                <label className="text-base">Name: </label>
                <input
                  onChange={handleChange}
                  name="name"
                  value={employee.name}
                  type="text"
                  // className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  className={
                    errors.name
                      ? "rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                      : "rounded-md border-2 border-red-800 block w-56 h-10 px-2"
                  }
                  placeholder="First Name"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">Last Name: </label>
                <input
                  onChange={handleChange}
                  name="lastName"
                  value={employee.lastname}
                  type="text"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="Last Name"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">Birth Date: </label>
                <input
                  onChange={handleChange}
                  name="birthDate"
                  value={employee.birthdate}
                  type="date"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">E-mail: </label>
                <input
                  onChange={handleChange}
                  name="email"
                  value={employee.email}
                  type="text"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. email@example.com"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">DNI: </label>
                <input
                  onChange={handleChange}
                  name="dni"
                  value={employee.dni}
                  type="number"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. 45678901D"
                ></input>
              </div>
            </div>
            <div>
              <div>
                <label className="text-base">Telephone: </label>
                <input
                  onChange={handleChange}
                  name="tel"
                  value={employee.phone}
                  type="number"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. 4567890123"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">Address: </label>
                <input
                  onChange={handleChange}
                  name="address"
                  value={employee.address}
                  type="text"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. 012 Elm St, Anytown"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">Role: </label>
                <select
                  onChange={handleChange}
                  name="role"
                  value={employee.role}
                  type="text"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. Accountant"
                >
                  <option value="SuperAdmin">SuperAdmin</option>
                  <option value="Admin" selected>
                    Admin
                  </option>
                  <option value="User">User</option>
                </select>
              </div>
              <div className="my-6">
                <label className="text-base">Image: </label>
                <input
                  onChange={handleChange}
                  name="image"
                  value={employee.image}
                  type="text"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. Finance"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={errorButton}
              className="border-2 border-gray-600 w-24 h-9 rounded-2xl shadow-md shadow-slate-300 bg-gray-800 text-slate-300"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddEmployee;
