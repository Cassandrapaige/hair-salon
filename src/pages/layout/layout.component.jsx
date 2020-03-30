import React, {useState} from 'react'

import './layout.styles.scss'

import Container from '../../components/container/container.component'
import CardContainer from '../../components/card-container/card-container.component'
import Video from '../../components/video/video.component'

import headerImage from '../../images/header.jpg'

import video from '../../videos/video.mp4'
import video1 from '../../videos/video1.mp4'
import video2 from '../../videos/video2.mp4'

const Layout = () => {
    const [videoUrl, setVideoUrl] = useState(video);
    const [isActive, setIsActive] = useState(true);

    const handleMouseEnter = event => {
        event.target.play()
    }

    const handleMouseLeave = event => {
        event.target.pause()
    }

    return (
        <>
        <div className = 'header' style = {{backgroundImage: `url(${headerImage})`}}>
            <div className="overlay">
                <div className="inner-content">
                    <h4>Voted #1 in Toronto for 5 years</h4>
                    <h1>Award Winning Salon</h1>
                    <div className="buttons">
                    <button>View our gallery</button>
                    <button>Book an appointment</button>
                </div>
                </div>
          </div>
        </div>
        <Container>
            <h2><span>Our</span> <span>Services</span></h2>
            <CardContainer />
        </Container>
        <div className="videos">
            <Video 
                src = {video} 
                handleMouseEnter = {handleMouseEnter} 
                handleMouseLeave = {handleMouseLeave} />
            <Video 
                src = {video1} 
                handleMouseEnter = {handleMouseEnter} 
                handleMouseLeave = {handleMouseLeave}/>
            <Video 
                src = {video2} 
                handleMouseEnter = {handleMouseEnter} 
                handleMouseLeave = {handleMouseLeave}/>
        </div>
        </>
    )
}

export default Layout