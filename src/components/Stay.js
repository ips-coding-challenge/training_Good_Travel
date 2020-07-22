import React from "react";

const Stay = ({ id, title, subtitle, price, rating, comments, image }) => {
  return (
    <div className="card flex p-3 rounded-xxl bg-lightblue mb-8 transition duration-300 cursor-pointer hover:shadow-md">
      <div className="h-auto w-auto overflow-hidden rounded-xl">
        <img
          className="w-56 h-56 object-cover rounded-xl transition duration-300"
          src={image}
          alt="title"
        />
      </div>
      <div className="flex flex-col justify-evenly ml-6">
        <div className="text-gray-500 text-2xl font-bold">{subtitle}</div>
        <div className="text-3xl font-bold mb-2">{title}</div>
        <div className="text-2xl">${price} / night</div>
        <div className="flex items-center">
          <i className="material-icons text-primary mr-4">star</i>
          <div className="text-2xl">
            {rating} <span className="text-gray-500">({comments})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stay;
