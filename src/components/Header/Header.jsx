import React from "react";
import './Header.css'

const Header = () => {
    return (
        <nav>
            <ul>
                <li><a href="/">Compras</a> </li>
                <li><a href="/spending">Gastos</a></li>
                <li><a href="/financial-summary">Finalcial summary</a></li> 
            </ul>
        </nav>
    );
}

export default Header;