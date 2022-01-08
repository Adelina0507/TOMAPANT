import React, {useEffect, useState,useCallback} from "react"
import "../scss/_grid.scss";
import "../scss/_colors.scss";
import "../scss/_fonts.scss";
import {RowForm} from "./RowForm";

import socketio from "socket.io-client";
const SOCKET_URL = "http://localhost:3003";

export const socket = socketio.connect(SOCKET_URL);

const seconds = 30;
let myTimer;

export function Main() {

    const [rows, setRows] = useState([]);
    const [player, setPlayer] = useState('');
    const [start,setStart] = useState(false);
    const [playerDone, setPlayerDone] = useState(false);
    const [playerList,setPlayerList] = useState([]);
    const [sec,setSec] = useState(seconds);
    const [localScores,setLocalScores] = useState([]);




    const setMe = (val) => {
        setSec((prev)=>{
            return val;
        })
    }

    const onFinish = ((data)=>{
        if(data !== undefined) {
            console.log("DATA", data);
            socket.emit("forceFinish",{player:player,round:rows.length, data: data});
            setMe(0);
            setStart((prev) => false)
            clearInterval(myTimer);
        }
    })

    useEffect(()=>{
        console.log("mounting");
        socket.on('players',(data)=>{
            console.log("Players",data);
            setPlayerList(data)
        })
        socket.on('letter',(data)=>{
            setStart(true);
            console.log(data);
            console.log(rows);
            setRows(data.letters);

        })
        socket.on('scores',(data)=>{
            console.log(data);
            setLocalScores((prev) => [...prev,data]);

        })
        socket.on('didForceFinish',()=>{
            setSec(seconds);
            setStart((prev) => false)
            clearInterval(myTimer)
        })
        socket.on('resetGame',()=>{
            setLocalScores((prev) => []);
            setRows((prev) => [])
            setStart((prev) => false)
        })


    },[])


    useEffect(() => {
        console.log("changeing",sec);
        if(start === true) {
            let localSec = seconds;
            console.log("STARTING INTERVAL")
            myTimer = setInterval(()=>{
                console.log("mySec",localSec);
                console.log(myTimer)
                localSec -= 1;
                if(localSec < 1) {
                    clearInterval(myTimer);
                    setSec(seconds  )
                    setStart((prev) => false)
                } else {
                    setMe(localSec);
                }
            },1000)
        }


    },[start])

    useEffect(()=>{
        console.log(sec);
        if(sec  < 1) {
            console.log("finished");
            onFinish();
        }
    },[sec])

    const handleJoinChat = () => {
        console.log("ROWS",rows.length);
        console.log("getLetter");
        socket.emit('getLetter',{round:(rows.length + 1)});
        setStart(true);


    };

    const handleClick = () =>{
        handleJoinChat();
        //setRows([...rows])


    }
    useEffect(()=>{
        console.log("SCORES",localScores);
    },[localScores])





    // noinspection BadExpressionStatementJS
    return(
        <main>
            <div><button onClick={()=>{
                socket.emit('newGame');
                setLocalScores((prev) => []);
                setRows((prev) => [])
                setStart((prev) => false)
            }}>New Game</button> </div>
            <div>Players:{playerList.map((el,index)=><strong key={index}>{index ? ',' : ''}{el}</strong>)}</div>
            <h2>Player {playerDone && player}</h2>
            {!playerDone && <div>
                <input type={"text"} name={"player"} value={player} onChange={(event => setPlayer(event.target.value))}/>
                <button onClick={()=>{
                    setPlayerDone(true)
                    socket.emit("player",{player: player})
                }}>Register</button>
            </div>}
            {!start  ? (playerList.length === 2 ? <button style={{height: "50px", width:"100px", backgroundColor:"green", float:"left"}} onClick={handleJoinChat}>Start</button> : <span>Waiting for player</span>) :
                <div>Round:{rows.length + 1} Time remaining: {sec} seconds</div>}
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
                        if(localScores[index]) {
                            console.log("SCRS", index, localScores[index][player]);
                        }

                        return <RowForm key={index} letter={element} player={player} round={index+1} didStart={start} seconds={seconds} onFinish={onFinish} scores={localScores[index] ? localScores[index][player] : []}/>
                    })}
                    <tr>
                        <td colSpan={8} align={"right"}> Total</td>
                        <td>
                            {localScores.reduce((acc,el)=>{

                                let locScore = Object.values(el[player]).reduce((acc,el)=>{

                                    return acc + el;
                                })
                                console.log("plr",el[player],acc,locScore);
                                return acc + locScore;
                            },0)}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )

}