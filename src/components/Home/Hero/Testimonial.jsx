import { useRef, useState } from "react";
import logo from "../../../assets/logo.png";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "John Doe",
    position: "CEO",
    description: "This is an excellent service. Highly recommended!",
    star: 5,
    image: "",
  },
  {
    name: "Jane Smith",
    position: "Manager",
    description: "Great experience! Everything was top-notch.",
    star: 4,
    image: "",
  },
  {
    name: "Alice Brown",
    position: "Designer",
    description: "Creative solutions and outstanding support.",
    star: 5,
    image: "",
  },
  {
    name: "Michael Johnson",
    position: "Developer",
    description: "The team was very professional and delivered on time.",
    star: 5,
    image: "",
  },
  {
    name: "Emily White",
    position: "Consultant",
    description: "Fantastic experience working with this team.",
    star: 4,
    image: "",
  },
  {
    name: "Michael Johnson",
    position: "Developer",
    description: "The team was very professional and delivered on time.",
    star: 5,
    image: "",
  },
  {
    name: "Emily White",
    position: "Consultant",
    description: "Fantastic experience working with this team.",
    star: 4,
    image: "",
  },
];

const Testimonial = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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
    <div className="bg-[url(https://c4.wallpaperflare.com/wallpaper/74/457/102/life-room-interior-home-wallpaper-preview.jpg)] bg-no-repeat bg-cover bg-black/60 bg-blend-overlay w-full  text-white py-20 px-10 lg:p-20 ">
      <div className="">
        <img
          src={logo}
          alt="logo"
          className="w-16 mx-auto h-16 rounded-md  p-3 bg-white"
        />
        <div className="my-7 space-y-4 text-center ">
          <h1 className="uppercase font-[Stardom] tracking-wider text-xl md:text-3xl font-semibold">
            CUstomer’s Testimonial
          </h1>
          <p className="text-base max-w-2xl mx-auto md:text-xl font-thin font-[Stardom] text-gray-300">
            Proactively morph optimal infomediaries rather than accurate
            expertise. Intrinsicly progressive resources rather than
            resource-leveling
          </p>
        </div>{" "}
      </div>
      <div
        className="flex item-start overflow-x-auto   cursor-grab active:cursor-grabbing testimonial-scroll gap-5"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className=" mt-9 shadow rounded-md bg-[#00b4d8] my-auto mx-5 lg:mx-10">
            <div className=" my-3 shadow-md shadow-[#00b4d8]   w-[350px] scale-x-110 relative  lg:w-[400px] mx-auto  bg-white p-6 rounded-md    ">
              <FaQuoteLeft className="text-6xl  absolute -top-4 -right-1 shadow-md p-4 rounded-full bg-[#00b4d8] " />

              <div className="flex gap-1 text-2xl ">
                {/* Display stars */}
                {[...Array(testimonial.star)].map((_, starIndex) => (
                  <span key={starIndex} className="text-yellow-500 ">
                    ★
                  </span>
                ))}
                {[...Array(5 - testimonial.star)].map((_, emptyIndex) => (
                  <span key={emptyIndex} className="text-gray-300 ">
                    ★
                  </span>
                ))}
              </div>

              <p className="my-7 text-gray-600">{testimonial.description}</p>
              <div className="flex items-center gap-x-7">
                <img
                  src={
                    testimonial.image ||
                    "https://nmspacemuseum.org/wp-content/uploads/2019/03/Elon_Musk.jpg" // Placeholder image
                  }
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-top object-cover"
                />
                <div className="">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h3>
                  <span className="text-sm text-gray-500">
                    -{testimonial.position}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
