import React from "react";
import SearchBar from "../SearchBar";
import TableLabels from "../TableLabels";
import TableContents from "../TableContents";
import "./style.css";

function Table({ toDisplay, handleFormSubmit, handleInputChange, handleButtonClick }) {
    return (
        <main className="wrapper">
            <SearchBar handleFormSubmit={handleFormSubmit} handleInputChange={handleInputChange} />
            <div className="table">
                <TableLabels handleButtonClick={handleButtonClick} />
                <TableContents toDisplay={toDisplay} />
            </div>
        </main>
    );
}

export default Table;