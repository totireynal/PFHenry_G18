/* eslint-disable react-hooks/exhaustive-deps */
import SideBar from "../../../Components/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  createEmployee,
  getAreasNum,
  getPositionsNum,
} from "../../../state/redux/actions/actions";
import Form from "../../../Components/Form/Form";
import validate from "../../../utils/functions/validate";
import { useErrors } from "../../../utils/hooks/errors";
import { useAnswer } from "../../../utils/hooks/answer";
import { Link } from "react-router-dom";

const AddEmployee = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPositionsNum());
    dispatch(getAreasNum());
  }, [dispatch]);

  const positionsNum = useSelector((state) => state.positionsNum);
  const areasNum = useSelector((state) => state.areasNum);

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
    PositionId: 0,
    AreaId: 0,
    cuil: "",
    cbu: "",
    dateOfAdmission: "",
  });

  const [errorButton, setErrorButton] = useState(true);

  const { errors, setAllErrors } = useErrors();

  const { answer, showAnswer } = useAnswer();

  const [touched, setTouched] = useState({});

  const [submited, setSubmited] = useState(false);

  useEffect(() => {}, []);

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

  const handleChangeImage = (url) => {
    setEmployee({
      ...employee,
      image: url,
    });
  };

  const handleSelect = (e) => {
    const { value, name } = e.target;
    if (name === "role") {
      setEmployee({
        ...employee,
        [name]: value,
      });
    }
    if (name === "AreaId") {
      setEmployee({
        ...employee,
        [name]: Number(value),
      });
    }
    if (name === "PositionId") {
      setEmployee({
        ...employee,
        [name]: Number(value),
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
      PositionId: 0,
      AreaId: 0,
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
      PositionId: 0,
      AreaId: 0,
      cuil: "",
      cbu: "",
      dateOfAdmission: "",
    });
  };
  console.log(errors);
  return (
    <div className="w-full lg:h-screen lg:my-0 sm:my-16 xl:ml-72 lg:ml-36 sm:ml-16 flex justify-center items-center ssm:m-auto">
      <div>
        <div className="w-full text-center mb-14 font-bold">
          <span className="text-4xl text-sky-400">Add Employe</span>
        </div>

        {/* ++++++++++++++BOTON BACK AddEmployee+++++++++++++++++++ */}
        {/* <Link to="/employees">
            <button className="flex relative bg-sky-700 shadow-sky-600 hover:bg-sky-600 h-8 w-24 justify-center items-center rounded text-white border  ">
            BACK
            </button>
          </Link> */}
        {/* ++++++++++++++BOTON BACK+++++++++++++++++++ */}

        <div className="flex gap-16">
          <div className="">
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
              handleChangeImage={handleChangeImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
