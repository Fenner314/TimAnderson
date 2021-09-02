import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from '../../utils/context';

const useStyles = makeStyles(theme => ({
    addButton: {
        backgroundColor: 'var(--accent-dark)',
        color: 'var(--main-white)',
        '&:hover': {
            backgroundColor: 'var(--accent-darker)',
            color: 'var(--main-white)',
        }
    },
    stepperBox: {
        border: '1px solid var(--accent-dark) !important',
        color: 'var(--main-white) !important',
        '&:hover': {
            backgroundColor: 'hsla(105, 65%, 20%, .25)'
        }
    }
}));

export default function CartItem({ item, cart,}) {
    const classes = useStyles();

    const { 
        handleUpdateCartQuantity,
        handleRemoveFromCart
    } = useContext(AppContext);
    
    return (
        <div className="row my-4 text-center">
            <div className="col-10 my-1 mx-auto col-lg-2">
                <img 
                src={item.media.source} 
                style={{width: '7rem'}} 
                className="img-fluid" 
                alt="product" />
            </div>
            <div className="col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <span className="d-lg-none">Item:&nbsp;</span>
                {item.name}
            </div>
            <div className="col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <span className="d-lg-none">Price:&nbsp;</span>
                ${item.price.formatted}
            </div>
            <div className="col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center">
                    <div className="quantity-ctrl">
                    <ButtonGroup size="small" className={classes.stepper}>
                        <Button disabled={item.quantity <= 1} className={classes.stepperBox} onClick={() => handleUpdateCartQuantity(item.id, item.quantity - 1)} >-</Button>
                        <Button disabled className={classes.stepperBox}>{item.quantity}</Button>
                        <Button className={classes.stepperBox} onClick={() => handleUpdateCartQuantity(item.id, item.quantity + 1)} >+</Button>
                    </ButtonGroup>
                    </div>
                </div>
            </div>
            <div className="col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <div className="cart-icon" onClick={() => handleRemoveFromCart(item.id)}>
                    <i className="fas fa-trash fa-lg" />
                </div>
            </div>
            <div className="col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <strong>${item.line_total.formatted}</strong>
            </div>
        </div>
    )
}
