import style from "./Employee.module.css";

const Employee = (props) => {
  return (
    <div className={style.mainCointainer}>
      <div className={style.namesContainer}>
        <p>{props.name}</p>
        <p>{props.lastName}</p>
      </div>
      <img src={props.avatar} alt={props.name}></img>
      <p>{props.position}</p>
    </div>
  );
};

export default Employee;
