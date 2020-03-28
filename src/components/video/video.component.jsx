import React from 'react'

import './video.styles.scss'

const Video = ({src, handleMouseEnter, handleClick, handleMouseLeave}) => {
    return ( 
        <video 
            id="myVideo" 
            onMouseEnter = {handleMouseEnter} 
            onMouseLeave = {handleMouseLeave}
            onClick = {handleClick}>
            <source src={src} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    )
}
export default Video
