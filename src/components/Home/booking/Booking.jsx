import { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ChevronDown, ChevronUp } from "lucide-react";

const Booking = () => {
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [guests, setGuests] = useState(1);
  const [activePicker, setActivePicker] = useState(null); // Controls active picker
  const pickerRef = useRef(null); // Refs for picker containers

  // Toggle specific picker
  const togglePicker = (picker) => {
    setActivePicker((prev) => (prev === picker ? null : picker));
  };

  // Close active picker when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target)) {
        setActivePicker(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Increment and decrement guests
  const incrementGuests = () => {
    if (guests < 10) setGuests(guests + 1); // Max 10 guests
  };

  const decrementGuests = () => {
    if (guests > 1) setGuests(guests - 1); // Min 1 guest
  };

  return (
    <div className="flex items-center justify-center relative z-30 pb-10">
      <div className="grid lg:grid-cols-4 gap-4 bg-white p-6 shadow-md rounded-md w-full max-w-4xl">
        {/* Check-In */}
        <div className="relative flex flex-col items-center" ref={pickerRef}>
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
                minDate={new Date()} // Prevent selecting past dates
              />
            </div>
          )}
        </div>

        {/* Check-Out */}
        <div className="relative flex flex-col items-center" ref={pickerRef}>
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
                minDate={checkInDate || new Date()} // Ensure check-out is after check-in
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
            <span className="text-6xl font-light leading-none">{guests}</span>

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

        {/* Check Availability Button */}
        <button className="w-full bg-black text-white text-sm font-[Stardom] uppercase font-thin tracking-widest px-4  py-3 rounded-md hover:bg-[#00b4d8] transition-all">
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default Booking;
