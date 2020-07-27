import React from "react";
import "./style.css";

function TableLabels({ handleButtonClick }) {
    return (
        <ul className="labels">
            <li className="label-name">Name</li>
            <li className="label-name">
                Age
                <button className="sortBtn" onClick={handleButtonClick}>Age Sort</button>
            </li>
            <li className="label-name">Email</li>
            <li className="label-name">Phone</li>
        </ul>
    );
}

export default TableLabels;