import ButtonSideBar from "./ButtonSideBar/ButtonSideBar";
import { useSelector } from "react-redux";
import { useRef } from "react";


const SideBar = () => {

  const current = useSelector(state => state.currentEmployee)
  console.log(current, 'currr');

  const url = `/myprofile/${current}`



  return (
    <div className="h-screen  xl:w-60 ssm:w-20  border-r-2 ">
      <div className="h-screen flex flex-col justify-between items-center  w-full">
        <div className="flex py-16 items-center">
          {/* <i className="mr-2">logo</i> */}
          <div>
            <img 
              src="https://t3.ftcdn.net/jpg/00/73/99/94/360_F_73999426_RBb9vOl2ifBaaK3LavR21st0A6Q16G7N.jpg"
              alt="logo"
            />
          </div>
          {/* <span class="material-symbols-outlined">circle</span> */}
          <h2 className="xl:flex ssm:hidden font-bold text-2xl pl-2">
            StaffSphere
          </h2>
        </div>
        <div className="w-full font-medium flex items-center justify-center ">
          <div className="w-full">
            <div className="  ">
              <div className="w-full ">
                <div className="w-full">
                  <ButtonSideBar url="/dashboard" icon="dashboard">
                    Dashboard
                  </ButtonSideBar>
                </div>
                <ButtonSideBar url="/employees" icon="group">
                  Employees
                </ButtonSideBar>
                <ButtonSideBar url="/notifications" icon="notifications">
                  Notifications
                </ButtonSideBar>
                <ButtonSideBar url="/calendar" icon="calendar_month">
                  Calendar
                </ButtonSideBar>
                {/* <ButtonSideBar url="/organization">Organization</ButtonSideBar> */}
              </div>
            </div>
            <div>
              <div className="flex flex-col w-full xl:mt-10 ssm:mt-24">
                <ButtonSideBar url={url} icon="person">
                  My Profile
                </ButtonSideBar>
                <ButtonSideBar url="/home" icon="logout">
                  Log Out
                </ButtonSideBar>
              </div>
            </div>
          </div>
        </div>

        <img
          className="xl:inline-block ssm:hidden w-60 object-cover "
          src="https://datepsychology.com/wp-content/uploads/2022/09/gigachad.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default SideBar;
