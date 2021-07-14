import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 180);
        })
    }, [])

    return (
        <div className={scroll ? 'navbar navbar-after' : 'navbar navbar-before'}>
            <ul className="nav-links serif">
                <Link 
                    to="about" 
                    smooth={true} 
                    offset={-49} 
                    duration={3000} 
                    activeClass='nav-links-active' 
                    spy={true}
                >
                    <li>
                        About Me
                    </li>
                </Link>
                <Link 
                    to="media" 
                    smooth={true} 
                    offset={-49} 
                    duration={3000} 
                    className={scroll ? 'media-to-left' : 'media-to-middle'} 
                    activeClass='nav-links-active' 
                    spy={true} 
                    style={{}}
                >
                    <li id="mediaLink" >
                        Media
                    </li>
                </Link>
                <Link 
                    to="quartet" 
                    smooth={true} 
                    offset={-49} 
                    duration={3000} 
                    className={scroll ? 'quartet-to-right' : 'quartet-to-middle'} 
                    activeClass='nav-links-active' 
                    spy={true}
                >
                    <li id="quartetLink">
                        Quartet
                    </li>
                </Link>
                <Link 
                    to="footer" 
                    smooth={true} 
                    offset={-49} 
                    duration={3000} 
                    activeClass='nav-links-active' 
                    spy={true}
                >
                    <li>
                        Contact Me
                    </li>
                </Link>
            </ul>
            <div id="brand" className={scroll ? 'brand-after' : 'brand-before'}>
                    <span>
                        <Link   
                            to="home"     
                            smooth={true}   
                            offset={-49}  
                            duration={3000}  
                            spy={true}
                        >
                            Timothy Anderson
                        </Link>
                    </span>
                    <h2 className={scroll ? 'title serif title-after' : 'title serif title-before'}>Trombonist | Teacher</h2>
            </div>
        </div>
    )
}
