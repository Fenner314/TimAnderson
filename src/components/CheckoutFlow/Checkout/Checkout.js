import React, { useState, useEffect, useContext } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button, CssBaseline } from '@material-ui/core';
import useStyles from './styles';
import { commerce } from '../../../lib/commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { ProductContext } from '../../App';
import { Link, useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router';

const steps = ['Shipping address', 'Payment details']

export default function Checkout() {
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const classes = useStyles();
    const history = useHistory();

    const { commerceCart, order, errorMessage } = useContext(ProductContext);

    useEffect(() => {
        const generateToken = async() => {
            try {
                const token = await commerce.checkout.generateToken(commerceCart.id, { type: 'cart' });

                console.log(token);

                setCheckoutToken(token);
                console.log(checkoutToken)
            } catch (error) {
                console.log(error);
                // history.push('/');
            }
        }

        generateToken();
    }, [commerceCart]);

    const nextStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    }

    const backStep = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }

    const next = (data) => {
        console.log(data);
        setShippingData(data);
        nextStep();
    }

    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}.</Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2">Order ref: {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to site</Button>
        </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    );

    if (errorMessage) {
        <>
            <Typography variant="h5">Error: {errorMessage}</Typography>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">Back to site</Button>
        </>
    }

    const Form = () => activeStep === 0 ?
        <AddressForm checkoutToken={checkoutToken} next={next} /> :
        <PaymentForm checkoutToken={checkoutToken} shippingData={shippingData} backStep={backStep} nextStep={nextStep} />

    return (
        <div>
            <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </div>
    )
}
