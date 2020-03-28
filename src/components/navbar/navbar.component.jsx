import React, {useState} from 'react'
import {animated, useSpring, config, useTransition} from 'react-spring'
import {Link} from 'react-router-dom'

import './navbar.styles.scss'

import NavList from '../nav-list/nav-list/nav-list.component'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    const [active, setActive] = useState(false)


    const handleClick = event => {
        setIsActive(!isActive);
        setActive(!active)
    }

    return (
        <>
        <nav className = 'nav'>
        <h4 className='logo'>Sassys</h4>
            <animated.div className =  {isActive ? 'hamburger-menu' : 'open'} onClick = {handleClick}>
                <animated.div className = {isActive ? 'open-top' : 'hamburger-menu-top'}/>
                <animated.div className = {isActive ? 'open-middle' : 'hamburger-menu-middle'}/>
                <animated.div className = {isActive ? 'open-bottom' : 'hamburger-menu-bottom'}/>
            </animated.div>
        </nav>

        {
            isActive ? 
            <NavList active = {active}/>
            : null
        }
        </>
    )
}

export default Navbar;