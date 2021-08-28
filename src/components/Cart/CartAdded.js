import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../../App';
import Button from '../Button';

export default function CartAdded() {
    const { cartAddedOpen, handleCartAddedOpenToggle, setDetailsOpen } = useContext(ProductContext);

    const linkWidth = {
        width: '100%'
    }

    return (
        <>
            <div className={cartAddedOpen ? "cart-added-container" : "invisible"}>
                <div className="cart-added-message">
                    <i className="fas fa-check-circle fa-lg"></i>
                    <p>Item successfully added to cart!</p>
                </div>
                <div className="cart-added-buttons">
                    {/* <div className="cart-added-button"> */}
                        <Link to="/cart" style={linkWidth}>
                            <Button 
                                text={'View Cart'} 
                                height={'40px'} 
                                maxWidth={'125px'} 
                                fontSize={'1rem'} 
                                border={'1px solid var(--mainYellow)'}
                                borderRadius={'30px'} 
                                onClick={() => {
                                    handleCartAddedOpenToggle();
                                    setDetailsOpen()
                                }}
                            />
                        </Link>
                    {/* </div> */}
                    {/* <div className="cart-added-button"> */}
                        <Button 
                            text={'Back To Shop'} 
                            height={'40px'} 
                            maxWidth={'125px'} 
                            fontSize={'1rem'} 
                            border={'1px solid var(--mainYellow)'}
                            borderRadius={'30px'} 
                            onClick={() => handleCartAddedOpenToggle()}
                        />
                    {/* </div> */}
                </div>
            </div>
            <div className={cartAddedOpen ? "cart-added-overlay-active" : ""} onClick={() => handleCartAddedOpenToggle()}></div>
        </>
    )
}
