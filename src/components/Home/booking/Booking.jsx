
const Booking = () => {
  return (
    <div className="max-w-7xl lg:pb-0 pb-10 border-t-4 border-[#00b4d8] mx-auto  relative z-30 bg-black">
      <form>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 lg:space-x-3 items-end p-5">
          <div className="text-white md:border-r border-gray-500 p-2 space-y-2">
            <h1 className="text-gray-100 text-lg font-[Stardom]">Check In</h1>
            <input type="date" required className="bg-transparent text-white w-full p-2 border rounded " />
          </div>
          <div className="text-white p-2 md:border-r border-gray-500  space-y-2">
            <h1 className="text-gray-100 text-lg font-[Stardom]">Check Out</h1>
            <input type="date" required className="bg-black w-full p-2 border rounded" />
          </div>
          <div className="text-white p-2 md:border-r border-gray-500 space-y-2">
            <h1 className="text-gray-100 text-lg font-[Stardom]">Rooms</h1>
            <select className="bg-black w-full p-2 border rounded" >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="text-white p-2 md:border-r border-gray-500  space-y-2">
            <h1 className="text-gray-100 text-lg font-[Stardom]">Guests</h1>
            <select className="bg-black w-full p-2 border rounded">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="hidden lg:block p-2 ">
            <button
              type="submit"
              className="border w-full  px-3 py-1 sky text-white rounded capitalize duration-700 ease-in-out hover:text-white text-lg font-medium"
            >
              book now
            </button>
          </div>
        </div>
          <div className="grid lg:hidden place-items-center max-w-7xl px-7  ">
            <button
              type="submit"
              className="border w-full  px-3 py-2 sky text-white rounded capitalize duration-700 ease-in-out hover:text-white text-lg font-medium"
            >
              book now
            </button>
          </div>
      </form>
    </div>
  );
};

export default Booking;
