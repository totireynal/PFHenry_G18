const InputeForm = ({
  label,
  type,
  name,
  value,
  handler,
  placeholder,
  id,
  error,
}) =>  {
  return (
    <div className="m-4 w-60">
      <div>
        <label
          className={`${error && "text-red-400"} text-base`}
          htmlFor={id}
          valid={error}
        >
          {label}
        </label>
        <input
          className={`${
            error && "border-red-400"
          } rounded-md border-2 border-gray-800 block w-56 h-10 px-2`}
          type={type}
          name={name}
          value={value}
          onChange={handler}
          placeholder={placeholder}
          id={id}
          valid={error}
        />
      </div>
      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}//sm

export default InputeForm