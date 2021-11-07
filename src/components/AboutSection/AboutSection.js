import React from 'react'
import FormerStudentLeft from './FormerStudentLeft'
import FormerStudentRight from './FormerStudentRight'
import {
	willTimmons,
	katieThigpen,
	russZokaites,
	nathan,
	louisSetzer,
	jacobElkin,
	jordanJacobson,
	austinMotley,
	evanHatter,
	jettWalker,
	jonathanTang,
	TimImageBio,
	UCSite,
} from '../../utils/data'

export default function AboutSection() {
	const url = 'https://www.slidearea.com'

	return (
		<div className='about-section section' id='about'>
			<div className='bio'>
				<h1 className='heading serif'>Biography</h1>
				<img
					src={TimImageBio}
					width='300px'
					className='bio-img'
					alt='Timothy Anderson holding a trombone'
				/>
				<p className='text-block'>
					Timothy Anderson is Associate Professor of Trombone at the
					College-Conservatory of Music, University of Cincinnati (CCM), a
					position he has held since 2006. Teaching duties include Applied
					Lessons, Chamber Music, Excerpt Class, Studio Class, Trombone Choir,
					and other related trombone topics.
				</p>
				<p className='text-block'>
					In addition to his duties at CCM, Professor Anderson has served as
					Principal Trombone of the Dayton Philharmonic for 27 years. He has
					appeared as a soloist with that orchestra on multiple occasions and
					contributed to several recordings.
				</p>
				<p className='text-block'>
					As a chamber musician, Mr. Anderson is an active member of the Elysian
					Trombone Consort. This group has commissioned and premiered over 25
					new works for trombone quartet. Several of the works written for this
					group have already entered the standard repertoire.
				</p>
				<p className='text-block'>
					Mr. Anderson is a former member of the Carillon Brass Quintet where he
					was active for over 20 years. In addition to presenting many chamber
					recitals, the quintet served as guest artists with orchestras and
					bands. During those “quintet years” Mr. Anderson was part of over 1500
					educational concerts in public and private schools.
				</p>
				<p className='text-block'>
					As an advocate for new music, Mr. Anderson has premiered many new solo
					works and recorded two CDs of original commissions-Trav'ler and Ex
					Libris. A third recording of original works for trombone and organ is
					underway.
				</p>
				<p className='text-block'>
					Professional appearances include Ohio Music Educator’s Conference,
					American Trombone Workshop, International Trombone Festival, College
					Music Society, and the International Women’s Brass Conference. He has
					given several recital and masterclass tours and presented at colleges
					and universities around the country.
				</p>
				<p className='text-block'>
					For the opportunity to study with Timothy Anderson at CCM, inquire or
					apply at{' '}
					<a
						className='hyperlink'
						href={UCSite}
						target='_blank'
						rel='noreferrer'
					>
						https://ccm.uc.edu/admissions-and-aid.html
					</a>
					.
				</p>
			</div>
			<div className='musician-container pb-0'>
				<h1 className='heading serif'>Former Students</h1>
				<FormerStudentLeft
					name={'William Timmons'}
					pic={willTimmons}
					website={'https://williamtimmons.com/'}
				>
					Trombonist, United States Air Force Ceremonial Brass. Web Developer,
					App Developer, Productions Manager.
				</FormerStudentLeft>
				<FormerStudentRight
					name={'Katie Thigpen'}
					pic={katieThigpen}
					website={'https://www.katiethigpen.com/'}
				>
					Trombonist, United States Army Band "Pershing's Own". Freelance
					trombonist and educator, Washington, D.C.
				</FormerStudentRight>
				<FormerStudentLeft
					name={'Russ Zokaites'}
					pic={russZokaites}
					website={'http://www.russzokaites.com/'}
				>
					Visiting Assistant Professor of Music - Trombone, Morehead State
					University in Kentucky.
				</FormerStudentLeft>
				<FormerStudentRight
					name={'Nathan Siler'}
					pic={nathan}
					website={'https://music.eku.edu/people/siler'}
				>
					Associate Professor of Trombone, Eastern Kentucky University School of
					Music. Member of the Elysian Trombone Consort.
				</FormerStudentRight>
				<FormerStudentLeft
					name={'Louis Setzer'}
					pic={louisSetzer}
					website={'https://www.louissetzer.com/'}
				>
					Lecturer of Low Brass, Nothern Kentucky University. Author of Solo
					Literature for Trombone and Harp - An Annotated Bibliography.
				</FormerStudentLeft>
				<FormerStudentRight
					name={'Jacob Elkin'}
					pic={jacobElkin}
					website={'https://www.jacobelkin.com/'}
				>
					New York City based musician, composer, and educator.
				</FormerStudentRight>
				<FormerStudentLeft
					name={'Jordan Jacobson'}
					pic={jordanJacobson}
					website={'https://thejordanjacobson.com/post/136718893577'}
				>
					Principal Trombone, Hartford Independent Chamber Orchestra. Alternate
					trombonist, Goodspeed Opera House.
				</FormerStudentLeft>
				<FormerStudentRight
					name={'Jonathan Tang'}
					pic={jonathanTang}
					website={'https://jonathantangmusic.netlify.app'}
				>
					Founder of the Cincinnati Brass Academy. Doctoral candidate,
					University of North Texas.
				</FormerStudentRight>
				<FormerStudentLeft
					name={'Austin Motley'}
					pic={austinMotley}
					website={'https://www.austinmotley.com/'}
				>
					Principal Trombone, Battle Creek Symphony Orchestra. Second Trombone,
					Richmond, IN Symphony Ochestra. Adjunct Trombone Instructor, Wright
					State University.
				</FormerStudentLeft>
				<FormerStudentRight
					name={'Evan Hatter'}
					pic={evanHatter}
					website={'https://www.instagram.com/evanhattermusic/'}
				>
					Assistant Director of Bands, Thomas More University. Instructor of
					Trombone, Thomas More University.
				</FormerStudentRight>
				<FormerStudentLeft
					name={'Jett Walker'}
					pic={jettWalker}
					website={'https://www.jettwalkertrombone.com/'}
				>
					Doctoral Candidate and Teaching Assistant, University of Cincinnati,
					College-Conservatory of Music.
				</FormerStudentLeft>
			</div>
		</div>
	)
}
