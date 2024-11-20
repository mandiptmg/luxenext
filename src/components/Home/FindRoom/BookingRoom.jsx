import { NavLink } from "react-router-dom";
import Booking from "../booking/Booking";
import FullContact from "../Contact/FullContact";

const BookingRoom = () => {
  return (
    <div>
      <div
        className="bg-black/50 bg-blend-overlay  w-full h-[60vh] bg-no-repeat bg-cover bg-top grid place-items-center "
        style={{
          backgroundImage: `url(https://i.pinimg.com/564x/fc/c6/15/fcc615bdcd5734f208d5e63436ffe3ed.jpg)`,
        }}
      >
        <div className="text-center text-white   font-[Starbon]  ">
          <h1 className="text-center text-4xl lg:text-6xl uppercase mb-6 tracking-widest font-bold">
            Booking Room
          </h1>
          <span className="text-lg uppercase ">
            <NavLink to={"/"} className={"text-[#00b4d8]"}>
              home
            </NavLink>
            /Booking-room
          </span>
        </div>
      </div>
      <div>
        <h1 className="text-center text-2xl tracking-widest  md:text-4xl font-[Stardom] font-medium mt-20">
          Check Availibity
        </h1>
        <div className="md:px-20">
          <div className="my-16">
            <Booking />
          </div>
          <div>
            <FullContact/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingRoom;
