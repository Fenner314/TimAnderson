import React, { useState } from "react";
import { products, details, shipping } from '../utils/data';
import { commerce } from '../lib/commerce';

export const AppContext = React.createContext();

export default function Context(props) {
    const [mediaProducts, setMediaProducts] = useState(products);
    const [productDetails, setProductDetails] = useState(details);
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [cartOpen, setCartOpen] = useState(false);
    const [cart, setCart] = useState([]);
    const [commerceCart, setCommerceCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [cartLength, setCartLength] = useState(0);
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [cartTax, setCartTax] = useState(0);
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
        // const tempTax = subTotal * .065;
        // const tax = parseFloat(tempTax); 
        const tempTotal = subTotal + shippingCost;
        // const tempTotal = subTotal + tax + shippingCost;
        // const total = parseFloat(tempTotal.toFixed(2));
        
        // setCartSubTotal(subTotal);
        // setCartTax(parseFloat(tax.toFixed(2)));
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
        setCartLength(cartLength + product.count);
    
        setCart([...cart, product]);
      }
    
      const increment = (id) => {
        const product = getItem(id);
    
        product.count += 1;
        product.total = product.count * product.price;
        setCartLength(cartLength + 1);
        setCart([...cart]);
      }
    
      const decrement = (id) => {
        const product = getItem(id);
    
        product.count -= 1;
        product.total = product.count * product.price;
        setCartLength(cartLength - 1);
        setCart([...cart]);
      }
    
      const qtyIncrement = (id) => {
        const product = getItem(id);
    
        product.count += 1;
        product.total = product.count * product.price;
        setCart([...cart]);
      }
    
      const qtyDecrement = (id) => {
        const product = getItem(id);
    
        product.count -= 1;
        product.total = product.count * product.price;
        setCart([...cart]);
      }
    
      const removeItem = (id) => {
        let tempProducts = [...products];
        let tempCart = [...cart];
    
        tempCart = tempCart.filter(item => item.id !== id);
    
        const index = tempProducts.indexOf(getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        setCartLength(cartLength - removedProduct.count);
        removedProduct.count = 1;
        removedProduct.total = 0;
    
        setCart([...tempCart]);
        setMediaProducts([...tempProducts]);
      }
    
        const clearCart = () => {
        cart.forEach(item => {
          item.inCart = false;
          item.count = 0;
          item.total = 0;
        });
        setCart([]);
        setCartLength(0);
      }
    
      const addTotals = () => {
        let subTotal = 0;
        cart.map(item => (subTotal += (item.price * item.count)));
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
        cart,
        setCart,
        commerceCart,
        setCommerceCart,
        order,
        setOrder,
        errorMessage,
        setErrorMessage,
        cartLength,
        setCartLength,
        cartSubTotal,
        setCartSubTotal,
        cartTax,
        setCartTax,
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
        clearCart,
        addTotals,
        // order,

        // errorMessage,



        // mediaProducts,
        // productDetails,
        // cartOpen,
        // cart,
        // cartLength,
        // cartSubTotal,
        // cartTax,
        // cartTotal,
        //new values for commerce.js
        // items,
        // commerceCart,
        // handleAddToCart,
        // handleUpdateCartQuantity,
        // handleRemoveFromCart,
        // handleEmptyCart,
        // addCartTotal,
        // order,
        // handleCaptureCheckout,
        // errorMessage,
        // fetchItems,
        // fetchCart,
    
        // getItem,
        // handleDetail,
        // handleDetailsToggle,
        // handleCartToggle,
        // addToCart,
        // increment,
        // decrement,
        // qtyIncrement,
        // qtyDecrement,
        // removeItem,
        // clearCart,
        // addTotals
    }
    
    return (
        <AppContext.Provider value={appContextValue}>
            {props.children}
        </AppContext.Provider>
    )

}



