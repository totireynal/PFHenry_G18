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
    image,
  } = employeeDetail;

  return (
    <>
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
      ;
      <div className="flex w-full h-screen ml-72 pt-16 pr-16">
        <div className="flex flex-col h-full w-[500px]">
          {/* <img
            src={image}
            alt="profilepic"
            className="object-cover w-full h-[40%] rounded-xl mb-10"
          /> */}
          <div>
            <p className="mb-10">
              <span className="font-medium">Role:</span> {role}
            </p>

            <Link to={`/editemployee/${id}`}>
              <button className="bg-sky-400 block mb-2 text-xs text-white rounded overflow-hidden px-8 py-2 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300">
                Edit Employee
              </button>
            </Link>
            <button
              className=" text-xs text-white rounded overflow-hidden px-8 py-2 active:translate-y-1 active:shadow-2xl bg-sky-400
 shadow-sky-200 hover:bg-sky-300 "
              onClick={modalActive}
            >
              Delete
            </button>
          </div>
        </div>
        ;
        <div className="w-full h-screen xl:ml-72 ssm:pl-36  pt-16 flex flex-col gap-10">
          <div className="flex gap-16">
            <img
              src={image}
              alt="profilepic"
              className="object-cover w-4/12 rounded-md"
            />
            <div className="flex felx-col gap-10 w-8/12 ">
              <div className="flex flex-col justify-center items-start gap-5">
                <div className="flex gap-5 text-6xl">
                  <p>{name}</p>
                  <p>{lastName}</p>
                </div>
                <div>
                  <p>
                    <span className="font-bold">Position:</span> {position}
                  </p>
                  <p>
                    <span className="font-bold">Area:</span> {area}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-16 ">
            <div className="w-4/12">
              <p className="">
                <span className="font-medium"> Role: </span>
                {role}
              </p>
              <p className="mb-5 text-xl">
                <span className="font-bold block">DNI:</span> {dni}
              </p>
              <p className="mb-5 text-xl">
                <span className="font-bold block">Phone:</span> {tel}
              </p>
              <p className="mb-5 text-xl">
                <span className="font-bold block">Address:</span> {address}
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="mb-5 text-xl">
                <span className="font-bold block">E-mail:</span> {email}
              </p>
              <p className="mb-5 text-xl">
                <span className="font-bold block">Date of Admission:</span>{" "}
                {dateOfAdmission}
              </p>
              <p className="mb-5 text-xl">
                <span className="font-bold block">Cuil:</span> {cuil}
              </p>
              <p className="mb-5 text-xl">
                <span className="font-bold block">CBU:</span> {cbu}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetail;
