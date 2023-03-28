import ButtonSideBar from "./ButtonSideBar/ButtonSideBar";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { resetCurrentEmployee } from '../../state/redux/actions/actions'
import { useCookies } from 'react-cookie';



const SideBar = () => {

  const dispatch = useDispatch();

  const [cookies, removeCookie] = useCookies(['token']);


  const current = useSelector(state => state.currentEmployee)
  const currentEmployee = useSelector((state) => state.employeeDetail);

  console.log(current, 'currr');

  const url = `/myprofile/${current.id}`

  const { 
    logout,
  } = useAuth0();

const handleLogout = (event) => {
  // dispatch(resetCurrentEmployee());
  // removeCookie('token');
  logout();
}


  return (
    <div className="h-screen  xl:w-60 ssm:w-20  border-r-2 ">
      <div className="h-screen flex flex-col justify-between items-center  w-full">
        <div className="flex py-16 items-center">
          {/* <i className="mr-2">logo</i> */}
          <div className="text-start">
            <img
              className="object-cover w-12"
              src="https://res.cloudinary.com/dtqhqhc9e/image/upload/v1679883961/Images/mqu3wnxbcotfu4t0gbqx.png"
              alt="logo"
            />
          </div>
          {/* <span class="material-symbols-outlined">circle</span> */}
          <h2 className="text-start xl:flex ssm:hidden font-bold text-2xl ">
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
                <div
                  className="relative w-full h-9 xl:m-0 ssm:my-5 hover:text-sky-400 cursor-pointer"
                  onClick={handleLogout}
                  // onClick={() => logout()}
                >
                  <span className="absolute h-9  leading-9 xl:left-10 ssm:left-7 material-symbols-outlined">
                    logout
                  </span>
                  <div className="">
                    <button
                      className="h-9 p-2 w-full xl:inline-block ssm:hidden
             hover:border-t hover:shadow-lg hover:shadow-sky-200 hover:text-sky-400"
                    >
                      Logout
                    </button>
                  </div>
                </div>

                {/* <ButtonSideBar url="/home" icon="logout">
                  Log Out
                </ButtonSideBar> */}
              </div>
            </div>
          </div>
        </div>

        <img
          className="xl:inline-block h-[200px] ssm:hidden w-60 object-cover "
          src={current.image}
          alt=""
        />
      </div>
    </div>
  );
};

export default SideBar;