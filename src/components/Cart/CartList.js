import React from 'react';
import CartItem from './CartItem';

export default function CartList({ commerceCart }) {
    console.log(commerceCart.line_items)
    return (
        <div className="container-fluid">
            {commerceCart.line_items.map(item => {
                return <CartItem key={item.id} item={item} />
            })}
        </div>
    )
}
