// import Button from "../../Components/Button";
// import { Link } from "react-router-dom";
import Employee from "./Employee/Employee";
import style from "./Employees.module.css";
import SearchBar from "./SearchBar/SearchBar";

const Employees = () => {
  const users = [
    {
      id: 1,
      nombre: "Juan",
      apellido: "García",
      email: "j.garcia@mail.com",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      nombre: "María",
      apellido: "Pérez",
      email: "m.perez@mail.com",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      nombre: "Pedro",
      apellido: "López",
      email: "p.lopez@mail.com",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      id: 4,
      nombre: "Ana",
      apellido: "González",
      email: "a.gonzalez@mail.com",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      id: 5,
      nombre: "Carlos",
      apellido: "Martínez",
      email: "c.martinez@mail.com",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      id: 6,
      nombre: "Lucía",
      apellido: "Sánchez",
      email: "l.sanchez@mail.com",
      avatar: "https://randomuser.me/api/portraits/women/6.jpg",
    },
    {
      id: 7,
      nombre: "Fernando",
      apellido: "Rodríguez",
      email: "f.rodriguez@mail.com",
      avatar: "https://randomuser.me/api/portraits/men/7.jpg",
    },
    {
      id: 8,
      nombre: "Sofía",
      apellido: "Gómez",
      email: "s.gomez@mail.com",
      avatar: "https://randomuser.me/api/portraits/women/8.jpg",
    },
    {
      id: 9,
      nombre: "Diego",
      apellido: "Hernández",
      email: "d.hernandez@mail.com",
      avatar: "https://randomuser.me/api/portraits/men/9.jpg",
    },
    {
      id: 10,
      nombre: "Marta",
      apellido: "Jiménez",
      email: "m.jimenez@mail.com",
      avatar: "https://randomuser.me/api/portraits/women/10.jpg",
    },
    {
      id: 11,
      nombre: "Javier",
      apellido: "Alvarez",
      email: "j.alvarez@mail.com",
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: 12,
      nombre: "Raquel",
      apellido: "Gutiérrez",
      email: "r.gutierrez@mail.com",
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
    {
      id: 13,
      nombre: "Luis",
      apellido: "Santos",
      email: "l.santos@mail.com",
      avatar: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      id: 14,
      nombre: "Ana",
      apellido: "Soto",
      email: "a.soto@mail.com",
      avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      id: 15,
      nombre: "Prueba Carlos",
      apellido: "Soto",
      email: "a.soto@mail.com",
      avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    },
  ];

  return (
    // <Link to={`/employees/1`}>
    //   <Button>Employee</Button>
    // </Link>
    <div>
      <div className={style.titleContainer}>
        <h2>List of Employees</h2>
        <SearchBar />
      </div>
      <div className={style.cardsContainer}>
        {users.map((user) => {
          return (
            <Employee
              nombre={user.nombre}
              apellido={user.apellido}
              email={user.email}
              avatar={user.avatar}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Employees;
