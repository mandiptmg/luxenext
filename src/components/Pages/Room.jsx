import {
  ChevronDown,
  ChevronRight,
  CircleUserRound,
  LayoutGrid,
  List,
  SquareSquare,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Rooms } from "../../data/data";

const steps = [
  {
    id: 1,
    title: "Search",
  },
  {
    id: 2,
    title: "Booking",
  },
  {
    id: 3,
    title: "Checkout",
  },
  {
    id: 4,
    title: "thank you",
  },
];

const search = [
  {
    id: 1,
    title: "stay price",
    subItems: ["Lowest price", "Hightest price"],
  },
  {
    id: 1,
    title: "room size",
    subItems: ["Larger size", "smallest size"],
  },
];

const Room = () => {
  const [activeLayout, setActiveLayout] = useState(false);
  return (
    <div>
      <div
        className="bg-black/50 bg-blend-overlay  w-full h-[60vh] bg-no-repeat bg-cover bg-top grid place-items-center "
        style={{
          backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/860/803/694/interior-design-style-design-home-wallpaper-preview.jpg)`,
        }}
      >
        <div className="text-center text-white mt-20   font-[Starbon]  ">
          <h1 className="text-center text-4xl lg:text-6xl uppercase mb-6 tracking-widest font-bold">
            Rooms & Suttes
          </h1>
          <span className="text-lg uppercase ">
            <NavLink to={"/"} className={"text-[#00b4d8]"}>
              home
            </NavLink>
            /Rooms & Suttes
          </span>
        </div>
        <div className="text-white flex flex-wrap items-center gap-5">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex gap-3 items-center uppercase font-light font-[]"
            >
              <span className="grid place-items-center w-6 h-6 border  rounded-full">
                {step.id}
              </span>
              <h1 className="font-mono tracking-widest">{step.title}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-black px-10 lg:px-20 p-7 text-white grid grid-cols-3">
        <div></div>
        <ul className="text-center flex items-center gap-7 justify-center  font-sans">
          {search.map((item) => (
            <li
              key={item.id}
              className="uppercase relative group text-sm font-light tracking-widest"
            >
              <span className="cursor-pointer flex items-center gap-1">
                {item.title}
                {}
                <ChevronDown className="w-5" />{" "}
              </span>
              {/* Render sub-items if present */}
              {item.subItems && (
                <ul className="absolute z-10 left-0 mt-2 rounded-md bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-300 min-w-[200px]">
                  {item.subItems.map((subItem, index) => (
                    <li
                      key={index}
                      className={`p-3 text-xs text-left cursor-pointer hover:bg-gray-200 ${
                        index === item.subItems.length - 1
                          ? "rounded-b-md" // Apply rounded-b-md to the last item
                          : "rounded-t-md" // Apply rounded-t-md to other items
                      }`}
                    >
                      {subItem}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <div className="flex justify-end items-center gap-4">
          <button
            onClick={() => setActiveLayout(true)}
            className={activeLayout ? "p-1 rounded-md bg-[#00b4d8]" : ""}
          >
            <List className="" />
          </button>
          <button
            onClick={() => setActiveLayout(false)}
            className={activeLayout ? "" : "p-1 rounded-md bg-[#00b4d8]"}
          >
            <LayoutGrid />
          </button>
        </div>
      </div>
      <div className="my-10 px-10 lg:px-20 grid grid-cols-[1fr,3fr] items-start gap-5">
        <div className=""></div>
        <div className={`grid ${activeLayout ? 'grid-cols-1': 'grid-cols-3'} grid-cols-3 gap-7 items-start`}>
          {Rooms.map((room, index) => (
            <div key={index} className="">
           
                <div className={activeLayout ? 'flex items-start' : ''}>
                  <div className="relative ">
                    <img
                      src={
                        "https://c4.wallpaperflare.com/wallpaper/170/206/366/interior-style-design-home-wallpaper-preview.jpg"
                      }
                      alt="image"
                      className={`w-full object-cover ${activeLayout ? 'h-[260px]' :'h-full'}`}
                    />
                    <div className="absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-black/50 w-full">
                      <div className="flex text-sm p-3 font-sans uppercase tracking-wide text-white items-center gap-3">
                        <h1>{room.location}</h1>
                        <div className="flex gap-1 text-2xl ">
                          {/* Display stars */}
                          {[...Array(room.rate)].map((_, starIndex) => (
                            <span
                              key={starIndex}
                              className="text-white text-sm  "
                            >
                              ★
                            </span>
                          ))}
                          {[...Array(5 - room.rate)].map((_, emptyIndex) => (
                            <span
                              key={emptyIndex}
                              className="text-gray-300 text-sm "
                            >
                              ★
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border font-sans space-y-3 p-4">
                    <h1 className="text-gray-700 text-2xl font-light tracking-widest">
                      {room.type}
                    </h1>
                    <div className="flex text-gray-400 items-center gap-4">
                      <div className="flex items-center gap-2">
                        <CircleUserRound />
                        {room.capacity}
                      </div>
                      <div className="flex items-center gap-2">
                        <SquareSquare />
                        {room.size}
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm text-justify ">
                      {room.description.slice(0, 120)}...
                    </p>
                    <div className="relative group items-center inline-flex border-2 hover:border-[#00b4d8] duration-700 transition-all ease-in ">
                      <button className="group-hover:text-[#00b4d8] text-black uppercase font-sans text-sm   duration-700 transition-all ease-in tracking-widest px-6 py-3 bg-transparent">
                        book now for {room.pricePerNight}
                      </button>
                      <span className="px-6 py-3 font-[stardom] duration-700 transition-all ease-in bg-black text-white  group-hover:bg-[#00b4d8]">
                        i
                      </span>
                    </div>
                    <hr />
                    <div className="flex justify-between items-center">
                      <ul className="flex items-center gap-2">
                        {room.services.map((service, idx) => (
                          <li
                            key={idx}
                            className="flex items-center space-x-2 text-gray-700"
                          >
                            <span className="text-sm">{service.icon}</span>
                          </li>
                        ))}
                      </ul>
                      <button className="flex group items-center hover:text-[#00b4d8] font-light gap-2 uppercase duration-700 transition-all ease-in ">
full info <span className="group-hover:translate-x-4 duration-700 transition-all ease-in-out">
  <ChevronRight />
</span>
                      </button>
                    </div>
                  </div>
                </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Room;
