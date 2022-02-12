import React from 'react';
import { Link } from "react-router-dom";

export const NavLinks = ({links}) => {




    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li>
                <Link to="/" className="nav-link">Home</Link>
            </li>
            {links.length > 0 && links.map((link, index) => {
                return <li key={index}><Link to={`/category/${link}`} className="nav-link"> {link} </Link></li>
            })}
          </ul>
          </nav>
    )
}
