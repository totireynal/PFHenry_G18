// import { Link } from "react-router-dom";

const ButtonSideBar = ({ children, url, icon, active, handleActive }) => {
  return (
    <div className="w-full ">
      {/* <Link to={url}> */}
        <div>
        {/* <div
          onClick={() => handleActive(children)}
          className={`${active &&
            "text-sky-400"} relative w-full h-9 xl:m-0 ssm:my-5 hover:text-sky-800`}
        > */}
          <span class="absolute h-9  leading-9 xl:left-10 ssm:left-7 material-symbols-outlined text-gray-300">
            {icon}
          </span>
          <div className="">
            <button
              className={`${active &&
                "shadow-sky-100 shadow-lg border-t"}  h-9 p-2 w-full xl:inline-block ssm:hidden
             hover:border-t hover:shadow-lg hover:shadow-sky-200 hover:text-sky-100 text-gray-300`}
            >
              {children}
            </button>
          </div>
        </div>
      {/* </Link> */}
    </div>
  );
};

export default ButtonSideBar;
