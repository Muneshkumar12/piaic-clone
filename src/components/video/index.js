import React, { useState } from 'react';
import '../../styles/video.css'
const Video = ({videoData}) => {
    const [currentVideo,setCurrentVide]=useState("m4g0zd4E_bo?autoplay=0")
    const handleVideoClick = (url) => {
        setCurrentVide(url+"?autoplay=1");
    };
    return (
        <div className='container' id='youtube-main'>
            <div className='row'>
            <h1 id='video-heading'>Video</h1>
                <div className='col-12 col-md-7' id="video-container">
                    <div id="video">
                        <iframe width="100%" height="400" title="video" id="main-video" src={`https://www.youtube.com/embed/${currentVideo}`}>
                        </iframe>
                    </div>
                </div>
                <div className='col-12 col-md-5' id='other-video-container'>
                    <ul id='video-list'>
                        {videoData.map((item,index)=>{
                            return(
                                <li key={index} onClick={() => handleVideoClick(item.url)}>
                                        <img src={`http://img.youtube.com/vi/${item.url}/hqdefault.jpg`} id='thumbnail' height="100" alt='youtubevideo'/>
                                     <div>
                                        <h1>{item.heading}</h1>
                                        <p>{item.des}</p>
                                     </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div id='video-info'>
                <p id='video-live-heading'>LIVE: President of Pakistan Dr Arif Alvi's exclusive interview with Nadeem Malik, October 29, 2018</p>
                <p id='streaming-date'>Streamed live on Oct 29, 2018 </p>
                </div>
            </div>
        </div>
    )
}

export default Video;
