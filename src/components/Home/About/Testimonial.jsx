import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useRef, useState } from "react";

const testimonials = [
  {
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem deleniti illo repudiandae deserunt debitis, eveniet dolorem eos corrupti voluptatum est. Natus neque dolorem commodi accusantium et quis, eos quam facere.",
    star: 5,
    name: "Mandip Tamang",
    role: "CEO",
    imageUrl:
      "https://i.pinimg.com/564x/db/63/46/db6346a3f6f40ea88428797599a2c70e.jpg",
  },
  {
    text: "Another testimonial text goes here. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    star: 4,
    name: "Jane Doe",
    role: "COO",
    imageUrl: "https://example.com/path-to-image.jpg",
  },
  {
    text: "More feedback here. Lorem ipsum dolor sit amet consectetur.",
    star: 5,
    name: "John Smith",
    role: "CTO",
    imageUrl: "https://example.com/path-to-image2.jpg",
  },
  {
    text: "A wonderful experience, highly recommended.",
    star: 4,
    name: "Alice Johnson",
    role: "Manager",
    imageUrl: "https://example.com/path-to-image3.jpg",
  },
  {
    text: "Great service and friendly staff. Will return!",
    star: 5,
    name: "Robert Brown",
    role: "Designer",
    imageUrl: "https://example.com/path-to-image4.jpg",
  },
  {
    text: "High quality and professionalism all around.",
    star: 2,
    name: "Emily White",
    role: "Developer",
    imageUrl: "https://example.com/path-to-image5.jpg",
  },
];

const Testimonial = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e) => {

    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust the scroll speed here
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };


  return (
    <div className="bg-black text-white md:p-20 p-10 ">
      <h1 className="font-[Stardom] text-lg text-[#00b4d8]">
        Luxury Hotel And Resort
      </h1>
      <div className="mt-7">
        <div className="flex flex-wrap gap-y-4 justify-between items-center ">
          <p className="text-3xl md:text-4xl uppercase font-semibold font-serif">
            resote clients feedback <br />
            about services
          </p>
          <div className="flex items-center gap-4">
            <button
              className="border-2 p-2 hover:bg-[#00b4d7] duration-700 ease-in-out transition-all"
              onClick={() => scroll("left")}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              className="border-2 p-2 hover:bg-[#00b4d7] duration-700 ease-in-out transition-all"
              onClick={() => scroll("right")}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
      <hr className="my-10" />
      <div
         ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="overflow-x-auto w-full flex gap-5 py-5 cursor-grab active:cursor-grabbing testimonial-scroll"
        style={{ scrollBehavior: "smooth" }}
      >
        {testimonials.map((testimonial, index) => (
          <div className="flex-none w-[395px] mx-2" key={index}>
            <div className="bg-white text-gray-500 p-6 text-lg lg:text-xl text-justify rounded-lg shadow-lg">
                <q className="block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam nam repudiandae dignissimos, quo distinctio aliquid amet, dolor nesciunt molestias cum quisquam exercitationem harum, dolorum facilis assumenda quae. Corporis, velit magni.
                </q>
              <div className="flex items-center mt-5 justify-between">
                 <div className="flex gap-1 text-2xl mt-2">
              {/* Display stars */}
              {[...Array(testimonial.star)].map((_, starIndex) => (
                <span key={starIndex} className="text-yellow-500 ">★</span>
              ))}
              {[...Array(5 - testimonial.star)].map((_, emptyIndex) => (
                <span key={emptyIndex} className="text-gray-300 ">★</span>
              ))}
            </div>
                <Quote className="text-[#00b4d8]" />
              </div>
            </div>
            <div className="flex items-center mt-5 gap-4">
              <img
                src={
                  "https://i.pinimg.com/564x/db/63/46/db6346a3f6f40ea88428797599a2c70e.jpg"
                }
                alt={testimonial.name.toLowerCase().replace(" ", "_")}
                className="w-16 h-16 rounded-full object-cover object-top"
              />
              <div>
                <h1 className="text-2xl font-cursive tracking-wider">
                  {testimonial.name}
                </h1>
                <span className="text-lg font-semibold text-[#00b4d8]">
                  {testimonial.role}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
