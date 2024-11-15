import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="md:px-20">
      <div className="grid lg:grid-cols-2 gap-3  md:p-10 p-5  my-7">
        <div className="bg-[#00b4d8] w-full h-full grid place-items-end lg:pr-6 ">
          <img
            src="https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="about"
            className="w-[530px] lg:scale-110 rounded-md  h-[550px] object-cover"
          />
        </div>
        <div className="flex flex-col items-left justify-center rounded-lg bg-gray-100 p-6 text-left">
          <h1 className="  font-bold text-[#00b4d8] font-[Stardom] mb-4 text-left w-full">
            Luxury Hotel and Resort
          </h1>
          <h2 className="text-4xl font-bold text-gray-600 mb-6">
            The Finest Luxury Hotel in the Heart of California
          </h2>
          <p className="text-lg text-gray-700 mb-10 max-w-2xl text-justify">
            Located in the vibrant cityscape of California, USA, our luxury
            resort redefines sophistication with innovative services, ensuring
            an unforgettable stay for every guest. Discover a sanctuary where
            comfort meets convenience, and relaxation merges with refined
            hospitality.
          </p>
          <div className="flex items-center ml-7 text-[#00b4d8] gap-x-16 gap-y-4">
            <div>
              <p className="text-6xl font-[Stardom] font-bold">250+</p>
              <p className="text-lg text-gray-600">Luxury Rooms</p>
            </div>
            <div className="">
              <p className="text-6xl font-[Stardom] font-bold">4.9</p>
              <p className="text-lg text-gray-600">Customer Ratings</p>
            </div>
          </div>
          <Marquee className="w-full mt-8  bg-sky-300 bg-opacity-10 h-[4px]">
            <div className="h-[2px] w-20 rounded-md  bg-[#00b4d8]"></div>
          </Marquee>{" "}
          <button className="my-7 text-left">
            <NavLink
              to="/about"
              className={
                " rounded text-xl shadow-md font-medium font-[Stardom] bg-[#00b4d8] border border-[#00b4d8] hover:bg-white hover:text-[#00b4d8] transition-all duration-700 ease-in-out text-white px-6 py-3 uppercase tracking-wide "
              }
            >
              About More
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
