import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

// Import image assets
import img1 from "../../../assets/room/1.jpg";
import img2 from "../../../assets/room/2.jpg";
import img3 from "../../../assets/room/3.jpg";

const images = [
  { id: 1, url: img1 },
  { id: 2, url: img2 },
  { id: 3, url: img3 },
];

const Hero = () => {
  return (
    <div className="overflow-x-hidden relative min-h-screen  bg-black ">
      <Swiper className="mySwiper" aria-label="Image carousel">
        {images.map((img) => (
          <SwiperSlide key={img.id}>
            <div className="relative">
              <div className="absolute w-full grid place-items-center max-h-[110vh] inset-0 bg-black/50 z-10">
                <div className="text-center space-y-3 font-[Stardom]">
                  <h1 className="text-xl text-white tracking-widest uppercase font-semibold">
                    luxury hotel and resort
                  </h1>
                  <p className="text-4xl  tracking-widest text-white uppercase font-bold">
                    the best luxury hotel <br /> in nepal{" "}
                  </p>
                </div>
              </div>
              <img
                className="w-full h-[112vh]  object-cover"
                src={img.url}
                alt="Room interior view with elegant design"
                loading="lazy"
              />
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
  
       </div>
  );
};

export default Hero;
