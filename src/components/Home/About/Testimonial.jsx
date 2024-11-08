import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const Testimonial = () => {
  return (
    <div className="bg-black text-white md:p-20 p-5 ">
      <h1 className="font-[Stardom] text-lg text-[#00b4d8]">
        Luxury Hotel And Resort
      </h1>
      <div className="mt-7">
        <div className="flex justify-between items-center ">
          <p className="text-5xl  uppercase font-semibold font-serif">
            resote clients feedback <br />
            about services
          </p>
          <div className="flex items-center gap-4">
            <button className="border-2 hover:bg-[#00b4d7] duration-700 ease-in-out transition-all ">
              <ChevronLeft className="w-14 h-14" />
            </button>
            <button className="border-2 hover:bg-[#00b4d7] duration-700 ease-in-out transition-all ">
              <ChevronRight className="w-14 h-14" />
            </button>
          </div>
        </div>
      </div>
      <hr className="my-10" />
      <div className="overflow-x-hidden w-full h-full mt-10 gap-5 flex items-start ">
        <div className="w-[400px]">
          <div>
            <div className="bg-white text-gray-500 p-6 text-xl text-justify ">
              <q className="w-full">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem deleniti illo repudiandae deserunt debitis,
                eveniet dolorem eos corrupti voluptatum est. Natus neque dolorem
                commodi accusantium et quis, eos quam facere.
              </q>
              <div className="flex items-center mt-5 justify-between">
                <span className="flex items-center gap-2">
                  <Star className=" text-[#00b4d8]" />
                  <Star className="text-[#00b4d8]" />
                  <Star className="text-[#00b4d8]" />
                  <Star className="text-[#00b4d8]" />
                  <Star className="text-[#00b4d8]" />
                </span>
                <span className="">
                  <Quote className="text-[#00b4d8] w-full " />
                </span>
              </div>
            </div>
            <div className="bg-white w-20 h-12 ml-8 -mt-2 testimonial"></div>
          </div>
          <div className="flex items-center mt-5 gap-4">
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
                <span className="text-lg  font-semibold text-[#00b4d8] ">CEO</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
