import React, { forwardRef } from "react";

import starbucks from "../assets/images/starbucks.png";
import vacay from "../assets/images/vacay.png";

const Projects = forwardRef((_, ref) => {
  return (
    <div
      className="w-[90%] py-[3rem] flex flex-col justify-center items-center"
      ref={ref}
    >
      <h1 className="text-[2.5rem] font-bold mb-[30px] text-center">
        {" "}
        Personal Works{" "}
      </h1>

      <div className="w-full xl:w-[75%] grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="pb-5 flex flex-col border-solid border-[1px] border-white rounded-lg">
          <div className="overflow-hidden">
            <a
              href="https://suplicostarbucks-clone.netlify.app"
              target="_blank"
            >
              {" "}
              <img
                src={starbucks}
                alt="starbucks"
                className="xl:w-full rounded-lg hover:scale-[1.2] transition"
              />{" "}
            </a>
          </div>
          <div className="w-full mt-[20px] p-5 flex flex-col justify-center items-start">
            <h1 className="text-[1.5rem] font-bold mb-[15px] ">
              Starbucks Clone
            </h1>
            <p className="text-[#BEBFC5] mb-[30px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              corrupti, magnam quibusdam illum eum voluptatum dolor repudiandae
              perferendis laborum. Aut praesentium deleniti
            </p>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3  gap-5">
              <div className=" p-2 flex justify-center items-center bg-[#FF4F00] rounded">
                HTML
              </div>

              <div className=" p-2 flex justify-center items-center bg-[#007FFF] rounded">
                CSS
              </div>

              <div className=" p-2 flex justify-center items-center bg-[#FFBF00] rounded">
                Javascript
              </div>

              <div className=" p-2 flex justify-center items-center bg-[#7DF9FF] text-black rounded">
                React
              </div>
            </div>
          </div>
        </div>

        <div className="pb-5 flex flex-col border-solid border-[1px] border-white rounded-lg">
          <div className="overflow-hidden">
            <a href="https://official-vacay-tbs.netlify.app" target="_blank">
              <img
                src={vacay}
                alt="vacay"
                className="xl:w-full  rounded-lg hover:scale-[1.2] transition"
              />
            </a>
          </div>
          <div className="w-full mt-[20px] p-5 flex flex-col justify-center items-start">
            <h1 className="text-[1.5rem] font-bold mb-[15px] ">Vacay.com</h1>
            <p className="text-[#BEBFC5] mb-[30px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              corrupti, magnam quibusdam illum eum voluptatum dolor repudiandae
              perferendis laborum. Aut praesentium deleniti
            </p>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3  gap-5">
              <div className=" p-2 flex justify-center items-center bg-[#FF4F00] rounded">
                HTML
              </div>

              <div className=" p-2 flex justify-center items-center bg-[#007FFF] rounded">
                CSS
              </div>

              <div className=" p-2 flex justify-center items-center bg-[#FFBF00]  rounded">
                Javascript
              </div>

              <div className=" p-2 flex justify-center items-center bg-[#7DF9FF] text-black rounded">
                React
              </div>

              <div className=" p-2 flex justify-center items-center bg-[#15F4EE] text-black rounded">
                Tailwind
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;
