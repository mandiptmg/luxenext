import { NavLink } from "react-router-dom";
import contact from "../../../assets/contact.jpg";
import FullContact from "./FullContact";
const Contact = () => {
  return (
    <div className="">
      <div
        className="bg-black/50 bg-blend-overlay  w-full h-[60vh] bg-no-repeat bg-cover bg-top grid place-items-center "
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="text-center text-white   font-[Starbon]  ">
          <h1 className="text-center text-5xl lg:text-6xl uppercase mb-6 tracking-widest font-bold">
            Contact Us
          </h1>
          <span className="text-lg uppercase ">
            <NavLink to={"/"} className={"text-[#00b4d8]"}>
              home
            </NavLink>
            /contact
          </span>
        </div>
      </div>
      <div className="md:px-20">
        <FullContact />
        <div className="my-16">
          <h1 className="text-center  font-serif text-xl md:text-3xl font-bold  uppercase">
            Our Map Location
          </h1>
          <div className="md:w-28 w-20 mx-auto h-[2px] bg-[#00b4d8]"> </div>
          <div className="mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d512.5956729807963!2d84.97308685829078!3d27.4530676553774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1730114742366!5m2!1sen!2snp"
              className="w-full"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
