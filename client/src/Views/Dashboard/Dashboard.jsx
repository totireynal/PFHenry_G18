import EmployeeList from "../../Components/Birthday/Birthday.js";
// eslint-disable-next-line no-unused-vars
import EmployeeRetention from "../../Components/Charts/BarChart.js";
import DoughnuChart from "../../Components/Charts/DoughnuChart.js";
import EventsDashboards from "../../Components/EventsDashboard/EventsDashboard.jsx";
import MiniEmail from "../../Components/MiniEmail/MiniEmail.jsx";
import WelcomeDashboard from "../../Components/WelcomeDashboard/WelcomeDashboard.jsx";

const Dashboarts = () => {
  return (
    <div className="w-full lg:h-screen ssm:h-auto xl:pl-72 sm:pl-36 ssm:pl-12 pt-16 flex lg:flex-row ssm:flex-col pr-16 bg-slate-100">
      {/* <EmployeeRetention/> */}
      <div className="flex flex-col w-full gap-16">
        <WelcomeDashboard />
        <EventsDashboards />
      </div>
      <div className="flex flex-col w-full gap-5">
        <MiniEmail />
        <div className="flex lg:flex-row ssm:flex-col items-center">
          <DoughnuChart />
          <EmployeeList />
        </div>
      </div>
    </div>
  );
};

export default Dashboarts;
