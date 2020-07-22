import React, { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";

const SearchForm = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  return (
    <div className="flex flex-col md:flex-row w-full md:justify-between mt-8 h-auto bg-white rounded-xl">
      <div className="flex-auto py-8 pl-8">
        <h3 className="capitalize text-2xl mb-8 font-bold text-gray-800">
          Find Your stay
        </h3>
        <div className="flex mb-8">
          <div className="flex items-center justify-center bg-lightblue2 h-8 w-8 p-8 rounded-12">
            <i className="material-icons text-primary">location_on</i>
          </div>
          <input
            className="text-2xl w-full font-bold ml-6 outline-none border-none placeholder-gray-500"
            placeholder="Krabi, Thailand"
            type="text"
          />
        </div>
        <div className="flex items-center mb-8">
          <div className="flex items-center justify-center bg-lightblue2 h-8 w-8 p-8 rounded-12">
            <i className="material-icons text-primary">date_range</i>
          </div>
          <div className="flex flex-col md:flex-row md:items-center mx-6 w-full">
            <DayPickerInput
              placeholder="Check-in"
              onDayChange={(day) => setCheckIn(day)}
              numberOfMonths={2}
              className="max-w-xs"
            />
            <hr className="md:hidden w-full border-gray-300 my-4" />
            <div
              className="hidden md:block border-gray-400 border-l mx-6"
              style={{ height: "50%" }}
            ></div>
            <DayPickerInput
              placeholder="Check-out"
              onDayChange={(day) => setCheckOut(day)}
              numberOfMonths={2}
            />
          </div>
        </div>
        <div className="flex mb-8">
          <div className="flex items-center justify-center bg-lightblue2 h-8 w-8 p-8 rounded-12">
            <i className="material-icons text-primary">people</i>
          </div>
          <input
            className="text-2xl w-full font-bold ml-6 outline-none border-none placeholder-gray-500"
            placeholder="1 adult, 0 Children, 1 Room"
            type="text"
          />
        </div>
      </div>
      {/* Button */}
      <div className="flex items-center justify-center shadow-glow md:w-32 bg-primary h-24 md:h-auto rounded-xl cursor-pointer hover:opacity-75 transition-opacity duration-300">
        <i className="material-icons text-white">search</i>
      </div>
    </div>
  );
};

export default SearchForm;
