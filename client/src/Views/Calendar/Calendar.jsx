import SideBar from "../../Components/SideBar/SideBar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useEffect } from "react";

const events = [{ title: "Meeting", start: new Date() }];
const Calendar = () => {
  return (
    <div className="h-screen grid grid-cols-6 grid-rows-1 ">
      <SideBar />
      <div className="col-span-5 h-screen p-8">
        <div className="h-full flex flex-col justify-evenly">
          <div className="text-center">
            <input
              className="bg-gray-200 w-96 text-center"
              placeholder="Buscar..."
              type="text"
            />
          </div>
          <div className="flex gap-5">
            <button className="p-3 bg-slate-200">Feriados</button>
            <button className="p-3 bg-slate-200">Eventos</button>
          </div>
          <div className="flex justify-center items-center">

          <div className="w-[600px]">
            <FullCalendar
              className=""
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              weekends={true}
              events={events}
              eventContent={renderEventContent}
              />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default Calendar;
