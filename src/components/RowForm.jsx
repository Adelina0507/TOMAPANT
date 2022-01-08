import React, {useEffect, useState} from "react";

let timeout;

export function RowForm({letter,round,player,seconds,onFinish,didStart,scores}) {
    const fields = {
        'country':'',
        'town':'',
        'mountain':'',
        'water':'',
        'plant':'',
        'animal':'',
        'name':''
    }
    const [data,setData] = useState(fields)
    const [done,setDone] = useState(false)

    useEffect(()=>{
        console.log(scores);
    },[scores])
    useEffect(()=>{
        timeout = setTimeout(()=>{
            console.log("TIMEDOUT");
            onFinish(data);
            clearTimeout(timeout)
        },seconds * 1000)

    },[])

    useEffect(()=>{
        if(!didStart && done === false) {
            setDone(true);
            console.log("calledThis")
            clearTimeout(timeout)
            onFinish(data);
        }
    },[didStart])
    let total = 0;
    return (
        <tr>
            <td>{letter}</td>

            {Object.keys(fields).map((el,index)=>{
                total += !isNaN(scores[el]) ? scores[el] : 0;
                console.log("Scores",scores);
                return (
                    <td key={index}>
                        {done === true ?
                            <strong>{data[el]}  {!isNaN(scores[el]) ? ":" +  scores[el] : ""}</strong>
                            :
                            <input type={"text"} value={data[el]} name={el}
                                   onChange={(event => {
                                       let val = event.target.value;
                                       val = val.length > 0 && val[0].toUpperCase() === letter.toUpperCase() ?
                                           val[0].toUpperCase() + val.substr(1) : '';
                                       setData({...data, [event.target.name]: val})
                                   } )}/>}
                    </td>
                )
            }) }
            <td>
                {done === true ? <strong>{total} pts</strong>
                    : <button onClick={()=>{
                        setDone(true);
                        console.log('done');
                        onFinish(data);
                        clearTimeout(timeout);
                    }

                    }>Send</button> }
            </td>
        </tr>
    )
}