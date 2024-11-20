import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { HamburgerButton } from "./Button/HamburgerButton";
import { UseGlobalContext } from "../context/Context";
import { Paths } from "../../data/data";
import { ChevronDown } from "lucide-react";

const Header = () => {
  const [scroll, setScroll] = useState("");
  const { active, setActive } = UseGlobalContext();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll("bg-black/90 shadow-xl");
      } else {
        setScroll("");
      }
    };
    const handlerWidth = () => {
      if (window.innerWidth > 1024) {
        setActive(false);
      }
    };
    handlerWidth();
    handleScroll();
    window.addEventListener("resize", handlerWidth);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handlerWidth);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${scroll} fixed top-0 w-full z-40 ${
        active ? "bg-black/90 shadow-xl" : ""
      }  `}
    >
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

        <nav className=" text-white p-4 hidden lg:block">
          <ul className="flex gap-8 items-center">
            {Paths.map((item) => (
              <li key={item.id} className="relative group">
                {item.path ? (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "text-[#00b4d8] bg-white px-3 py-1 rounded"
                          : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <span className="cursor-pointer flex items-center gap-1">
                    {item.name}
                    <ChevronDown className="w-5" />{" "}
                  </span>
                )}

                {/* Render sub-items if present */}
                {item.subItems && (
                  <ul className="absolute left-4 mt-2 rounded-md bg-white text-black shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible focus-within:opacity-100 focus-within:visible transition-all duration-300 min-w-[200px]">
                    {item.subItems.map((subItem, index) => (
                      <li
                        key={subItem.id}
                        className={` hover:bg-gray-200 ${
                          index === item.subItems.length - 1
                            ? "rounded-b-md" // Apply rounded-b-md to the last item
                            : "rounded-t-md" // Apply rounded-t-md to other items
                        }`}
                      >
                        <NavLink
                          to={subItem.path}
                          className={({ isActive }) =>
                            `block p-2 ${
                              isActive ? "text-[#00b4d8] font-bold" : ""
                            }`
                          }
                        >
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="">
          <NavLink to={"/rooms/booking-room"} className={"hidden lg:block"}>
            <button className="border px-3 py-2 text-white rounded capitalize duration-700 ease-in-out hover:text-black hover:bg-white text-lg font-medium">
              booking online
            </button>
          </NavLink>
          <button className="lg:hidden">
            <HamburgerButton />
          </button>
        </div>
      </div>
      <div
        className={`overflow-hidden bg-gray-200 shadow-md text-gray-800 duration-700 transition-all ease-in-out ${
          active ? "h-full  p-6" : "max-h-0"
        }`}
      >
        <div className="">
          <ul className=" w-full grid  ">
            {Paths.map((link) => (
              <li key={link.id} className="relative group">
                {link.path ? (
                  <NavLink
                    className={({ isActive }) =>
                      `p-2 w-full block text-lg ${
                        isActive ? "text-[#00b4d8] " : ""
                      } font-medium hover:bg-gray-400 hover:text-white transition duration-700 ease-in-out`
                    }
                    to={link.path}
                    onClick={() => setActive(false)}
                  >
                    {link.name}
                  </NavLink>
                ) : (
                  <span className="cursor-pointer p-2 text-lg font-medium hover:bg-gray-400 hover:text-white  flex justify-between items-center ">
                    {link.name}
                    <ChevronDown className="w-5" />
                  </span>
                )}
                {/* Render sub-items if present */}
                {link.subItems && (
                  <ul className="rounded-b-md overflow-hidden max-h-0 group-hover:max-h-full ease-in-out   bg-white  text-black shadow-lg transition-all duration-700 ">
                    {link.subItems.map((subItem, index) => (
                      <li
                        key={subItem.id}
                        className={` pl-4   hover:bg-gray-50 ${
                          index === link.subItems.length - 1
                            ? "rounded-b-md" // Apply rounded-b-md to the last item
                            : "" // Apply rounded-t-md to other items
                        }`}
                      >
                        <NavLink
                          onClick={() => setActive(false)}
                          to={subItem.path}
                          className={({ isActive }) =>
                            `block p-2 ${
                              isActive ? "text-[#00b4d8]  font-bold" : ""
                            }`
                          }
                        >
                          {subItem.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-7">
            <NavLink
              to={"/rooms/booking-room"}
              onClick={() => setActive(false)}
              className={""}
            >
              <button className="border w-full  px-3 py-2 bg-white rounded capitalize duration-700 ease-in-out text-black hover:bg-white text-lg font-medium">
                booking online
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
