import React, { useContext } from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import { AppContext } from '../../utils/context';

export default function Review({ checkoutToken }) {
    const { cartTotal } = useContext(AppContext);

    return (
        <>
            <Typography variant="h6" gutterBottom>Order summary</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{padding: '10px 0'}} key={product.name} >
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                        <Typography variant="body2">{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{padding: '0 0'}}>
                    <ListItemText primary="Shipping" />
                    <Typography variant="subtitle1" style={{fontWeight: 400}}>
                        $6.00
                    </Typography>
                </ListItem>
                <ListItem style={{padding: '0 0'}}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" style={{fontWeight: 700}}>
                        {/* {checkoutToken.live.subtotal.formatted_with_symbol} */}
                        ${cartTotal}
                    </Typography>
                </ListItem>
            </List>
        </>
    )
}
