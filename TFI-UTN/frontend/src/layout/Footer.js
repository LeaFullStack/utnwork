import React from "react";
import '../styles/Footer.css';

const Footer=(props)=> {
    return(
        <footer>
            <div className="pdp">
                <div className="izq">
                    <img src="images/logob4.jpg" alt="Logo B4" />
                </div>
                <div className="centro">
                    <p>&copy; Desarrollado por Leandro Marcozzi - B4 Full Stack</p>
                </div>
                <div className="der">
                    <a href="https://www.instagram.com/leabyb4" target="_blank"><img src="images/ig.png" alt="Instagram" /></a>
                    <a href="https://www.facebook.com" target="_blank"><img src="images/fb.png" alt="Facebook" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
