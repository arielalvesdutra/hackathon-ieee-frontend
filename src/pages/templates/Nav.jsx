import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

let pathname = window.location.pathname

const NavItem = ({ to, text }) => (
    <li className="">
        <Link to={to}
            className={` ${pathname === to ? 'active' : ''}`}>
            {text}
        </Link>
    </li>
)

const Nav = () => {
    pathname = window.location.pathname

    return (
        <nav className="Nav">
            <ul className="">
                <NavItem to="/" text="Dashboard" />
                <NavItem to="/alarm-creation" text="Criação de Alarmes" />
            </ul>
        </nav>
    )
}

export default Nav
