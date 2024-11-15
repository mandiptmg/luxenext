import { NavLink, useLocation } from "react-router-dom";


const fitnessCenters = [
    {
      id: "01",
      title: "Fitness",
      subtitle: "Gym Training Grounds",
      description:
        "Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone",
    },
    {
      id: "02",
      title: "Fitness",
      subtitle: "Indoor Swimming Pool",
      description:
        "Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone",
    },
    {
      id: "03",
      title: "Fitness",
      subtitle: "The Restaurant Center",
      description:
        "Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone",
    },
    {
      id: "04",
      title: "Fitness",
      subtitle: "SPA and Parlor Center",
      description:
        "Rapidiously myocardinate cross-platform intellectual capital after model. Appropriately create interactive infrastructures after are Holisticly facilitate stand-alone",
    },
  ];
  

const HotelServices = () => {
  const location = useLocation();
  const button = location.pathname === "/" ? "" : "hidden";
  return (
    <div className="md:px-20 px-10 py-10">
      <div className=''>
        <h1 className="text-lg md:text-2xl font-[Stardom] text-[#00b4d8] ">Facilities</h1>
        <div className="flex gap-10 flex-col md:flex-row items-start md:items-center mt-4 justify-between">
          <p className="text-3xl font-semibold text-gray-700 lg:text-5xl font-[Stardom]">
            Enjoy Complete & Best <br className={button} />
            Quality Facilities
          </p>
          <button className={button} >
            <NavLink to={"/services"} className="text-left px-6 py-3 border text-black rounded font-semibold hover:text-white hover:bg-black duration-700 transition-all ease-in-out border-black">View More item</NavLink>
          </button>
        </div>
      </div>
      <div className="grid gap-8 mt-7">
      {fitnessCenters.map((center, index) => (
  <div 
    key={center.id} 
    className={`p-6  flex flex-col lg:flex-row font-[Stardom] justify-between items-start gap-10 border-t ${index % 2 === 1 ? ' lg:flex-row-reverse' : ''}`}
  >
    <div className="flex-1 w-full">
      <img 
        src="https://html.ditsolution.net/royella/assets/images/home-1/facilities-thumb-1.jpg" 
        alt="facility image" 
        className="w-full h-full"
      />
    </div>
    <div className={`flex flex-1 flex-col lg:flex-row  items-start lg:mt-7 lg:gap-20 ${index % 2 === 1 ? 'flex-row-reverse' :''}`}>
      <span className="text-3xl font-bold text-[#00b4d8]">
        {center.id}
      </span>
      <div>
        <h3 className="text-lg font-thin text-[#00b4d8]">
          {center.title}
        </h3>
        <div className="h-7 my-2 w-[1px] bg-gray-300"></div>
        <h4 className="text-2xl font-semibold mt-2">
          {center.subtitle}
        </h4>
        <p className="text-gray-600 mt-4">
          {center.description}
        </p>
      </div>
    </div>
  </div>
))}

    </div>
    </div>
  );
};

export default HotelServices;
