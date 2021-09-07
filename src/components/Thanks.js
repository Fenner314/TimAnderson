import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './CheckoutFlow/styles';

export default function Thanks() {
    const classes = useStyles();

    return (
        <div class="thanks-container" style={{color: 'black'}}>
            <div class="thanks-card">
                <h1>Thank you!</h1>
                <div class="thanks-body">
                    <p>Your message was successfully sent. I'll get back to you soon.</p>
                    <Link to='/' >
                        <Button variant="outlined" className={classes.thanksButton}>Back to my site</Button>
                        {/* <span id="back-link" href="dev.html">Back to my site</span> */}
                    </Link>
                </div>
            </div>
        </div>
    )
}
