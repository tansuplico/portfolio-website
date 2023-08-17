import React, { forwardRef } from "react";

import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import reactQuery from "../assets/images/react-query.png";
import react from "../assets/images/react.png";
import sass from "../assets/images/sass.png";
import tailwind from "../assets/images/tailwind.png";
import framerMotion from "../assets/images/framer-motion.png";
import git from "../assets/images/git.png";

import { motion } from "framer-motion";

const Skills = forwardRef((_, ref) => {
  const skills = [
    {
      id: 1,
      name: "HTML",
      src: html,
    },
    {
      id: 2,
      name: "CSS",
      src: css,
    },
    {
      id: 3,
      name: "Javascript",
      src: javascript,
    },
    {
      id: 4,
      name: "React Query",
      src: reactQuery,
    },
    {
      id: 5,
      name: "React",
      src: react,
    },
    {
      id: 6,
      name: "SASS",
      src: sass,
    },
    {
      id: 7,
      name: "Framer Motion",
      src: framerMotion,
    },
    {
      id: 8,
      name: "Git",
      src: git,
    },
    {
      id: 9,
      name: "Tailwind",
      src: tailwind,
    },
  ];
  return (
    <div
      className="w-[90%] py-[5rem] flex flex-col justify-center items-center "
      ref={ref}
    >
      <h1 className="text-[2.5rem] font-bold mb-[5rem] text-center">
        {" "}
        Skills and Knowledge{" "}
      </h1>

      <div className="w-[80%] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {skills.map((data, i) => {
          return (
            <motion.div
              key={data.id}
              className="flex flex-col justify-center items-center"
              initial={{ opacity: 0, translateX: -50 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              transition={{ duration: 0.2, delay: i * 0.02 }}
            >
              <div>
                <img
                  src={data.src}
                  alt={data.key}
                  className="w-[100px] h-[80px]"
                />
              </div>
              <h2 className="mt-[15px]"> {data.name} </h2>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
});

export default Skills;
