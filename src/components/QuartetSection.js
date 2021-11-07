import React, { useEffect } from 'react'
import { Parallax, Background } from 'react-parallax'
import FormerStudentLeft from './AboutSection/FormerStudentLeft'
import FormerStudentRight from './AboutSection/FormerStudentRight'
import { alessi, chad, brett, nathan, TimParallax } from '../utils/data'
import { Link } from 'react-scroll'

export default function QuartetSection() {
	const mobile = window.matchMedia('(max-width: 500px)')

	const renderMobileParallax = () => {
		if (mobile.matches) {
			return (
				<Background
					className={'parallax-outer'}
					bgClassName={'no'}
					bgImageStyle={{ display: 'none' }}
				>
					<img src={TimParallax} style={{ opacity: '.5' }} alt='Tim' />
				</Background>
			)
		}
		return null
	}

	return (
		<div className='section' id='quartet'>
			<Parallax
				bgImage={TimParallax}
				strength={300}
				className={'parallax-outer'}
				contentClassName={'parallax'}
				bgImageStyle={{ opacity: '.5' }}
			>
				{renderMobileParallax()}
				{/* <div className="parallax parallax-image"> */}
				<div className='heading'>
					<h1 className='heading serif'>Elysian Trombone Consort</h1>
					<h4>
						Timothy Anderson, Brett Shuster, Nathan Siler - tenor trombones
					</h4>
					<h4>Chad Arnow - bass trombone</h4>
				</div>
				<div className='quartet-bio'>
					<p className='text-block'>
						Formed in 2009, the Elysian Trombone Consort continues with its
						passion for trombone chamber music. The consort has performed
						recitals at the University of Louisville, Bellarmine University, the
						University of Cincinnati College-Conservatory of Music (CCM),
						University of Southern California, Mesa College (San Diego), the
						Peabody Institute of the Johns Hopkins University, Elizabethtown
						State Theatre (KY) and the historic Mt. Vernon United Methodist
						Church in Baltimore. They have also performed featured recitals at
						the 2016 American Trombone Workshop, multiple International Trombone
						Festivals (2019, 2018, 2013), and the 2012 College Music Society
						National Convention in San Diego.
					</p>
					<p className='text-block'>
						Committed to the continued development of new repertoire for
						trombone ensemble, the Elysian Trombone Consort has premiered works
						by David Fetter, Rodney Oakes, Frank Gulino, and John Siler among
						numerous others. In addition, the quartet premiered works by David
						Faleris and Raymond Horton at the 2013 University of Louisville New
						Music Festival. The group has also premiered John Crouch’s Concerto
						for Four Trombones and Wind Ensemble with the Peabody Wind Ensemble
						in Baltimore and performed this concerto with the CCM Wind Ensemble.
						Upon hearing a recording of their performance of his Trombone
						Quartet, composer Walter Ross exclaimed, “WOW! What a super
						performance! I have never heard that piece done so well, with such
						energy, precision, and spirit!”
					</p>
					<p className='text-block'>
						Like and follow us on &nbsp;
						<a
							className='hyperlink'
							href='https://www.facebook.com/ElysianTromboneConsort'
							target='_blank'
							rel='noreferrer'
						>
							Facebook
						</a>
						&nbsp; to stay up to date on our latest performances and
						commissions. The Elysian Trombone Consort is always interested in
						peforming opportunities, especially in performing newly-composed
						works. Please &nbsp;
						<Link
							to='footer'
							smooth={true}
							offset={-49}
							duration={3000}
							className='hyperlink'
						>
							Contact Me
						</Link>
						&nbsp; for more information.
					</p>
				</div>
				{/* </div> */}
			</Parallax>
			<div className='musician-container' style={{ paddingTop: '40px' }}>
				<h1 className='heading serif'>Meet The Players</h1>
				<FormerStudentLeft
					name={'Chad Arnow'}
					pic={chad}
					href={'http://www.chadarnow.com/'}
					website={'www.chadarnow.com'}
				>
					Chad Arnow has been the bass trombonist of the Dayton Philharmonic
					Orchestra since 2000. He is a frequent performer with the Cincinnati
					Symphony and Pops and serves as the Assistant Professor of Trombone
					and Brass Area Coordinator at the University of Dayton. In addition,
					he has performed with the Columbus Symphony, Cincinnati Chamber
					Orchestra and the West Virginia Symphony.
				</FormerStudentLeft>
				<FormerStudentRight
					name={'Brett Shuster'}
					pic={brett}
					href='https://louisville.edu/music/faculty-staff/Faculty/brett-shuster'
					website={'www.louisville.edu'}
				>
					Grammy Winner Brett Shuster is the Professor of Trombone at the
					University of Louisville and the interim second trombonist of the
					Louisville Orchestra. He has been a member of the Chestnut Brass
					Company and has performed with the San Diego Symphony, Phoenix
					Symphony, Vermont Symphony, Arizona Opera and Boston Philharmonic. He
					is the trombonist with the Louisville Brass.
				</FormerStudentRight>
				<FormerStudentLeft
					name={'Nathan Siler'}
					pic={nathan}
					href={'https://music.eku.edu/people/siler'}
					website={'www.music.eku.edu'}
				>
					Founding member Nathan Siler recently served as auxiliary second
					trombone of the Louisville Orchestra. He has served as principal
					trombone with the Orquestra de la SEC in Xalapa, Veracruz, Mexico and
					as a member of the Charlotte Symphony Orchestra. Additional
					appearances include the Cleveland Orchestra, San Diego Symphony,
					Baltimore Symphony, North Carolina Symphony, Louisville Orchestra and
					Tucson Symphony and Dayton Philharmonic. He has also performed with
					Randy Newman, Wayne Shorter and the American Brass Quintet. He is the
					Associate Professor of Trombone at Eastern Kentucky University.
				</FormerStudentLeft>
			</div>
		</div>
	)
}
