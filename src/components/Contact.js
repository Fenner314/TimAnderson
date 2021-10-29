import React from 'react'
import Button from '@material-ui/core/Button'
import useStyles from './CheckoutFlow/styles'

export default function Contact() {
	const classes = useStyles()

	return (
		<div className='contact-container'>
			<div className='contact-half contact-message'>
				<h1 className='serif'>Contact Me</h1>
				<p>
					Want to book the Elysian Trombone Consort or myself for a masterclass
					or performance opportunity? Fill out this contact form to reach out to
					me and I'll get back to you as soon as I am able.
				</p>
			</div>
			<form
				className='contact-half contact-form'
				action='https://formsubmit.co/anderst5@ucmail.uc.edu'
				method='POST'
			>
				<input
					type='hidden'
					name='_subject'
					value='New message from website.'
				/>
				<input type='text' name='_honey' style={{ display: 'none' }} />
				<input type='hidden' name='_captcha' value='false' />
				<input
					type='hidden'
					name='_next'
					value='https://www.timothyandersontrombone.com/thanks'
				/>
				<div className='input-container'>
					<input className='input' type='text' name='name' required />
					<span className='floating-label'>Name</span>
				</div>
				<div className='input-container'>
					<input className='input' type='email' name='email' required />
					<span className='floating-label'>Email</span>
				</div>
				<div className='input-container'>
					<textarea
						className='input'
						name='message'
						rows='5'
						cols='60'
						resize='false'
						required
					/>
					<span className='floating-label'>Message</span>
				</div>
				<Button
					variant='contained'
					className={classes.sendButton}
					type='submit'
				>
					Send
				</Button>
			</form>
		</div>
	)
}
