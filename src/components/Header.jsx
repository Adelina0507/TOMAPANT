import React from "react"
import "../scss/_header.scss"


export function Header(){
    return(
        <header className="page-header">
            <div className="header">
                <a href="#default" className="logo">ȚOMAPANT</a>
                <div className="header-right">
                    <a className="active" href="#home">New Game</a>
                    <a href="#contact">Random Letter</a>
                    <a href="#about">Records</a>
                </div>
            </div>
        </header>
    )
}