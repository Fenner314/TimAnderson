import React, { useState, useEffect, useContext } from 'react';
import cx from 'classnames';
import { Link as CartLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import bag from '../img/bag.svg'
import { AppContext } from '../utils/context';

export default function Navbar() {
    const [scroll, setScroll] = useState(false);
    const [menu, setMenu] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [noTrans, setNoTrans] = useState(false);

    const { handleCartToggle, commerceCart } = useContext(AppContext);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 180);
        })
    }, [scroll]);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setMenu(window.innerWidth <= 925 ? true : false);
            // setMenuOpen(window.innerWidth <= 925 ? true : false);
            const handleTransitionToggle = () => {
                setNoTrans(window.innerWidth <= 925 ? true : false);
                setTimeout(() => {
                    setNoTrans(false)
                }, 200)
            };
            handleTransitionToggle();
        });
        setMenu(window.innerWidth <= 925 ? true : false);
        setMenuOpen(false);
    }, []);

    const handleMenuClick = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true)
    }

    return (
        <>
        <div className={cx(
            scroll ? 'navbar navbar-after' : 'navbar navbar-before',
            noTrans ? 'preload' : ''
        )}>
            <ul className={cx(
                menu ? "nav-links-menu serif" : "nav-links serif",
                menu && !menuOpen ? "translate-100" : "translate-0"
            )}>
                {menu ? 
                <div className="close-menu" onClick={handleMenuClick}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                </div> : null}
                <Link 
                    to="about" 
                    smooth={true} 
                    offset={-47} 
                    duration={1200} 
                    activeClass={menu ? 'nav-links-menu-active' : 'nav-links-active'}
                    spy={true}
                    onClick={menu ? handleMenuClick : null}
                >
                    <li>
                        About Me
                    </li>
                </Link>
                <Link 
                    to="media" 
                    smooth={true} 
                    offset={-47} 
                    duration={1200} 
                    className={scroll && !menu ? 'media-to-left' : 'media-to-middle'} 
                    activeClass={menu ? 'nav-links-menu-active' : 'nav-links-active'}
                    spy={true}
                    onClick={menu ? handleMenuClick : null}
                >
                    <li id="mediaLink" >
                        Media
                    </li>
                </Link>
                <Link 
                    to="quartet" 
                    smooth={true} 
                    offset={-47} 
                    duration={1200} 
                    className={scroll && !menu ? 'quartet-to-right' : 'quartet-to-middle'} 
                    activeClass={menu ? 'nav-links-menu-active' : 'nav-links-active'}
                    spy={true}
                    onClick={menu ? handleMenuClick : null}
                >
                    <li id="quartetLink">
                        Quartet
                    </li>
                </Link>
                <Link 
                    to="footer" 
                    smooth={true} 
                    offset={-47} 
                    duration={1200} 
                    activeClass={menu ? 'nav-links-menu-active' : 'nav-links-active'}
                    spy={true}
                    onClick={menu ? handleMenuClick : null}
                >
                    <li>
                        Contact Me
                    </li>
                </Link>
            </ul>
            <div className={menuOpen ? "overlay" : "overlay-inactive"}></div>
            <div id="brand" className={scroll ? 'brand-after' : 'brand-before'}>
                    <span>
                        <Link   
                            to="home"     
                            smooth={true}   
                            offset={-47}  
                            duration={1200}  
                            spy={true}
                        >
                            Timothy Anderson
                        </Link>
                    </span>
                    <h2 className={scroll ? 'title serif title-after' : 'title serif title-before'}>Trombonist | Teacher</h2>
            </div>
            <div className="right-links">
                <CartLink to="/cart">
                    <div className="bag-container">
                        <p className="cart-number">{commerceCart.total_items}</p>
                        <img src={bag} width="30px" height="30px" alt="shopping bag" />
                    </div>
                </CartLink>
                {
                    menu ?
                        <div className="menu" onClick={handleMenuClick}>
                            <div id="line-one"></div>
                            <div id="line-two"></div>
                            <div id="line-three"></div>
                        </div> 
                    :
                    null
                }
            </div>
        </div>
        </>
    )
}
