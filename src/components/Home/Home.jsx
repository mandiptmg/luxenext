import Booking from "./booking/Booking";
import Hero from "./Hero/Hero";
import Rooms from "./Rooms/Rooms";

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="-mt-20">
        <Booking />
      </div>
      <Rooms />
    </div>
  );
};

export default Home;
