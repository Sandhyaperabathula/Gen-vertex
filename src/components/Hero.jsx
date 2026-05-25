import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

import Container from "./Container";

import hero_section from "../assets/hero_section.png";
import Ai from "../assets/Ai.png";

const Hero = () => {
  return (
    <section
      className="
        relative
        min-h-screen
        flex
        items-center
        overflow-hidden
        bg-cover
        bg-center
        bg-no-repeat
        pt-36
        pb-24
      "
      style={{
        backgroundImage: `url(${hero_section})`,
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/55 z-0"></div>

      {/* BLUE GLOW */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-500/30 blur-[180px] rounded-full"></div>

      {/* PURPLE GLOW */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/20 blur-[180px] rounded-full"></div>

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* REVIEW BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              mb-10
            "
          >
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />

            <span className="text-sm text-gray-300 font-medium">
              4.7/5.0 on google.com
            </span>
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-[52px]
              sm:text-[68px]
              md:text-[82px]
              lg:text-[110px]
              leading-[0.95]
              tracking-[-3px]
              text-[#ECECEC]
              font-[Instrument_Serif]
              max-w-[1200px]
            "
          >
            Say goodbye to manual
          </motion.h1>

          {/* SECOND LINE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="
              flex
              items-center
              justify-center
              gap-4
              flex-wrap
              mt-2
            "
          >
            <h1
              className="
                text-[52px]
                sm:text-[68px]
                md:text-[82px]
                lg:text-[110px]
                leading-[0.95]
                tracking-[-3px]
                text-[#ECECEC]
                font-[Instrument_Serif]
              "
            >
              tasks, hello to
            </h1>

            {/* AI IMAGE */}
            <img
              src={Ai}
              alt="AI"
              className="
                w-[70px]
                md:w-[85px]
                lg:w-[100px]
                object-contain
                rounded-xl
                translate-y-2
                shadow-2xl
              "
            />
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="
              mt-8
              text-gray-300
              text-lg
              md:text-xl
              leading-[1.8]
              max-w-[760px]
            "
          >
            Automate repetitive tasks, analyze data instantly,
            and integrate with your favorite apps—so you can
            focus on what truly matters.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="
              flex
              items-center
              justify-center
              gap-5
              flex-wrap
              mt-12
            "
          >
            {/* BUTTON 1 */}
            <button
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                p-[1px]
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                background:
                  "linear-gradient(to bottom, rgb(50,100,210), rgb(10,35,84))",
              }}
            >
              <div
                className="
                  relative
                  h-[58px]
                  min-w-[220px]
                  px-8
                  rounded-[11px]
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                "
                style={{
                  background:
                    "linear-gradient(to bottom, rgb(14,65,165), rgb(10,32,76))",
                }}
              >
                {/* HOVER */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                  "
                  style={{
                    background:
                      "linear-gradient(to bottom, rgb(24,110,255), rgba(10,32,76,0))",
                  }}
                ></div>

                <span
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    gap-2
                    text-white
                    text-[16px]
                    font-semibold
                  "
                >
                  Explore features
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </button>

            {/* BUTTON 2 */}
            <button
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                p-[1px]
                transition-all
                duration-300
                hover:-translate-y-1
              "
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.1))",
              }}
            >
              <div
                className="
                  relative
                  h-[58px]
                  min-w-[220px]
                  px-8
                  rounded-[11px]
                  flex
                  items-center
                  justify-center
                  bg-white
                  overflow-hidden
                "
              >
                {/* HOVER */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-300
                  "
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(40,120,255,0.18), rgba(255,255,255,0))",
                  }}
                ></div>

                <span
                  className="
                    relative
                    z-10
                    text-black
                    text-[16px]
                    font-semibold
                  "
                >
                  View pricing
                </span>
              </div>
            </button>
          </motion.div>

        {/* HERO IMAGE LIST */}
<motion.div
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
  className="
    relative
    mt-24
    w-full
    max-w-[1450px]
    mx-auto
    flex
    items-end
    justify-center
    gap-[2px]
    lg:gap-[34px]
    overflow-visible
  "
>
  {/* LEFT IMAGE */}
  <div className="relative mb-[60px]">
    <motion.div
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
      relative
        z-10
        w-[340px]
        lg:w-[390px]
      "
      style={{
        transform: "skewY(8deg)",
        willChange: "transform",
      }}
    >
      {/* ABSOLUTE WRAPPER */}
      <div
        className="
          absolute
          inset-0
          rounded-[inherit]
        "
      >
        <img
          src="https://framerusercontent.com/images/nvuXDeoXQ4KjgoW1Lnr0fcDSA2I.png?width=758&height=1138"
          alt="Hero Left"
          className="
           block
            w-full
            h-full
            object-contain
            object-center
            rounded-[inherit]
            select-none
            pointer-events-none
            drop-shadow-[0_80px_160px_rgba(0,0,0,0.95)]
          "
          draggable="false"
        />
      </div>

      {/* IMAGE HEIGHT */}
      <div className="pt-[130%]" />
    </motion.div>
  </div>

  {/* CENTER IMAGE */}
  
 <div className="relative mb-[60px]">
    <motion.div
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        relative
        z-10
        w-[340px]
        lg:w-[390px]
      "
      style={{
        transform: "skewY(8deg)",
        willChange: "transform",
      }}
    >
      {/* ABSOLUTE WRAPPER */}
      <div
        className="
          absolute
          inset-0
          rounded-[inherit]
        "
      >
        <img
          src="https://framerusercontent.com/images/T5F4WvPNF3dpx3XXRdWx2NV7SmA.png?width=837&height=1251"
          alt="Hero Right"
          className="
           block
            w-full
            h-full
            object-contain
            object-center
            rounded-[inherit]
            select-none
            pointer-events-none
            drop-shadow-[0_80px_160px_rgba(0,0,0,0.95)]
          "
          draggable="false"
        />
      </div>

      {/* IMAGE HEIGHT */}
      <div className="pt-[130%]" />
    </motion.div>
  </div>
  {/* RIGHT IMAGE */}
  <div className="relative mb-[60px]">
    <motion.div
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        relative
        z-10
        w-[340px]
        lg:w-[390px]
      "
      style={{
        transform: "skewY(8deg)",
        willChange: "transform",
      }}
    >
      {/* ABSOLUTE WRAPPER */}
      <div
        className="
          absolute
          inset-0
          rounded-[inherit]
        "
      >
        <img
          src="https://framerusercontent.com/images/D4l4Ct8fIFhneHQDdiZy5NqIqo.png?width=759&height=1140"
          alt="Hero Right"
          className="
           block
            w-full
            h-full
            object-contain
            object-center
            rounded-[inherit]
            select-none
            pointer-events-none
            drop-shadow-[0_80px_160px_rgba(0,0,0,0.95)]
          "
          draggable="false"
        />
      </div>

      {/* IMAGE HEIGHT */}
      <div className="pt-[130%]" />
    </motion.div>
  </div>

  {/* BLUE GLOW */}
  <div
    className="
      absolute
      bottom-[-120px]
      left-1/2
      -translate-x-1/2
      w-[900px]
      h-[300px]
      rounded-full
      bg-blue-500/20
      blur-[140px]
      z-0
    "
  />
  
</motion.div>

        </div>
      </Container>
      {/* BOTTOM BLACK FADE */}
<div
  className="
    absolute
    bottom-0
    left-0
    w-full
    h-[420px]
    bg-gradient-to-b
    from-transparent
    via-black/70
    to-black
    z-30
    pointer-events-none
  "
/>
    </section>
  );
};

export default Hero;