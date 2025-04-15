
import { CircleUserRound, SquareSquare } from "lucide-react";
import logo from "../../../assets/logo.png";

import { RoomDetails } from "../../../data/data";
import { NavLink, useLocation } from "react-router-dom";


const Rooms = () => {
  const location = useLocation();
  const hidden = location.pathname === "/rooms/booking-room";

  return (
    <div className="py-40 px-16">
      <div className={`relative ${hidden ? "hidden" : ""}`}>
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
            LuxeNest Rooms & Suites
          </h1>
          <p className="mx-auto text-sm  md:text-lg max-w-2xl text-gray-600 font-serif text-center">
            Experience refined luxury and personalized service at LuxeNest Rooms
            & Suites—crafted for those who seek more than just a stay.
          </p>
        </div>
        <div>
          <img
            src={logo}
            alt="logo"
            className="opacity-10 mx-auto relative -z-40 -mt-64"
          />
        </div>

        <div></div>
      </div>
      <div className={`grid md:grid-cols-2 lg:grid-cols-3 sm:-mt-16 gap-7 items-start`}>
          {RoomDetails.slice(0,3).map((room, index) => (
            <div key={index} className="">
           <NavLink to ={ `/rooms/room/${room.slug}`}>
                <div className={ ''}>
                  <div className="relative overflow-hidden cursor-pointer">
                    <img
                      src={
                        "https://c4.wallpaperflare.com/wallpaper/170/206/366/interior-style-design-home-wallpaper-preview.jpg"
                      }
                      alt="image"
                      className={`w-full object-cover h-full  transition-transform duration-700 hover:scale-125`}
                    />
                    <h1 className="absolute uppercase  tracking-[0.2em] font-light text-sm bg-black text-white hover:bg-[#00b4d8] duration-700 ease-in-out transition-all font-sans py-3 px-6 top-3 right-0">
                    from  {room.pricePerNight} $
                    </h1>
                    <div className="absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-black/50 w-full">
                      <div className="flex flex-col p-3 font-sans uppercase tracking-wide text-white gap-3">
                      <h1 className="font-sans tracking-[0.1em]">
                      {room.type}
                    </h1>
                        <div className="flex text-gray-200 text-sm items-center gap-4">
                      <div className="flex items-center gap-2">
                        <CircleUserRound />
                        {room.capacity} Guests
                      </div>
                      <div className="flex lowercase items-center gap-2">
                        <SquareSquare />
                        {room.size} ft
                      </div>
                    </div>
                      </div>
                    </div>
                  </div>
                
                </div>
             </NavLink>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Rooms;
