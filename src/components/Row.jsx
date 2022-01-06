import React, {useEffect, useState} from "react";


function Row(){


    return(
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
                <tr>
                    <td className="col-1"></td>
                    <td className="col-1"></td>
                    <td className="col-1"></td>
                    <td className="col-1"></td>
                    <td className="col-1"></td>
                    <td className="col-1"></td>
                    <td className="col-1"></td>
                    <td className="col-1"></td>
                </tr>

                </tbody>
            </table>
            <h2 style={{textAlign:"center"}}>Add your answers</h2>
            {/*<form>*/}

            {/*    <input type="text" placeholder="Enter a country..."/>*/}
            {/*    <input type="text" placeholder="Enter a town..."/>*/}
            {/*    <input type="text" placeholder="Enter a mountain..."/>*/}
            {/*    <input type="text" placeholder="Enter a water..."/>*/}
            {/*    <input type="text" placeholder="Enter a plant..."/>*/}
            {/*    <input type="text" placeholder="Enter a animal..."/>*/}
            {/*    <input type="text" placeholder="Enter a name..."/>*/}
            {/*</form>*/}



        </div>
    )


}







export default Row