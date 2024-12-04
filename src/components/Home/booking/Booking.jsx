import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useLocation, useParams } from "react-router-dom";
import { UseGlobalContext } from "../../context/Context";

const Booking = () => {
  const { slug } = useParams();
  const location = useLocation();
  // Conditionally check if the current path is `/rooms/room/{slug}`
  const isRoomPage = location.pathname.startsWith("/rooms/room/") && slug;

  const validPaths = ["/", "/rooms/booking-room"];
  const pathname = validPaths.includes(location.pathname);
  const [checkInDate, setCheckInDate] = useState(() => {
    const savedCheckIn = localStorage.getItem("checkInDate");
    return savedCheckIn ? new Date(savedCheckIn) : new Date();
  });
  const [checkOutDate, setCheckOutDate] = useState(() => {
    const savedCheckOut = localStorage.getItem("checkOutDate");
    return savedCheckOut ? new Date(savedCheckOut) : new Date();
  });
  const { guests, setGuests } = UseGlobalContext();
  const [activePicker, setActivePicker] = useState(null); // Controls active picker
  const checkInRef = useRef(null); // Ref for Check-In picker
  const checkOutRef = useRef(null); // Ref for Check-Out picker

  // Toggle specific picker
  const togglePicker = (picker) => {
    setActivePicker((prev) => (prev === picker ? null : picker));
  };

  // Close active picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        (checkInRef.current && checkInRef.current.contains(event.target)) ||
        (checkOutRef.current && checkOutRef.current.contains(event.target))
      ) {
        return; // Do nothing if clicking inside any picker
      }
      setActivePicker(null); // Close picker if clicking outside
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    localStorage.setItem("checkInDate", checkInDate.toISOString());
    localStorage.setItem("checkOutDate", checkOutDate.toISOString());
  }, [checkInDate, checkOutDate]);

  // Increment and decrement guests
  const incrementGuests = () => {
    if (guests < 10) setGuests(guests + 1); // Max 10 guests
  };

  const decrementGuests = () => {
    if (guests > 1) setGuests(guests - 1); // Min 1 guest
  };

  // Calculate nights between check-in and check-out
  const calculateNights = () => {
    const timeDiff = checkOutDate - checkInDate;
    return timeDiff > 0 ? Math.ceil(timeDiff / (1000 * 60 * 60 * 24)) : 0;
  };

  const nights = calculateNights();

  return (
    <div
      className={`flex items-center justify-center relative z-30 ${
        pathname ? "pb-10" : ""
      } `}
    >
      <div className=" bg-white p-6 shadow-md rounded-md w-full max-w-4xl">
        <div>
          <div
            className={`grid  ${
              pathname ? "lg:grid-cols-4" : "grid-cols-2"
            }  gap-4`}
          >
            {/* Check-In */}
            <div
              className="relative flex flex-col items-center"
              ref={checkInRef}
            >
              <span className="text-gray-500 font-semibold text-sm uppercase tracking-widest">
                Check-In
              </span>

              <div
                className="cursor-pointer mt-3 flex items-center gap-2"
                onClick={() => togglePicker("checkIn")}
              >
                <span className="text-6xl font-light leading-none">
                  {checkInDate.getDate()}
                </span>
                <div>
                  <span className="text-sm text-gray-500">
                    {checkInDate.toLocaleString("default", { month: "short" })}
                  </span>
                  <ChevronDown className="text-gray-400" />
                </div>
              </div>

              {activePicker === "checkIn" && (
                <div className="absolute top-24 z-50">
                  <DatePicker
                    selected={checkInDate}
                    onChange={(date) => {
                      setCheckInDate(date);
                      setActivePicker(null);
                    }}
                    inline
                    className="rounded-lg shadow-md border-none"
                    minDate={new Date()} // Today or later
                  />
                </div>
              )}
            </div>

            {/* Check-Out */}
            <div
              className="relative flex flex-col items-center"
              ref={checkOutRef}
            >
              <span className="text-gray-500 font-semibold text-sm uppercase tracking-widest">
                Check-Out
              </span>

              <div
                className="cursor-pointer mt-3 flex items-center gap-2"
                onClick={() => togglePicker("checkOut")}
              >
                <span className="text-6xl font-light leading-none">
                  {checkOutDate.getDate()}
                </span>
                <div>
                  <span className="text-sm text-gray-500">
                    {checkOutDate.toLocaleString("default", { month: "short" })}
                  </span>
                  <ChevronDown className="text-gray-400" />
                </div>
              </div>

              {activePicker === "checkOut" && (
                <div className="absolute top-24 z-50">
                  <DatePicker
                    selected={checkOutDate}
                    onChange={(date) => {
                      setCheckOutDate(date);
                      setActivePicker(null);
                    }}
                    inline
                    className="rounded-lg shadow-md border-none"
                    minDate={checkInDate} // Ensure check-out is after check-in
                  />
                </div>
              )}
            </div>

            {/* Guests */}
            <div className="relative flex flex-col items-center">
              <span className="text-gray-500 font-semibold text-sm uppercase tracking-widest">
                Guests
              </span>

              <div className="flex items-center mt-3">
                <span className="text-6xl font-light leading-none">
                  {guests}
                </span>

                <div className="flex flex-col ml-2">
                  <button
                    className="text-gray-500 hover:text-black transition"
                    onClick={incrementGuests}
                  >
                    <ChevronUp size={18} />
                  </button>
                  <button
                    className="text-gray-500 hover:text-black transition mt-1"
                    onClick={decrementGuests}
                  >
                    <ChevronDown size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Nights and Availability */}
            <div
              className={` ${
                pathname ? "hidden" : ""
              } relative flex flex-col items-center`}
            >
              <span className="text-gray-500 font-semibold text-sm uppercase tracking-widest">
                Nights
              </span>
              <div className="mt-3">
                <span className="text-6xl font-light leading-none">
                  {nights}
                </span>
                <span className="text-sm text-gray-500 ml-2">nights</span>
              </div>
            </div>

            {/* Check Availability Button */}
            <button
              className={` ${
                pathname ? "" : "hidden"
              } w-full bg-black text-white text-sm font-[Stardom] uppercase font-thin tracking-widest px-4  py-3 rounded-md hover:bg-[#00b4d8] transition-all`}
            >
              Check Availability
            </button>
          </div>
          <button
            className={`bg-black w-full mt-4 text-white text-sm font-[Stardom] uppercase font-thin tracking-widest px-4 py-3 rounded-md hover:bg-[#00b4d8] transition-all ${
              !isRoomPage ? "hidden" : ""
            }`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Booking;
