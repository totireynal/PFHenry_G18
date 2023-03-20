import ButtonSideBar from "./ButtonSideBar/ButtonSideBar";
import { useSelector } from "react-redux";


const SideBar = () => {

  const current = useSelector(state => state.currentEmployee)
  const redirect = current.id;
  const url = `/myprofile/${redirect}`

  return (
    <div className="h-screen bg-slate-300 w-52">
      <div className="h-screen flex flex-col justify-between items-center">
        <div className="flex py-16">
          <i className="mr-2">logo</i>
          <h1>StaffSphere</h1>
        </div>
        <div className="">
          <div className=" grid items-end grid-cols-1 grid-rows-2 justify-between">
            <div className="flex flex-col gap-4">
              <ButtonSideBar url="/dashboard">Dashboard</ButtonSideBar>
              <ButtonSideBar url="/employees">Employees</ButtonSideBar>
              <ButtonSideBar url="/notifications">Notifications</ButtonSideBar>
              <ButtonSideBar url="/calendar">Calendar</ButtonSideBar>
              {/* <ButtonSideBar url="/organization">Organization</ButtonSideBar> */}
            </div>
            <div>
              <div className="flex flex-col gap-4">
                <ButtonSideBar url={url}>My Profile</ButtonSideBar>
                <ButtonSideBar url="/home">Log Out</ButtonSideBar>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-52 object-cover"
          src="https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default SideBar;
