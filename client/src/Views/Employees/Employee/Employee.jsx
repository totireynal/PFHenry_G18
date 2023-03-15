import style from "./Employee.module.css";

const Employee = (props) => {
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

export default Employee;
