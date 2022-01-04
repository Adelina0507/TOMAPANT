import React, {useState} from "react"
import "../scss/_grid.scss";
import "../scss/_colors.scss";
import "../scss/_fonts.scss";
import Row from "./Row"
import DeleteRow from "./DeleteRow";





export function Main() {
    const [rows, setRows] = useState([0])
    const handleClick =() =>{
        setRows([...rows, 0])


    }





    return(
        <main>
            <button style={{height: "50px", width:"100px", backgroundColor:"green", float:"left"}} onClick={handleClick}>Add Row</button>
            <button style={{height: "50px", width:"100px", backgroundColor:"red", float:"left"}} onClick={DeleteRow}>Delete Row</button>
            {/*<div className="grid-container">*/}
            {/*    <div className="col-1">Ț</div>*/}
            {/*    <div className="col-1">O</div>*/}
            {/*    <div className="col-1">M</div>*/}
            {/*    <div className="col-1">A</div>*/}
            {/*    <div className="col-1">P</div>*/}
            {/*    <div className="col-1">A</div>*/}
            {/*    <div className="col-1">N</div>*/}
            {/*    <div className="col-1">T</div>*/}

            {/*</div>*/}
            {rows.map((element, index)=>{
                return <Row/>
            })}



        </main>
    )

}
