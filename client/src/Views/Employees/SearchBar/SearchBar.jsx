import style from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <form className={style.searchContainer}>
      <input
        className={style.searchInput}
        name="game"
        type="text"
        placeholder="Search an employee..."
      ></input>
      <button type="submit" className={style.searchButton}>
        Search
      </button>
    </form>
  );
}
