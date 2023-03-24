import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import {
  deleteEmployee,
  getEmployeeDetail,
} from "../../state/redux/actions/actions";

const EmployeeDetail = () => {
  let { id } = useParams();

  let employeeDetail = useSelector((state) => state.employeeDetail);

  let navigate = useNavigate();

  let dispatch = useDispatch();

  let refModal = useRef();

  let refDivModal = useRef();

  const modalActive = () => {
    refModal.current.style.display = "flex";
    refDivModal.current.style.transform = "scale-1";
    refDivModal.current.style.opacity = "1";
  };

  const deletedEmplote = () => {
    dispatch(deleteEmployee(id));
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getEmployeeDetail(id));
  }, [id, dispatch]);

  const {
    name,
    lastName,
    birthDate,
    email,
    address,
    dni,
    tel,
    role,
    position,
    area,
    cuil,
    cbu,
    dateOfAdmission,
    // image,
  } = employeeDetail;

  return (
    <div className="">
      {/* <div className="w-full h-[500px] ml-72 border shadow-2xl border-black"> */}
      <div className="w-full h-[500px] ml-72 shadow-2xl rounded-3xl">
        <div className="flex flex-row w-full h-1/2">
          <div className="w-1/2 h-full">
            <img
              src="https://res.cloudinary.com/dtqhqhc9e/image/upload/v1679583901/Images/xzbq1dsuewfxlhzqnrmd.jpg"
              alt="profilepic"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col w-1/2 h-full">
            <div className="flex flex-row h-1/2 bg-white gap-2 text-4xl pl-4 font-bold items-center justify-center">
              <p>{name}</p>
              <p>{lastName}</p>
            </div>
            <div className="flex flex-col h-1/2 gap-2 text-2xl pl-4 justify-center items-start font-medium">
              <p>Position: {position}</p>
              <p>Area: {area}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full h-1/2 font-normal text-xl pl-4 pt-9 bg-white">
          <div className="w-full h-1/3">
            <div
              onClick={() => {
                refModal.current.style = "none";
              }}
              ref={refModal}
              className="fixed w-screen h-screen justify-center items-center bg-black bg-opacity-50 hidden z-10"
            >
              <div
                ref={refDivModal}
                className="flex flex-col justify-between w-[600px] h-[200px] bg-white rounded p-6 text-xl transition-all duration-100"
              >
                <h3>Esta seguro que quiere borrar a este empleado?</h3>
                <div className="text-end text-base flex justify-between">
                  <div className="flex justify-center items-center text-base  bg-green-400 rounded w-60 opacity-0">
                    <p className="pr-42 pl-2 py-1">Se deleteo</p>
                  </div>
                  <div>
                    <button
                      className="mr-6 px-6 py-2 bg-blue-400 rounded"
                      onClick={deletedEmplote}
                    >
                      Delete
                    </button>
                    <button
                      className=" px-6 py-2 bg-red-400 rounded"
                      onClick={() => (refModal.current.style = "none")}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div className="flex flex-col w-fit gap-6 text-start">
                <p className="font-medium">Role: {role}</p>
                {/* <Link to="/employees">
                  <button className="bg-sky-700 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600">
                    Back
                  </button>
                </Link> */}

                <Link to={`/editemployee/${id}`}>
                  <button className="bg-sky-700 text-xs text-white rounded overflow-hidden px-8 py-2 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600">
                    Edit Employee
                  </button>
                </Link>

                <button
                  className="bg-sky-700 text-xs text-white rounded overflow-hidden px-8 py-2 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600"
                  onClick={modalActive}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-1/3">
            <p className="mb-5">Birth Date: {birthDate}</p>
            <p className="mb-5">DNI: {dni}</p>
            <p className="mb-5">Phone: {tel}</p>
            <p className="mb-5">Address: {address}</p>
          </div>
          <div className="w-full h-1/3">
            <p className="mb-5">E-mail: {email}</p>
            <p className="mb-5">Date of Admission: {dateOfAdmission}</p>
            <p className="mb-5">Cuil: {cuil}</p>
            <p className="mb-5">CBU: {cbu}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
