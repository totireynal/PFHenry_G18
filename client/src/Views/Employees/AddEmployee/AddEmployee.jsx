import SideBar from "../../../Components/SideBar/SideBar";

const AddEmployee = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-1 h-screen">
      <SideBar />
      <div className="col-span-5 px-8 pb-8 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-16 border-2 border-black p-10">
          <div className="text-center">
            <span className="text-5xl">Add Employee</span>
          </div>
          <div className="flex gap-16">
            <div>
              <div>
                <label>Name: </label>
                <input className="border-2 border-black block"></input>
              </div>
              <div>
                <label>Last Name: </label>
                <input className="border-2 border-black block"></input>
              </div>
              <div>
                <label>Birth Date: </label>
                <input className="border-2 border-black block"></input>
              </div>
              <div>
                <label>E-mail: </label>
                <input className="border-2 border-black block"></input>
              </div>
              <div>
                <label>DNI: </label>
                <input className="border-2 border-black block"></input>
              </div>
            </div>
            <div>
              <div>
                <label>Phone: </label>
                <input className="border-2 border-black block"></input>
              </div>
              <div>
                <label>Direction: </label>
                <input className="border-2 border-black block"></input>
              </div>
              <div>
                <label>Position: </label>
                <input className="border-2 border-black block"></input>
              </div>
              <div>
                <label>Area: </label>
                <input className="border-2 border-black block"></input>
              </div>
              <div>
                <label>Admission Date: </label>
                <input className="border-2 border-black block"></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
