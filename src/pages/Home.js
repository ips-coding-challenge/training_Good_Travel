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
    <div
      style={{ margin: "0 auto", maxWidth: "1600px" }}
      className="h-full w-full p-4 flex flex-col md:flex-row overflow-hidden"
    >
      <Sidebar />
      <Content />
      <div className="hidden w-full xl:block h-full rounded-xxl">
        <Slideshow />
      </div>
    </div>
  );
};

export default Home;
