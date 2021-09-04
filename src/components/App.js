import React, { useEffect, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/styles.css';
import Navbar from "./Navbar";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection/AboutSection";
import MediaSection from "./MediaSection";
import QuartetSection from "./QuartetSection";
import Footer from "./Footer";
import Cart from "./Cart/Cart";
import Checkout from './CheckoutFlow/Checkout';
import { AppContext } from '../utils/context';

function App() {
  const { loaded, setLoaded, fetchCart, fetchItems } = useContext(AppContext)

  useEffect(() => {   
    fetchItems();
    fetchCart();
  }, []);

  useEffect(() => {   
    setTimeout(()=>{
      setLoaded(true);
    }, 500);
  }, []);


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
