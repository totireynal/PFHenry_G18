/* eslint-disable react-hooks/exhaustive-deps */
import SideBar from "../../../Components/SideBar/SideBar";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { createEmployee } from "../../../state/redux/actions/actions";
import Form from "../../../Components/Form/Form";
import validate from "../../../utils/functions/validate";
import { useErrors } from "../../../utils/hooks/errors";


const AddEmployee = () => {
  // const { employeeCreated } = useSelector((state) => state);

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

  const { errors, setAllErrors } = useErrors();

  const [touched, setTouched] = useState({});

  const [submited, setSubmited] = useState(false);

  const handleInput = (event) => {
    setEmployee({
      ...employee,
      [event.target.name]: event.target.value,
    });

    setAllErrors(
      validate({
        ...employee,
        [event.target.name]: event.target.value,
      })
    );

    setTouched({
      ...touched,
      [event.target.name]: true,
    });

    const allErrors = Object.values(errors).length;
    if (!allErrors) {
      setErrorButton(false);
    } else {
      setErrorButton(true);
    }
  };

  const handleSelect = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    if (name === "role") {
      setEmployee({
        ...employee,
        [name]: value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmited(true);
    setTimeout(() => {
      setSubmited(false);
    }, 3000);
    dispatch(createEmployee(employee));
    setErrorButton(true);
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
      dateOfAdmission: "",
    });

    setAllErrors({
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
  };

  return (
    <div className="grid grid-cols-6 grid-rows-1 h-screen">
      <SideBar />
      <div className="col-span-5 p-8 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-6 px-10 py-4 rounded-2xl shadow-md shadow-slate-500 bg-slate-200">
          <div className="text-center">
            <span className="text-4xl">Add Employee</span>
          </div>
          <div className="flex gap-16">
            <div>
              <Form
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                handleSelect={handleSelect}
                errors={errors}
                users={employee}
                errorButton={errorButton}
                submited={submited}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
