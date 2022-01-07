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
            <button onClick={handleClick}>Add Row</button>

            <div className="grid-container">
                <div className="index">#</div>
                <div className="row">Ț</div>
                <div className="row">O</div>
                <div className="row">M</div>
                <div className="row">A</div>
                <div className="row">P</div>
                <div className="row">A</div>
                <div className="row">N</div>
                <div className="row">T</div>

            </div>

                    <div>
                    {rows.map((element, index)=>{
                        return <RowForm key={index} letter={element} player={player} round={index+1}/>
                    })}
                    </div>



        </main>
    )

}