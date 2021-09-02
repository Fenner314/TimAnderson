import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../css/app.css';
import Navbar from "./Navbar";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection/AboutSection";
import MediaSection from "./MediaSection";
import QuartetSection from "./QuartetSection";
import Footer from "./Footer";
import Cart from "./Cart/Cart";
import Checkout from './CheckoutFlow/Checkout';

import { shipping } from '../utils/data';
import { AppContext } from '../utils/context';

export const ProductContext = React.createContext();

function App() {
  const { loaded, setLoaded, setShippingCost, fetchItems, fetchCart, addTotals, cart } = useContext(AppContext)

  useEffect(() => {   
    fetchItems();
    fetchCart();
  }, []);

  useEffect(() => {   
    setTimeout(()=>{
      setLoaded(true);
    }, 500);
  }, []);

  useEffect(() => {
    addTotals();
    setShippingCost(shipping);
  }, [cart]);


  return (
    <div className={loaded ? "App" : "App preload"}>
      <div className="site-container">
        <Switch>
          <Route exact path="/">
            <Navbar />
            <HomeSection />
            <AboutSection />
            <MediaSection />
            <QuartetSection />
            <Footer />
          </Route>
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
