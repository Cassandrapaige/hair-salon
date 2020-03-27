import React, {useState} from 'react'

import './layout.styles.scss'

import Container from '../../components/container/container.component'
import CardContainer from '../../components/card-container/card-container.component'
import Video from '../../components/video/video.component'

import video from '../../assets/video.mp4'
import video1 from '../../assets/video1.mp4'
import video2 from '../../assets/video2.mp4'

const Layout = () => {
    const [videoUrl, setVideoUrl] = useState(video);

    return (
        <>
        <div className = 'header' style = {{backgroundImage: `url('http://www.sugarcoatnailbar.com/wp-content/uploads/2017/06/how-to-makeup-your-face-like-beauty-salon.jpg')`}}>
            <div className="overlay">
                <h2>Hair</h2>
                <h2>Design</h2>
                <h2>Make-up</h2>
                <h2>Beauty</h2>
                <h2>Salon</h2>
            </div>
        </div>
        <Container>
            <h2><span>Our</span> <span>Services</span></h2>
            <CardContainer />
        </Container>
        <div className="videos">
            <Video src = {video} />
            <Video src = {video1} />
            <Video src = {video2} />
        </div>
        </>
    )
}

export default Layout