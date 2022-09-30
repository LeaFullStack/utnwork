import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Nav.css';

const Nav=(props)=> {
    return(
        <nav>
            <div className="navegacion">
                <ul>
                    <li><NavLink to="/" className={({isActive})=>isActive? "activo":undefined}>Inicio</NavLink></li>
                    <li><NavLink to="/html" className={({isActive})=>isActive? "activo":undefined}>HTML</NavLink></li>
                    <li><NavLink to="/css" className={({isActive})=>isActive? "activo":undefined}>CSS</NavLink></li>
                    <li><NavLink to="/javascript" className={({isActive})=>isActive? "activo":undefined}>Javascript</NavLink></li>
                    <li><NavLink to="/extras" className={({isActive})=>isActive? "activo":undefined}>Extras</NavLink></li>
                    <li><NavLink to="/contacto" className={({isActive})=>isActive? "activo":undefined}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
