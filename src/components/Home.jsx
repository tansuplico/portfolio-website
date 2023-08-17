import React, { forwardRef } from "react";

import profile from "../assets/images/profile.png";

import facebook from "../assets/images/facebook.png";
import github from "../assets/images/github.png";

import { motion } from "framer-motion";

const Home = forwardRef((_, ref) => {
  return (
    <div
      className="w-[90%] flex justify-center items-center pt-[10rem] pb-[8rem] overflow-hidden"
      ref={ref}
    >
      <div className="w-full flex flex-col lg:flex-row justify-center items-center">
        <div className="w-[80%] xl:w-[45%] md:mt-[2rem] text-center lg:text-left order-2 lg:order-1">
          <motion.h1
            className="text-[2.5rem] font-bold mt-[2rem]"
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Front-End <span className="text-[#0FFFFF]"> React </span> Developer
          </motion.h1>
          <p className="text-[1.3rem] lg:w-[80%] ">
            Hello, I am Tristan Suplico, a passionate Front-End Developer from
            Iloilo City, Philippines.
          </p>

          <div className="flex gap-5 mt-[20px] justify-center items-center lg:justify-start">
            <a
              href="https://www.facebook.com/tristan.bautistasuplico/"
              target="_blank"
            >
              <motion.img
                src={facebook}
                alt="facebook"
                className="w-[35px] h-[35px]"
                initial={{ x: -50 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />
            </a>

            <a href="https://github.com/tansuplico" target="_blank">
              {" "}
              <motion.img
                src={github}
                alt="github"
                className="w-[35px] h-[35px]"
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5 }}
              />{" "}
            </a>
          </div>
        </div>

        <motion.div
          className="w-[18rem] lg:w-[25rem] rounded-[50%] border-solid border-white border-[.2rem] order-1 lg:order-2"
          initial={{ x: 200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img src={profile} alt="profile" className="rounded-[50%] z-10" />
        </motion.div>
      </div>
    </div>
  );
});

export default Home;
