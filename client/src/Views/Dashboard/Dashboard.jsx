import EmployeeList from "../../Components/Birthday/Birthday.js"
import EmployeeRetention from "../../Components/Charts/BarChart.js"
import DoughnuChart from "../../Components/Charts/DoughnuChart.js"

const Dashboarts = () => {
  return (
    <div className="w-full h-screen ml-72">
      <EmployeeList/>
      <EmployeeRetention/>
      <DoughnuChart/>
    </div>
  );
};

export default Dashboarts;
