import React from "react";
import Sidebar from "../components/Sidebar";
import Slideshow from "../components/Slideshow";
import Content from "../components/Content";

const styleFixed = {
  top: "0",
  right: "0",
  bottom: "0",
  width: "40%",
};

const Home = () => {
  return (
    <div className="md:flex md:flex-row md:w-full p-3">
      <Sidebar />
      <Content />
      <div
        style={{ ...styleFixed }}
        className="hidden xl:block fixed rounded-xxl"
      >
        <Slideshow />
      </div>
    </div>
  );
};

export default Home;
