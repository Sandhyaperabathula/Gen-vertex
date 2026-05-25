import React, { useState } from "react";
import { motion } from "framer-motion";
import BlogSection from "./BlogSection";



const testimonials = [
  {
    id: 1,
    name: "David Carter",
    role: "Founder of AI Solutions",
    image:
      "https://framerusercontent.com/images/E4GezEwqCEHkJYdYXnBilOi2oy4.jpg",
    text: "This AI automation tool has transformed our workflow! We've saved countless hours and improved efficiency across all departments.",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    role: "Marketing Director",
    image:
      "https://framerusercontent.com/images/AXfLHLRvXizPNcwuJfNQPYrRg.jpg",
    text: "The interface is beautiful and incredibly easy to use. Our team productivity has increased dramatically.",
  },
  {
    id: 3,
    name: "James Anderson",
    role: "Tech Entrepreneur",
    image:
      "https://framerusercontent.com/images/alGkNGHKtN89SqW3FRh7sq4Rjqk.jpg",
    text: "Absolutely game-changing platform. The automation features are smart, fast, and reliable.",
  },
  {
    id: 4,
    name: "Emily Johnson",
    role: "Product Manager",
    image:
      "https://framerusercontent.com/images/B06zcpExhamYXzdnAyZvHuviOM.jpg",
    text: "The user experience is exceptional. Everything feels smooth and premium.",
  },
  {
    id: 5,
    name: "Michael Lee",
    role: "Startup Founder",
    image:
      "https://framerusercontent.com/images/DsiRz4BzwigmG29SJe3bFpcJN0.jpg",
    text: "We've automated almost 70% of repetitive tasks using this platform.",
  },
  {
    id: 6,
    name: "Sophia Brown",
    role: "Creative Designer",
    image:
      "https://framerusercontent.com/images/ZqzaYnE0fKcNj9uLTccJH2hXNM.jpg",
    text: "The design quality and functionality together make this product outstanding.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <>
        <section className="relative overflow-hidden py-18 bg-[#05070F]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-100"
        style={{
          backgroundImage:
            "url('https://framerusercontent.com/images/LLzbrUlazwGRPjqzRz7PRZv8eAU.jpg')",
        }}
      />

     

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="
            text-center
            text-[32px]
            md:text-[62px]
          
            leading-[1]
            tracking-[-3px]
            font-['Instrument_Serif']
            mb-14
          "
        >
          <span className="bg-gradient-to-r from-white to-[#AAABAD] bg-clip-text text-transparent">
            What our customers love about us
          </span>
        </motion.h2>

        {/* Avatar Row */}
        <div className="flex justify-center flex-wrap gap-4 mb-10">
          {testimonials.map((item, index) => (
           <motion.button
  key={item.id}
  onClick={() => setActive(index)}
  whileHover={{ scale: 1.05 }}
  className={`
    relative
   -p-[50px]
    rounded-full
    transition-all
    duration-500
   bg-blue/10
    ${
      active === index
        ? "scale-130 grayscale-0"
        : "scale-100 grayscale"
    }
  `}
>
  <div
    className={`
      w-[48px]
      h-[48px]
      rounded-full
      overflow-hidden
      bg-[#7e7e7e]
      transition-all
      duration-500
      ${
        active === index
          ? "border-[3px] border-[#2A71F6]"
          : "border-[3px] border-transparent"
      }
    `}
  >
    <img
      src={item.image}
      alt={item.name}
      className="
        w-full
        h-full
        object-cover
      "
    />
  </div>
</motion.button>
          ))}
        </div>

        {/* Testimonial Card */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="
            max-w-4xl
            mx-auto
            rounded-[24px]
            p-[1px]
            bg-gradient-to-b
            from-[#1B1F2F]
            to-transparent
          "
        >
          <div
            className="
              rounded-[24px]
              bg-[#05070F]
              px-8
              md:px-16
              py-14
              text-center
             
              backdrop-blur-xl
            "
          >
            {/* Stars */}
            <div className="flex justify-center mb-8">
              <img
                src="https://framerusercontent.com/images/UI7WBJ3ebVRW8JEV4UEnEKUqHY.svg"
                alt="stars"
                className="h-5"
              />
            </div>

            {/* Text */}
            <p
              className="
                text-[#999]
                text-[20px]
                md:text-[26px]
                leading-[1.6]
                font-medium
                max-w-3xl
                mx-auto
                mb-10
              "
            >
              {testimonials[active].text}
            </p>

            {/* User Info */}
            <div>
              <h4 className="text-white text-[22px] font-semibold">
                {testimonials[active].name}
              </h4>

              <p className="text-[#999] mt-2 text-[16px]">
                {testimonials[active].role}
              </p>
            </div>
          </div>
        </motion.div>
       
      </div>
    </section>
     {/* Blog Section */}
    <section className="bg-[#05070F] pt-28">
      <BlogSection />
    </section>
  </>
  );
}