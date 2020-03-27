import React from 'react'
import {Link} from 'react-router-dom'

import './navbar.styles.scss'

const Navbar = () => {
    return (
        <nav className = 'nav'>
        <h4 className="logo">Sassys</h4>
            <ul className = 'nav-list'>
                <Link to ='/'>
                    <li> About Us </li>
                </Link>
                <Link to ='/'>
                    <li> Our Services </li>
                </Link>
                <Link to ='/'>
                    <li> Contact </li>
                </Link>
            </ul>
            <div className="hamburger-menu"/>
        </nav>
    )
}

export default Navbar;