import img1 from "../../../assets/room/1.jpg";
import { Play } from "lucide-react";
import { UseGlobalContext } from "../../context/Context";
import { useLocation } from "react-router-dom";
import VideoPlay from "./VideoPlay";
const ManagerContent = () => {
  const { play, setPlay } = UseGlobalContext();

  const location = useLocation();

  // Set background color based on current path
  const bgColor = location.pathname === "/" ? "bg-[#f2f3f4]" : "bg-white";
 const reverse = location.pathname === '/' ? 'flex flex-col lg:flex-row flex-row-reverse' : 'grid lg:grid-cols-2';
  return (
    <>
      {play && <VideoPlay/>}

      <div className={`${reverse}  `}>
        <div className="relative">
          <img src={img1} alt="room 1" className="w-full h-full " />
          <button
            onClick={() => {
              setPlay(!play);
            }}
            className=" duration-700 ease-in-out transition-all animate-pulse"
          >
            <Play className="text-white absolute top-1/2 left-1/2 bg-[#00b4d8] rounded-full p-3 w-16 h-16 border-4 " />{" "}
          </button>
        </div>
        <div className={`${bgColor} p-10 `}>
          <span className="text-[#00b4d8] font-semibold uppercase text-sm tracking-widest font-sans">
            Manager
          </span>
          <h2 className="text-4xl max-w-md mt-3 font-semibold text-gray-600 mb-6">
            The Finest Luxury Hotel in the Heart of California
          </h2>
          <p className="text-lg text-gray-700 mb-7 max-w-2xl text-justify">
            Located in the vibrant cityscape of California, USA, our luxury
            resort redefines sophistication with innovative services, ensuring
            an unforgettable stay for every guest.
          </p>
          <q className="font-medium -tracking-wider font-[Cursive] text-gray-500 underline">
            Model. Appropriately create interactive infrastructures after main
            Holisticly facilitate stand-alone inframe of the world
          </q>
          <div className="flex items-center mt-10 gap-4">
            <img
              src={
                "https://i.pinimg.com/564x/db/63/46/db6346a3f6f40ea88428797599a2c70e.jpg"
              }
              alt="mandip_tamang"
              className="w-24 h-24 rounded-full object-cover object-top"
            />
            <div>
              <h1 className="text-2xl font-[Cursive] font-thin  tracking-wider ">
                Mandip tamang
              </h1>
              <span className="text-lg text-gray-500 ">--CEO</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManagerContent;
