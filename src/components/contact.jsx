import React from "react";
import { Link } from "react-router-dom";


const contactCards = [
  {
    title: "Access our knowledge base",
    description:
      "Access a vast reservoir of knowledge and expertise, conveniently.",
    button: "Explore help center",
    icon:
      "https://framerusercontent.com/images/yKZ3BALDzR3TuIRA0aLvMsk0mg.svg?width=26&height=25",
    link: "/contact",
  },
  {
    title: "Discover Ailex tutorials",
    description:
      "Watch and learn from market experts how to utilize our product effectively.",
    button: "Watch tutorials",
    icon:
      "https://framerusercontent.com/images/Jo4qTyQc9CpoB46EAmjUdVqc20I.svg?width=20&height=20",
    link: "/contact",
  },
  {
    title: "Join our community",
    description:
      "Collaborate, share insights, and cultivate relationships within our community network.",
    button: "Visit Facebook group",
    icon:
      "https://framerusercontent.com/images/JDJ52D0mKMJr89zQJ3TK2ZDL8.svg?width=29&height=29",
    link: "/contact",
  },
];

const Contact = () => {
  return (
    <div className="bg-[#04060E] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6">
        {/* Background Image */}
        <img
          src="https://framerusercontent.com/images/0BwRRWSF5yhlcSBgafJVDrpT2vY.jpg?width=1800&height=1450"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Blur Bottom */}
        <div className="absolute bottom-[-120px] left-0 w-full h-[350px] bg-[#04060E] blur-[90px]" />

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1
            className="
  text-[52px]
  md:text-[72px]
  leading-none
  tracking-[0px]
  text-[#EBEBEB]
  font-['Instrument_Serif']
"
          >
            Contact us
          </h1>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="relative z-10 px-6 md:px-10 pb-46 -mt-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactCards.map((card, index) => (
            <div
              key={index}
              className="
                bg-gradient-to-b
                from-[#1B1F2F]
                to-[#1B1F2F4D]
                p-[1px]
                rounded-[20px]
              "
            >
              <div
                className="
                  bg-[#070B15]
                  rounded-[20px]
                  p-8
                  h-full
                  flex
                  flex-col
                  justify-between
                "
              >
                <div>
                  {/* Icon */}
                  <div
                    className="
                      w-[72px]
                      h-[72px]
                      rounded-full
                      border
                      border-[#1B1F2F]
                      bg-[#05070F]
                      flex
                      items-center
                      justify-center
                      mb-8
                    "
                  >
                    <img
                      src={card.icon}
                      alt=""
                      className="w-7 h-7 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-[24px]
                      leading-[1.2]
                      font-semibold
                      blur-[0.4px]
                      mb-4
                    "
                  >
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-[#999999]
                      text-[18px]
                      leading-[1.7]
                      blur-[0.4px]
                      font-semibold 
                    "
                  >
                    {card.description}
                  </p>
                </div>

                {/* Button */}
                <Link
                  href={card.link}
                  className="
                    mt-4
                    inline-flex
                    items-center
                    gap-3
                    blur-[0.4px]
                    text-white
                    text-[15px]
                    font-semibold
                    hover:translate-x-1
                    transition-all
                    duration-300
                  "
                >
                  {card.button}

                  <img
                    src= "https://img.icons8.com/?size=100&id=9432&format=png&color=FFFFFF"
                    alt=""
                    className="w-6 h-6 "
                  />
               </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-16">
            <h2
              className="
                text-[22px]
                md:text-[72px]
                leading-[1]
                tracking-[-3px]
                font-semibold
                mb-6
              "
            >
              <span
                className="
                  bg-gradient-to-r
                  from-white
                  to-[#AAABAD]
                  bg-clip-text
                  text-transparent
                   font-['Instrument_Serif']
                   font-medium
                   
                "
              >
                We're ready to assist you
              </span>
            </h2>

            <p className="text-[#999999] text-[18px] font-semibold">
              Have questions? We’re ready to help!
            </p>
          </div>

          {/* Form */}
         <form
  className="
    bg-[#04060E]
    rounded-[24px]
    p-8
    md:p-12
    space-y-7
  "
>
  {/* Name + Email */}
  <div className="flex flex-col md:flex-row gap-5 w-full">
    
    {/* Name */}
    <label className="w-full space-y-3">
      <p className="text-[#999999] text-[15px] leading-none">
        Name
      </p>

      <div className="framer-form-text-input framer-form-input-wrapper w-full">
        <input
          type="text"
          name="Name"
          placeholder="Enter your name"
          className="
            w-full
            h-[58px]
            bg-[#05070F]
            border
            border-[#22252F]
            rounded-[12px]
            px-[18px]
            text-[15px]
            text-white
            placeholder:text-[#6F7684]
            outline-none
            transition-all
            duration-300
            focus:border-[#3469CF]
          "
        />
      </div>
    </label>

    {/* Email */}
    <label className="w-full space-y-3">
      <p className="text-[#999999] text-[15px] leading-none">
        Email
      </p>

      <div className="framer-form-text-input framer-form-input-wrapper w-full">
        <input
          type="email"
          name="Email"
          placeholder="Enter your email"
          className="
            w-full
            h-[58px]
            bg-[#05070F]
            border
            border-[#22252F]
            rounded-[12px]
            px-[18px]
            text-[15px]
            text-white
            placeholder:text-[#6F7684]
            outline-none
            transition-all
            duration-300
            focus:border-[#3469CF]
          "
        />
      </div>
    </label>
  </div>

  {/* Message */}
  <label className="block space-y-3">
    <p className="text-[#999999] text-[15px] leading-none">
      Message
    </p>

    <div className="framer-form-text-input framer-form-input-wrapper w-full">
      <textarea
        rows="6"
        name="Message"
        placeholder="Enter your message"
        className="
          w-full
          min-h-[180px]
          bg-[#05070F]
          border
          border-[#22252F]
          rounded-[12px]
          px-[18px]
          py-4
          text-[15px]
          text-white
          placeholder:text-[#6F7684]
          outline-none
          resize-none
          transition-all
          duration-300
          focus:border-[#3469CF]
        "
      />
    </div>
  </label>

  {/* Submit Button */}
  <button
    type="submit"
    className="
      group
      relative
      w-full
      rounded-[8px]
      p-[1px]
      overflow-hidden
      bg-gradient-to-b
      from-[#3469CF]
      to-[#0A2354]
      transition-all
      duration-300
    "
  >
    <div
      className="
        relative
        bg-gradient-to-b
        from-[#0D41A4]
        to-[#0A204C]
        rounded-[7px]
        py-[15px]
        overflow-hidden
      "
    >
      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-500
        "
        style={{
          background:
            "linear-gradient(rgb(19, 98, 248) 0%, rgba(10, 32, 76, 0) 100%)",
        }}
      />

      <span
        className="
          relative
          z-10
          text-white
          text-[16px]
          font-medium
        "
      >
        Submit
      </span>
    </div>
  </button>
</form>
        </div>
        
      </section>
      
    </div>
  );
};

export default Contact;