import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getEmployees } from "../../../state/redux/actions/actions";

const SearchBar = () => {
  const [input, setInput] = useState("");
  let dispatch = useDispatch();

  function onChange(e) {
    setInput(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();

    if (input.trim().length > 0) {
      dispatch(getEmployees(input));
    } else {
      alert("Must write something to search");
    }
    setInput("");
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex relative h-12 w-60 justify-center items-center rounded-md border border-solid border-black"
    >
      <input
        className="border-none outline-none text-base"
        value={input}
        onChange={onChange}
        name="game"
        type="text"
        placeholder="Search a Employee"
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
