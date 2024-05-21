import React from "react";
import { getImageUrl } from "../utils";
import Carding from "./Carding/Carding";
const Cards = () => {
  return (
    <div className="md:mt-[140px] mt-16  flex  md:p-3  flex-col gap-4">
      <div>
        <h1
          style={{ fontFamily: "Sora, sans-serif" }}
          className="text-custom-purple md::whitespace-nowrap lg:text-[35px] text-[26px]    leading-10  md:font-semibold text-center"
        >
          An All-Round Plugin With Powerful{" "}
          <span className="md:hidden  text-custom-purple lg:text-[35px]  text-[26px] leading-8 md:font-semibold my-4 ">
            Features
          </span>{" "}
        </h1>
        <h1
          style={{ fontFamily: "Sora, sans-serif" }}
          className=" hidden md:block text-custom-purple lg:whitespace-nowrap lg:text-[35px]  text-[26px] leading-8 md:font-semibold my-4 text-center"
        >
          Features
        </h1>
      </div>
      <div style={{fontFamily:'Outfit'}} className="text-[#EEE5FFBD]  md:leading-8 leading-7 mx-4 md:mx-48  md:text-lg text-center">
        {/* <p className=" text-[#EEE5FFBD]   md:whitespace-nowrap  md:text-lg text-center ">
          Whether you're a seasoned web designer or just starting out, Motion
          Art for
        </p>
        <p className=" text-[#EEE5FFBD]  md:text-lg text-center ">
          Elementor seamlessly integrates with the Elementor platform, providing
          you{" "}
        </p>
        <p className=" text-[#EEE5FFBD] mb-2 md:mb-6  md:text-lg text-center ">
          {" "}
          with a seamless and intuitive experience.
        </p> */}
        Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.


        
      </div>
      {/* <div className='md:mt-16 mt-4 mx-2  flex flex-col  items-center flex-wrap  md:flex-nowrap  md:flex-row gap-4 md:justify-evenly rounded-xl'>
                 <Carding val={"hero/motionarteffect-img9.png"} h={"Light Weight"} p={"Motion Art for Elementor is designed to be lightweight."}></Carding>
                 <Carding val={"hero/motionarteffect-img6.png"} h={"100% Responsive"} p={"Create a consistent visual experience across all devices."}  ></Carding>
                 <Carding val={"hero/motionarteffect-img7.png"} h={"User Friendly Interface"} p={"Ensure a smooth experience for both applicants and administrators."}></Carding>
        </div> */}
      <div className="mt-4 mx-2 grid  gap-4 md:gap-6 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 lg:grid-rows-1 rounded-xl">
      <Carding
        val={"hero/motionarteffect-img9.png"}
        h={"Light Weight"}
        p={"Motion Art for Elementor is designed to be lightweight."}
      />
      <Carding
        val={"hero/motionarteffect-img6.png"}
        h={"100% Responsive"}
        p={"Create a consistent visual experience across all devices."}
      />
      <div
        style={{ background: "linear-gradient(to bottom, #0f0821, #241d34)" }}
        className="border-2 md:col-span-2 lg:col-span-1 md:row-start-2 lg:row-start-auto border-[#332c42] px-6 lg:w-full   flex flex-col  pb-10 md:h-[350px]   rounded-3xl lg:pb-0 gap-5"
      >
        <div className="ml-[-2.25rem]">
          <img src={getImageUrl("hero/motionarteffect-img7.png")} alt="none"></img>
        </div>
        <h1 className="font-bold text-custom-purple text-xl md:text-2xl">
          User Friendly Interface
        </h1>
        <p className="text-[#b8b0c9] leading-7 md:text-lg">
          Ensure a smooth experience for both applicants and administrators.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Cards;
