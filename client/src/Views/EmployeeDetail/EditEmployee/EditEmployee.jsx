import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import SideBar from "../../../Components/SideBar/SideBar";
import { updateEmployee } from "../../../state/redux/actions/actions";
import validate from "./validate";
import InputForm from "../../../Components/InputForm";

const EditEmployee = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [submited, setSubmited] = useState(false)
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    lastName: "",
    birthDate: "",
    email: "",
    dni: "",
    tel: "",
    adress: "",
    position: "",
    area: "",
    dateOfAdmission: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    lastName: '',
    birthDate: '',
    email: '',
    dni: '',
    tel: '',
    adress: '',
    position: '',
    area: '',
    dateOfAdmission: '',
  });

  const handleInput = (e) => {
    const { value, name } = e.target;

    setUpdatedUser({
      ...updatedUser,
      [name]: value,
    });

    setErrors(
      validate({
        ...updatedUser,
        [name]: value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allErrors = Object.values(errors).length;
    if (!allErrors) {
      setSubmited(true);
      setTimeout(() => {
        setSubmited(false);
      }, 3000);
      dispatch(updateEmployee(id, updatedUser));

      setUpdatedUser({
        name: "",
        lastName: "",
        birthDate: "",
        email: "",
        dni: "",
        tel: "",
        adress: "",
        position: "",
        area: "",
        dateOfAdmission: "",
      });
      console.log(updatedUser.birthDate);

      setErrors({
        name: "",
        lastName: "",
        birthDate: "",
        email: "",
        dni: "",
        tel: "",
        adress: "",
        position: "",
        area: "",
        dateOfAdmission: "",
      });
      console.log('faaa');
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
              <form
                onSubmit={handleSubmit}
                className="flex flex-col justify-center items-center"
              >
                <div className="flex gap-8 justify-center items-center mb-10">
                  <div>
                    <InputForm
                      label="Name"
                      placeholder="Name"
                      type="text"
                      name="name"
                      value={updatedUser.name}
                      handler={handleInput}
                      id="name"
                      error={errors.name}
                    />

                    <InputForm
                      label="Last Name"
                      placeholder="Last Name"
                      type="text"
                      name="lastName"
                      value={updatedUser.lastName}
                      handler={handleInput}
                      id="lastName"
                      error={errors.lastName}
                    />

                    <InputForm
                      label="Birth Date"
                      placeholder="Birth Date"
                      type="date"
                      name="birthDate"
                      value={updatedUser.birthDate}
                      handler={handleInput}
                      id="birthDate"
                      error={errors.birthDate}
                    />

                    <InputForm
                      label="Email"
                      placeholder="Email"
                      type="text"
                      name="email"
                      value={updatedUser.email}
                      handler={handleInput}
                      id="email"
                      error={errors.email}
                    />

                    <InputForm
                      label="DNI"
                      placeholder="DNI"
                      type="text"
                      name="dni"
                      value={updatedUser.dni}
                      handler={handleInput}
                      id="dni"
                      error={errors.dni}
                    />
                  </div>
                  <div>
                    <InputForm
                      label="Phone"
                      placeholder="Phone"
                      type="text"
                      name="tel"
                      value={updatedUser.tel}
                      handler={handleInput}
                      id="tel"
                      error={errors.tel}
                    />

                    <InputForm
                      label="Adress"
                      placeholder="Adress"
                      type="text"
                      name="adress"
                      value={updatedUser.adress}
                      handler={handleInput}
                      id="address"
                      error={errors.adress}
                    />

                    <InputForm
                      label="Position"
                      placeholder="Position"
                      type="text"
                      name="position"
                      value={updatedUser.position}
                      handler={handleInput}
                      id="position"
                      error={errors.position}
                    />

                    <InputForm
                      label="Area"
                      placeholder="Area"
                      type="text"
                      name="area"
                      value={updatedUser.area}
                      handler={handleInput}
                      id="area"
                      error={errors.area}
                    />

                    <InputForm
                      label="Admission Date"
                      placeholder="Admission Date"
                      type="date"
                      name="dateOfAdmission"
                      value={updatedUser.dateOfAdmission}
                      handler={handleInput}
                      id="dateOfAdmission"
                      error={errors.dateOfAdmission}
                    />
                  </div>
                </div>

                <button
                  onClick={handleInput}
                  className="border-2 border-gray-600 w-24 h-9 rounded-2xl shadow-md shadow-slate-300 bg-gray-800 text-slate-300"
                >
                  Edit
                </button>
                {submited && (
                  <p className="text-green-800">
                    El formulario ha sido enviado
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
