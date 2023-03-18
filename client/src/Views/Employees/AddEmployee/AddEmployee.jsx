/* eslint-disable react-hooks/exhaustive-deps */
import SideBar from "../../../Components/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  resetCreate,
  createEmployee,
} from "../../../state/redux/actions/actions";
import { RiAlertFill } from "react-icons/ri";

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
    position: "",
    area: "",
    cuil: "",
    cbu: "",
    dateOfAdmission: "",
  });

  const [errorButton, setErrorButton] = useState(true);

  const [errors, setErrors] = useState({});

  const [touched, setTouched] = useState({});

  useEffect(() => {
    dispatch(resetCreate());
  }, []);

  //Expresiones regulares para validar
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  const validate = (value) => {
    let errors = {};

    if (!value.name) {
      errors.name = "Name is required";
    } else if (value.name.length < 3 || value.name.length > 20) {
      errors.name = "Between 3 and 20 chars";
    }

    if (!value.lastName) {
      errors.lastName = "Last Name is required";
    }

    if (!value.birthDate) {
      errors.birthDate = "Birthdate is required";
    }

    if (!value.email) {
      errors.email = "E-mail is required";
    } else if (value.email && !regexEmail.test(value.email)) {
      errors.email = "Wrong E-mail";
    }

    if (!value.dni) {
      errors.dni = "DNI is required";
    }

    if (!value.tel) {
      errors.tel = "Phone is required";
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

    if (!value.position) {
      errors.position = "Position is required";
    }

    if (!value.area) {
      errors.area = "Area is required";
    }

    if (!value.cuil) {
      errors.cuil = "Cuil is required";
    }

    if (!value.cbu) {
      errors.cbu = "CBU is required";
    }

    if (!value.dateOfAdmission) {
      errors.dateOfAdmission = "CBU is required";
    }

    setErrors(errors);
  };

  const handleChange = (event) => {
    setEmployee({
      ...employee,
      [event.target.name]: event.target.value,
    });

    setTouched({
      ...touched,
      [event.target.name]: true,
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
        position: "",
        area: "",
        cuil: "",
        cbu: "",
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
        <div className="flex flex-col gap-4 px-10 py-4 rounded-2xl shadow-md shadow-slate-500 bg-slate-200">
          <div className="text-center">
            <span className="text-4xl">Add Employee</span>
          </div>
          <div className="flex gap-16">
            <div>
              <div className="h-16">
                <label className="text-base">Name: </label>
                <input
                  onChange={handleChange}
                  name="name"
                  value={employee.name}
                  type="text"
                  className={
                    touched.name && errors.name
                      ? "rounded-md border border-red-600 block w-56 h-10 px-2 focus:outline-none"
                      : "rounded-md border border-gray-800 block w-56 h-10 px-2 focus:outline-none"
                  }
                  placeholder="First Name"
                  autocomplete="off"
                ></input>
                {touched.name && errors.name ? (
                  <p className="flex text-red-600 justify-end">
                    <RiAlertFill className="flex relative m-1" />
                    {errors.name}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="my-6 h-16">
                <label className="text-base">Last Name: </label>
                <input
                  onChange={handleChange}
                  name="lastName"
                  value={employee.lastname}
                  type="text"
                  className={
                    touched.lastName && errors.lastName
                      ? "rounded-md border border-red-600 block w-56 h-10 px-2 focus:outline-none"
                      : "rounded-md border border-gray-800 block w-56 h-10 px-2 focus:outline-none"
                  }
                  placeholder="Last Name"
                  autocomplete="off"
                ></input>
                {touched.lastName && errors.lastName ? (
                  <p className="flex text-red-500 justify-end">
                    <RiAlertFill className="flex relative m-1" />
                    {errors.lastName}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="my-6 h-16">
                <label className="text-base">Birth Date: </label>
                <input
                  onChange={handleChange}
                  name="birthDate"
                  value={employee.birthdate}
                  type="date"
                  className={
                    touched.birthDate && errors.birthDate
                      ? "rounded-md border border-red-600 block w-56 h-10 px-2 focus:outline-none"
                      : "rounded-md border border-gray-800 block w-56 h-10 px-2 focus:outline-none"
                  }
                ></input>
                {touched.birthDate && errors.birthDate ? (
                  <p className="flex text-red-500 justify-end">
                    <RiAlertFill className="flex relative m-1" />
                    {errors.birthDate}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="my-6 h-16">
                <label className="text-base">E-mail: </label>
                <input
                  onChange={handleChange}
                  name="email"
                  value={employee.email}
                  type="text"
                  className={
                    touched.email && errors.email
                      ? "rounded-md border border-red-600 block w-56 h-10 px-2 focus:outline-none"
                      : "rounded-md border border-gray-800 block w-56 h-10 px-2 focus:outline-none"
                  }
                  placeholder="eg. email@example.com"
                  autocomplete="off"
                ></input>
                {touched.email && errors.email ? (
                  <p className="flex text-red-500 justify-end">
                    <RiAlertFill className="flex relative m-1" />
                    {errors.email}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="my-6 h-16">
                <label className="text-base">DNI: </label>
                <input
                  onChange={handleChange}
                  name="dni"
                  value={employee.dni}
                  type="text"
                  className={
                    touched.dni && errors.dni
                      ? "rounded-md border border-red-600 block w-56 h-10 px-2 focus:outline-none"
                      : "rounded-md border border-gray-800 block w-56 h-10 px-2 focus:outline-none"
                  }
                  placeholder="eg. 32472653"
                  autocomplete="off"
                ></input>
                {touched.dni && errors.dni ? (
                  <p className="flex text-red-500 justify-end">
                    <RiAlertFill className="flex relative m-1" />
                    {errors.dni}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <div>
                <label className="text-base">Phone: </label>
                <input
                  onChange={handleChange}
                  name="tel"
                  value={employee.phone}
                  type="text"
                  className={
                    touched.tel && errors.tel
                      ? "rounded-md border border-red-600 block w-56 h-10 px-2 focus:outline-none"
                      : "rounded-md border border-gray-800 block w-56 h-10 px-2 focus:outline-none"
                  }
                  placeholder="eg. 2914293847"
                  autocomplete="off"
                ></input>
                {touched.tel && errors.tel ? (
                  <p className="flex text-red-500 justify-end">
                    <RiAlertFill className="flex relative m-1" />
                    {errors.tel}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="my-6 h-16">
                <label className="text-base">Address: </label>
                <input
                  onChange={handleChange}
                  name="address"
                  value={employee.address}
                  type="text"
                  className={
                    touched.address && errors.address
                      ? "rounded-md border border-red-600 block w-56 h-10 px-2 focus:outline-none"
                      : "rounded-md border border-gray-800 block w-56 h-10 px-2 focus:outline-none"
                  }
                  placeholder="eg. 012 Elm St, Anytown"
                  autocomplete="off"
                ></input>
                {touched.address && errors.address ? (
                  <p className="flex text-red-500 justify-end">
                    <RiAlertFill className="flex relative m-1" />
                    {errors.address}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="my-6 h-16">
                <label className="text-base">Role: </label>
                <select
                  onChange={handleChange}
                  name="role"
                  value={employee.role}
                  type="text"
                  className={
                    touched.role && errors.role
                      ? "rounded-md border border-red-600 block w-56 h-10 px-2 focus:outline-none"
                      : "rounded-md border border-gray-800 block w-56 h-10 px-2 focus:outline-none"
                  }
                  placeholder="eg. Accountant"
                  autocomplete="off"
                >
                  <option hidden selected>
                    Select a Role
                  </option>
                  <option value="User">User</option>
                  <option value="SuperAdmin" disabled>
                    SuperAdmin
                  </option>
                  <option value="Admin" disabled>
                    Admin
                  </option>
                </select>
                {touched.role && errors.role ? (
                  <p className="flex text-red-500 justify-end">
                    <RiAlertFill className="flex relative m-1" />
                    {errors.role}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="my-6 h-16">
                <label className="text-base">Image: </label>
                <input
                  onChange={handleChange}
                  name="image"
                  value={employee.image}
                  type="text"
                  className={
                    touched.image && errors.image
                      ? "rounded-md border border-red-600 block w-56 h-10 px-2 focus:outline-none"
                      : "rounded-md border border-gray-800 block w-56 h-10 px-2 focus:outline-none"
                  }
                  placeholder="Insert a valid URL"
                  autocomplete="off"
                ></input>
                {touched.image && errors.image ? (
                  <p className="flex text-red-500 justify-end">
                    <RiAlertFill className="flex relative m-1" />
                    {errors.image}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div>
              <div className="h-16">
                <label className="text-base">Position: </label>
                <input
                  onChange={handleChange}
                  name="position"
                  value={employee.position}
                  type="text"
                  className={
                    touched.position && errors.position
                      ? "rounded-md border border-red-600 block w-56 h-10 px-2 focus:outline-none"
                      : "rounded-md border border-gray-800 block w-56 h-10 px-2 focus:outline-none"
                  }
                  placeholder="eg. Accountant"
                  autocomplete="off"
                ></input>
                {touched.position && errors.position ? (
                  <p className="flex text-red-500 justify-end">
                    <RiAlertFill className="flex relative m-1" />
                    {errors.position}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="my-6 h-16">
                <label className="text-base">Area: </label>
                <input
                  onChange={handleChange}
                  name="area"
                  value={employee.area}
                  type="text"
                  className={
                    touched.area && errors.area
                      ? "rounded-md border border-red-600 block w-56 h-10 px-2 focus:outline-none"
                      : "rounded-md border border-gray-800 block w-56 h-10 px-2 focus:outline-none"
                  }
                  placeholder="eg. Finance"
                  autocomplete="off"
                ></input>
                {touched.area && errors.area ? (
                  <p className="flex text-red-500 justify-end">
                    <RiAlertFill className="flex relative m-1" />
                    {errors.area}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="my-6 h-16">
                <label className="text-base">Date of Admission: </label>
                <input
                  onChange={handleChange}
                  name="dateOfAdmission"
                  value={employee.dateOfAdmission}
                  type="date"
                  className={
                    touched.dateOfAdmission && errors.dateOfAdmission
                      ? "rounded-md border border-red-600 block w-56 h-10 px-2 focus:outline-none"
                      : "rounded-md border border-gray-800 block w-56 h-10 px-2 focus:outline-none"
                  }
                  autocomplete="off"
                ></input>
                {touched.dateOfAdmission && errors.dateOfAdmission ? (
                  <p className="flex text-red-500 justify-end">
                    <RiAlertFill className="flex relative m-1" />
                    {errors.dateOfAdmission}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="my-6 h-16">
                <label className="text-base">Cuil: </label>
                <input
                  onChange={handleChange}
                  name="cuil"
                  value={employee.cuil}
                  type="text"
                  className={
                    touched.cuil && errors.cuil
                      ? "rounded-md border border-red-600 block w-56 h-10 px-2 focus:outline-none"
                      : "rounded-md border border-gray-800 block w-56 h-10 px-2 focus:outline-none"
                  }
                  placeholder="eg. 20-05854965-3"
                  autocomplete="off"
                ></input>
                {touched.cuil && errors.cuil ? (
                  <p className="flex text-red-500 justify-end">
                    <RiAlertFill className="flex relative m-1" />
                    {errors.cuil}
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="my-6 h-16">
                <label className="text-base">CBU: </label>
                <input
                  onChange={handleChange}
                  name="cbu"
                  value={employee.cbu}
                  type="text"
                  className={
                    touched.cbu && errors.cbu
                      ? "rounded-md border border-red-600 block w-56 h-10 px-2 focus:outline-none"
                      : "rounded-md border border-gray-800 block w-56 h-10 px-2 focus:outline-none"
                  }
                  placeholder="eg. 01702046600000087865"
                  autocomplete="off"
                ></input>
                {touched.cbu && errors.cbu ? (
                  <p className="flex text-red-500 justify-end">
                    <RiAlertFill className="flex relative m-1" />
                    {errors.cbu}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={errorButton}
              className={
                errorButton
                  ? "cursor-not-allowed border border-gray-600 w-24 h-9 rounded-2xl shadow-md shadow-slate-300 bg-gray-400 text-slate-300"
                  : "border border-gray-600 w-24 h-9 rounded-2xl shadow-md shadow-slate-300 bg-gray-800 text-slate-300"
              }
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
