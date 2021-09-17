import React, { useState, useEffect } from 'react'
import YouTube from './YouTube'
import Products from './Products'

export default function MediaSection() {
	const [videoWidth, setVideoWidth] = useState(400)
	const [videoHeight, setVideoHeight] = useState(225)

	useEffect(() => {
		window.addEventListener('resize', () => {
			handleVideoWidth()
			handleVideoHeight()
		})
	}, [])

	const mobile = window.matchMedia('(max-width: 500px)')
	const largeScreen = window.matchMedia('(min-width: 1400px)')

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
					<YouTube
						embedId={'MzTw_-t6kZ4'}
						width={videoWidth}
						height={videoHeight}
						title={'Monaco "Sonata for Trombone and Piano"'}
					/>
					<p className="video-desc">
						Sonata for Trombone and Piano by Richard Monaco (1930-1987). <br />
						Timothy Anderson, trombone <br />
						Sandra Rivers, piano
					</p>
				</div>
				<div className="video-item">
					<YouTube
						embedId={'SEFDoJdsN5k'}
						width={videoWidth}
						height={videoHeight}
						title={'Mind States - Inquisitive by Nebojsa S. Macura'}
					/>
					<p className="video-desc">
						The music of Nebojsa S. Macura’s Mind States explores different
						moods and characters within its four short and often introspective
						movements. Letting the music guide its titles, Macura waited to give
						names to the movements and complete piece until after much of the
						music was written.
					</p>
				</div>
			</div>
		)
	}

	return (
		<div className="section" id="media">
			<h1 className="heading serif">My Media</h1>
			<h3 className="media-heading">
				Check out some of my featured videos, or more on my YouTube
				channel&nbsp;
				<a
					className="hyperlink"
					href="https://www.youtube.com/channel/UCKZ4Sr0zR7J0A0NWuSa2sig/featured"
					target="_blank"
					rel="noreferrer"
				>
					here
				</a>
				.
			</h3>
			{renderVideos()}
			<div className="products-container">
				<h3 className="media-heading">
					Like what you hear? Support me by purchasing my CDs!
				</h3>
				<Products />
			</div>
		</div>
	)
}
