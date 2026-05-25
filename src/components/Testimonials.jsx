import React from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import Container from "./Container";

const ICONS = [
  [0, 52, "https://framerusercontent.com/images/Tm1ZKEWVzrmgZFHAYVpV7D1fyQ.svg"],
  [20, 52, "https://framerusercontent.com/images/22NAQdDBeQdMGHaK53mYwvQYkaM.svg"],
  [40, 68, "https://framerusercontent.com/images/Xo39KjWLdLlvwDZQtiAkvTTHcUo.svg"],
  [60, 88, "https://framerusercontent.com/images/KjMLdSUpgatApn0INyS05WmhnrM.svg"],
  [80, 118, "https://framerusercontent.com/images/qdwZfKdIGa7OdsVfLOluxHGB1fY.svg"],
  [100, 88, "https://framerusercontent.com/images/o9OnDsHFWu5DLli9tpUAFjqTKTs.svg"],
  [120, 68, "https://framerusercontent.com/images/uNI1DR4Lyy8yb80P2FYqc19Q.svg"],
  [140, 52, "https://framerusercontent.com/images/C7wKkbhbtuYyoQZ7jhTg3S5fgc.svg"],
  [160, 118, "https://framerusercontent.com/images/YiIWUQB5ZHfLleLaI99VTdX8NE.svg"],
  [180, 52, "https://framerusercontent.com/images/Tm1ZKEWVzrmgZFHAYVpV7D1fyQ.svg"],
  [200, 52, "https://framerusercontent.com/images/22NAQdDBeQdMGHaK53mYwvQYkaM.svg"],
  [220, 68, "https://framerusercontent.com/images/Xo39KjWLdLlvwDZQtiAkvTTHcUo.svg"],
  [240, 88, "https://framerusercontent.com/images/KjMLdSUpgatApn0INyS05WmhnrM.svg"],
  [260, 118, "https://framerusercontent.com/images/qdwZfKdIGa7OdsVfLOluxHGB1fY.svg"],
  [280, 88, "https://framerusercontent.com/images/o9OnDsHFWu5DLli9tpUAFjqTKTs.svg"],
  [300, 68, "https://framerusercontent.com/images/uNI1DR4Lyy8yb80P2FYqc19Q.svg"],
  [320, 52, "https://framerusercontent.com/images/C7wKkbhbtuYyoQZ7jhTg3S5fgc.svg"],
  [340, 118, "https://framerusercontent.com/images/YiIWUQB5ZHfLleLaI99VTdX8NE.svg"],
];

const Testimonials = () => {
  return (
    <Section
      id="testimonials"
      className="
        relative
        overflow-hidden
        bg-[#020817]
        min-h-[100px]
      "
    >
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "url(https://framerusercontent.com/images/09uXyUfhpAfr7ANIJzS6an83xJ8.jpg?width=1800&height=1450)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      
  

      {/* DARK OVERLAY */}
      

      {/* OVERLAY */}
      <div
        className="absolute inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.12) 0%, transparent 40%, rgba(0,0,0,0.32) 100%)",
        }}
      />

      {/* TOP BLUR */}
      <div
        className="
          absolute
          left-1/2
          top-[-120px]
          z-[3]
          h-[400px]
          w-[1200px]
          -translate-x-1/2
          rounded-full
          bg-black/90
        "
        style={{
          filter: "blur(160px)",
        }}
      />

     

      {/* HERO GLOW */}
      <div
        className="
          absolute
          left-1/2
          top-[260px]
          z-[4]
          h-[420px]
          w-[900px]
          -translate-x-1/2
          rounded-full
          bg-[#2563eb]/10
        "
        style={{
          filter: "blur(160px)",
        }}
      />

      {/* ───────── EXACT FRAMER ORBIT ───────── */}
     <div
  className="
    absolute
    left-1/2
    top-0
    z-20
    hidden
    md:block
    overflow-hidden
    -translate-x-1/2
    pointer-events-none
  "
  style={{
    width: "1400px",
    height: "520px",
    perspective: "1400px",
  }}
>
  {/* MAIN ROTATION */}
  <motion.div
    animate={{
      rotate: 760,
    }}
    style={{
  clipPath: "inset(0 0 50% 0)",
}}
transition={{
    duration: 220,
    repeat: Infinity,
    ease: "linear",
  }}

    
className="absolute left-1/2 top-1/2"
    style={{
      width: "1120px",
      height: "1120px",
      marginLeft: "-560px",
      marginTop: "-110px",
      transformStyle: "preserve-3d",
    }}
  >
  

    {ICONS.map(([angle, size, src], i) => (
      <div
        key={i}
        className="absolute left-1/2 top-1/2"
        style={{
          transform: `
            translate(-50%, -50%)
            rotate(${angle}deg)
            translateY(-560px)
          `,
          transformOrigin: "center center",
        }}
      >
        {/* KEEP ICONS PERFECTLY STRAIGHT */}
        <div
          style={{
            transform: `rotate(-${angle}deg)`,
          }}
        >
          <motion.div
            // animate={{
            //   y: [0, -8, 0],
            // }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.18,
              ease: "easeInOut",
            }}
            className="relative flex items-center justify-center"
            style={{
  width: "72px",
  height: "72px",
}}
          >
 
            {/* ICON */}
            <img
              src={src}
              alt=""
              className="
                relative
                z-10
                h-full
                w-full
                object-contain
              "
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    ))}
  </motion.div>
  
