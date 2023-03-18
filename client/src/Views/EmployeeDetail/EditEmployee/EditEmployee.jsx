import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SideBar from "../../../Components/SideBar/SideBar";
import { updateEmployee } from "../../../state/redux/actions/actions";
import validate from "../../../utils/functions/validate";
import Form from "../../../Components/Form/Form";
import { useErrors } from "../../../utils/hooks/errors";

const EditEmployee = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { errors, setAllErrors } = useErrors(); 
  const [submited, setSubmited] = useState(false);
  const [errorButton, setErrorButton] = useState(true);
  const [updatedUser, setUpdatedUser] = useState({
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
    cuil: "",
    cbu: "",
  });

  const handleInput = (e) => {
    const { value, name } = e.target;

    setUpdatedUser({
      ...updatedUser,
      [name]: value,
    });

    setAllErrors(
      validate({
        ...updatedUser,
        [name]: value,
      })
    );
    const allErrors = Object.values(errors).length;
    console.log(allErrors);
    if (!allErrors) {
      setErrorButton(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const allErrors = Object.values(errors).length;
    // if (!allErrors) {
    setSubmited(true);
    setTimeout(() => {
      setSubmited(false);
    }, 3000);
    dispatch(updateEmployee(id, updatedUser));
    setErrorButton(true);

    setUpdatedUser({
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
    console.log(updatedUser.birthDate);

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
    // }
  };

  const handleSelect = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
    if (name === "role") {
      setUpdatedUser({
        ...updatedUser,
        [name]: value,
      });
    }
  };

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
                errors={errors}
                users={updatedUser}
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

export default EditEmployee;
