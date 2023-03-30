import AreaForm from "../../Components/AreaForm/AreaForm";
import PositionForm from "../../Components/PositionForm/PositionForm";

const Dashboarts = () => {
  return (
    <div className="w-full h-screen ml-72">
      {/* <span>View Dashboard</span> */}
      <div className="flex flex-row gap-6 items-center justify-center">
        <AreaForm />
        <PositionForm />
      </div>
    </div>
  );
};

export default Dashboarts;
