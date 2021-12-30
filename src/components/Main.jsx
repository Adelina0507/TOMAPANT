import React, {useState} from "react"
import "../scss/_grid.scss";
import "../scss/_colors.scss";
import "../scss/_fonts.scss";
import Row from "./Row"

export function Main() {
    const [rows, setRows] = useState([0])
    const handleClick =() =>{
        setRows([...rows, 0])


    }
    return(
        <main>
            <button style={{height: "30px", width:"30px", backgroundColor:"blueviolet"}} onClick={handleClick}></button>
            <div className="grid-container">
                <div className="col-1">Ț</div>
                <div className="col-1">O</div>
                <div className="col-1">M</div>
                <div className="col-1">A</div>
                <div className="col-1">P</div>
                <div className="col-1">A</div>
                <div className="col-1">N</div>
                <div className="col-1">T</div>

            </div>
            {rows.map((element, index)=>{
                return <Row/>
            })}
        </main>
    )
}
