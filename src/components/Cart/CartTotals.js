import React, { useEffect, useContext } from 'react';
import {ProductContext} from '../App';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import { makeStyles } from '@material-ui/core/styles';
import PaypalButton from './PaypalButton';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    clearButton: {
        backgroundColor: 'var(--main-red)',
        color: 'var(--main-white)',
        marginBottom: '10px', 
        '&:hover': {
            backgroundColor: 'var(--dark-red)',
        }
    },
    checkoutButton: {
        backgroundColor: 'var(--accent-dark)',
        color: 'var(--main-white)',
        marginBottom: '10px', 
        '&:hover': {
            backgroundColor: 'var(--accent-darker)',
        }
    },
}));

export default function CartTotals(props) {
    const classes = useStyles();
    const {history} = props;

    const { cartSubTotal, cartTax, cartTotal, clearCart, commerceCart, addCartTotal, handleEmptyCart } = useContext(ProductContext);

    useEffect(() => {
        addCartTotal(commerceCart.subtotal.raw)
    }, [commerceCart])

    const sendEmailTest = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wbbu1ik', 'template_6xbdfkx', e.target, 'user_KGH7f22ZQvlbjzIvICeet')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    let form = () => <form><input type="hidden" name="name" value="flabbab" /></form>;
console.log(commerceCart)
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 mb-4 ml-sm-5 ml-md-auto col-sm-8 d-flex flex-column align-items-end" style={{width: "160px"}}>
                    <Button 
                        variant="contained"
                        className={classes.clearButton}
                        startIcon={<DeleteIcon/>}
                        onClick={handleEmptyCart}>
                        Clear Cart
                    </Button>
                    <h5 className="text-title">
                        <span>
                            Subtotal:&nbsp;
                        </span>
                        <strong>${commerceCart.subtotal.formatted}</strong>
                    </h5>
                    {/* <h5 className="text-title">
                        <span>
                            Tax:&nbsp;
                        </span>
                        <strong>${cartTax}</strong>
                    </h5> */}
                    <h5 className="text-title">
                        <span>
                            Shipping:&nbsp;
                        </span>
                        <strong>$6.00</strong>
                    </h5>
                    <h5 className="text-title" style={{marginBottom: '10px'}}>
                        <span>
                            Total:&nbsp;
                        </span>
                        <strong>${cartTotal}</strong>
                    </h5>
                    <Link to="/checkout">
                        <Button 
                            variant="contained"
                            className={classes.checkoutButton}
                            startIcon={<LocalMallIcon/>}
                            onClick={handleEmptyCart}>
                            Checkout
                        </Button>
                    </Link>
                    {/* <PaypalButton 
                        total={cartTotal} 
                        clearCart={clearCart} 
                        history={history}
                    /> */}
                </div>
{/* 
                <form onSubmit={sendEmailTest}>
                    <input type="hidden" name="name" value="flabbab" />
                    <input type="hidden" name="email" value="jacobgfenner@yahoo.com" />
                    <button type="submit">Send</button>
                </form> */}
            </div>
        </div>
    )
}
