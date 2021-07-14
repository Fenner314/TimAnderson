import '../css/app.css';
import Navbar from "./Navbar";
import HomeSection from "./HomeSection";
import AboutSection from "./AboutSection/AboutSection";
import MediaSection from "./MediaSection";
import QuartetSection from "./QuartetSection";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="site-container">
        <Navbar />
        <HomeSection />
        <AboutSection />
        <MediaSection />
        <QuartetSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
