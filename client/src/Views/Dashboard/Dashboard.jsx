import EmployeeList from "../../Components/Birthday/Birthday.js"
import EmployeeRetention from "../../Components/Charts/BarChart.js"
import DoughnuChart from "../../Components/Charts/DoughnuChart.js"
import EventsDashboards from "../../Components/EventsDashboard/EventsDashboard.jsx";

const Dashboarts = () => {
  return (
    <div className="w-full h-screen ml-72">
      
        {/* <EmployeeRetention/> */}
      <DoughnuChart/>
      <EmployeeList />
      <EventsDashboards/>
    </div>
  );
};

export default Dashboarts;
