import React from "react";
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const submitForm = (e) => {
    e.preventDefault();
    console.log("Entered");
  };
  return (
    <form className="search__form" onSubmit={(e) => submitForm(e)}>
      <IoIosSearch className="search__icon" />
      <input className="search" type="text" placeholder="search" />
      <input className="search__submit--hidden" type="submit" />
    </form>
  );
};

export default Search;
