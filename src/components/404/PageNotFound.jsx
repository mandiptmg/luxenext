import { NavLink } from "react-router-dom";
import { MoveRight } from 'lucide-react';

const PageNotFound = () => {
  return (
    <div className="">
      <div
        className="absolute z-[999] top-0 left-0 w-full h-full bg-cover grid place-items-center bg-no-repeat bg-black/20 bg-blend-multiply bg-center bg-[url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]
      "
      >
        <div className=" text-center ">
          <h1 className="text-[5rem] scale-110 md:scale-150 font-bold text-white mb-7">404</h1>
        <h1 className="text-3xl md:text-5xl text-white font-semibold mb-7">Page Not Found</h1>
        <NavLink
          to={"/"}
          className="border px-3 py-2  text-white rounded inline-flex items-center gap-2  duration-700 ease-in-out hover:text-black hover:bg-white text-lg font-medium"
        >
          Back to home <MoveRight/>
        </NavLink>
        </div>
      </div>
      
    </div>
  );
};

export default PageNotFound;
