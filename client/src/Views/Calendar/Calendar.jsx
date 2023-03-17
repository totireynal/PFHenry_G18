import SideBar from "../../Components/SideBar/SideBar";
import CalendarApi from './CalendarApi'
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

          <div className="w-[600px] h-[400px]">
            <CalendarApi />
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
