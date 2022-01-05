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
        return (
            <div className={"grid-container"}>
            <table>
                <thead>
            <th className="col-1">Ț</th>
            <th className="col-1">O</th>
            <th className="col-1">M</th>
            <th className="col-1">A</th>
            <th className="col-1">P</th>
            <th className="col-1">A</th>
            <th className="col-1">N</th>
            <th className="col-1">T</th>
                </thead>
            </table>
        </div>
    )

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
                    data.map((round) => (<tr key={round.id}>
                            <td className="col-1">{round.country}</td>
                            <td className="col-1">{round.town}</td>
                            <td className="col-1">{round.mountain}</td>
                            <td className="col-1">{round.water}</td>
                            <td className="col-1">{round.plant}</td>
                            <td className="col-1">{round.animal}</td>
                            <td className="col-1">{round.name}</td>
                            <td className="col-1">{round.total}</td>
                        </tr>))}


                </tbody>
            </table>
            <h2>Add your answers</h2>
            <form>
                <input type="text" placeholder="Enter a country..."/>
                <input type="text" placeholder="Enter a town..."/>
                <input type="text" placeholder="Enter a mountain..."/>
                <input type="text" placeholder="Enter a water..."/>
                <input type="text" placeholder="Enter a plant..."/>
                <input type="text" placeholder="Enter a animal..."/>
                <input type="text" placeholder="Enter a name..."/>
            </form>

        </div>
    );

}

export default Row