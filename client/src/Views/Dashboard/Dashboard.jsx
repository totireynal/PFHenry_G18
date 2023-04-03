import EmployeeList from "../../Components/Birthday/Birthday.js"
// eslint-disable-next-line no-unused-vars
import EmployeeRetention from "../../Components/Charts/BarChart.js"
import DoughnuChart from "../../Components/Charts/DoughnuChart.js"

const Dashboarts = () => {
  return (
    <div className="w-full h-screen ml-72">
      
        {/* <EmployeeRetention/> */}
      <DoughnuChart/>
      <EmployeeList/>
    </div>
  );
};

export default Dashboarts;
