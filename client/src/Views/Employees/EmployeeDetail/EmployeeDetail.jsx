// import style from "./EmployeeDetail.module.css";

// const EmployeeDetail = () => {
//   return <div className={style.mainCointainer}></div>;
// };

// export default EmployeeDetail;

import style from "./EmployeeDetail.module.css";

const EmployeeDetail = (props) => {
  return (
    <div className={style.mainCointainer}>
      <div className={style.namesContainer}>
        <p>{props.nombre}</p>
        <p>{props.apellido}</p>
      </div>
      <img src={props.avatar} alt={props.nombre}></img>
      <p>Email: {props.email}</p>
    </div>
  );
};

export default EmployeeDetail;
