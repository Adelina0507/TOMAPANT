import React from "react"
import "../scss/_footer.scss";
import "../scss/_colors.scss";
import "../scss/_fonts.scss";

export function Footer() {
    return(
        <footer className="footer">
            <div className="footer-container container">
                <div className="footer-info">
                    <a href="#" className="footer-logo">ȚOMAPANT</a>
                    <span className="footer-copy">©proiect Ejobs 2022 </span>
                </div>
                <div className="footer-icons">
                    <a href="https://github.com/Adelina0507"><img src="github.svg" alt="github"/></a>
                    <a href="https://www.facebook.com/nastase.adelina7"><img src="facebook.svg" alt="facebook"/></a>
                    <a href="https://www.linkedin.com/in/adelina-nastase-803842225/"><img src="linkedin.svg" alt="linkedin" /></a>

                </div>
            </div>
        </footer>
    )

}
