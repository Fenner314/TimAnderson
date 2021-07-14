import React from 'react'

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-half contact-message">
                <h1 className="serif">Contact Me</h1>
                <p>Want to book the Elysian Trombone Consort or myself for a masterclass or performance opportunity? Fill out this contact form to reach out to me and I'll get back to you as soon as I am able.</p>
            </div>
            <form className="contact-half contact-form">
                <div className="input-container">
                    <input className="input" type="text" required />
                    <span className="floating-label">Name</span>
                </div>
                <div className="input-container">
                    <input className="input" type="text" required />
                    <span className="floating-label">Email</span>
                </div>
                <div className="input-container">
                    <textarea className="input" rows="5" cols="60" resize="false" required />
                    <span className="floating-label">Message</span>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
