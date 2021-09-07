import React, { useState, useEffect } from 'react';
import YouTube from './YouTube';
import Products from './Products';

export default function MediaSection() {
    const [videoWidth, setVideoWidth] = useState(400);
    const [videoHeight, setVideoHeight] = useState(225);

    useEffect(() => {
        window.addEventListener('resize', () => {
            handleVideoWidth();
            handleVideoHeight();
        })
    }, [])

    const mobile = window.matchMedia('(max-width: 500px)');
    const largeScreen = window.matchMedia('(min-width: 1400px)');

    const handleVideoWidth = () => {
        if (mobile.matches) {
            setVideoWidth(325)
        } else if (largeScreen.matches) {
            setVideoWidth(500)
        } else {
            setVideoWidth(400)
        }
    }

    const handleVideoHeight = () => {
        if (mobile.matches) {
            setVideoHeight(185)
        } else if (largeScreen.matches) {
            setVideoHeight(285)
        } else {
            setVideoHeight(225)
        }
    }

    const renderVideos = () => {
        return (
            <div className="videos-container">
                <div className="video-item">
                    <YouTube embedId={'vpO0dIwkP44'} width={videoWidth} height={videoHeight} title={'Bodybuilding for Brass Players'} />
                    <p className="video-desc">A masterclass I gave on the fundamentals of brass playing.</p>
                </div>
                {/* <div className="video-item">
                    <YouTube embedId={'vpO0dIwkP44'} width={videoWidth} height={videoHeight} title={'Bodybuilding for Brass Players'} />
                    <p className="video-desc">here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description </p>
                </div>
                <div className="video-item">
                    <YouTube embedId={'vpO0dIwkP44'} width={videoWidth} height={videoHeight} title={'Bodybuilding for Brass Players'} />
                    <p className="video-desc">here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description </p>
                </div>
                <div className="video-item">
                    <YouTube embedId={'vpO0dIwkP44'} width={videoWidth} height={videoHeight} title={'Bodybuilding for Brass Players'} />
                    <p className="video-desc">here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description here's a description </p>
                </div> */}
            </div>
        )
    }

    return (
        <div className="section" id="media">
            <h1 className="heading serif">My Media</h1>
            <h3 className="media-heading">Check out some of my featured videos, or more on my YouTube channel&nbsp;
                <a className="hyperlink" href="https://www.youtube.com" target="_blank" rel="noreferrer">here</a>.
            </h3>
            {renderVideos()}
            <div className="products-container">
                <h3 className="media-heading">Like what you hear? Support me by purchasing my CDs!</h3>
                <Products />
            </div>
        </div>
    )
}
