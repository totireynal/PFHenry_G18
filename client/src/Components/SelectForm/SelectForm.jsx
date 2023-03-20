import { RiAlertFill } from "react-icons/ri";

const SelectForm = ({
  name,
  handler,
  optionQuantity,
  error,
  label,
  touched,
}) => {
  return (
    <div className="m-4 w-60">
      <label className={`text-base`} valid={error}>
        {label}
      </label>
      <select
        className={` rounded-md border-2 border-gray-800 block w-60 h-10 px-2 group focus:border-blue-400`}
        name={name}
        defaultValue="default"
        onChange={handler}
      >
        {optionQuantity.map((el, i) => (
          <option disabled={el.disable} value={el.value} key={i}>
            {el.html}
          </option>
        ))}
      </select>
      <div className="text-end">
        {/* <p className="text-red-400 text-xs">
              <i className="text-red-400 inline-block">
                <RiAlertFill />
              </i>
              {error}
            </p> */}
      </div>
    </div>
  );
};

export default SelectForm;
