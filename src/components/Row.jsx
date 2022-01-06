import React, {useEffect, useState} from "react";

function Row() {
    const [data, setData] = useState(null);
    {/* useEffect m-a pus Tica sa il pun, altfel nu imi mergea json-ul, desi nu inteleg,
    fara useEffect am eroarea asta Module not found: Error: Can't resolve 'src/game.json' in '/home/adelina05/Proiect/tomapant/src/components' si calea e buna
    mi-a zis ca trebuie sa fac si o alta componenta in cazul asta
    */}
    //
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
        </div> //initial aici imi pusese el un div cu Loading Round in caz ca nu exista data
            //am pus eu headerul de la tabel, era mai comfortabil psihic pana imi dau seama cum facem cu json-ul
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
                {/*
                aici am incercat ca in video sa imi construiesc array-ul sau am incercat
                */}
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
            {/*
                aici nu stiu ce sa fac pentru ca formularul nu mi se vede deloc in pagina
                Componenta de DeleteRow o facusem in ideea sa fac si un buton de DeleteRow cum am
                si pentru Add Row. Cum sa fac sa imi apara formularul ?

                */}
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
{/*
                function rand(min, max) {
    return Math.floor(((Math.random() * 10000) % (max - min)) + min)
}
const allLetters = 'ABCDEFGHIJKLMNOPRSTUVXZ'
function getRandomChar(){return allLetters[rand(0,allLetters.length)]}

const [letter] = useState(() =>getRandomChar())
 - in componenta de adaugare
+ validare pe formular  - asta a mai zis sa fac in legatura cu butonul in care o sa aleg litera

                */}
export default Row

