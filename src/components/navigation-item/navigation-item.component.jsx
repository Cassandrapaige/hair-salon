import React, { Fragment, useState } from 'react'
import {useSpring, animated, config } from 'react-spring'

import './navigation-item.styles.scss'

const NavItem = ({text}) => {
    const [ onHover, setOnHover] = useState(false);

    const title = useSpring({
        from: {
            position: 'relative',
            color: '#fff',
            fontSize: '90px',
            lineHeight: '90px',
            textAlign: 'center',
            zIndex: 5000
        },
        config: config.wobbly,
        to: {
            color: onHover ? '#33b77e' : '#fff',
            fontSize: onHover ? '100px' : '90px',
            paddingRight: onHover ? '30px' : '0px',
        }
    })
    
    const handleMouseOver = event => {
        setOnHover(true)
    }

    const handleMouseLeave = event => {
        setOnHover(false)
    }

    return (
            <animated.button 
                style = {title} 
                onMouseOver = {handleMouseOver} 
                onMouseLeave = {handleMouseLeave}>
                {text}
            </animated.button>
    )
}

export default NavItem