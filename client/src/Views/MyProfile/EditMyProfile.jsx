import { useState } from "react";
import { useDispatch } from "react-redux";
import SideBar from "../../Components/SideBar/SideBar";



const EditMyProfile = () => {

    // const myProfile = useSelector(state => state.myProfile)
    const myProfile = {
            id: 3,
          name: "Pedro",
          lastName: "Martinez",
          email: "p.martinez@mail.com",
          avatar: "https://randomuser.me/api/portraits/men/3.jpg",
          birthDate: "1988-10-15",
          dni: "34567890C",
          phone: "+3456789012",
          direction: "789 Oak St, Anytown",
        };

    const dispatch = useDispatch();

    const [employee, setEmployee] = useState({
        name: myProfile.name,
        lastName: myProfile.lastName,
        email: myProfile.email,
        avatar: myProfile.avatar,
        birthDate: myProfile.birthDate,
        dni: myProfile.dni,
        phone: myProfile.phone,
        direction: myProfile.direction,
    })
    
    const handleChange = (event) => {
        const property = event.target.name;
        const value= event.target.value;

        setEmployee({...employee, [property]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(editEmployee(employee));
      };

      //es una action  
    const editEmployee = () => {}

    return(
        <form
      onSubmit={handleSubmit}
      className="grid grid-cols-6 grid-rows-1 h-screen"
    >
      <SideBar />
      <div className="col-span-5 p-8 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-6 border-2 border-gray-800 px-10 py-4 rounded-2xl shadow-md shadow-slate-300 bg-slate-200">
          <div className="text-center">
            <span className="text-4xl">Add Employee</span>
          </div>
          <div className="flex gap-16">
            <div>
              <div>
                <label className="text-base">Name: </label>
                <input
                  onChange={handleChange}
                  name="name"
                  value={employee.name}
                  type="text"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="First Name"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">Last Name: </label>
                <input
                  onChange={handleChange}
                  name="lastName"
                  value={employee.lastname}
                  type="text"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="Last Name"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">Birth Date: </label>
                <input
                  onChange={handleChange}
                  name="birthDate"
                  value={employee.birthdate}
                  type="date"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">E-mail: </label>
                <input
                  onChange={handleChange}
                  name="email"
                  value={employee.email}
                  type="text"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. email@example.com"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">DNI: </label>
                <input
                  onChange={handleChange}
                  name="dni"
                  value={employee.dni}
                  type="number"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. 45678901D"
                ></input>
              </div>
            </div>
            <div>
              <div>
                <label className="text-base">Telephone: </label>
                <input
                  onChange={handleChange}
                  name="tel"
                  value={employee.phone}
                  type="number"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. 4567890123"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">Address: </label>
                <input
                  onChange={handleChange}
                  name="address"
                  value={employee.address}
                  type="text"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. 012 Elm St, Anytown"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">Role: </label>
                <select
                  onChange={handleChange}
                  name="role"
                  value={employee.role}
                  type="text"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. Accountant"
                >
                  <option value="SuperAdmin">SuperAdmin</option>
                  <option value="Admin" selected>
                    Admin
                  </option>
                  <option value="User">User</option>
                </select>
              </div>
              <div className="my-6">
                <label className="text-base">Image: </label>
                <input
                  onChange={handleChange}
                  name="image"
                  value={employee.image}
                  type="text"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. Finance"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
            //   disabled={errorButton}
              className="border-2 border-gray-600 w-24 h-9 rounded-2xl shadow-md shadow-slate-300 bg-gray-800 text-slate-300"
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </form>
    )
}

export default EditMyProfile;