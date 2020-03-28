import React , {useState, createRef, useEffect} from 'react'
import {useSpring, animated, config, useTransition} from 'react-spring'

import './modal-container.styles.scss'

const ModalContainer = ({handleClick}) => {
    const [checked, setChecked] = useState(true);
    const [value, setValue] = useState('')
    const inputRef = createRef()

    const handleChecked = () => {
        setChecked(!checked);
    }

    const handleChange = event => {
        setValue(event.target.value)
    }

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const slideUp = useSpring({
        from: {
            transform: 'translateY(50px)',
            opacity: 0
        },
        to: {
            transform: 'translateY(0px)',
            opacity: 1
        },
        config: config.wobbly
    })

    return (

        <animated.div className = 'modal-container' style = {slideUp}>
            <div className="promotion">
                <h3>Spring Sale</h3>
                <span>
                    50% off
                </span>
            </div> 
            <animated.div className="promtion-sign-up">
                <h4>Enter your email for 50% off your next visit</h4>  
                <form>
                    <div className="inputs">
                    <input 
                        type="email" 
                        placeholder = 'enter your email address' 
                        ref = {inputRef}
                        required/>

                    <div className="checkbox">
                        <input type="checkbox" 
                        checked={checked}
                        onClick = {handleChecked} 
                        /> Yes, I'd like to receive news and special offers.
                    </div>

                    </div>
                
                        <div className="buttons">
                            <button>Get my 50% off</button>
                            <button className = 'decline-btn' onClick = {handleClick}>No thanks</button>
                        </div>
                </form>
            </animated.div>           
        </animated.div>
        
    )
}

export default ModalContainer
