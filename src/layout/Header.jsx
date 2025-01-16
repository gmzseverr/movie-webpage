import { faHouse, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Header() {
  return (
    <div className="header">
      <a href="#" className="logo">
        iMovies
      </a>
      <ul className="nav">
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faHouse} />
          </a>
        </li>
        <li>
          <a href="#">Kids</a>
        </li>
        <li>
          <a href="#">My List</a>
        </li>
        <li>
          <a href="#">Adults</a>
        </li>
        <li>
          <a href="#">Trends</a>
        </li>
      </ul>
      <div>
        <input type="text" placeholder="Search" />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
}

export default Header;
