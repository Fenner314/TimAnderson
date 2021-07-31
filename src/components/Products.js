import React from 'react';
import Product from './Product';
import { products } from '../utils/data';

export default function Products() {
    return (
        <>
            {products.map(product => {
                return (
                    <Product key={product.id} {...product} product={product} />
                )
            })}
        </>
    )
}
