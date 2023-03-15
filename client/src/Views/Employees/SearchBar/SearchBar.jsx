import React from "react";
import style from "./SearchBar.module.css";

const SearchBar = ({ handleSearch }) => {
  const [term, setTerm] = React.useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    handleSearch(value);
  };

  return (
    <div className={style.searchContainer}>
      <input
        type="text"
        placeholder="Search an Employee"
        value={term}
        onChange={handleChange}
        className={style.searchInput}
      />
    </div>
  );
};

export default SearchBar;
