// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import logo from "../../../assets/logo.png";

// Import image assets
import img1 from "../../../assets/room/1.jpg";
import img2 from "../../../assets/room/2.jpg";
import img3 from "../../../assets/room/3.jpg";

const images = [
  { id: 1, url: img1 },
  { id: 2, url: img2 },
  { id: 3, url: img3 },
];

const Rooms = () => {
  return (
    <div className="py-40 px-16">
      <div className="relative">
        <div className="text-center  w-full">
          <div className="h-[2px] max-w-xs shadow-xl bg-gray-300 mx-auto opacity-50"></div>
          <img
            src={logo}
            alt="logo"
            className="w-24 h-24 object-contain mx-auto -mt-14 relative z-10 p-2 bg-transparent"
          />
        </div>
        <div className="space-y-3">
          <h1 className="text-lg md:text-3xl font-bold font-[Stardom] text-center">
            LuxeNest Rooms & Suites
          </h1>
          <p className="mx-auto text-sm  md:text-lg max-w-2xl text-gray-600 font-serif text-center">
            Experience refined luxury and personalized service at LuxeNest Rooms
            & Suites—crafted for those who seek more than just a stay.
          </p>
        </div>
        <div>
          <img
            src={logo}
            alt="logo"
            className="opacity-10 mx-auto relative -z-40 -mt-64"
          />
        </div>

        <div></div>
      </div>
      <div className="bg-black">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <div className='relative'>
                 <img
                className="aspect-square w-[400px] h-[300px] rounded-t-lg  object-cover"
                src={img.url}
                alt="Room interior view with elegant design"
                loading="lazy"
              />
              <span className='bg-[#00b4d8] p-2 font-semibold  text-white '>
                $400 | Night
              </span>
              </div>
             
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Rooms;
