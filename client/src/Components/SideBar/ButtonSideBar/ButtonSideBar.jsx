import { Link } from "react-router-dom";

const ButtonSideBar = ({ children, url }) => {
  return (
    <div>
      <Link to={url}>
        <button>{children}</button>
      </Link>
    </div>
  );
};

export default ButtonSideBar;
