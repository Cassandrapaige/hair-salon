import React from 'react'

import './video.styles.scss'

const Video = ({src}) => {
    return (
       <video loops muted loop id="myVideo">
            <source src={src} type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
    )
}
export default Video
