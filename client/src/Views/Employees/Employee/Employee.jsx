import style from "./Employee.module.css";

const Employee = (props) => {
  return (
    <div className={style.mainCointainer}>
      <div className={style.namesContainer}>
        <p>{props.name}</p>
        <p>{props.lastName}</p>
      </div>
      <img
        src={props.avatar}
        alt={props.name}
        className={style.imageContainer}
      ></img>
      <span>{props.position}</span>
    </div>
  );
};

export default Employee;
