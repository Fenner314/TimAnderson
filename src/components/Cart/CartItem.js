import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { ProductContext } from '../App';

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

export default function CartItem({ item, cart }) {
    const classes = useStyles();

    const {
        id, 
        name, 
        img, 
        price, 
        total, 
        count
    } = item;

    const { 
        increment, 
        decrement, 
        removeItem 
    } = useContext(ProductContext);
    
    return (
        <div className="row my-4 text-center">
            <div className="col-10 my-1 mx-auto col-lg-2">
                <img 
                src={img} 
                style={{width: '7rem'}} 
                className="img-fluid" 
                alt="product" />
            </div>
            <div className="col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <span className="d-lg-none">Item:&nbsp;</span>
                {name}
            </div>
            <div className="col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <span className="d-lg-none">Price:&nbsp;</span>
                ${price}
            </div>
            <div className="col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <div className="d-flex justify-content-center">
                    <div className="quantity-ctrl">
                    <ButtonGroup size="small" className={classes.stepper} style={{ marginRight: '20px' }}>
                        <Button disabled={count <= 1} className={classes.stepperBox} onClick={() => decrement(id)} >-</Button>
                        <Button disabled className={classes.stepperBox}>{count}</Button>
                        <Button className={classes.stepperBox} onClick={() => increment(id)} >+</Button>
                    </ButtonGroup>
                    </div>
                </div>
            </div>
            <div className="col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <div className="cart-icon" onClick={() => removeItem(id)}>
                    <i className="fas fa-trash fa-lg" />
                </div>
            </div>
            <div className="col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                <strong>Item Total: ${total}</strong>
            </div>
        </div>
    )
}
