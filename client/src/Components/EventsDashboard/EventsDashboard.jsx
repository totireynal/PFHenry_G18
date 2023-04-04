import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvents } from "../../state/redux/actions/actions";

const EventsDashboards = () => {
  const dispatch = useDispatch()
    const currentEmployee = useSelector((state) => state.currentEmployee);
  const CompanyId = currentEmployee ? currentEmployee.CompanyId : null;
  const events = useSelector(state => state.events)
  useEffect(() => {
    dispatch(getEvents(CompanyId))
  }, [dispatch])
  return (
    <div className="border bg-white rounded-md w-1/3 h-auto p-5 shadow-2xl flex flex-col">
      <h2 className="mb-5">Upcoming events</h2>
      <div className="flex flex-col gap-3">

        {events.map((event) => {
          if (Number(event.day.split('-')[1]) === 4) {
          
            return (
              <div className="bg-slate-100 relative border rounded-md p-3 shadow-md break-all flex flex-col gap-2">
            <h3 className="text-sky-400 text-base">{event.title}</h3>
            <h4 className="text-sm">{event.description}</h4>
            <span className="absolute right-2 top-2 text-gray-400 text-xs ">{event.day.slice(0,10)}</span>
          </div>
            );
          }
          })}
          </div>
          </div>
          );
}

export default EventsDashboards;