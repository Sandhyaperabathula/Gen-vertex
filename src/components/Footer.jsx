import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";

const Footer = () => {
  const blogs = [
    {
      category: "Business Automation",
      title:
        "The future of AI automation, what businesses need to know",
      image:
        "https://framerusercontent.com/images/biymv8JpOIn1p8QTRsHBkedVOpk.jpg",
      link: "/blog/the-future-of-ai-automation-what-businesses-need-to-know",
    },
    {
      category: "Productivity",
      title:
        "How AI enhances workflow automation for productivity",
      image:
        "https://framerusercontent.com/images/TFEy2zgpeC5gppciS7EfGaocYE.jpg",
      link: "/blog/how-ai-enhances-workflow-automation-for-productivity",
    },
  ];

  return (
    <section>
 
    <footer className="relative overflow-hidden bg-[#070B15] pt-20">

  {/* BG IMAGE */}
  <div className="absolute inset-0 z-0">
    <img
      src="https://framerusercontent.com/images/goVLD4U3zfyfWjTjd4jcg1lu66M.jpg"
      alt=""
      className="w-full h-full object-cover"
    />
  </div>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-[#070B15]/70 z-[1]" />
    {/* TOP BLUR */}
  <div
    className="
      absolute
      top-[-60px]
      left-0
      w-full
      h-[140px]
      bg-[#04060E]
      blur-[35px]
      opacity-100
      pointer-events-none
      z-[2]
    "
  />

  {/* TOP BLUR */}
  <div
    className="
      absolute
      top-0
      left-0
      w-full
      h-[180px]
      bg-[#04060E]
      blur-3xl
      z-[2]
    "
  />

  {/* CONTENT */}
  <div className="relative z-10">

    {/* CTA SECTION */}

<div className="relative z-10 max-w-[860px] mx-auto text-center">

  {/* TITLE */}
  <h2
    className="
  text-[52px]
  md:text-[48px]
  leading-[1]
  tracking-[-2px]
  mb-6
  bg-gradient-to-r
  from-white
  to-[#AAABAD]
  bg-clip-text
  text-transparent
  font-['Instrument_Serif']
"
  >
    Join our AI-powered <br/>community
  </h2>

  {/* DESCRIPTION */}
  <p
    className="
      text-[#999999]
      text-[17px]
      md:text-[18px]
      font-bold
      leading-[1.7]
      max-w-[720px]
      mx-auto
      mb-10
    "
  >
    Subscribe to our newsletter and get the latest AI trends,
    automation tips, and exclusive updates delivered straight to your
    inbox.
  </p>

  {/* FORM */}
  <form className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">

    {/* INPUT */}
    <div
      className="
        w-full
        md:w-[500px]
        h-[50px]
        rounded-[10px]
        border-2
        border-[#22252F]
        bg-[#05070F]
        overflow-hidden
      "
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="
          w-full
          h-full
          bg-transparent
          px-5
          text-white
          outline-none
          placeholder:text-[#8A8A8A]
        "
      />
    </div>

    {/* BUTTON */}
    <button
      className="
        relative
        h-[50px]
        rounded-[10px]
        p-[1px]
        overflow-hidden
        bg-gradient-to-b
        from-[#3469CF]
        to-[#0A2354]
        group
      "
    >
      {/* INNER */}
      <div
        className="
          absolute
          inset-[1px]
          rounded-[9px]
          bg-gradient-to-b
          from-[#0D41A4]
          to-[#0A204C]
        "
      />

      {/* HOVER */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-all
          duration-500
          bg-gradient-to-b
          from-[#1362F8]
          to-transparent
        "
      />

      {/* TEXT */}
      <span
        className="
          relative
          z-10
          h-full
          px-8
          flex
          items-center
          justify-center
          text-white
          font-semibold
        "
      >
        Submit
      </span>
    </button>
  </form>

  {/* FEATURES */}
  <div className="flex items-center justify-center gap-8 flex-wrap pt-2">

    <div className="flex items-center gap-3">
      <img
        src="https://framerusercontent.com/images/Dr6fHfqNgsWybnvj1Rm8dnWeQ.svg"
        alt=""
        className="w-[15px] h-[12px]"
      />

      <p className="text-[#a2a2a2] text-lg font-semibold">
        No credit card is required
      </p>
    </div>

    <div className="flex items-center gap-3">
      <img
        src="https://framerusercontent.com/images/QxlSDSdQDHCV6yYuWPlYiKp7zM.svg"
        alt=""
        className="w-[16px] h-[12px]"
      />

      <p className="text-[#a2a2a2] text-lg font-semibold">
        Early access & Special offers
      </p>
    </div>
  </div>
</div>

  {/* FOOTER BOTTOM */}
<div
  className="
    max-w-7xl
    mx-auto
    px-6
    md:px-7
    pb-16
    pt-30
    flex
    flex-col
    lg:flex-row
    justify-between
    gap-20
  "
>

  {/* LEFT SIDE */}
  <div className="max-w-[270px]">

    <div className="mb-8">
      <img
        src={logo}
        alt="Ailex Logo"
        className="
          w-[100px]
          object-contain
        "
      />
    </div>

    {/* SOCIALS */}
    <div className="flex gap-3 mb-8">

      {[
        <FaFacebookF />,
        <FaLinkedinIn />,
        <FaXTwitter />,
        <FaInstagram />,
      ].map((icon, i) => (
        <div
          key={i}
          className="
            w-10
            h-10
            rounded-md
            bg-white
            text-black
            flex
            items-center
            justify-center
            
            hover:scale-110
            transition-all
            cursor-pointer
          "
        >
          {icon}
        </div>
      ))}
    </div>

    <p className="text-[#777] text-sm font-bold  leading-[1.7]">
      Designed by Webestica, Powered by Framer
    </p>
  </div>

  {/* RIGHT SIDE */}
  <div className="flex gap-30 ">

    {[
      {
        title: "Main Pages",
        items: ["Home", "Features", "Pricing", "Contact us"],
      },
      {
        title: "Company",
        items: ["About", "Blog", "Privacy Policy"],
      },
      {
        title: "Utility Pages",
        items: ["404", "Licenses"],
      },
    ].map((section, index) => (
      <div key={index}>
        <h4 className="text-white text-[24px] font-semibold mb-4">
          {section.title}
        </h4>

        <div className="flex flex-col gap-[10px]">
          {section.items.map((item) => {
            const isContact = item === "Contact us";
            const isHome = item === "Home";
            const isPricing = item === "Pricing";
            
            if (isContact) {
              return (
                <Link
                  key={item}
                  to="/contact"
                  className="
                    text-[#999]
                    hover:text-white
                    transition-colors
                    font-bold
                    text-[19px]
                  "
                >
                  {item}
                </Link>
              );
            }

            if (isPricing) {
              return (
                <Link
                  key={item}
                  to="/pricing"
                  className="
                    text-[#999]
                    hover:text-white
                    transition-colors
                    font-bold
                    text-[19px]
                  "
                >
                  {item}
                </Link>
              );
            }
            
            return (
              <Link
                key={item}
                to={isHome ? "/" : "/"}
                className="
                  text-[#999]
                  hover:text-white
                  transition-colors
                  font-bold
                  text-[19px]
                "
              >
                {item}
              </Link>
            );
          })}
        </div>
      </div>
    ))}
  </div>
</div>
    
  </div>
</footer>

</section>

    
  );
};

export default Footer;