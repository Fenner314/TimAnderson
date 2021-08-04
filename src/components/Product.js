import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { ProductContext } from './App';

const useStyles = makeStyles(theme => ({
    addButton: {
        backgroundColor: 'var(--accent-dark)',
        color: 'var(--main-white)',
        '&:hover': {
            backgroundColor: 'var(--accent-darker)',
            color: 'var(--main-white)',
        },
        '@media (max-width: 500px)' : {
            marginTop: '20px',
        }
    },
    stepperBox: {
        border: '1px solid var(--accent-dark) !important',
        color: 'var(--main-white) !important',
        '&:hover': {
            backgroundColor: 'hsla(105, 65%, 20%, .25)'
        }
    }
}));

export default function Product(props) {
    const classes = useStyles();

    const { addToCart, qtyDecrement, qtyIncrement } = useContext(ProductContext);

    const {
        id,
        name,
        img,
        desc,
        price,
        count,
        inCart
    } = props.product;

    return (
        <div className="product-card-container">
            <div className="product-card" style={{backgroundImage: `url(../${img})`}}>
                {/* <img src="img/travlr.png" alt="cd cover" width="250px" height="250px" /> */}
                <div className="card-info" >
                    <h2>{name}</h2>
                    <p>${price}</p>
                    <p>{desc}</p>
                    <div className="add-container">
                        <ButtonGroup size="small" className={classes.stepper} style={{ marginRight: '20px' }}>
                            <Button disabled={count <= 1 || inCart} className={classes.stepperBox} onClick={() => qtyDecrement(id)} >-</Button>
                            <Button disabled className={classes.stepperBox}>{count}</Button>
                            <Button disabled={inCart} className={classes.stepperBox} onClick={() => qtyIncrement(id)} >+</Button>
                        </ButtonGroup>
                        <Button variant="contained" size="small" disabled={inCart} className={classes.addButton} onClick={() => addToCart(id)}>
                            {inCart ? 'Added To Cart' : 'Add To Cart'}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
