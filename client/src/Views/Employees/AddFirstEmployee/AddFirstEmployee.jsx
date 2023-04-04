import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { createEmployee, getAllEmployees } from "../../../state/redux/actions/actions";
import FormFirstEmployee from "../../../Components/Form/FormFirstEmployee";
import validate from "../../../Utils/functions/validate";
import { useErrors } from "../../../Utils/hooks/errors";
import { useAnswer } from "../../../Utils/hooks/answer";
import { Link } from "react-router-dom";

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
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

 

  // const currentCompanyId = decodedToken ? decodedToken.CompanyId : null;
  const getAlllEmployees = useSelector((state) => state.getAlllEmployees);

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

  const { answer, showAnswer } = useAnswer();

  const [touched, setTouched] = useState({});

  const [submited, setSubmited] = useState(false);

  const [link, setLink] = useState(false)
  
  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setErrorButton(false);
    }
  }, [errors]);

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

      }, getAlllEmployees)
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
    setLink(true);
    dispatch(createEmployee(employee, showAnswer));
    
    // setSubmited(false);
     setTimeout(() => {
       setSubmited(false);
     }, 1000);

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
    // navigate("/");
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
          {link && ( 
          <div className="fixed z-50 inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg">
              <h2 className="text-xl font-bold mb-4">Sign in to your account to continue</h2>
              <p className="mb-4">{answer}</p>
              <div className="flex justify-end">

                <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Continue</Link>
              </div>
            </div>
          </div>
            
         
            )}
        </div>
      </div>
    </div>
  );
};

export default AddFirstEmployee;





