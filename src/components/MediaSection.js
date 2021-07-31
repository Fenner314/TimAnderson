import React from 'react';
import Products from './Products';
// import { products } from '../utils/data';
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(theme => ({
//     addButton: {
//         backgroundColor: 'var(--accent-dark)',
//         color: 'var(--main-white)',
//         '&:hover': {
//             backgroundColor: 'var(--accent-darker)',
//             color: 'var(--main-white)',
//         }
//     },
//     stepperBox: {
//         border: '1px solid var(--accent-dark) !important',
//         color: 'var(--main-white) !important',
//         '&:hover': {
//             backgroundColor: 'hsla(105, 65%, 20%, .15)'
//         }
//     }
// }));

export default function MediaSection() {
    // const classes = useStyles();

    return (
        <div className="section" id="media">
            <h1 className="heading serif">My Media</h1>
            <div className="products-container">
                <Products />
            </div>
        </div>
    )
}
