import React, { useState } from "react";
import Main from "./Main";
import Row from "./Row";

export default function DeleteRow() {

    const [noOfRows, setNoOfRows] = useState(0);
    return (
        <div className="grid-container">

                {[...Array(noOfRows)].map((number, index) => {


                }
                )}




        </div>)
}