</div>

      
      
      
      
      {/* CONTENT */}
      <Container className="relative z-30">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="
            mx-auto
            flex
            max-w-[950px]
            flex-col
            items-center
            pt-[330px]
            text-center
          "
        >
          {/* TITLE */}
     
<div className="relative">

  {/* BLUR */}
 {/* SECTION BG BLUR BOTTOM */}
<div
  className="
    absolute
    bottom-[-670px]
    left-1/2
    z-[4]
    h-[320px]
    w-[1600px]
    -translate-x-1/2
    pointer-events-none
  -pb-100"
  style={{
    background:
      "radial-gradient(circle at center, rgba(2,8,23,0.98) 0%, rgba(2,8,23,0.92) 28%, rgba(2,8,23,0.72) 52%, rgba(2,8,23,0.28) 75%, transparent 100%)",

    filter: "blur(120px)",
    opacity: 1,
  }}
/>

  {/* HEADING */}
  <h2
    className="
 relative
    z-10
    max-w-[980px]
    text-[38px]
    font-[300]
    leading-[1]
    tracking-[-3px]
    md:text-[62px]
    "
    style={{
      fontFamily: '"Playfair Display", serif',
      color: "#ffffff",
    }}
  >
    Supercharge your apps with AI- <br />
    powered automation
  </h2>

</div>
{/* UNDER TEXT BLUR LINE */}
<div
  className="
    relative
    
    -mt-[120px]
  "
  style={{
    width: "1700px",
    height: "100px",

  background:
  "radial-gradient(circle at center, rgba(0,0,0,0.95) 1000%, rgba(0,0,0,0.82) 88%, rgba(0,0,0,0.45) 52%, rgba(0,0,0,0.12) 75%, transparent 100%)",

boxShadow:
  "0 0 120px rgba(0,0,0,0.95), 0 0 220px rgba(0,0,0,0.85)",

filter: "blur(42px)",
opacity: 10.98,
  }}
/>
          {/* DESCRIPTION */}
          <p
            className="
              mt-20
              max-w-[760px]
              text-[18px]
              font-medium
              leading-[1.8]
              text-[#c4c4c4]
            "
          >
            Our AI-powered automation integrates with leading apps,
            ensuring smooth workflows, real-time data sync, and
            enhanced productivity.
          </p>

          {/* BUTTON */}
          <motion.a
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            href="#"
            className="
              group
              relative
              mt-12
              rounded-[8px]
              p-[1px]
            "
            style={{
              background:
                "linear-gradient(rgb(52,105,207) 0%, rgb(10,35,84) 100%)",
              boxShadow:
                "0 10px 40px rgba(37,99,235,0.35)",
            }}
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[6px]
                px-8
                py-4
              "
              style={{
                background:
                  "linear-gradient(rgb(13,65,164) 0%, rgb(10,32,76) 100%)",
              }}
            >
              {/* HOVER */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-all
                  duration-500
                  group-hover:opacity-100
                "
                style={{
                  background:
                    "linear-gradient(180deg, rgb(19,98,248) 0%, rgba(10,32,76,0) 100%)",
                }}
              />

              <span
                className="
                  relative
                  z-10
                  text-[16px]
                  font-semibold
                  text-white
                "
              >
                View all integrations
              </span>
            </div>
          </motion.a>
        </motion.div>

        {/* STATS */}
        <div className="relative z-30 mt-16 grid gap-6  md:grid-cols-3">
          {[
            {
              title: "1 Million",
              desc: "Automating repetitive tasks for businesses worldwide.",
            },
            {
              title: "99% accuracy",
              desc: "Ensures the highest level of data reliability and consistency.",
            },
            {
              title: "50+ apps",
              desc: "Effortlessly connecting with your favorite tools.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -6,
              }}
              className="
                relative
                overflow-hidden
                rounded-[16px]
               
                p-8
                backdrop-blur-[5px]
              "
              style={{
                background:
                  "linear-gradient(rgba(255,255,255,0.05) 0%, rgba(171,171,171,0) 100%)",
              }}
            >
              <h3
                className="
                  text-[28px]
                  text-white
                  md:text-[42px]
                "
                style={{
                  fontFamily: '"Playfair Display", serif',
                }}
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4
                  max-w-[280px]
                  text-[16px]
                  leading-[1.8]
                  text-[#d1d5db]
                  font-bold
                "
              >
                {item.desc}
              </p>
              
            </motion.div>
          ))}
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
      bg-black/10
      blur-[140px]
      z-0
    "
  />
      </Container>
    </Section>
  );
};

export default Testimonials;