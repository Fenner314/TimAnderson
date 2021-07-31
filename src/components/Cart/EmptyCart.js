import React, { useContext } from 'react';
import { ProductContext } from '../App';

export default function EmptyCart() {
    return (
        <div className="heading serif">
            <h1 className="cart-title">Your cart is currently empty</h1>
        </div>
    )
}
