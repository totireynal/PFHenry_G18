import { useState } from "react";
import SideBar from "../../Components/SideBar/SideBar";
import { Link } from "react-router-dom";

const MyProfile = () => {
  //cuando se loggea recibe userId
  //    estado global??
  //cuando se monta el componente se hace un get de los detalles de su informacion
  //    con userId?
  //se renderiza la info de empleado de la tabla user
  //un boton edit carga un componente Form que permite modificar los campos
  //    se precarga la info existente
  //    se validan los inputs
  //un submit hace un PUT al back
  //se devuelve y renderiza con la informacion modificada

  // {
  //   id: 3,
  //   name: "Pedro",
  //   lastName: "Martinez",
  //   email: "p.martinez@mail.com",
  //   avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  //   birthDate: "1988-10-15",
  //   dni: "34567890C",
  //   phone: "+3456789012",
  //   direction: "789 Oak St, Anytown",
  // //   admissionDate: "2018-05-01",
  // //   position: "Marketing Manager",
  // //   area: "Marketing",
  // }

  const getUserProfile = () => {};

  const [inputValue, setInputValue] = useState("");

  const handlerInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handlerGetProfile = () => {
    getUserProfile();
  };

  const profile = [
    {
      id: 3,
      name: "Pedro",
      lastName: "Martinez",
      email: "p.martinez@mail.com",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
      birthDate: "1988-10-15",
      dni: "34567890C",
      phone: "+3456789012",
      direction: "789 Oak St, Anytown",
    },
  ];

  return (
    <div className="grid grid-cols-6 grid-rows-1 h-screen">
      <SideBar />

      <div>
        <input
          type="text"
          placeholder="id"
          value={inputValue}
          onChange={handlerInputChange}
        />
        <button onClick={handlerGetProfile}>Get Profile</button>
      </div>

      <div>
        {profile.map((item) => (
          <div key={item.id}>
            <p>Name: {item.name}</p>
            <p>Last Name: {item.lastName}</p>
            <p>Birth Date: {item.birthDate}</p>
            <p>E-mail: {item.email}</p>
            <p>DNI: {item.dni}</p>
            <p>Phone: {item.phone}</p>
            <p>Direction: {item.direction}</p>
            <img src={item.avatar} alt={item.name} className=""></img>
          </div>
        ))}
      </div>

      <Link to="/myprofile/edit">
        <div className="">
          <button>Edit</button>
        </div>
      </Link>
    </div>
  );
};

export default MyProfile;
