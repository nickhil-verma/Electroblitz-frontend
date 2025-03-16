import BG from "../src/assets/BG1.mp4";
import Footer from "./components/Footer";
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Event from './components/Events';
import Notification from './components/Notifications';
import Gallery from "./components/Gallery";

function App() {
  return (
    <>
      {/* Background Video with an opacity overlay */}
      <div className="absolute inset-0 z-0">
        <video
          className="fixed top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={BG} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Semi-transparent black overlay to decrease opacity of video */}
        <div className="  inset-0 fixed bg-black opacity-60 z-0"></div>
      </div>

      <Navbar />
      <Hero />
      <Event />
      <Gallery />
      <Footer />
      <Notification />
    </>
  );
}

export default App;
