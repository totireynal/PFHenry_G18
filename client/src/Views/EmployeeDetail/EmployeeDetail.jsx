import { Link, useNavigate, useParams } from "react-router-dom";
import style from "./EmployeeDetail.module.css";
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

  const { answer, showAnswer } = useAnswer();

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
    navigate("/employees");
  };

  useEffect(() => {
    dispatch(getEmployeeDetail(id, showAnswer));
  }, [id, dispatch, showAnswer]);

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
  } = employeeDetail;

  return (
    <div className="grid grid-cols-6 grid-rows-1 h-screen">
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
          <div className="text-end text-base flex justify-between  ">
            <div
              
              className="flex justify-center items-center text-base  bg-green-400 rounded w-60 opacity-0"
            >
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
      <SideBar />
      <div className="col-span-5 p-8">
        <div className={style.buttonCointainer}>
          {/* <button onClick={() => dispatch(deleteEmployee(id))}>Delete</button> */}
          <button
            className="fixed right-8 top-8 px-6 py-2 bg-blue-400 rounded z-0"
            onClick={modalActive}
          >
            Delete
          </button>
          <Link to={`/editemployee/${id}`}>
            <button className={style.editButton}>Edit Employee</button>
          </Link>
        </div>
        <div className={style.mainCointainer}>
          <p>Name: {name}</p>
          <p>Last Name: {lastName}</p>
          <p>Birth Date: {birthDate}</p>
          <p>E-mail: {email}</p>
          <p>DNI: {dni}</p>
          <p>Phone: {tel}</p>
          <p>Address: {address}</p>
          <p>Role: {role}</p>
          <p>Position: {position}</p>
          <p>Area: {area}</p>
          <p>Cuil: {cuil}</p>
          <p>Cbu: {cbu}</p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
