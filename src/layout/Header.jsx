import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

  return (
    <header>
      <a href="#" className="logo">
        iMovies
      </a>
      <div className="right-part">
        <ul className="nav">
          <li>
            <a href="/">
              <FontAwesomeIcon icon={faHouse} /> Home
            </a>
          </li>
          <li>
            <a href="#">Kids</a>
          </li>
          <li>
            <a href="/movies">Movies</a>
          </li>
          <li>
            <a href="#">Adults</a>
          </li>
          <li>
            <a href="#">Trends</a>
          </li>
        </ul>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            className={`search-input ${isSearchVisible ? "show" : ""}`}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="search-icon"
            onClick={toggleSearch}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
