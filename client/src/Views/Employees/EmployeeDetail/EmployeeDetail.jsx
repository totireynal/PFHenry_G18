// import style from "./EmployeeDetail.module.css";

// const EmployeeDetail = () => {
//   return <div className={style.mainCointainer}></div>;
// };

// export default EmployeeDetail;

import { useParams } from "react-router-dom";
import style from "./EmployeeDetail.module.css";
import { users } from "../../../Utils";

const EmployeeDetail = () => {
  const { id } = useParams();
  console.log(id);
  console.log(1);
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
    <div className={style.mainCointainer}>
      <div className={style.namesContainer}>
        <p>{name}</p>
        <p>{lastName}</p>
      </div>
      <img src={avatar} alt={name}></img>
      <p>Email: {email}</p>
    </div>
  );
};

export default EmployeeDetail;
