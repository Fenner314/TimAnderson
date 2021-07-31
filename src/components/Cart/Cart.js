import React, { useContext } from 'react';
import { ProductContext } from '../App';
import CartColumns from './CartColumns';
import CartList from './CartList';
import CartTotals from './CartTotals';
import EmptyCart from './EmptyCart';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

export default function Cart(props) { 
    const { cart, cartOpen, handleCartToggle } = useContext(ProductContext);
    
    if (cart.length > 0) {
        return (
            <div className={cartOpen ? "cart-container" : 'invis'}>
                <h1 className="cart-title heading serif">Your Cart</h1>
                <CartColumns />
                <CartList cart={cart}/>
                <CartTotals cart={cart} history={props.history} />
                <p className="close-cart" onClick={handleCartToggle}>Back to site</p>
            </div>
        )
    } 
    return (
        <div className={cartOpen ? "cart-container" : 'invis cart-container-down'}>
            <EmptyCart />
            <p className="close-cart" onClick={handleCartToggle}>Back to site</p>
        </div>
    )
}
