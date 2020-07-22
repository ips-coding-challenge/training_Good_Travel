import React, { useState } from "react";

const slideshow = {
  backgroundPosition: "center",
  margin: "8px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const Slideshow = () => {
  const firstImage =
    "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
  const [index, setIndex] = useState(0);
  const thumbnails = [
    "https://unsplash.it/800/800",
    "https://unsplash.it/900/900",
    "https://unsplash.it/1000/1000",
    "https://unsplash.it/1050/1050",
  ];

  const handleGallery = (i) => {
    setIndex(i);
  };
  return (
    <div className="md:block relative w-full h-full">
      {thumbnails.map((t, i) => {
        return (
          <div
            className="absolute inset-0 rounded-xxl transition-opacity duration-500"
            style={{
              backgroundImage: `url(${thumbnails[i]})`,
              ...slideshow,
              opacity: `${i === index ? "1" : "0"}`,
            }}
          ></div>
        );
      })}

      {/* Thumb controller */}
      <div className="absolute max-w-full flex items-center justify-center bottom-0 right-0 md:w-3/4 w-full h-auto py-2 bg-white bg-opacity-25 rounded-xl md:mr-8 mb-8">
        {thumbnails.map((t, i) => {
          return (
            <img
              className={`h:24 w-24 md:w-32 md:h-32 bg-white bg-opacity-25 object-cover mr-4 last:mr-0 rounded-xl ${
                i === index ? "border-2 border-red-500" : ""
              }`}
              key={i}
              src={t}
              alt=""
              onClick={() => handleGallery(i)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slideshow;
