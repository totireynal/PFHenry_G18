import { Link, useNavigate, useParams } from "react-router-dom";
import SideBar from "../../Components/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import {
  deleteEmployee,
  getEmployeeDetail,
} from "../../state/redux/actions/actions";
import { useAnswer } from "../../utils/hooks/answer";

const EmployeeDetail = () => {
  let { id } = useParams();
  let employeeDetail = useSelector((state) => state.employeeDetail);
  let navigate = useNavigate();

  // const { answer, showAnswer } = useAnswer();

  let dispatch = useDispatch();
  let refModal = useRef();
  let refDivModal = useRef();
  let refSuccessful = useRef();

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
    image,
  } = employeeDetail;

  return (
    <div className="w-full h-screen ml-72 pt-16">
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
        <div className="flex flex-row gap-6 items-center justify-center">
          {/* <button onClick={() => dispatch(deleteEmployee(id))}>Delete</button> */}
          <Link to="/employees">
            <button className="bg-sky-700 text-white rounded overflow-hidden px-16 py-3 right-10 top-10 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600">
              Back
            </button>
          </Link>

          <Link to={`/editemployee/${id}`}>
            <button className="bg-sky-700 text-white rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600">
              Edit Employee
            </button>
          </Link>

          <button
            className="bg-sky-700 text-white rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600"
            onClick={modalActive}
          >
            Delete
          </button>
        </div>
        <div className="bg-white rounded-xl h-96 w-2/3 border z-0 hover:z-10 hover:shadow-2xl hover:-translate-y-1 transition duration-100 overflow-hidden relative">
          <div className="flex flex-row h-36 bg-slate-100">
            <img className="object-cover h-36" src={image} alt="" />
            <div className="flex flex-col items-center justify-center w-full">
              <div className="flex items-end justify-center h-1/2  w-full text-2xl">
                <img
                  src="https://res.cloudinary.com/dtqhqhc9e/image/upload/v1679583901/Images/xzbq1dsuewfxlhzqnrmd.jpg"
                  alt="profilepic"
                />
                <p>{role}</p>
              </div>
              <div className="flex items-start justify-center h-1/2  w-full gap-1 font-bold text-3xl ">
                <p>{name}</p>
                <p>{lastName}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row h-full">
            <div className="flex flex-col w-1/2 h-full items-center justify-center text-1xl">
              <p>DNI: {dni}</p>
              <p>Phone: {tel}</p>
              <p>Birth Date: {birthDate}</p>
              <p>Address: {address}</p>
              <p>E-mail: {email}</p>
            </div>
            <div className="flex flex-col w-1/2 h-full items-center justify-center text-1xl">
              <p>Position: {position}</p>
              <p>Area: {area}</p>
              <p>Date of Admission: {dateOfAdmission}</p>
              <p>Cuil: {cuil}</p>
              <p>CBU: {cbu}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
