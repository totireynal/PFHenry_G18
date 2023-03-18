import React from "react";

const SearchBar = ({ handleSearch }) => {
  const [term, setTerm] = React.useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    handleSearch(value);
  };

  return (
    <div className="flex relative h-12 w-60 justify-center items-center rounded-md border border-solid border-black">
      <input
        type="text"
        placeholder="Search an Employee"
        value={term}
        onChange={handleChange}
        className="border-none outline-none text-base"
      />
    </div>
  );
};

export default SearchBar;
