import { Hero } from "./components/Hero";
import Navbar from "./components/Navbar";
import UIUXSection from "./components/UIUXSection";
import WebDev from "./components/WebDev";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <UIUXSection />
      <WebDev />
      <Footer />
    </div>
  );
}

export default App;
