import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { HamburgerButton } from "./Button/HamburgerButton";

const navlink = [
  {
    id: 5,
    name: "Home",
    path: "/",
  },
  { id: 1, path: "/about", name: "About" },
  { id: 3, path: "/rooms", name: "Rooms" },
  { id: 4, path: "/services", name: "Reservations" },
  { id: 2, path: "/contact", name: "Contact Us" },
];

const Header = () => {
  const [scroll, setScroll] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll("bg-black/90 shadow-xl");
      } else {
        setScroll("");
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${scroll} fixed top-0 w-full z-40  `}>
      <div
        className={`h-20 w-[90vw] bg-transparent md:w-[85vw] flex items-center justify-between p-2  mx-auto`}
      >
        <NavLink to={"/"}>
          <div className="flex items-center gap-2">
            <img
              src={logo}
              alt="logo"
              className="w-12 h-12 bg-white rounded-xl object-contain"
            />
            <span>
              <h1 className="text-xl tracking-wider font-[Stardom] font-bold text-gray-100">
                LuxeNest
              </h1>
            </span>
          </div>
        </NavLink>
        <div className="items-center gap-4 hidden lg:inline-flex ">
          {navlink.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className="text-lg font-medium text-gray-100  hover:text-[#00b4d8] transition duration-300 ease-in
            "
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="">
          <NavLink to={"/booking-room"} className={"hidden lg:block"}>
            <button className="border px-3 py-2 text-white rounded capitalize duration-700 ease-in-out hover:text-black hover:bg-white text-lg font-medium">
              booking online
            </button>
          </NavLink>
          <button className="lg:hidden">
            <HamburgerButton />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
