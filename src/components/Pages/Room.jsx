import {
  ChevronDown,
  ChevronRight,
  CircleUserRound,
  LayoutGrid,
  List,
  SquareSquare,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { RoomDetails } from "../../data/data";
import Booking from "../Home/booking/Booking";

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
    title: "Stay Price",
    subItems: ["Lowest Price", "Highest Price"],
  },
  {
    id: 2,
    title: "Room Size",
    subItems: ["Larger Size", "Smallest Size"],
  },
];

// Filter and sorting function
const applyFilters = (rooms, filters) => {
  let filteredRooms = [...rooms];

  const { stayprice, roomsize } = filters;

  // Apply price sorting
  if (stayprice === "Lowest Price") {
    filteredRooms.sort((a, b) => a.pricePerNight - b.pricePerNight);
  } else if (stayprice === "Highest Price") {
    filteredRooms.sort((a, b) => b.pricePerNight - a.pricePerNight);
  }

  // Apply room size sorting
  if (roomsize === "Larger Size") {
    filteredRooms.sort((a, b) => b.size - a.size);
  } else if (roomsize === "Smallest Size") {
    filteredRooms.sort((a, b) => a.size - b.size);
  }

  return filteredRooms;
};

const Room = () => {
  const [activeLayout, setActiveLayout] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    stayprice: "",
    roomsize: "",
  });
  const [guests, setGuests] = useState(() => {
    const savedGuests = localStorage.getItem("guests");
    return savedGuests ? Number(savedGuests) : 1;
  });

  useEffect(() => {
    localStorage.setItem("guests", guests);
  }, [guests]);

  const handleFilterChange = (type, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  const filteredRooms = applyFilters(
    selectedLocation === "all" || !selectedLocation
      ? RoomDetails // If no location is selected, show all rooms
      : RoomDetails.filter((room) => room.location === selectedLocation),
    selectedFilters
  ).filter((room) => room.capacity >= guests); // Filter rooms by guests;

  // Handle location click to filter rooms by location
  const handleLocationClick = (location) => {
    setSelectedLocation(location);
  };

  const uniqueLocations = [
    "all",
    ...new Set(RoomDetails.map((item) => item.location)),
  ];

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
                      onClick={() =>
                        handleFilterChange(
                          item.title.toLowerCase().replace(" ", ""),
                          subItem
                        )
                      }
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
      <div className="my-10 px-10 lg:px-20 grid xl:grid-cols-[1fr,3fr] items-start gap-5">
        {/* Booking form  */}
        <div className="">
          <div className="bg-black p-3 rounded-md">
            <div className="bg-white group relative cursor-pointer grid place-items-center w-full text-black p-3 mb-3">
              <h2 className=" text-lg text-center font-sans font-bold tracking-widest">
                All Branches
              </h2>
              <span className="">
                <ChevronDown />
              </span>
              {
                <ul className="absolute z-40 left-0 top-[80px] h-[250px] overflow-hidden overflow-y-auto w-full mt-2 rounded-md bg-[#00b4d8] text-white text-center  shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-300 min-w-[200px]">
                  {uniqueLocations.map((location, index) => (
                    <li
                      key={index}
                      className={`p-3 capitalize cursor-pointer hover:bg-black `}
                      onClick={() => handleLocationClick(location)}
                    >
                      {location}
                    </li>
                  ))}
                </ul>
              }
            </div>
            <Booking guests={guests} setGuests={setGuests} />
          </div>
        </div>
        {filteredRooms.length === 0 || !filteredRooms ? (
          <div className="text-center font-sans  uppercase text-2xl grid place-items-center w-full h-full text-gray-500">
            No rooms available.
          </div>
        ) : (
          <div
            className={`grid ${
              activeLayout ? "grid-cols-1" : "md:grid-cols-2 xl:grid-cols-3"
            } gap-7 items-start`}
          >
            {filteredRooms.map((room, index) => (
              <div key={index} className="">
                <div className={activeLayout ? "flex items-start" : ""}>
                  {/* image  */}
                  <div className="relative ">
                    <img
                      src={
                        "https://c4.wallpaperflare.com/wallpaper/170/206/366/interior-style-design-home-wallpaper-preview.jpg"
                      }
                      alt="image"
                      className={`w-full object-cover ${
                        activeLayout ? "h-[260px]" : "h-full"
                      }`}
                    />
                    <span className="absolute top-3 right-1 bg-red-600 p-1 tracking-[0.2em] uppercase text-[8px] text-white">
                      {room.available_room}
                    </span>
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
                        {room.capacity} Guests
                      </div>
                      <div className="flex items-center gap-2">
                        <SquareSquare />
                        {room.size} ft
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm text-justify ">
                      {room.description.slice(0, 120)}...
                    </p>
                    <div className="relative group items-center inline-flex border-2 hover:border-[#00b4d8] duration-700 transition-all ease-in ">
                      <button className="group-hover:text-[#00b4d8] text-black uppercase font-sans text-sm   duration-700 transition-all ease-in tracking-widest px-6 py-3 bg-transparent">
                        book now for {room.pricePerNight} $
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
                        full info{" "}
                        <span className="group-hover:translate-x-4 duration-700 transition-all ease-in-out">
                          <ChevronRight />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}       
      </div>
    </div>
  );
};

export default Room;
