import React from "react";

import facebook from "../assets/images/facebook.png";
import github from "../assets/images/github.png";

export default function Footer() {
  return (
    <div className="w-full py-[3rem] px-[1rem] md:px-[3rem] xl:px-[15rem] flex flex-col text-center gap-5 md:flex-row justify-between items-center bg-black text-white">
      <h1 className="font-bold">Copyright © 2023. All rights are reserved</h1>

      <div className="flex justify-center  items-center gap-5">
        <a
          href="https://www.facebook.com/tristan.bautistasuplico/"
          target="_blank"
        >
          {" "}
          <img
            src={facebook}
            alt="facebook"
            className="w-[30px] h-[30px] cursor-pointer hover:scale-[1.2] transition"
          />
        </a>

        <a href="https://github.com/tansuplico" target="_blank">
          {" "}
          <img
            src={github}
            alt="github"
            className="w-[30px] h-[30px] cursor-pointer  hover:scale-[1.2] transition"
          />
        </a>
      </div>
    </div>
  );
}
