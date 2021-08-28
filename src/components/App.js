import React, { useState, useEffect } from 'react';
import '../css/app.css';
import Navbar from "./Navbar";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection/AboutSection";
import MediaSection from "./MediaSection";
import QuartetSection from "./QuartetSection";
import Footer from "./Footer";
import Cart from "./Cart/Cart";

import { products, details, shipping } from '../utils/data';

export const ProductContext = React.createContext();

function App() {
  const [mediaProducts, setMediaProducts] = useState(products);
  const [productDetails, setProductDetails] = useState(details);
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [cartLength, setCartLength] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(shipping);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(()=>{
      setLoaded(true);
     }, 500)
  }, []);

  useEffect(() => {
    addTotals();
    setShippingCost(shipping);
  }, [cart]);

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
    const tempTax = subTotal * .065;
    const tax = parseFloat(tempTax); 
    const tempTotal = subTotal + tax + shippingCost;
    const total = parseFloat(tempTotal.toFixed(2));
    
    setCartSubTotal(subTotal);
    setCartTax(parseFloat(tax.toFixed(2)));
    setCartTotal(total);
  }

  const productContextValue = {
    mediaProducts,
    productDetails,
    cartOpen,
    cart,
    cartLength,
    cartSubTotal,
    cartTax,
    cartTotal,
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
    addTotals
  }

  return (
    <ProductContext.Provider value={productContextValue}>
      <div className={loaded ? "App" : "App preload"}>
        <div className="site-container">
          <Navbar />
          <HomeSection />
          <AboutSection />
          <MediaSection />
          <QuartetSection />
          <Footer />
          <Cart />
        </div>
      </div>
    </ProductContext.Provider>
  );
}

export default App;
