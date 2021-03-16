import * as React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="nav bg-primary">
            <h1>Billing Ninja</h1>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink className="nav-link text-light" to="/">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-light" to="/products">
                        Clients
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link text-light text-align:right" to="/admin">
                        Billing
                    </NavLink>
                </li>
            </ul>
        </nav>
    );   
};

export default Navbar;
