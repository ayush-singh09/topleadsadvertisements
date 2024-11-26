import React from "react";

const Hero = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-evenly">
      <div className="bg-zinc-700 text-white w-fit rounded-full px-3 py-1">
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium,
          aperiam.
        </h1>
      </div>

      <div className="w-full flex justify-evenly items-center">
        <div className="w-1/4">
          <h1 className="text-[60px]">
            Welcome To <br />{" "}
            <span className="font-bold">TOP LEADS ADVERTISING</span>
          </h1>
          <button className="btn gradient rounded-full border-none text-white">
            GET STARTED
          </button>
        </div>
        <div className="w-1/4 h-[400px] flex items-center justify-center">
          <div className="w-[260px] h-[260px] relative">
            <div className="w-[200px] h-[200px] bg-zinc-700 absolute z-10"></div>
            <div className="w-[200px] h-[200px] bg-zinc-200 absolute top-10 left-10"></div>
          </div>
        </div>
      </div>

      <div className="text-white border w-fit rounded-full px-5 py-6 font-bold">
        <h1>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium,
          aperiam.
        </h1>
      </div>
    </div>
  );
};

export default Hero;
