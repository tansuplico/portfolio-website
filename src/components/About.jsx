import React, { forwardRef } from "react";

import avatar from "../assets/images/avatar.png";

import { motion } from "framer-motion";

const About = forwardRef((_, ref) => {
  return (
    <div
      className="w-[90%] pt-[1rem] md:pt-[5rem] lg:pt-[7rem] xl:pt-[10rem] pb-[5rem] flex flex-col justify-center items-center "
      ref={ref}
    >
      <h1 className="text-center text-[2.5rem] font-bold mb-[2rem]">
        About Me
      </h1>
      <div className="w-[75%] flex flex-col lg:flex-row items-center">
        <motion.div
          initial={{ x: -200 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={avatar}
            alt="avatar"
            className="w-full h-[300px] md:h-[400px]"
          />
        </motion.div>
        <div className="w-full lg:w-[50%] flex flex-col">
          <p className="text-[1.2rem]">
            I am{" "}
            <motion.span
              className="font-bold text-[#0FFFFF]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {" "}
              Tristan Suplico{" "}
            </motion.span>
            , a 19 year old{" "}
            <motion.span
              className="font-bold text-[#0FFFFF]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {" "}
              Information Technology{" "}
            </motion.span>
            student from
            <motion.span
              className="font-bold text-[#0FFFFF]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {" "}
              Central Philippine University{" "}
            </motion.span>{" "}
            . I am knowledgable in Front-End Development, but I am willing to be
            trained and willing to learn new things.
            <br />
            <br />I am currently looking for entry-level position that suits my
            skills and experience. I am open for the positions of
            <motion.span
              className="font-bold text-[#0FFFFF]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {" "}
              Front End Developer.{" "}
            </motion.span>
          </p>
        </div>
      </div>
    </div>
  );
});

export default About;
