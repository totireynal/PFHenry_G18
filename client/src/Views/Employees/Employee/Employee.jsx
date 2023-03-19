const Employee = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-60 h-56 bg-slate-200 rounded-xl border-2 hover:shadow-xl hover:-translate-y-1 transition duration-100 ">
      <div className="flex items-center justify-center gap-1.5">
        <p className="text-xl font-bold mb-2">{props.name}</p>
        <p className="text-xl font-bold mb-2">{props.lastName}</p>
      </div>
      <span className="text-black text-base font-medium mt-2">
        {props.email}
      </span>
      <span className="text-black text-base font-medium mt-2">
        {props.area}
      </span>
      <span className="text-black text-base font-medium mt-2">
        {props.position}
      </span>
      <span className="text-black text-base font-medium mt-2">
        {props.role}
      </span>
    </div>
  );
};

export default Employee;
