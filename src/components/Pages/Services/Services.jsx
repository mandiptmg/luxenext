import { NavLink } from "react-router-dom";
import contact from "../../../assets/contact.jpg";
import HotelServices from "../../Home/Hotel Services/HotelServices";
const Services = () => {
  return (
    <div className="">
      <div
        className="bg-black/50 bg-blend-overlay  w-full h-[60vh] bg-no-repeat bg-cover bg-top grid place-items-center "
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="text-center text-white   font-[Starbon]  ">
          <h1 className="text-center text-5xl lg:text-6xl uppercase mb-6 tracking-widest font-bold">
            Our Service
          </h1>
          <span className="text-lg uppercase ">
            <NavLink to={"/"} className={"text-[#00b4d8]"}>
              home
            </NavLink>
            /Services
          </span>
        </div>
      </div>
    <div>
      <HotelServices/>
    </div>
    </div>
  );
};

export default Services;
