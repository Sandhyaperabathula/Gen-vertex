import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Upload your data",
    description:
      "Our AI automatically processes and prepares your information for analysis.",
    icon:
      "https://framerusercontent.com/images/LBKXVTTpn1z4bndCmSFGsF7scNU.svg",
    image:
      "https://framerusercontent.com/images/tWRANEBxbqRm1HUopwBGBJPDSVU.png?width=1600&height=561",
  },
  {
    title: "AI processes & learns",
    description:
      "AI analyzes patterns, classifies data, and learns from inputs to automate tasks.",
    icon:
      "https://framerusercontent.com/images/yKZ3BALDzR3TuIRA0aLvMsk0mg.svg?width=26&height=25",
    image:
      "https://framerusercontent.com/images/k7m5hd1fXWYJy40BZsTuR7puR7c.png?scale-down-to=1024",
  },
  {
    title: "Get results instantly",
    description:
      "Receive structured outputs, actionable insights, or automated actions workflow needs.",
    icon:
      "https://framerusercontent.com/images/1RZVDfy4OinMIaAxP0TFPCiAo.svg?width=22&height=25",
    image:
      "https://framerusercontent.com/images/TsZE6OhVNBmExQYKG2v9iISdgrM.png?width=1600&height=561",
  },
];

const Features = () => {
  return (
   <section
  className="
    relative
    overflow-hidden
    bg-gradient-to-b
    from-black
    via-[#04060e]
   
    py-[120px]
  "
>
      {/* SECTION OVERLAY */}
      <div
        className="
          absolute
          inset-0
          z-[1]
          bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.02)_0%,transparent_60%)]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1260px] px-5">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-[72px]"
        >
          <h2
            style={{
              fontFamily:
                "Instrument Serif",
              backgroundImage:
                "linear-gradient(98deg, rgb(255,255,255) 0%, rgb(170,171,173) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.04em",
              fontWeight: 100,
            }}
            className="
              mx-auto
              max-w-[760px]
              text-center
              text-[42px]
              leading-[1.05em]
              tracking-[-0.04em]
              md:text-[64px]
              
            "
          >
            The smartest way to automate <br /> your tasks
          </h2>
        </motion.div>

        {/* STEP GRID */}
        <div className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
           <motion.div
  key={index}
  initial={{
    opacity: 0,
    y: 60,
    scale: 0.96,
    filter: "blur(8px)",
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  }}
  whileHover={{
    y: -10,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  }}
  transition={{
    duration: 1.2,
    delay: index * 0.12,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: true, amount: 0.3 }}
              className="
                relative
                overflow-hidden
                rounded-[16px]
                bg-[linear-gradient(180deg,rgb(27,31,47)_0%,rgba(27,31,47,0.3)_100%)]
                p-[1px]
              "
            >
              {/* INNER CARD */}
              <div
                className="
                  relative
                  h-[400px]
                  w-[400px]
                  overflow-hidden
                  rounded-[16px]
                  bg-[#070b15]
                  px-[35px]
                  pt-[49px]
                "
              >
                {/* ICON */}
                <div
                  className="
                    mb-[24px]
                    flex
                    h-[58px]
                    w-[58px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#1b1f2f]
                    bg-[#000000]
                  "
                >
                  <img
                    src={step.icon}
                    alt=""
                    className="h-[26px] w-[26px] object-contain"
                  />
                </div>

                {/* TEXT */}
                <div className="relative z-10">
                  <h3
                    style={{
                      fontFamily:
                        '"Inter","Inter Placeholder",sans-serif',
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                    }}
                    className="
                      mb-[12px]
                      text-[24px]
                      leading-[1.1em]
                      text-white
                    "
                  >
                    {step.title}
                  </h3>

                  <p
                    style={{
                      fontFamily:
                        '"Inter","Inter Placeholder",sans-serif',
                      fontWeight: 750,
                    }}
                    className="
                      max-w-[95%]
                      text-[15px]
                      leading-[1.65em]
                      text-[#999999]
                    "
                  >
                    {step.description}
                  </p>
                </div>

                {/* IMAGE */}
                <div className="relative mt-[42px] h-[220px] overflow-hidden">
                 <motion.img
  src={step.image}
  alt=""
  initial={{ scale: 1.08 }}
  whileHover={{
    scale: 1.03,
    x: 6,
  }}
  transition={{
    duration: 0.9,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="
    absolute
    left-0
    top-0
    h-full
    w-full
    object-contain
    object-left-top
  "
/>
                  {/* LEFT BLUR */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-0
                      top-0
                      w-[60px]
                      bg-[#070b15]
                      blur-[15px]
                    "
                  />

                  {/* RIGHT BLUR */}
                  <div
                    className="
                      absolute
                      bottom-0
                      right-0
                      top-0
                      w-[60px]
                      bg-[#070b15]
                      blur-[15px]
                    "
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* TESTIMONIAL */}
<motion.div
  initial={{
    opacity: 0,
    y: 80,
    filter: "blur(10px)",
  }}
  whileInView={{
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
  }}
  transition={{
    duration: 1.2,
    delay: 0.5,
    ease: [0.22, 1, 0.36, 1],
  }}
  viewport={{ once: true }}
  className="mt-[90px] flex justify-center"
>
  <div className="w-full max-w-[720px]">
    
    {/* QUOTE */}
    <div className="mb-[28px]">
      <p
        style={{
          fontFamily: '"Inter","Inter Placeholder",sans-serif',
          color: "rgb(255,255,255)",
          textAlign: "center",
          fontWeight: 10,
          lineHeight: "1.2em",
          letterSpacing: "-0.03em",
        }}
        className="
          
          md:text-[28px]
            mb-[16px]
    text-[25px]
    leading-[1.15em]
    text-white
        "
      >
        “AI unlocks efficiency—let automation do the work <br /> while you focus on what matters.”
      </p>
    </div>

    {/* AUTHOR */}
    <div className="flex items-center justify-center gap-[14px]">
      
      {/* AVATAR */}
      <div
        className="
          relative
          h-[50px]
          w-[50px]
          overflow-hidden
          rounded-full
        "
      >
        <img
          src="https://framerusercontent.com/images/E4GezEwqCEHkJYdYXnBilOi2oy4.jpg"
          alt="Avatar"
          className="
           h-[45px]
w-[45px]
          rounded-full
          
          "
        />
      </div>

      {/* NAME */}
      <p
        style={{
          fontFamily: '"Inter","Inter Placeholder",sans-serif',
          
          fontWeight: 300,
          letterSpacing: "-0.02em",
          lineHeight: "1.2em",
          
        }}
        className="
          mt-0
          text-[16px]
          text-[#e8e9eb]
        "
      >
        Carlos Jonson, Founder & CEO
      </p>
    </div>
  </div>
</motion.div>
      </div>
    </section>
  );
};

export default Features;