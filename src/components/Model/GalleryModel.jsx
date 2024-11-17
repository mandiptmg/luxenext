import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import { X } from "lucide-react";

// eslint-disable-next-line react/prop-types
const GalleryModel = ({ setOpenImg, images = [] }) => {
  if (!images || images.length === 0) {
    return <p className="text-center text-gray-500">No images to display.</p>;
  }
  return (
    <div className="fixed  top-0 z-[100] left-0 h-screen w-full bg-white ">
      <button
        className="absolute hover:scale-125 duration-700 transition-all ease-in-out top-5 right-5 z-[101] p-2 bg-red-600 text-white rounded-full"
        onClick={() => setOpenImg(false)}
        aria-label="Close gallery"
      >
        <X className="text-2xl" />
      </button>

      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        loop={true} // Infinite scrolling
        className="w-full max-w-screen-xl mx-auto" // Centralize Swiper
      >
        {images.map((image) => (
          <SwiperSlide key={image.id} className="">
            <img
              src={image.url}
              alt={`Gallery image ${image.name}`}
              className="h-screen object-cover w-full lg:w-1/2 mx-auto"
            />
          </SwiperSlide>
        ))}
        {/* Custom Navigation Arrows */}
        <div className="swiper-button-prev invisible lg:visible   p-10 rounded-full hover:scale-105 duration-500 transition-all ease-in-out text-[#00b4d8] bg-gray-200  "></div>
        <div className="swiper-button-next invisible lg:visible   p-10 rounded-full hover:scale-105 duration-500 transition-all ease-in-out text-[#00b4d8] bg-gray-200  "></div>
      </Swiper>
    </div>
  );
};

export default GalleryModel;
