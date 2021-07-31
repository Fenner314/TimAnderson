import React from 'react';

export default function CartColumns() {
    return (
        <div className="cart-columns-container container-fluid text-center d-none d-lg-block">
            <div className="cart-columns-row row my-4 text-center">
                <div className="cart-columns-item container-fluid text-center d-none d-lg-block col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                    <p>Image</p>
                </div>
                <div className="cart-columns-item container-fluid text-center d-none d-lg-block col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                    <p>Product</p>
                </div>
                <div className="cart-columns-item container-fluid text-center d-none d-lg-block col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                    <p>Price</p>
                </div>
                <div className="cart-columns-item container-fluid text-center d-none d-lg-block col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                    <p>Quantity</p>
                </div>
                <div className="cart-columns-item container-fluid text-center d-none d-lg-block col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                    <p>Remove</p>
                </div>
                <div className="cart-columns-item container-fluid text-center d-none d-lg-block col-10 my-1 mx-auto col-lg-2 d-flex justify-content-center align-items-center">
                    <p>Total</p>
                </div>
            </div>
        </div>
    )
}
