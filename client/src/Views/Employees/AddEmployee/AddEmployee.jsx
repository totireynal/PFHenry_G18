/* eslint-disable react-hooks/exhaustive-deps */
import SideBar from "../../../Components/SideBar/SideBar";
import { useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { createEmployee } from "../../../state/redux/actions/actions";
import Form from "../../../Components/Form/Form";
import validate from "../../../Utils/functions/validate";
import { useErrors } from "../../../Utils/hooks/errors";
import { useAnswer } from "../../../Utils/hooks/answer";
import { Link } from "react-router-dom";

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
    role: "User",
    image: "",
    position: "",
    area: "",
    cuil: "",
    cbu: "",
    dateOfAdmission: "",
  });

  const [errorButton, setErrorButton] = useState(true);

  const { errors, setAllErrors } = useErrors();
  const {answer, showAnswer} = useAnswer()

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

    const allErrors = Object.keys(errors).length;
    if (!allErrors) {
      setErrorButton(false);
    } else {
      setErrorButton(true);
    }
  };

  const handleSelect = (e) => {
    const { value, name } = e.target;
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
    dispatch(createEmployee(employee, showAnswer));
    setTimeout(() => {
      setSubmited(false);
    }, 3000);
    setErrorButton(true);
    setEmployee({
      name: "",
      lastName: "",
      birthDate: "",
      email: "",
      dni: "",
      tel: "",
      address: "",
      role: "User",
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
// console.log(errors);
  return (
    <div className="grid grid-cols-6 grid-rows-1 h-screen">
      <SideBar />
      <div className="col-span-5 p-8 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-6 px-10 py-4 rounded-2xl shadow-md shadow-slate-500 bg-slate-200">
          <div className="text-center">
            <span className="text-4xl">Add Employee</span>
          </div>

{/* ++++++++++++++BOTON BACK AddEmployee+++++++++++++++++++ */}
          <Link to='/employees'>
            <button className="flex relative bg-sky-700 shadow-sky-600 hover:bg-sky-600 h-8 w-24 justify-center items-center rounded text-white border  "
            >BACK</button>
          </Link>
{/* ++++++++++++++BOTON BACK+++++++++++++++++++ */}

          <div className="flex gap-16">
            <div>
              <Form
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                handleSelect={handleSelect}
                touched={touched}
                errors={errors}
                users={employee}
                errorButton={errorButton}
                submited={submited}
                button="Add Employee"
                answer={answer}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
