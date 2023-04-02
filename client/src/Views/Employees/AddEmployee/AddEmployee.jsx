// import SideBar from "../../../Components/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import {
  createEmployee,
  getAreasNum,
  getPositionsNum,
} from "../../../state/redux/actions/actions";
import Form from "../../../Components/Form/Form";
import validate from "../../../Utils/functions/validate";
import { useBack } from "../../../Utils/hooks/mensajeBack";
import { useErrors } from "../../../Utils/hooks/errors";
import { useAnswer } from "../../../Utils/hooks/answer";
// import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import {
  getUsersTel,
  getUsersEmail,
  getUsersCuil,
  getUsersCbu,
  getUsersDni,
} from "../../../state/redux/actions/actions";

const AddEmployee = () => {
  const [cookies] = useCookies(["cookieBack"]);
  const dispatch = useDispatch();
  const decodedToken = cookies.cookieBack
    ? jwt_decode(cookies.cookieBack)
    : null;
  const currentCompanyId = decodedToken ? decodedToken.CompanyId : null;

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
    image:
      "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg",
    PositionId: 0,
    AreaId: 0,
    cuil: "",
    cbu: "",
    dateOfAdmission: "",
    CompanyId: "",
  });

  const [errorButton, setErrorButton] = useState(true);

  const { errors, setAllErrors } = useErrors();

  const { answer, showAnswer } = useAnswer();

  const [touched, setTouched] = useState({});

  const [submited, setSubmited] = useState(false);

  const { back, setAllBack } = useBack();

  // const [mensajeEmail, setMensajeEmail] = useState({
  //   email: "",
  //   dni: "",
  //   tel: "",
  //   cuil: "",
  //   cbu: "",
  // });
  // const [mensajeCuil, setMensajeCuil] = useState(null);
  // const [mensajeCbu, setMensajeCbu] = useState(null);
  // const [mensajeDni, setMensajeDni] = useState(null);

  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setErrorButton(false);
    }
  }, [errors]);

  useEffect(() => {}, []);

  const handleInput = (event) => {
    setEmployee({
      ...employee,
      CompanyId: currentCompanyId,
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

  const handleBlur = (event) => {
    // const { value, name } = event.target;
    // setAllBack({
    //     ...employee,
    //     [event.target.name]: event.target.value,
    // });

    if (event.target.name === "email") {
      const valor = event.target.value;
      dispatch(getUsersEmail(currentCompanyId, valor)).then((resultado) => {
        console.log("CORREO", valor);
        console.log("company ID", currentCompanyId);
        if (resultado?.message) {
          setAllBack({
            ...employee,
            [event.target.name]: resultado.message,
          });
        } else {
          setAllBack({
            [event.target.name]: "",
          });
        }
        console.log("Valor", valor);
        console.log("Mensaje: ", resultado?.message);
      });
    }
    if (event.target.name === "cuil") {
      const valor = event.target.value;
      dispatch(getUsersCuil(currentCompanyId, valor)).then((resultado) => {
        if (resultado?.message) {
          setAllBack({
            ...employee,
            [event.target.name]: resultado.message,
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
      dispatch(getUsersCbu(currentCompanyId, valor)).then((resultado) => {
        if (resultado?.message) {
          setAllBack({
            ...employee,
            [event.target.name]: resultado.message,
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
      dispatch(getUsersDni(currentCompanyId, valor)).then((resultado) => {
        if (resultado?.message) {
          setAllBack({
            ...employee,
            [event.target.name]: resultado.message,
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
      dispatch(getUsersTel(currentCompanyId, valor)).then((resultado) => {
        if (resultado?.message) {
          setAllBack({
            ...employee,
            [event.target.name]: resultado.message,
          });
        } else {
          setAllBack({
            [event.target.name]: "",
          });
        }
      });
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
  };
  console.log(errors);
  return (
    <div
      className="w-full lg:h-screen lg:my-0 sm:my-16 xl:ml-72 lg:ml-36 sm:ml-16 flex justify-center items-center ssm:m-auto lg:py-0
ssm:py-16"
    >
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
              positionsNum={positionsNum}
              areasNum={areasNum}
              companiId={currentCompanyId}
              handleBlur={handleBlur}
              back={back}
            />
            {/* {mensajeEmail && <p>{mensajeEmail.email}</p>} */}
          </div>
          {/* <p>{back.email}</p> */}
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
