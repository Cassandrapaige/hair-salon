import React from 'react'
import {animated, useSpring, config, useTransition} from 'react-spring'

import './nav-list.styles.scss'

import NavItem from '../../navigation-item/navigation-item.component'

const NavList = ({active}) => {

    const props = useSpring({
        from : {
            width: '0%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            height: '100%',
            position: 'fixed',
            top: 0,
            right: 0,
            background: 'rgba(19, 19, 19, .99)',
            zIndex: 10000
        },
        to: {
            width: active ? '100%' : '0%',
        },
        config: config.gentle
    })
    return (
      <animated.div className = 'nav-list' style = {props}>
            <NavItem text = 'Hair'/>
            <NavItem text = 'Design' />
            <NavItem text = 'Make-up' />
            <NavItem text = 'Beauty' />
            <NavItem text = 'Salon' />
        </animated.div>
    )
}

export default NavList