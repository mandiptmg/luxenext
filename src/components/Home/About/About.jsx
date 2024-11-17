import { NavLink } from "react-router-dom";
import RoomServices from "./RoomServices";
import logo from "../../../assets/logo.png";

import TeamList from "./Team";
import Testimonial from "./Testimonial";
import ManagerContent from "./ManagerContent";
const About = () => {

  return (
    <div className="">
      <div
        className="bg-black/50 bg-blend-overlay  w-full h-[60vh] bg-no-repeat bg-cover bg-top grid place-items-center "
        style={{
          backgroundImage: `url(https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
        }}
      >
        <div className="text-center text-white   font-[Starbon]  ">
          <h1 className="text-center text-5xl lg:text-6xl  uppercase mb-6 tracking-widest font-bold">
            About Us
          </h1>
          <span className="text-lg uppercase ">
            <NavLink to={"/"} className={"text-[#00b4d8]"}>
              home
            </NavLink>
            /About
          </span>
        </div>
      </div>
      <div className="md:px-20">
        <div className="grid lg:grid-cols-2 gap-3  md:p-10 p-5  my-7">
          <div className="bg-[#00b4d8] w-full h-full grid place-items-end lg:pr-6 ">
            <img
              src="https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="about"
              className="w-[530px] lg:scale-110   h-[500px] object-cover"
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

            {/* Address Section */}
            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Our Address
              </h3>
              <p className="text-gray-600">
                102/B Dream Street, New Elephant Road <br />
                Resote Dhanmondi, Dhaka - 1212
              </p>
            </div>
          </div>
        </div>

        {/* facilities  */}
        <div className="my-14 bg-[#00b4d8]/20 p-10 rounded-lg">
          <div className="relative py-10">
            <div className="text-center  w-full">
              <div className="h-[2px] max-w-xs shadow-xl bg-gray-300 mx-auto opacity-50"></div>
              <img
                src={logo}
                alt="logo"
                className="w-24 h-24 object-contain mx-auto -mt-14 relative z-10 p-2 bg-transparent"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-lg md:text-3xl font-bold font-[Stardom] text-center">
                Hotel’S Facilities
              </h1>
              <p className="mx-auto text-sm  md:text-lg max-w-2xl text-gray-600 font-serif text-center">
                Discover luxury in every detail—stylish rooms, fine dining, spa,
                fitness center, and pool. Enjoy 24/7 concierge, room service,
                and high-speed Wi-Fi for an exceptional stay.
              </p>
            </div>
          </div>
          <RoomServices />
        </div>
      </div>
      {/* video and blog  section */}
      <div className="my-14 md:p-10 p-5 py-20 md:py-20 bg-black">
        <ManagerContent />
      </div>
      <div className="md:px-20">
        {/* team list  */}
        <div className="my-14 p-10 rounded-lg">
          <div className="relative py-10">
            <div className="text-center  w-full">
              <div className="h-[2px] max-w-xs shadow-xl bg-gray-300 mx-auto opacity-50"></div>
              <img
                src={logo}
                alt="logo"
                className="w-24 h-24 object-contain mx-auto -mt-14 relative z-10 p-2 bg-transparent"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-lg md:text-3xl font-bold font-[Stardom] capitalize text-center">
                Meet our team
              </h1>
              <p className="mx-auto text-sm  md:text-lg max-w-2xl text-gray-600 font-serif text-center">
                Our dedicated team of professionals is committed to providing
                exceptional service and expertise in their respective fields.
              </p>
            </div>
          </div>
          <TeamList />
        </div>
      </div>{" "}
      <Testimonial />
    </div>
  );
};

export default About;
