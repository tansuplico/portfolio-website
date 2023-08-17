import React, { forwardRef } from "react";

import maps from "../assets/images/maps.png";
import gmail from "../assets/images/gmail.png";

const Contact = forwardRef((_, ref) => {
  return (
    <div
      className="w-[90%] xl:w-[68%] pt-[2rem] pb-[4rem] flex flex-col justify-center items-center"
      ref={ref}
    >
      <h1 className="text-[2.5rem] font-bold mb-[20px]">Contact Me</h1>

      <div className="w-full py-8 flex flex-col md:flex-row justify-center items-center border-solid border-[1px] border-white rounded-lg gap-10 xl:gap-20">
        <div className="flex flex-col md:flex-row  justify-center items-center gap-5">
          <div className="">
            <img src={maps} alt="maps" />
          </div>
          <div className="flex flex-col text-center md:text-start">
            <h1 className="text-[1.3rem] font-bold mt-5 mb-3 md:m-0">
              {" "}
              Location{" "}
            </h1>
            <span> Iloilo City, Philippines </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="">
            <img src={gmail} alt="gmail" />
          </div>
          <div className="flex flex-col text-center md:text-start">
            <h1 className="text-[1.3rem] font-bold mt-5 mb-3 md:m-0">
              {" "}
              Email{" "}
            </h1>
            <span> tsuplico772@gmail.com </span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
