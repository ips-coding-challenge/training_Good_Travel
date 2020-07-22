import React from "react";
import stays from "../assets/stays.json";
import Stay from "./Stay";

const StaysList = () => {
  return (
    <div className="mt-12">
      <h2 className="text-5xl font-bold mb-6">Popular Stays</h2>
      <div className="text-xl font-bold">In Krabi Thailand</div>

      <div className="mt-12">
        {stays && stays.length > 0 && stays.map((stay) => <Stay {...stay} />)}
      </div>
    </div>
  );
};

export default StaysList;
