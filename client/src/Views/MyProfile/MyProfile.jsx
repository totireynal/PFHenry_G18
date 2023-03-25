import { Link, useParams } from "react-router-dom";
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
    dateOfAdmission
  } = employeeDetail;



  return (
    <div className="w-full h-screen pt-16 ml-72">
      <div className="flex flex-row gap-6 items-center justify-center">
        {/* <button onClick={() => dispatch(deleteEmployee(id))}>Delete</button> */}
        <Link to={`/editemployee/${id}`}>
          <button className="bg-sky-700 text-white rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600">
            Edit Employee
          </button>
        </Link>
      </div>
      {/* <div className={style.mainCointainer}> */}
      <div className="m-auto mt-28 flex flex-col items-center justify-center w-[700px] h-[280px] rounded-3xl bg-slate-300 shadow shadow-slate-700 hover:translate-y-1 hover:scale-104 transition ease-in-out delay-100 duration-400 overflow-hidden">
        <div className="text-2xl flex flex-col items-center justify-center h-1/3 bg-slate-800 w-full text-slate-200">
          <div className="flex w-full h-1/2 items-end justify-center">
            <p>{role}</p>
          </div>
          <div className="flex flex-row gap-2 w-full h-1/2 justify-center items-start">
            <p>{name}</p>
            <p>{lastName}</p>
          </div>
        </div>
        <div className="flex flex-row items-center justify-center h-2/3 w-full ">
          <div className="text-xl flex flex-col w-1/2 h-full items-center justify-center ">
            <p>DNI: {dni}</p>
            <p>Phone: {tel}</p>
            <p>Birth Date: {birthDate}</p>
            <p>Address: {address}</p>
            <p>E-mail: {email}</p>
          </div>
          <div className="text-xl flex flex-col w-1/2 h-full items-center justify-center ">
            <p>Position: {position}</p>
            <p>Area: {area}</p>
            <p>Address: {dateOfAdmission}</p>
            <p>Cuil: {cuil}</p>
            <p>CBU: {cbu}</p>
          </div>
        </div>
      </div>
    </div>
  );
};





//   return (
//     <div className="grid grid-cols-6 grid-rows-1 h-screen">
      
//       <SideBar />
//       <div className="col-span-5 p-8">
//         <div className={style.buttonCointainer}>
//           {/* <button onClick={() => dispatch(deleteEmployee(id))}>Delete</button> */}
          
//           <Link to={`/editemployee/${id}`}>
//             <button className={style.editButton}>Edit Employee</button>
//           </Link>
//         </div>
//         <div className={style.mainCointainer}>
//           <p>Name: {name}</p>
//           <p>Last Name: {lastName}</p>
//           <p>Birth Date: {birthDate}</p>
//           <p>E-mail: {email}</p>
//           <p>DNI: {dni}</p>
//           <p>Phone: {tel}</p>
//           <p>Address: {address}</p>
//           <p>Role: {role}</p>
//           <p>Position: {position}</p>
//           <p>Area: {area}</p>
//           <p>Cuil: {cuil}</p>
//           <p>Cbu: {cbu}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

export default EmployeeDetail;