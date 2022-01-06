import React, {useState} from "react"
import "../scss/_grid.scss";
import "../scss/_colors.scss";
import "../scss/_fonts.scss";
import Row from "./Row"
import {RowForm} from "./RowForm";


const randomLetter = () => {
    return String.fromCharCode(Math.random()*25 + 65);
}


export function Main() {
    const [rows, setRows] = useState([randomLetter()])
    const [player, setPlayer] = useState('')
    const handleClick =() =>{
        setRows([...rows, randomLetter()])


    }





    return(
        <main>
            <div>
                <input type={"text"} name={"player"} value={player} onChange={(event => setPlayer(event.target.value))}/>
            </div>
            <button style={{height: "50px", width:"100px", backgroundColor:"green", float:"left"}} onClick={handleClick}>Add Row</button>

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
            <div className="grid-container">
                <table>
                    <thead>
                    <tr>
                        <th className="col-1">#</th>
                        <th className="col-1">Ț</th>
                        <th className="col-1">O</th>
                        <th className="col-1">M</th>
                        <th className="col-1">A</th>
                        <th className="col-1">P</th>
                        <th className="col-1">A</th>
                        <th className="col-1">N</th>
                        <th className="col-1">T</th>
                    </tr>
                    </thead>
                    <tbody>
                    {rows.map((element, index)=>{
                        return <RowForm key={index} letter={element} player={player} round={index+1}/>
                    })}
                    </tbody>
                </table>
            </div>


        </main>
    )

}