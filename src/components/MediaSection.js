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
			<div className='videos-container'>
				<div className='video-item'>
					<YouTube
						embedId={'rEU6hWZbKOk'}
						width={videoWidth}
						height={videoHeight}
						title={'Danzas by Steven Winteregg'}
					/>
					<p className='video-desc'>
						Steven Winteregg’s suite of three Latin American-inspired pieces,
						Danzas, is a synthesis of, and modern American take on, the rhythmic
						and melodic styles found in the lively dance music of Argentina,
						Brazil, and Cuba. The first movement tango, titled “Argentina,”
						began as the stand-alone composition Fireside Tango and can be
						performed with or without bass and percussion. “Brazil” and “Cuba”
						were added in 2010 to round out the suite.
					</p>
				</div>
				<div className='video-item'>
					<YouTube
						embedId={'0lHQdjUthHg'}
						width={videoWidth}
						height={videoHeight}
						title={'Dubariana by Steven Winteregg'}
					/>
					<p className='video-desc'>
						Dunbariana, composed for trombone, banjo, piano, and narrator by
						Steven Winteregg, is based on the poetry of celebrated
						African-American poet and Dayton native Paul Laurence Dubar, Its
						four movements are named for the poems that inspired them.
						Winteregg's choice of instrumentation, harmonies, and melodies are
						designed to capture the feeling of 19th century American life.
						Narrated by the noted Dunbar scholar Dr. Herbert Woodward Martin,
						this commission was paid for by the Tangeman Sacred Music
						Foundation.
					</p>
				</div>
				<div className='video-item'>
					<YouTube
						embedId={'8Uy_rL5dVEg'}
						width={videoWidth}
						height={videoHeight}
						title={'Let All Mortal Flesh Keep Silence arranged by Ray Horton'}
					/>
					<p className='video-desc'>
						Raymond Horton's arrangement of Let All Mortal Flesh Keep Silence is
						the first of two works for trombone quartet. The biblical text has
						been set to numerous melodies; the one in this arrangement, the
						French medieval tune known as Picardy, is perhaps the most
						well-known. Horton's version sets the melody three different ways,
						the final being an adaptation of the common Gustav Holst setting.
					</p>
				</div>
				<div className='video-item'>
					<YouTube
						embedId={'4l6nZOt_hLM'}
						width={videoWidth}
						height={videoHeight}
						title={'Gustav Mahler Symphony No. 3 in D minor - Trombone Solo'}
					/>
					<p className='video-desc'>
						Tim Anderson performs Gustav Mahlers Symhpony No. 3 in D minor
						trombone solo.
					</p>
				</div>
			</div>
		)
	}

	return (
		<div className='section' id='media'>
			<h1 className='heading serif'>My Media</h1>
			<h3 className='media-heading'>
				Check out some of my featured videos, or more on my YouTube
				channel&nbsp;
				<a
					className='hyperlink'
					href='https://www.youtube.com/channel/UCKZ4Sr0zR7J0A0NWuSa2sig/featured'
					target='_blank'
					rel='noreferrer'
				>
					here
				</a>
				.
			</h3>
			{renderVideos()}
			<div className='products-container'>
				<h3 className='media-heading'>
					Like what you hear? Support me by purchasing my CDs!
				</h3>
				<Products />
			</div>
		</div>
	)
}
