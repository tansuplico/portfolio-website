import React, { useState } from "react";

import menu from "../assets/images/menu.png";

import { motion, useAnimation } from "framer-motion";

const Navbar = ({ homeRef, aboutRef, skillsRef, projectsRef, contactRef }) => {
  const [menuShow, setMenuShow] = useState(false);

  function menuOpen() {
    if (menuShow) {
      control.start({ y: 70, transition: { duration: 0.3 } });
    } else {
      control.start({ y: 0, transition: { duration: 0.3 } });
    }

    setMenuShow(!menuShow);
  }

  const control = useAnimation();

  function showInView(ref) {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <header className="w-full bg-[#111111] fixed top-0 z-[11] ">
        <nav className="w-full flex justify-between items-center font-bold py-[2rem] px-[2rem] lg:px-[3rem] xl:py-[3rem] xl:px-[15rem] ">
          <h1
            className="text-[1.3rem] cursor-pointer hover:text-[#0FFFFF] transition"
            onClick={() => showInView(homeRef)}
          >
            {" "}
            Tristan.dev{" "}
          </h1>

          <img
            src={menu}
            alt="menu"
            className="w-[25px] h-[25px] md:hidden"
            onClick={menuOpen}
          />

          <ul className="gap-6 hidden md:flex">
            <li
              className="cursor-pointer hover:text-[#0FFFFF] transition"
              onClick={() => showInView(aboutRef)}
            >
              About
            </li>
            <li
              className="cursor-pointer hover:text-[#0FFFFF] transition"
              onClick={() => showInView(skillsRef)}
            >
              Skills
            </li>
            <li
              className="cursor-pointer hover:text-[#0FFFFF] transition"
              onClick={() => showInView(projectsRef)}
            >
              Projects
            </li>
            <li
              className="cursor-pointer hover:text-[#0FFFFF] transition"
              onClick={() => showInView(contactRef)}
            >
              Contact
            </li>
          </ul>
        </nav>
      </header>

      <motion.div
        className={`w-full p-5 bg-[#111111] fixed top-0 left-0 flex justify-center items-center z-10 `}
        animate={control}
      >
        <ul className="gap-5 flex">
          <li
            className="cursor-pointer hover:text-[#0FFFFF] transition"
            onClick={() => showInView(aboutRef)}
          >
            About
          </li>
          <li
            className="cursor-pointer hover:text-[#0FFFFF] transition"
            onClick={() => showInView(skillsRef)}
          >
            Skills
          </li>
          <li
            className="cursor-pointer hover:text-[#0FFFFF] transition"
            onClick={() => showInView(projectsRef)}
          >
            Projects
          </li>
          <li
            className="cursor-pointer hover:text-[#0FFFFF] transition"
            onClick={() => showInView(contactRef)}
          >
            Contact
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default Navbar;
