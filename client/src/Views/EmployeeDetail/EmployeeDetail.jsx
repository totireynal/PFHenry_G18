import { Link, useNavigate, useParams } from "react-router-dom";
import SideBar from "../../Components/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import {
  deleteEmployee,
  getEmployeeDetail,
} from "../../state/redux/actions/actions";
import { useAnswer } from "../../Utils/hooks/answer";

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
  } = employeeDetail;

  return (
    <div className='grid grid-cols-6 grid-rows-1 h-screen'>
      <div
        onClick={() => {
          refModal.current.style = "none";
        }}
        ref={refModal}
        className='fixed w-screen h-screen justify-center items-center bg-black bg-opacity-50 hidden z-10'
      >
        <div
          ref={refDivModal}
          className='flex flex-col justify-between w-[600px] h-[200px] bg-white rounded p-6 text-xl transition-all duration-100'
        >
          <h3>Esta seguro que quiere borrar a este empleado?</h3>
          <div className='text-end text-base flex justify-between  '>
            <div className='flex justify-center items-center text-base  bg-green-400 rounded w-60 opacity-0'>
              <p className='pr-42 pl-2 py-1'>Se deleteo</p>
            </div>
            <div>
              <button
                className='mr-6 px-6 py-2 bg-blue-400 rounded'
                onClick={deletedEmplote}
              >
                Delete
              </button>
              <button
                className=' px-6 py-2 bg-red-400 rounded'
                onClick={() => (refModal.current.style = "none")}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <SideBar />
      <div className='col-span-5 p-8'>
        <div className='flex flex-row gap-6 items-center justify-center'>
          {/* <button onClick={() => dispatch(deleteEmployee(id))}>Delete</button> */}
          <Link to={`/editemployee/${id}`}>
            <button className='bg-sky-700 text-white rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600'>
              Edit Employee
            </button>
          </Link>
          <button
            className='bg-sky-700 text-white rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600'
            onClick={modalActive}
          >
            Delete
          </button>
        </div>
        {/* <div className={style.mainCointainer}> */}
        <div className='m-auto mt-28 flex flex-col items-center justify-center w-[700px] h-[280px] rounded-3xl bg-slate-300 shadow shadow-slate-700 hover:translate-y-1 hover:scale-104 transition ease-in-out delay-100 duration-400 overflow-hidden'>
          <div className='text-2xl flex flex-col items-center justify-center h-1/3 bg-slate-800 w-full text-slate-200'>
            <div className='flex w-full h-1/2 items-end justify-center'>
              <p>{role}</p>
            </div>
            <div className='flex flex-row gap-2 w-full h-1/2 justify-center items-start'>
              <p>{name}</p>
              <p>{lastName}</p>
            </div>
          </div>
          <div className='flex flex-row items-center justify-center h-2/3 w-full '>
            <div className='text-xl flex flex-col w-1/2 h-full items-center justify-center '>
              <p>DNI: {dni}</p>
              <p>Phone: {tel}</p>
              <p>Birth Date: {birthDate}</p>
              <p>Address: {address}</p>
              <p>E-mail: {email}</p>
            </div>
            <div className='text-xl flex flex-col w-1/2 h-full items-center justify-center '>
              <p>Position: {position}</p>
              <p>Area: {area}</p>
              <p>Address: {dateOfAdmission}</p>
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
