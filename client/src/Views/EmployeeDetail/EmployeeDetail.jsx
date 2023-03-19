import { Link, useParams } from "react-router-dom";
import style from "./EmployeeDetail.module.css";
import SideBar from "../../Components/SideBar/SideBar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEmployeeDetail } from "../../state/redux/actions/actions";

const EmployeeDetail = () => {
  let { id } = useParams();
  let employeeDetail = useSelector((state) => state.employeeDetail);

  let dispatch = useDispatch();

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
  } = employeeDetail;

  return (
    <div className="grid grid-cols-6 grid-rows-1 h-screen">
      <SideBar />
      <div className="col-span-5 p-8">
        <div className={style.buttonCointainer}>
          <Link to={`/editemployee/${id}`}>
            <button className="flex relative h-12 w-40 justify-center items-center rounded-md border border-solid border-black">
              Edit Employee
            </button>
          </Link>
        </div>
        {/* <div className={style.mainCointainer}> */}
        <div className="flex flex-col gap-24 items-center justify-center w-[700px] h-[280px] border rounded-3xl bg-slate-300 border-slate-500 shadow shadow-slate-700 hover:translate-y-1 hover:scale-104 transition ease-in-out delay-100 duration-400">
          <div className="flex flex-row h-[60px]">
            <p>Name: {name}</p>
            <p>Last Name: {lastName}</p>
            <p>E-mail: {email}</p>
          </div>
          <div className="flex flex-row items-center justify-center h-[220px]">
            <div className="text-xl w-[350px] flex items-center justify-center">
              <p>Birth Date: {birthDate}</p>
              <p>DNI: {dni}</p>
              <p>Phone: {tel}</p>
              <p>Address: {address}</p>
            </div>
            <div className="text-xl w-[350px]">
              <p>Role: {role}</p>
              <p>Position: {position}</p>
              <p>Area: {area}</p>
              <p>Cuil: {cuil}</p>
              <p>Cbu: {cbu}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
