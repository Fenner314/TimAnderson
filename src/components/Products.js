import React, { useContext } from 'react';
import Product from './Product';
import { products } from '../utils/data';
import { ProductContext } from './App';

export default function Products() {
    const { items } = useContext(ProductContext);

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
