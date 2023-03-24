import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contentFilters, getEmployees } from "../../../state/redux/actions/actions";

const SearchBar = () => {
  const [input, setInput] = useState("");
  let dispatch = useDispatch();
  const arrContentFilters = useSelector((state) => state.arrContentFilters);


    useEffect(() => {
      dispatch(getEmployees(arrContentFilters));
    }, [arrContentFilters, dispatch]);
  
  function onChange(e) {
    setInput(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    if (input.trim().length > 0) {
      // dispatch(getEmployees(input));
      dispatch(contentFilters({ name: input }));
      setInput('')
    } else {
      alert("Must write something to search");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex relative pl-2 justify-center items-center rounded-md border border-sky-700"
    >
      <input
        className="border-none outline-none text-base bg-slate-100"
        value={input}
        onChange={onChange}
        name="game"
        type="text"
        placeholder="Search a Employee"
      ></input>
      <button
        className="bg-sky-700 text-white rounded-r overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
