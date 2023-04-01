/* eslint-disable react-hooks/exhaustive-deps */
import SideBar from "../../../Components/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import { createEmployee, postAreaCrud,
  postPositionCrud } from "../../../state/redux/actions/actions";
=======
import {
  createEmployee,
  getAreasNum,
  getPositionsNum,
} from "../../../state/redux/actions/actions";
>>>>>>> develop
import FormFirstEmployee from "../../../Components/Form/FormFirstEmployee";
import validate from "../../../utils/functions/validate";
import { useErrors } from "../../../utils/hooks/errors";
import { useAnswer } from "../../../utils/hooks/answer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AddFirstEmployee = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
<<<<<<< HEAD
  const [dispatchCompleted, setDispatchCompleted] = useState(false);
    useEffect(() => {
      
      // dispatch(getPositionsNum());
      // dispatch(getAreasNum());
    }, [dispatch]);

    
=======

  useEffect(() => {
    dispatch(getPositionsNum());
    dispatch(getAreasNum());
  }, [dispatch]);

  const positionsNum = useSelector((state) => state.positionsNum);
  const areasNum = useSelector((state) => state.areasNum);
>>>>>>> develop

    const companyId = useSelector((state) => state.newCompanyId);
    console.log("CompanyID: ", companyId)
    // const areasNum = useSelector((state) => state.areasNum);
    const [area, setArea] = useState({
      area: "",
    });
    const [position, setPosition] = useState({
      position:"",
    })
    
  var [employee, setEmployee] = useState({
    name: "",
    lastName: "",
    birthDate: "",
    email: "",
    dni: "",
    tel: "",
    address: "",
    role: "SuperAdmin",
    image: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg",
    PositionId: 0,
    AreaId: 0,
    cuil: "",
    cbu: "",
    dateOfAdmission: "",
    CompanyId: ""
  });

  const [errorButton, setErrorButton] = useState(false);

  const { errors, setAllErrors } = useErrors();

  const { answer, showAnswer } = useAnswer();

  const [touched, setTouched] = useState({});

  const [submited, setSubmited] = useState(false);
  useEffect(() => {
    if (dispatchCompleted) {
      dispatch(createEmployee(employee, showAnswer));
    }
  }, [dispatchCompleted, employee, dispatch, showAnswer]);

<<<<<<< HEAD
  useEffect(() => {
    if (Object.keys(errors).length === 0) {
      setErrorButton(false);
    }
  }, [errors]);

=======
>>>>>>> develop
  useEffect(() => {}, []);

  const handleInput = (event) => {
    setEmployee({
      ...employee,
      CompanyId: companyId,//aca va en realidad companyId
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

<<<<<<< HEAD
  // const handleSelect = async (e) => {
  //   const { value, name } = e.target;
  //   console.log("")
  //   if (name === "AreaId") {
  //     const idArea = 0;
  //     //aqui va el postArea
  //     dispatch(postAreaCrud(value)).then(resultado=>{
  //       idArea = resultado.id
  //     })
  //     console.log(name, value, idArea, "Datos de area");
  //     setEmployee({
  //       ...employee,
  //       [name]:Number(idArea),
  //     });
  //     // const idArea = await postAreaCrud(value)
  //     // console.log(name, value, idArea,'Datos Area');
  //     // setEmployee({
  //     //   ...employee,
  //     //   [name]: Number(idArea),
  //     // });
  //    }
  //    if (name === "PositionId") {
  //     const idPosition = 0;
  //     dispatch(postPositionCrud(value)).then(resultado=>{
  //       idPosition = resultado.id
  //     })
  //     console.log(name, value, idPosition,'Datos Position');
  //      setEmployee({
  //        ...employee,
  //        [name]: Number(idPosition),
  //      });
  //    }
  //  };
=======
  const handleSelect = (e) => {
    const { value, name } = e.target;
    if (name === "role") {
      setEmployee({
        ...employee,
        [name]: value,
      });
    }
    if (name === "AreaId") {
      console.log(name, value, "daleeeee");
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
>>>>>>> develop

  const handleSubmit = (event) => {

    var idArea=0;
    var idPosition = 0;
    console.log(employee, "Datos SuperAdmin antes del set");
    event.preventDefault();
    setSubmited(true);
    area.area = employee.AreaId;
    position.position = employee.PositionId;

    Promise.all([
      dispatch(postPositionCrud(position)),
      dispatch(postAreaCrud(area))
    ]).then(resultados => {
      const idPosition = resultados[0].payload.id;
      const idArea = resultados[1].payload.id;
      console.log("idPosition: ", idPosition);
      console.log("idArea: ", idArea);
    
      setEmployee({
        ...employee,
        PositionId: idPosition,
        AreaId: idArea
      });
      console.log(employee)
      setDispatchCompleted(true);
    }).catch(error => {
      console.log("Error al hacer las solicitudes POST: ", error);
    });
 

  






    // dispatch(postPositionCrud(position)).then(resultado=>{
    //   idPosition=resultado.payload.id

    // })

    // dispatch(postAreaCrud(area)).then(resultado=>{
    //       idArea = resultado.payload.id;
          
    //     })
    
    // setEmployee({
    //   ...employee,
    //   PositionId:idPosition,
    //   AreaId: idArea,
    // })
    // dispatch(createEmployee(employee, showAnswer));
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
      image: "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg",
      PositionId: 0,
      AreaId: 0,
      cuil: "",
      cbu: "",
      dateOfAdmission: "",
      CompanyId: ""
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
<<<<<<< HEAD
    navigate("/")
=======
    navigate("/dashbord");
>>>>>>> develop
  };
  console.log(errors);
  return (
    <div className="w-full lg:h-screen lg:my-0 sm:my-16 xl:ml-72 lg:ml-36 sm:ml-16 flex justify-center items-center ssm:m-auto lg:py-0
    ssm:py-16">
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
              // handleSelect = {handleSelect}
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

export default AddFirstEmployee;
