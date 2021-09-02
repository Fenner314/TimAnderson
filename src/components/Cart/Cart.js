import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import EmptyCart from './EmptyCart';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import useStyles from '../CheckoutFlow/styles';
import { AppContext } from '../../utils/context';

export default function Cart(props) { 
    const { commerceCart } = useContext(AppContext);

    const classes = useStyles();
    
    if (commerceCart.total_items > 0) {
        return (
            <div className={"cart-container"}>
                <h1 className="cart-title heading serif">Your Cart</h1>
                <CartColumns />
                <CartList commerceCart={commerceCart} />
                <CartTotals history={props.history} />
                <Link to="/">
                    <Button className={classes.buttonBack} variant="outlined">Back to site</Button>
                </Link>
            </div>
        )
    } 
    return (
        <div className="cart-container">
            <EmptyCart />
            <Link to="/">
                <Button className={classes.buttonBack} variant="outlined">Back to site</Button>
            </Link>
        </div>
    )
}
