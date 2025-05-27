import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaBell } from "react-icons/fa";
import './Searchbar.css';

function Searchbar() {
  return (
    <div className="container">
      <div>
        <CiSearch className="search-icon"/>
        <input type="text" placeholder="Search" />
      </div>
      <FaBell className="bell-icon"/>
    </div>
  );
}

export default Searchbar;
