import React from "react";
import "./style.css";

function SearchBar() {
    return (
        <form className="search">
            <label htmlFor="name">Search by Name:</label>
            <input id="name" type="text" placeholder="John Doe"></input>
        </form>
    );
}

export default SearchBar;