import React, { useState, useContext, useEffect } from "react";
import { getMonth } from "./util";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import GlobalContext from "./context/GlobalContext";
import EventModal from "./components/EventModal";

const CalendarAPI = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex, showEventModal } = useContext(GlobalContext);

  useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);

  return (
    <React.Fragment>
      <div className=" xl:w-full  pr-16">
        {showEventModal && <EventModal />}

        <div className="h-[650px] flex flex-col ">
          <CalendarHeader />
          <div className="flex flex-1 ">
            <div className="lg:block ssm:hidden">
            <Sidebar />

            </div>
            <Month month={currenMonth} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CalendarAPI;