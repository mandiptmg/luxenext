import { useState } from "react";
import { NavLink } from "react-router-dom";
import GalleryModel from "../Model/GalleryModel";
import logo from "../../assets/logo.png";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import img1 from "../../assets/partners/hilton.png";
import img2 from "../../assets/partners/marriot.png";
import img3 from "../../assets/partners/ritz-carlton.png";

const images = [
  {
    id: 1,
    url: "https://i.pinimg.com/564x/f6/1f/6d/f61f6d035bd85518c8734fe5b2c4b2a4.jpg",
    name: "Image 1",
  },
  {
    id: 2,
    url: "https://i.pinimg.com/736x/47/64/07/4764077709c45f995932c2f0ebfc29b7.jpg",
    name: "Image 2",
  },
  {
    id: 3,
    url: "https://i.pinimg.com/736x/3b/22/2c/3b222c55117bfc41ff2941a590f601a1.jpg",
    name: "Image 3",
  },
  {
    id: 4,
    url: "https://i.pinimg.com/564x/30/c6/42/30c64289e02ccb851b5a5084f3ff8d5d.jpg",
    name: "Image 4",
  },
  {
    id: 5,
    url: "https://i.pinimg.com/736x/00/8a/3f/008a3f17399e34e70fc7c16cc3476c8a.jpg",
    name: "Image 5",
  },
  {
    id: 6,
    url: "https://i.pinimg.com/564x/02/14/eb/0214ebb17ba41a92fd3c0f62875bef2f.jpg",
    name: "Image 6",
  },
];

const Links = [
  { id: 1, path: "about", name: "About Hotel" },
  { id: 3, path: "rooms", name: "Rooms & suites" },
  { id: 4, path: "services", name: "Reservations" },
  { id: 5, path: "blog", name: "news & blogs" },
  { id: 2, path: "contact", name: "Contact Us" },
];

const socialMediaLinks = [
  { url: "https://www.facebook.com", icon: <Facebook /> },
  { url: "https://www.twitter.com", icon: <Twitter /> },
  { url: "https://www.instagram.com", icon: <Instagram /> },
  { url: "https://www.linkedin.com", icon: <Linkedin /> },
];

const partners = [
  { id: 1, name: "hilton", logo: img1 },
  { id: 2, name: "marriott", logo: img2 },
  { id: 3, name: "ritz-carlton", logo: img3 },
];

const Footer = () => {
  const [openImg, setOpenImg] = useState(false);
  return (
    <div className="mt-10">
      <div className="p-7 bg-[#00b4d8] grid grid-cols-[0.5fr,2fr]">
        <div></div>
        <div>
          <h1 className="text-center py-5  text-4xl font-bold capitalize  text-white ">
            In partnership with
          </h1>
          {/* <div className="w-16 h-1 bg-black mx-auto"></div> */}
        <div
          className="text-center mx-auto 
              flex items-center mb-16 xl:mb-0 justify-evenly
        "
        >
          {partners.map((partner) => (
            <section key={partner.id}>
              <img
                src={partner.logo}
                className="w-24 h-24  object-contain"
                alt={partner.name}
              />
            </section>
          ))}
          </div>
        </div>
        </div>

      <div className="pt-28 pb-7 px-20  bg-black/90 grid md:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 items-start gap-4">
        <div className="relative">
          <div className="shadow-md -mt-48 relative z-40 p-4 bg-[#2a2c2c] rounded ">
            <div className="flex justify-center mt-7 items-center gap-2">
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
            <div className="p-4 text-white">
              <div className="mt-4">
                <span className="text-xl  font-semibold font-[Stardom] ">
                  Contact Info
                </span>
                <div className="bg-[#00b4d8] w-14 h-[1px]"></div>
              </div>
              <ul className="my-14 space-y-4 ">
                <li className="flex items-center gap-3">
                  <Phone className="text-[#00b4d8]" />
                  +980 (1234) 567 890
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-[#00b4d8]" />
                  example@yahoo.com
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="text-[#00b4d8]" />
                  Hetauda-3, Basamadi{" "}
                </li>
              </ul>
              <div className="flex items-center justify-center gap-4 text-sm">
                {socialMediaLinks.map((link, index) => (
                  <button
                    onClick={() => window.open(link.url)}
                    key={index}
                    className="rounded-full border p-2 hover:bg-[#00b4d8] duration-700 transition-all ease-in-out "
                  >
                    {link.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-lg border-b inline-flex  border-[#00b4d8] mb-9 md:text-xl font-semibold uppercase font-[Stardom] text-gray-100 ">
            usefull link
          </h2>
          <ul className="">
            {Links.map((link) => (
              <li
                key={link.id}
                className="text-gray-400 py-[1px] pl-1 hover:pl-2 duration-700 transition-all ease-in-out hover:text-gray-100 
    "
              >
                <NavLink
                  to={`/${link.path}`}
                  className="text-gray-400 capitalize   hover:text-gray-100 
      "
                >
                  <span> {link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h2 className="text-lg border-b inline-flex  border-[#00b4d8] mb-9 md:text-xl font-semibold uppercase font-[Stardom] text-gray-100 ">
            gallery
          </h2>
          <div className="grid grid-cols-3 items-start p-2 gap-1">
            {images.map((image) => (
              <div key={image.id}>
                <img
                  onClick={() => setOpenImg(true)}
                  src={image.url}
                  alt={image.name}
                  className="w-full cursor-pointer hover:scale-125 transition-all duration-700 ease-in-out h-16 rounded object-cover"
                />
              </div>
            ))}
          </div>
          {openImg && (
            <GalleryModel setOpenImg={setOpenImg} images={images || []} />
          )}
        </div>
        <div>
          <h2 className="text-lg border-b inline-flex  border-[#00b4d8] mb-9 md:text-xl font-semibold uppercase font-[Stardom] text-gray-100 ">
            newsletter
          </h2>

          <div className="grid mt-2 text-white gap-y-3">
            <h1 className=" font-[Stardom]  text-gray-400 tracking-wider">
              Subscribe our Newsletter
            </h1>
            <form>
              <input
                type="email"
                className="w-full p-2 rounded bg-white text-black outline-none"
                placeholder="Enter your email address"
              />
              <button
                type="submit"
                className="text-white sky w-full text-center p-2 mt-2 uppercase font-semibold font-[Stardom] rounded bg-[#00b4d8] hover:bg-[#00b4d8bf] ease-in-out duration-700 transition-all tracking-wider"
              >
                Subscribe now
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="bg-black text-center p-7">
        <p className="text-gray-100 text-sm md:text-base font-mono">
          &copy; 2024, LuxeNest. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
