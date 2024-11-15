import ManagerContent from "./About/ManagerContent";
import Booking from "./booking/Booking";
import About from "./Hero/About";
import Hero from "./Hero/Hero";
import Services from "./Hero/Services";
import Testimonial from "./Hero/Testimonial";
import HotelServices from "./Hotel Services/HotelServices";
import Rooms from "./Rooms/Rooms";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div className="-mt-20">
        <Booking />
      </div>
      <Rooms />

      <div>
        <About />
      </div>
      <div>
        <Services />
      </div>
      <div className="mx-auto -mt-32  relative z-10  max-w-6xl  ">
        <ManagerContent />
      </div>
      <div className="my-14">
        <HotelServices />
      </div>
      <div className="my-14">
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
