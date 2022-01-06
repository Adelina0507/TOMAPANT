import React, {useEffect, useState} from "react";


export function RowForm({letter,round,player}) {
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
        setTimeout(()=>{
            fetch('http://localhost:3001/round/?round=' + round).then(res=>res.json())
                .then((data)=>{
                    let scoreArr = {};
                    data.forEach((row)=>{
                        const tmp = {};
                        Object.keys(fields).forEach((el)=>{
                            tmp[el] = row[el]
                        })
                        scoreArr[row.player] = tmp
                    })
                    /***DE LUCRU**/
                    Object.values(fields).forEach(item =>{
                        let lastVal = null
                        Object.keys(scoreArr).forEach(el=> {
                            if(scoreArr[el][item] !== lastVal) {
                                lastVal = scoreArr[el][item];
                                scoreArr[el][item] = 10;
                            } else {
                                scoreArr[el][item] = 5;
                            }
                        })
                    })
                    console.log("SCORE",scoreArr)
                }).catch((err)=>{
                console.log(err)
            })
        },3000)
    },[])

    return (
        <tr>
            <td>{letter}</td>
            {Object.keys(fields).map((el,index)=>{
                return (
                    <td key={index}>
                        {done === true ?
                            <strong>{data[el]}</strong>
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
                {done === true ? <strong>SCORE</strong>
                    : <button onClick={(event)=> {
                        setDone(true);
                        const toSend = {
                            round:round,
                            player:player,
                            ...data
                        }
                        fetch('http://localhost:3001/round',{
                            method:'post',
                            headers: {
                                'Content-Type': 'application/json',
                            },body:JSON.stringify(toSend)}).
                        then((res)=>res.json()).then((data)=>{

                        }).catch((err)=>{
                            console.log(err);
                        })
                    }}>Send</button>}
            </td>
        </tr>
    )
}