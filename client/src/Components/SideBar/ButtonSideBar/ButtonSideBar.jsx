import { Link } from "react-router-dom";

const ButtonSideBar = ({ children, url, icon }) => {
  return (
    <div className="w-full ">
      <Link to={url}>
        <div className="relative w-full h-9 xl:m-0 ssm:my-5 hover:text-sky-400">
          <span class="absolute h-9  leading-9 xl:left-10 ssm:left-7 material-symbols-outlined">
            {icon}
          </span>
          <div className="">
            <button
              className=" h-9 p-2 w-full xl:inline-block ssm:hidden
            hover:border hover:border-sky-400 hover:shadow-md hover:shadow-sky-200 hover:text-sky-400"
            >
              {children}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ButtonSideBar;
