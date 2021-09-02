import React, { useState } from "react";
import { products, details, shipping } from '../utils/data';
import { commerce } from '../lib/commerce';

export const AppContext = React.createContext();

export default function Context(props) {
    const [mediaProducts, setMediaProducts] = useState(products);
    const [productDetails, setProductDetails] = useState(details);
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [commerceCart, setCommerceCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);
    const [shippingCost, setShippingCost] = useState(shipping);
    const [loaded, setLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const fetchItems = async() => {
        const { data } = await commerce.products.list();
    
        setItems(data);
      }
    
      const fetchCart = async() => {
        const cart = await commerce.cart.retrieve();
    
        setCommerceCart(cart)
      }
    
      const handleAddToCart = async(productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);
    
        setCommerceCart(cart);
      }
    
      const handleUpdateCartQuantity = async(productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });
    
        setCommerceCart(cart)
      }
    
      const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
    
        setCommerceCart(cart)
      }
    
      const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
    
        setCommerceCart(cart)
      };
    
      const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
    
        setCommerceCart(newCart);
      }
    
      const handleCaptureCheckout = async(checkoutTokenId, newOrder) => {
        try {
          const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
    
          setOrder(incomingOrder);
          refreshCart();
        } catch (error) {
          setErrorMessage(error.data.error.message)
        }
      }
    
      const addCartTotal = (subTotal) => {
        const tempTotal = subTotal + shippingCost;
        setCartTotal(tempTotal.toFixed(2));
      }
    
      const getItem = (id) => {
        const product = mediaProducts.find(item => item.id === id);
        return product;
      }
    
      const handleDetail = (id) => {
        const product = getItem(id);
        setProductDetails(product);
      }
    
      const handleDetailsToggle = () => {
        detailsOpen ? setDetailsOpen(false) : setDetailsOpen(true)
      }
    
      const handleCartToggle = () => {
        cartOpen ? setCartOpen(false) : setCartOpen(true);
      }
    
      const addToCart = (id) => {
        const product = getItem(id);
        product.inCart = true;
        if (product.count === 0) {
          product.count = 1
        }
        const price = product.price;
        product.total = price;
      }
    
      const increment = (id) => {
        const product = getItem(id);
    
        product.count += 1;
        product.total = product.count * product.price;
      }
    
      const decrement = (id) => {
        const product = getItem(id);
    
        product.count -= 1;
        product.total = product.count * product.price;
      }
    
      const qtyIncrement = (id) => {
        const product = getItem(id);
    
        product.count += 1;
        product.total = product.count * product.price;
      }
    
      const qtyDecrement = (id) => {
        const product = getItem(id);
    
        product.count -= 1;
        product.total = product.count * product.price;
      }
    
      const removeItem = (id) => {
        let tempProducts = [...products];
        const index = tempProducts.indexOf(getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count = 1;
        removedProduct.total = 0;
    
        setMediaProducts([...tempProducts]);
      }
        
      const addTotals = () => {
        let subTotal = 0;
        // cart.map(item => (subTotal += (item.price * item.count)));
        // const tempTax = subTotal * .065;
        // const tax = parseFloat(tempTax); 
        const tempTotal = subTotal + shippingCost;
        // const tempTotal = subTotal + tax + shippingCost;
        const total = parseFloat(tempTotal.toFixed(2));
        
        setCartSubTotal(subTotal);
        // setCartTax(parseFloat(tax.toFixed(2)));
        setCartTotal(total);
    }

    const appContextValue = {
        mediaProducts,
        setMediaProducts,
        productDetails,
        setProductDetails,
        detailsOpen,
        setDetailsOpen,
        cartOpen,
        setCartOpen,
        commerceCart,
        setCommerceCart,
        order,
        setOrder,
        errorMessage,
        setErrorMessage,
        cartSubTotal,
        setCartSubTotal,
        cartTotal,
        setCartTotal,
        shippingCost,
        setShippingCost,
        loaded,
        setLoaded,
        items,
        setItems,
        fetchItems,
        fetchCart,
        handleAddToCart,
        handleUpdateCartQuantity,
        handleRemoveFromCart,
        handleEmptyCart,
        refreshCart,
        handleCaptureCheckout,
        addCartTotal,
        getItem,
        handleDetail,
        handleDetailsToggle,
        handleCartToggle,
        addToCart,
        increment,
        decrement,
        qtyIncrement,
        qtyDecrement,
        removeItem,
        addTotals,
    }
    
    return (
        <AppContext.Provider value={appContextValue}>
            {props.children}
        </AppContext.Provider>
    )

}



