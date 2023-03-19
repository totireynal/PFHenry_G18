import { Link, useParams } from "react-router-dom";
import style from "../EmployeeDetail/EmployeeDetail.module.css";
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
          {/* <button onClick={() => dispatch(deleteEmployee(id))}>Delete</button> */}
          
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