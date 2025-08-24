import "./App.css";
import About from "./components/About";
import BottomBar from "./components/BottomBar";
import FoodDrinks from "./components/FoodDrinks";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HotelNews from "./components/HotelNews";
import InstagramFeed from "./components/InstagramFeed";
import RoomType from "./components/RoomType";
import Services from "./components/Services";
import SpecialOffers from "./components/SpecialOffers";
import Staff from "./components/Staff";
import Testimonial from "./components/Testimonial";
import TopBar from "./components/TopBar";
import Video from "./components/Video";

function App() {
  return (
    <main className="relative flex flex-col items-center">
      <TopBar />

      <div className="relative">
        <Hero />

        <About />
      </div>

      <RoomType />

      <Services />

      <Video />

      <FoodDrinks />

      <SpecialOffers />

      <Testimonial />

      <Staff />

      <HotelNews />

      <InstagramFeed />

      <Footer />

      <BottomBar />
    </main>
  );
}

export default App;
