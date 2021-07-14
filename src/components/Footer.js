import React from 'react';
import Contact from './Contact';
import { daytonPhilLogo, daytonPhilSite, UCLogo, UCSite, courtoisLogo, courtoisSite } from '../utils/data';

export default function Footer() {
    return (
        <div className="section" id="footer">
            <div className="affiliations">
                <a href={UCSite} target="_blank" rel="noreferrer"><img src={UCLogo} alt="University of Cincinnati CCM logo" height="100px" /></a>
                <a className="middle" href={daytonPhilSite} target="_blank" rel="noreferrer"><img src={daytonPhilLogo} alt="Dayton Philharmonic Orchestra Logo" height="70px" /></a>
                <a href={courtoisSite} target="_blank" rel="noreferrer"><img src={courtoisLogo} alt="Courtois logo" height="100px" /></a>
            </div>
            <Contact />
            <div className="social">
                <a href="https://www.facebook.com/ElysianTromboneConsort" target="_blank" rel="noreferrer"><i class="fab fa-facebook-f fa-lg"></i></a>
                <a href="https://www.youtube.com" target="_blank" rel="noreferrer"><i class="fab fa-youtube fa-lg"></i></a>
                <a href="https://open.spotify.com/artist/0XsSyfXpHq6JJE3FkcLRkw?si=7C0wlHftTuG6KR4S7CZ2hg&utm_source=copy-link&dl_branch=1" target="_blank" rel="noreferrer"><i class="fab fa-spotify fa-lg"></i></a>
            </div>
            <p className="copy">Copyright &copy; 2021 Timothy Anderson. Website created by <a className="fenner" href="https://www.fennerstudios.com" target="_blank" rel="noreferrer">Fenner Studios</a>.</p>
        </div>
    )
}
