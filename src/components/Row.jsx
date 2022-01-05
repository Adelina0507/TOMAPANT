import React, {useEffect, useState} from "react";

function Row() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/round")
            .then((result) => {
                return result.json()
            })
            .then((roundList) => {
                setData(roundList)

            })

    }, [])
    console.log(data)

    if (!data) {
        return <div>Loading Rounds</div>
    }
    return (

        <div className="grid-container">
            <table>
                <thead>
                <tr>
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
                {
                    data.map((round) => {
                        return (<tr key={round.id}>
                            <td className="col-1">{round.country}</td>
                            <td className="col-1">Arad</td>
                            <td className="col-1">Apuseni</td>
                            <td className="col-1">Arges</td>
                            <td className="col-1">Afin</td>
                            <td className="col-1">Arici</td>
                            <td className="col-1">Ana</td>
                            <td className="col-1">100</td>
                        </tr>)
                    })
                }

                </tbody>
            </table>

        </div>
    )

}

export default Row