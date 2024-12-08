import { NavLink } from "react-router-dom";
import { luxenestFAQ } from "../../../data/data";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
const Faq = () => {
    const [expandedFAQs, setExpandedFAQs] = useState({});

    const toggleFAQ = (index) => {
      setExpandedFAQs((prev) => ({
        ...prev,
        [index]: !prev[index],
      }));
    };
  return (
    <div>
      <div
        className="bg-black/50 bg-blend-overlay  w-full h-[60vh] bg-no-repeat bg-cover bg-top grid place-items-center "
        style={{
          backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/860/803/694/interior-design-style-design-home-wallpaper-preview.jpg)`,
        }}
      >
        <div className="text-center text-white mt-20   font-[Starbon]  ">
          <h1 className="text-center text-4xl lg:text-6xl uppercase mb-6 tracking-widest font-bold">
            Faq
          </h1>
          <span className="text-lg uppercase ">
            <NavLink to={"/"} className={"text-[#00b4d8]"}>
              home
            </NavLink>
            /faq
          </span>
        </div>
      </div>
      <div className="my-10 px-5 lg:px-20 ">
        <div className="grid place-items-center space-y-4">
          <p className="font-[cursive] text-gray-700 text-4xl  lg:text-5xl capitalize font-semibold ">
            frequently asked questions
          </p>
          <p className="text-gray-600 ">
            If you can&apos;t find an answer that you are looking for, please
            don’t hesitate to contact us. we are here to help.
          </p>
          <div className="flex gap-4 items-center">
            <button className="border p-2 font-sans hover:bg-[#00b4d8] hover:text-white transition-all duration-700 ease-in-out font-light rounded-lg ">
              About the company
            </button>
            <button className="border p-2 font-sans hover:bg-[#00b4d8] hover:text-white transition-all duration-700 ease-in-out font-light rounded-lg ">
              Contact support
            </button>
            <button className="border p-2 font-sans hover:bg-[#00b4d8] hover:text-white transition-all duration-700 ease-in-out font-light rounded-lg ">
              Visit help center
            </button>
          </div>
        
        </div>
        <div className="max-w-2xl mx-auto mt-16 w-full flex flex-col gap-6">
      {luxenestFAQ.map((faq, index) => (
        <div
          key={index}
          className="px-5 overflow-hidden font-[cursive] bg-gray-100 rounded-xl"
        >
          <div
            onClick={() => toggleFAQ(index)}
            className="flex py-3 w-full items-center justify-between cursor-pointer"
          >
            <h2 className="text-lg font-bold text-gray-600">{faq.question}</h2>
            <button
              className={`transform duration-300 ${
                expandedFAQs[index] ? "rotate-180" : ""
              }`}
            >
              <ChevronDown />
            </button>
          </div>
          <p
            className={`text-gray-600  overflow-hidden transition-all duration-300 ${
              expandedFAQs[index] ? "max-h-screen pb-4" : "max-h-0"
            }`}
          >
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
};

export default Faq;
