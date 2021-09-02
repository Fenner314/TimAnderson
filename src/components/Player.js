import React from 'react';

export default function Player(props) {
    const {
        pic,
        href,
        website
    } = props;

    return (
        <div className="student-container mb-30">
            <div className="student-info">
                <span className="mb-30">{props.children}</span>
                <a href={href} target="_blank" rel="noreferrer" className="text-center hyperlink">{website}</a>
            </div>
            <div className="student">
                <h3 className="mb-20">Joseph Alessi</h3>
                <img src={pic} width="200px" alt="artist headshot" />
            </div>
        </div>
    )
}
