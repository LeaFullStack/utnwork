import React from 'react';
import '../styles/Header.css';

const Header=(props)=> {
    return(
        <header>
            <div className="banner">
                <img src="images/b4fsd.jpg" alt="B4 Full Stack Development" className="animacion" />
            </div>
            <div className="titulo">
                <h1>B4 Full Stack Development</h1>
            </div>
        </header>
    );
}

export default Header;
