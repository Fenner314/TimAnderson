import React from 'react'

export default function FormerStudentRight(props) {
	const { name, pic, website } = props

	return (
		<div className='student-container right-student mb-30'>
			<div className='student-info'>
				<h3 className='mb-60'>{name}</h3>
				<span className='mb-30'>{props.children}</span>
				<a
					href={website}
					target='_blank'
					rel='noreferrer'
					className='text-center hyperlink'
				>
					{website}
				</a>
			</div>
			<div className='student'>
				{/* <h3 className="mb-20">{name}</h3> */}
				<img src={pic} width='200px' alt='artist headshot' />
			</div>
		</div>
	)
}
