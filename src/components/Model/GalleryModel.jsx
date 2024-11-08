import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

import { X } from "lucide-react";

const GalleryModel = ({ setOpenImg, images = [] }) => {
  console.log(images)
  return (
    <div className="fixed top-0 z-[100] left-0 h-screen w-full bg-black/95 flex items-center justify-center">
      <div className="relative w-full h-full">
        <button
          className="absolute hover:scale-125 duration-700 transition-all ease-in-out top-5 right-5 z-[101] p-2 bg-red-600 text-white rounded-full"
          onClick={() => setOpenImg(false)}
          aria-label="Close gallery"
        >
          <X className="text-2xl" />
        </button>

        <Swiper modules={[Navigation]} navigation className="w-full h-full">
          {images.map((image) => (
            <SwiperSlide key={image.id} className="grid place-items-center">
              <img
                src={image.url}
                alt={`Gallery image ${image.name}`}
                className=" object-cover w-1/2 h-screen "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GalleryModel;
