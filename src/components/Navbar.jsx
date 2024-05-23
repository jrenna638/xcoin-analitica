import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Asegúrate de agregar estilos a este archivo.

function Navbar({ links }) {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">XWallet</Link>
            </div>
            <ul className="navbar-links">
                {links.map(link => (
                    <li key={link.path}>
                        <Link to={link.path}>{link.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Navbar;
