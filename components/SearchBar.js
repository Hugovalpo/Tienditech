import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Search({ placeholder, data }) {
  const router = useRouter();
  const [inputSearch, setInputSearch] = useState("");

  // input text in lowerCase
  function inputHandler(e) {
    const lowerCase = e.target.value.toLowerCase();
    setInputSearch(lowerCase);
  }

  // function when click search
  function handleSearch() {
    // field empty ,not search
    if (inputSearch.trim() === "") {
      alert("Search field is empty");
      return;
    }

    // field filled , search
    router.push({ pathname: "./search", query: { parameter: inputSearch } });
  }

  // press enter for search
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.searchBar}
        type="text"
        onChange={inputHandler}
        placeholder="Search"
        minLength="1"
        maxLength="28"
        onKeyDown={handleKeyDown}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className={styles.searchIcon}
        onClick={() => handleSearch()}
      />
    </div>
  );
}

export default Search;
