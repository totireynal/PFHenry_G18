import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { createEmployee } from "../../../state/redux/actions/actions";
import FormFirstEmployee from "../../../Components/Form/FormFirstEmployee";
import validate from "../../../Utils/functions/validate";
import { useBack } from "../../../Utils/hooks/mensajeBack";
import { useErrors } from "../../../Utils/hooks/errors";
import { useAnswer } from "../../../Utils/hooks/answer";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import {
  getUsersTel,
  getUsersEmail,
  getUsersCuil,
  getUsersCbu,
  getUsersDni,
} from "../../../state/redux/actions/actions";

const AddFirstEmployee = () => {
  const [cookies] = useCookies(["cookieBack"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const decodedToken = cookies.cookieBack
    ? jwt_decode(cookies.cookieBack)
    : null;
  const currentCompanyId = decodedToken ? decodedToken.CompanyId : null;

  useEffect(() => {}, [dispatch]);

  const positionAdmin = useSelector((state) => state.positionsCrud);
  const areaAdmin = useSelector((state) => state.areasCrud);

  const companyId = useSelector((state) => state.newCompanyId);

  var [employee, setEmployee] = useState({
    name: "",
    lastName: "",
    birthDate: "",
    email: "",
    dni: "",
    tel: "",
    address: "",
    role: "SuperAdmin",
    image:
      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg",
    PositionId: positionAdmin[0].id,
    AreaId: areaAdmin[0].id,
    cuil: "",
    cbu: "",
    dateOfAdmission: "",
    CompanyId: "",
  });

  const [errorButton, setErrorButton] = useState(false);

  const { errors, setAllErrors } = useErrors();

  const { back, setAllBack } = useBack();

  const {
    answer,
    //  showAnswer
  } = useAnswer();

  const [touched, setTouched] = useState({});

  const [submited, setSubmited] = useState(false);

  useEffect(() => {}, []);

  const handleInput = (event) => {
    setEmployee({
      ...employee,
      CompanyId: companyId,
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

  const handleBlur = (event) => {
    if (event.target.name === "email") {
      const valor = event.target.value;
      dispatch(getUsersEmail(currentCompanyId, valor)).then((result) => {
        console.log(result?.message);
        if (result?.message) {
          setAllErrors({
            ...employee,
            [event.target.name]: result.message,
          });
        } else {
          setAllBack({
            [event.target.name]: "",
          });
        }
      });
    }
    if (event.target.name === "cuil") {
      const valor = event.target.value;
      dispatch(getUsersCuil(currentCompanyId, valor)).then((result) => {
        if (result?.message) {
          setAllBack({
            ...employee,
            [event.target.name]: result.message,
          });
        } else {
          setAllBack({
            [event.target.name]: "",
          });
        }
      });
    }
    if (event.target.name === "cbu") {
      const valor = event.target.value;
      dispatch(getUsersCbu(currentCompanyId, valor)).then((result) => {
        if (result?.message) {
          setAllBack({
            ...employee,
            [event.target.name]: result.message,
          });
        } else {
          setAllBack({
            [event.target.name]: "",
          });
        }
      });
    }
    if (event.target.name === "dni") {
      const valor = event.target.value;
      dispatch(getUsersDni(currentCompanyId, valor)).then((result) => {
        if (result?.message) {
          setAllBack({
            ...employee,
            [event.target.name]: result.message,
          });
        } else {
          setAllBack({
            [event.target.name]: "",
          });
        }
      });
    }
    if (event.target.name === "tel") {
      const valor = event.target.value;
      dispatch(getUsersTel(currentCompanyId, valor)).then((result) => {
        if (result?.message) {
          setAllBack({
            ...employee,
            [event.target.name]: result.message,
          });
        } else {
          setAllBack({
            [event.target.name]: "",
          });
        }
      });
    }
  };

  const handleChangeImage = (url) => {
    setEmployee({
      ...employee,
      image: url,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmited(true);
    dispatch(
      createEmployee(
        employee
        // , showAnswer
      )
    );
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
      role: "SuperAdmin",
      image:
        "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg",
      PositionId: 0,
      AreaId: 0,
      cuil: "",
      cbu: "",
      dateOfAdmission: "",
      CompanyId: "",
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
    navigate("/");
  };
  return (
    <div
      className="w-full lg:h-screen lg:my-0 sm:my-16 xl:ml-72 lg:ml-36 sm:ml-16 flex justify-center items-center ssm:m-auto lg:py-0
    ssm:py-16"
    >
      <div>
        <div className="w-full text-center mb-14 font-bold">
          <span className="text-4xl text-sky-400">Add Employee</span>
        </div>

        {/* ++++++++++++++BOTON BACK AddEmployee+++++++++++++++++++ */}
        {/* <Link to="/employees">
            <button className="flex relative bg-sky-700 shadow-sky-600 hover:bg-sky-600 h-8 w-24 justify-center items-center rounded text-white border  ">
            BACK
            </button>
          </Link> */}
        {/* ++++++++++++++BOTON BACK+++++++++++++++++++ */}

        <div className="flex gap-16">
          <div>
            <FormFirstEmployee
              handleInput={handleInput}
              handleSubmit={handleSubmit}
              touched={touched}
              errors={errors}
              users={employee}
              errorButton={errorButton}
              submited={submited}
              button="Add Employee"
              answer={answer}
              handleBlur={handleBlur}
              handleChangeImage={handleChangeImage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFirstEmployee;
