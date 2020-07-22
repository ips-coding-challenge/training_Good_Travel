import React from "react";
import SearchForm from "./SearchForm";
import StaysList from "./StaysList";
import Slideshow from "./Slideshow";

const Content = () => {
  return (
    <div className="flex-auto w-full lg:max-w-content xl:max-w-50 lg:mx-auto xl:mx-0 p-8 md:ml-56 xl:ml-56">
      {/* Search input */}
      <div className="flex justify-between border-b border-gray-400 w-full py-4">
        <input
          className="outline-none flex-auto text-2xl border-none bg-transparent text-gray-500"
          type="text"
          placeholder="Destination, attraction, hotel etc."
        />
        <i className="material-icons text-gray-500">search</i>
      </div>
      <div className="flex items-center">
        <SearchForm />
      </div>
      <StaysList />
      <div className="hidden xl:hidden" style={{ height: "450px" }}>
        <Slideshow />
      </div>
    </div>
  );
};

export default Content;
