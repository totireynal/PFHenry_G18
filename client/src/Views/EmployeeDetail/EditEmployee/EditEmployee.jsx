import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SideBar from "../../../Components/SideBar/SideBar";
import { updateEmployee } from "../../../state/redux/actions/actions";
import validate from "../../../Utils/functions/validate";
import Form from "../../../Components/Form/Form";
import { useErrors } from "../../../Utils/hooks/errors";
import { useAnswer } from "../../../Utils/hooks/answer"; 

const EditEmployee = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { errors, setAllErrors } = useErrors();

  const {answer, showAnswer} = useAnswer()

  const currentEmployee = useSelector((state) => state.employeeDetail);

  const [touched, setTouched] = useState({
    name: false,
    lastName: false,
    birthDate: false,
    email: false,
    dni: false,
    tel: false,
    address: false,
    position: false,
    area: false,
    dateOfAdmission: false,
    role: false,
    cuil: false,
    cbu: false,
  });

  const [submited, setSubmited] = useState(false);
  const [errorButton, setErrorButton] = useState(true);
  const [updatedUser, setUpdatedUser] = useState({
    name: `${currentEmployee.name}`,
    lastName: `${currentEmployee.lastName}`,
    birthDate: `${currentEmployee.birthDate}`,
    email: `${currentEmployee.email}`,
    dni: `${currentEmployee.dni}`,
    tel: `${currentEmployee.tel}`,
    address: `${currentEmployee.address}`,
    position: `${currentEmployee.position}`,
    area: `${currentEmployee.area}`,
    dateOfAdmission: `${currentEmployee.dateOfAdmission}`,
    role: `${currentEmployee.role}`,
    cuil: `${currentEmployee.cuil}`,
    cbu: `${currentEmployee.cbu}`,
  });

  const handleInput = (e) => {
    const { value, name } = e.target;

    setAllErrors(
      validate({
        ...updatedUser,
        [name]: value,
      })
    );
    setUpdatedUser({
      ...updatedUser,
      [name]: value,
    });


    setTouched({
      ...touched,
      [name]: true,
    });

    const allErrors = Object.values(errors).length;
    if (!allErrors) {
      setErrorButton(false);
    }
  };

  const handleSelect = (e) => {
    const { value, name } = e.target;
    if (name === "role") {
      setUpdatedUser({
        ...updatedUser,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const allErrors = Object.values(errors).length;
    // if (!allErrors) {
      dispatch(updateEmployee(id, updatedUser, showAnswer));
      setSubmited(true);
      setTimeout(() => {
        setSubmited(false);
        navigate(-1);
    }, 3000);
    setErrorButton(true);

    setAllErrors({
      name: "",
      lastName: "",
      birthDate: "",
      email: "",
      dni: "",
      tel: "",
      address: "",
      position: "",
      area: "",
      dateOfAdmission: "",
      role: "",
      image: "",
      cuil: "",
      cbu: "",
    });
  };

  console.log(answer, 'edittttt');

  return (
    <div className="grid grid-cols-6 grid-rows-1 h-screen">
      <SideBar />
      <div className="col-span-5 p-8 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-6 px-10 py-4 rounded-2xl shadow-md shadow-slate-500 bg-slate-200">
          <div className="text-center">
            <span className="text-4xl">Edit Employee</span>
          </div>
          <div className="flex gap-16">
            <div>
              <Form
                handleInput={handleInput}
                handleSubmit={handleSubmit}
                handleSelect={handleSelect}
                touched={touched}
                errors={errors}
                users={updatedUser}
                errorButton={errorButton}
                submited={submited}
                button="Edit Employee"
                answer={answer}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
