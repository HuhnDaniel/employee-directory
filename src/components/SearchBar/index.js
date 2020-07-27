import React from "react";
import "./style.css";

function SearchBar({ handleFormSubmit, handleInputChange, search }) {
    return (
        <form className="search">
            <label htmlFor="name">Search by Name:</label>
            <input value={search} onChange={handleInputChange} id="name" type="text" placeholder="John Doe"></input>
            <button type="submit" onClick={handleFormSubmit} className="submitBtn">Search</button>
        </form>
    );
}

export default SearchBar;