import React from "react";
import "./style.css";

function TableContents({ toDisplay }) {
    if (toDisplay[0]){
        return (
            toDisplay.map((user, index) => (
                <ul className="table-rows" key={index}>
                    <li className="table-contents">{`${user.name.first} ${user.name.last}`}</li>
                    <li className="table-contents">{user.dob.age}</li>
                    <li className="table-contents">{user.email}</li>
                    <li className="table-contents">{user.phone}</li>
                </ul>
            ))
        );
    } else {
        return (
            <ul className="table-rows">
                <li className="table-contents"></li>
                <li className="table-contents"></li>
                <li className="table-contents"></li>
                <li className="table-contents"></li>
            </ul>
        )
    }
}

export default TableContents;