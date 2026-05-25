import React from "react";
import { motion } from "framer-motion";

const logos = [
  "https://framerusercontent.com/images/bkdZupLD3Ud0Pl42qZPDXm7Tm8.svg?width=94&height=25",
  "https://framerusercontent.com/images/KqJnnWvgnuJfZ0hDp15OQPoJDf8.svg?width=83&height=25",
  "https://framerusercontent.com/images/UkhxHKaKmAY3UWAmVvpl0gxBkaY.svg?width=109&height=28",
  "https://framerusercontent.com/images/FUKzxHFLkeuz3mJp35hjOr7RVmg.svg?width=101&height=29",
  "https://framerusercontent.com/images/0TF5aDWibiLbkhKEJCmsnw9lNPQ.svg?width=128&height=28",
  "https://framerusercontent.com/images/TZpcoZ0hJbADKz1HRTsO7R1OMY.svg?width=97&height=28",
  "https://framerusercontent.com/images/pGuwlVWizWsF2fVgu7AO4Gn8No.svg?width=103&height=28",
  "https://framerusercontent.com/images/UxO0bnZtwGKDD6DZHqQpvsqUI.svg",
];

const Companies = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
           
        bg-[#04060e]
        py-[52px]
      "
    >
      {/* PAGE SECTION OVERLAY */}
      <div
        className="
          absolute
          inset-0
          z-[1]
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.015)_0%,transparent_72%)]
        "
      />

      {/* PAGE CONTENT OVERLAY BOTTOM */}
      <div
        className="
          absolute
          bottom-0
          left-0
          z-[2]
          h-[120px]
          w-full
          bg-gradient-to-t
          from-black/[0.42]
          to-transparent
        "
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6">
        {/* TITLE */}
        <div className="mb-[32px]">
          <p
            style={{
              fontFamily:
                '"Inter", "Inter Placeholder", sans-serif',
              fontWeight: 500,
              letterSpacing: "0.14em",
              color: "rgb(255,255,255)",
              opacity: 0.62,
            }}
            className="
              text-center
              text-[12px]
              leading-[1.2em]
              uppercase
              antialiased
            "
          >
            Helping businesses succeed worldwide
          </p>
        </div>

        {/* LOGO MARQUEE */}
        <div
          className="
            relative
            overflow-hidden
            opacity-[0.8]
            [mask-image:linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]
            [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_12.5%,black_87.5%,transparent_100%)]
          "
        >
          <motion.div
            animate={{
              x: [0, -1200],
            }}
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              flex
              w-max
              items-center
              gap-[30px]
            "
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="
                  relative
                  flex
                  h-[28px]
                  shrink-0
                  items-center
                "
              >
                <img
                  src={logo}
                  alt="Client Logo"
                  draggable="false"
                  className="
                    block
                    h-[28px]
                    w-auto
                    object-contain
                    select-none
                    pointer-events-none
                  "
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Companies;