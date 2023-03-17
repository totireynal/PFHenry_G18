const Employee = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-60 h-56 bg-slate-300 rounded-xl border border-slate-500 shadow shadow-slate-500 hover:translate-y-1 hover:scale-104 transition ease-in-out delay-100 duration-400">
      <div className="flex items-center justify-center gap-1.5">
        <p className="text-xl font-bold mb-2">{props.name}</p>
        <p className="text-xl font-bold mb-2">{props.lastName}</p>
      </div>
      <img
        src={props.avatar}
        alt={props.name}
        className="rounded-full rounded-60"
      ></img>
      <span className="text-black text-base font-medium mt-2">
        {props.position}
      </span>
      {/* console.log("prueba"); */}
    </div>
  );
};

export default Employee;
