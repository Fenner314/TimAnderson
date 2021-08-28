import React, { useContext } from 'react';
import {ProductContext} from '../App';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '../Button';
import PaypalButton from './PaypalButton';

const useStyles = makeStyles(theme => ({
    clearButton: {
        backgroundColor: 'var(--main-red)',
        color: 'var(--main-white)',
        marginBottom: '10px', 
        '&:hover': {
            backgroundColor: 'var(--dark-red)',
        }
    },
}));

export default function CartTotals(props) {
    const classes = useStyles();
    const {history} = props;

    const { cartSubTotal, cartTax, cartTotal, clearCart } = useContext(ProductContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col-10 mt-2 mb-4 ml-sm-5 ml-md-auto col-sm-8 d-flex flex-column align-items-end" style={{width: "160px"}}>
                    <Button 
                        variant="contained"
                        className={classes.clearButton}
                        startIcon={<DeleteIcon/>}
                        onClick={() => clearCart()}>
                        Clear Cart
                    </Button>
                    <h5 className="text-title">
                        <span>
                            Subtotal:&nbsp;
                        </span>
                        <strong>${cartSubTotal}</strong>
                    </h5>
                    <h5 className="text-title">
                        <span>
                            Tax:&nbsp;
                        </span>
                        <strong>${cartTax}</strong>
                    </h5>
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
                    <PaypalButton 
                        total={cartTotal} 
                        clearCart={clearCart} 
                        history={history}
                    />
                </div>
            </div>
        </div>
    )
}
