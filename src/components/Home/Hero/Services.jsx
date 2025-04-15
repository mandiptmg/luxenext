import RoomServices from "../About/RoomServices";
import logo from "../../../assets/logo.png";
const Services = () => {
  return (
    <div>
      {/* facilities  */}
      <div className="my-14 bg-black/80 relative text-white p-10 py-36 rounded-lg">
        <div className="relative py-10">
          <div className="text-center  w-full">
            <div className="h-[2px] max-w-xs shadow-xl bg-gray-100 mx-auto opacity-50"></div>
            <img
              src={logo}
              alt="logo"
              className="w-24 h-24 object-contain mx-auto bg-white rounded-md -mt-14 relative z-10  bg-transparent"
            />
          </div>
          <div className="space-y-3 mt-7">
            <h1 className="text-lg md:text-3xl font-bold font-[Stardom] text-center">
              Hotel’S Facilities
            </h1>
            <p className="mx-auto text-sm  md:text-lg max-w-2xl text-gray-200 font-serif text-center">
              Discover luxury in every detail—stylish rooms, fine dining, spa,
              fitness center, and pool. Enjoy 24/7 concierge, room service, and
              high-speed Wi-Fi for an exceptional stay.
            </p>
          </div>
          <div>
            <img
              src={logo}
              alt="logo"
              className=" mx-auto opacity-40 filter brightness-110 contrast-125 relative -z-40 -mt-64"
            />
          </div>
        </div>
        <div className="md:px-20  mt-20  sm:-mt-36">
          <RoomServices />
        </div>
      </div>
    </div>
  );
};

export default Services;
