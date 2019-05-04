import React from 'react'
import { Link } from 'react-router-dom'

import './Nav.css'

const pathname = window.location.pathname

console.log(pathname)

const NavItem = ({ to, text }) => (
    <li className="">
        <Link to={to}
            className={` ${pathname === to ? 'active' : ''}`}>
            {text}
        </Link>
    </li>
)

const Nav = () => (
    <nav className="Nav">
        <ul className="">
            <NavItem to="/" text="Dashboard" />
            <NavItem to="/" text="Emitir Alerta" />
        </ul>
    </nav>
)

export default Nav