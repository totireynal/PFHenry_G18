import SideBar from "../../../Components/SideBar/SideBar";

const EditEmployee = () => {
  return (
    <div className="grid grid-cols-6 grid-rows-1 h-screen">
      <SideBar />
      <div className="col-span-5 p-8 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-6 px-10 py-4 rounded-2xl shadow-md shadow-slate-500 bg-slate-200">
          <div className="text-center">
            <span className="text-4xl">Edit Employee</span>
          </div>
          <div className="flex gap-16">
            <div>
              <div>
                <label className="text-base">Name: </label>
                <input
                  type="text"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="First Name"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">Last Name: </label>
                <input
                  type="text"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="Last Name"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">Birth Date: </label>
                <input
                  type="date"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">E-mail: </label>
                <input
                  type="text"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. email@example.com"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">DNI: </label>
                <input
                  type="number"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. 45678901D"
                ></input>
              </div>
            </div>
            <div>
              <div>
                <label className="text-base">Phone: </label>
                <input
                  type="number"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. 4567890123"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">Direction: </label>
                <input
                  type="text"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. 012 Elm St, Anytown"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">Position: </label>
                <input
                  type="text"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. Accountant"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">Area: </label>
                <input
                  type="text"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                  placeholder="eg. Finance"
                ></input>
              </div>
              <div className="my-6">
                <label className="text-base">Admission Date: </label>
                <input
                  type="date"
                  className="rounded-md border-2 border-gray-800 block w-56 h-10 px-2"
                ></input>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="border-2 border-gray-600 w-24 h-9 rounded-2xl shadow-md shadow-slate-300 bg-gray-800 text-slate-300">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditEmployee;
