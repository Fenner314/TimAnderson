import React, { useContext } from 'react';
import Product from './Product';
import { AppContext } from '../utils/context';

export default function Products() {
    const { items } = useContext(AppContext);

    return (
        <>
            {items.map(product => {
                return (
                    <Product key={product.id} {...product} product={product} />
                )
            })}
        </>
    )
}
