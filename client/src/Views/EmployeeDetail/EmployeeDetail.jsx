import { useParams } from "react-router-dom";
import style from "./EmployeeDetail.module.css";
import { users } from "../../Utils";
import SideBar from "../../Components/SideBar/SideBar";

const EmployeeDetail = () => {
  const { id } = useParams();

  const user = users.find((item) => item.id === Number(id));

  const {
    name,
    lastName,
    email,
    avatar,
    birthDate,
    dni,
    phone,
    direction,
    admissionDate,
    position,
    area,
  } = user;

  return (
    <div className="grid grid-cols-6 grid-rows-1 h-screen">
      <SideBar />
      <div className="col-span-5 p-8">
        <div className={style.buttonCointainer}>
          <button className={style.editButton}>Edit Employee</button>
        </div>
        <div className={style.mainCointainer}>
          <div className={style.dataCointainer}>
            <div className={style.firstContainer}>
              <p>Name: {name}</p>
              <p>Last Name: {lastName}</p>
              <p>Birth Date: {birthDate}</p>
              <p>E-mail: {email}</p>
            </div>
            <div className={style.imageContainer}>
              <img src={avatar} alt={name} className={style.profileImage}></img>
            </div>
          </div>
          <div className={style.secondContainer}>
            <div className={style.oneContainer}>
              <p>DNI: {dni}</p>
              <p>Phone: {phone}</p>
              <p>Direction: {direction}</p>
            </div>
            <div className={style.twoContainer}>
              <p>Position: {position}</p>
              <p>Area: {area}</p>
              <p>Admission Date: {admissionDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;
