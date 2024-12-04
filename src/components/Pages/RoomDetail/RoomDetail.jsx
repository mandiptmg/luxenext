import { NavLink, useParams } from "react-router-dom";
import { RoomDetails } from "../../../data/data";
import { BedDouble, CircleUserRound, SquareSquare } from "lucide-react";
import { Amenities } from "../../../data/data";
import Booking from "../../Home/booking/Booking";
const RoomDetail = () => {
  const { slug } = useParams();

  const room = RoomDetails.find((room) => room.slug === slug);

  if (!room) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <h1 className="text-2xl font-bold text-red-600">Room not found!</h1>
      </div>
    );
  }

  const handleAnchorClick = (e, targetId) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Scroll the window up, just above the target element
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Adjust 100px to scroll above
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div
        className="bg-black/50 bg-blend-overlay relative  w-full h-[60vh] bg-no-repeat bg-cover bg-top grid place-items-center "
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
        <ul className="flex absolute bottom-5 left-28 items-center font-sans text-white gap-7 text-sm flex-wrap lg:text-base uppercase font-light">
          {[
            { label: "Description", href: "Description" },
            { label: "Room Services", href: "Services" },
            { label: "Around The Hotel", href: "Hotel" },
            { label: "Similar Rooms", href: "rooms" },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={`#${item.href}`}
                onClick={(e) => handleAnchorClick(e, item.href)} // Handle custom scroll
                className="hover:text-gray-300 transition duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className=" px-5 lg:px-20 py-7">
        <div className="p-6">
          <h1 className="text-4xl lg:text-5xl font-thin tracking-widest  text-gray-800">
            {room.type}
          </h1>
          <div className="flex items-center mt-3 gap-4">
            <p className="text-gray-500 text-lg">{room.location}</p>
            <div className="flex gap-1 text-2xl ">
              {/* Display stars */}
              {[...Array(room.rate)].map((_, starIndex) => (
                <span key={starIndex} className="text-yellow-500 text-lg ">
                  ★
                </span>
              ))}
              {[...Array(5 - room.rate)].map((_, emptyIndex) => (
                <span key={emptyIndex} className="text-gray-300 text-lg ">
                  ★
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-[2.8fr,1fr] gap-10">
            <div className="">
              <img
                src={
                  "https://c4.wallpaperflare.com/wallpaper/170/206/366/interior-style-design-home-wallpaper-preview.jpg"
                }
                alt={room.type}
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <div className=" font-serif flex flex-wrap   justify-between py-10 lg:px-28 text-gray-400 items-start  gap-4">
                <div className="flex flex-col uppercase tracking-wider items-center gap-2">
                  <CircleUserRound className="lg:w-10 lg:h-10 w-7 h-7" />
                  {room.capacity} Guests
                </div>
                <div className="flex flex-col items-center gap-2">
                  <SquareSquare className="lg:w-10 lg:h-10 w-7 h-7" />
                  {room.size} ft
                </div>
                <div className="flex uppercase tracking-wider flex-col items-center gap-2">
                  <BedDouble className="lg:w-10 lg:h-10 w-7 h-7" />
                  {room.pricePerNight} $ /per Night
                </div>
              </div>
              <hr />
              <p
                id="Description"
                className="text-gray-500 my-7 tracking-wider font-sans  lg:text-lg "
              >
                {room.description}
              </p>
              <hr />

              {/* services  */}

              <div id="Services" className="my-7">
                <h2 className="text-2xl text-gray-600">Room Services</h2>
                <ul className="mt-4 flex flex-wrap items-start gap-7  justify-between">
                  {room.services.map((service, index) => (
                    <li
                      key={index}
                      className="flex text-gray-400 items-center  space-x-2 "
                    >
                      <span className="text-2xl lg:text-3xl">
                        {service.icon}
                      </span>
                      <span>{service.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <hr />

              {/* around the hotel  */}

              <div id="Hotel">
                <h1 className="text-2xl   text-gray-600  capitalize my-7">
                  around the hotel
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {Object.entries(Amenities).map(([category]) => (
                    <div
                      key={category}
                      className="relative overflow-hidden group"
                    >
                      <img
                        src="https://www.nicdarkthemes.com/themes/hotel-booking/wp/demo/hotel/wp-content/uploads/sites/2/2022/04/blog-7.jpeg"
                        alt={category}
                        className="w-full h-[380px]  object-cover rounded-lg shadow-lg transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b flex items-end p-4  from-transparent to-black/50">
                        <h2 className="text-white text-2xl font-semibold capitalize">
                          {category.replace(/([A-Z])/g, " $1")}
                        </h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div>
              <Booking/>
            </div>
          </div>
          <hr className="mt-10" />

          {/* Rooms  */}
          <div id="rooms" className="my-7">
            <div>
              <h1 className="text-4xl capitalize lg:text-5xl  tracking-widest  text-gray-800">
                Similar rooms
              </h1>
              <div className="mt-3 w-20 h-[2px] bg-[#000]"></div>
            </div>
            <div className="mt-7 flex items-start gap-7 justify-between">
              {RoomDetails.filter((room) => room.slug !== slug)
                .sort(() => Math.random() - 0.5) // Shuffle rooms randomly
                .slice(0, 3) // Select first three after shuffle
                .map((room, index) => (
                  <div key={index} className="">
                    <div className={""}>
                      {/* image  */}
                      <div className="relative ">
                        <img
                          src={
                            "https://c4.wallpaperflare.com/wallpaper/170/206/366/interior-style-design-home-wallpaper-preview.jpg"
                          }
                          alt="image"
                          className={`w-full object-cover ${"h-full"}`}
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
                              {[...Array(5 - room.rate)].map(
                                (_, emptyIndex) => (
                                  <span
                                    key={emptyIndex}
                                    className="text-gray-300 text-sm "
                                  >
                                    ★
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <NavLink to={`/rooms/room/${room.slug}`}>
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

                          <button className="group-hover:text-[#00b4d8] text-black uppercase font-sans text-sm   duration-700 transition-all w-full border  ease-in tracking-widest px-6 py-3 bg-transparent">
                            book now for {room.pricePerNight} $
                          </button>
                        </div>
                      </NavLink>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
