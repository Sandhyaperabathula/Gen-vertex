import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  ArrowRight,
  ChevronDown,
  Zap,
  ShieldCheck,
  Layers3,
  PlugZap,
} from 'lucide-react';


import Container from './Container';

const Pricing = () => {
  const [open, setOpen] = useState(0);

  const accordionData = [
    {
      title: 'E-Commerce automation',
      content:
        'Automate product recommendations, sentiment analysis, and customer support to boost sales and engagement.',
    },
    {
      title: 'Financial data processing',
      content:
        'Our platform automates and secures financial transactions, ensuring accuracy and efficiency.',
    },
    {
      title: 'Healthcare data management',
      content:
        'We streamline the storage, security, and accessibility of medical records for better healthcare operations.',
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Increased efficiency',
      desc:
        'Automate repetitive tasks and streamline workflows to save time and resources.',
    },
    {
      icon: ShieldCheck,
      title: 'AI-driven accuracy',
      desc:
        'Reduce human errors with intelligent automation that ensures precision and reliability.',
    },
    
    {
      icon: PlugZap,
      title: 'Seamless integration',
      desc:
        'Easily connect with 50+ tools and platforms to enhance your existing systems.',
    },
  ];

  const plans = [
    {
      name: 'Starter',
      price: '$0',
      features: [
        'Up to 1,000 tasks/month',
        'Basic sentiment analysis',
        '3 Integrations',
        'Community support',
      ],
      cta: 'Start for free',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$49',
      description: 'Ideal for growing businesses needing more power.',
      features: [
        'Up to 50,000 tasks/month',
        'Advanced AI classification',
        'Unlimited integrations',
        'Priority support',
        'Custom reporting',
      ],
      cta: 'Get started',
      popular: true,
    },
    
  ];

  return (
    
     
 <section className="relative overflow-hidden bg-[#05070f]  py-15 px-16 lg:px-6">
       
        <Container>

          {/* TOP GRID */}
          <div className="grid items-center gap-20 lg:grid-cols-2 mb-32">

            {/* LEFT IMAGES */}
           
{/* LEFT IMAGES */}
<div className="relative h-[520px] w-full flex items-center justify-center">

  {/* CARD 1 */}
  <motion.div
    initial={{
      opacity: 0,
      y: 120,
      rotate: 0,
      scale: 0.8,
    }}
   whileInView={{
  opacity: 1,
  y: 0,
  rotate: 8,
  scale: 1,
}}
    transition={{
      duration: 0.9,
      delay: 0.7,
      ease: "easeOut",
    }}
    viewport={{ once: true }}
    className="absolute left-[5%] top-[20%] z-20"
  >
    <img
      src="https://framerusercontent.com/images/kA4rk7M7pVC1RxCpZLBvReCBk.png?width=552&height=554"
      alt="Card"
      className="w-[230px] md:w-[260px] object-contain"
    />
  </motion.div>

  {/* CARD 2 */}
  <motion.div
    initial={{
      opacity: 0,
      y: 120,
      rotate: 0,
      scale: 0.8,
    }}
   whileInView={{
  opacity: 1,
  y: 0,
  rotate: -12,
  scale: 1,
}}
    transition={{
      duration: 0.9,
      delay: 1.7,
      ease: "easeOut",
    }}
    viewport={{ once: true }}
    className="absolute right-[40px] top-[60px] z-30"
  >
    <img
      src="https://framerusercontent.com/images/SQQ0ihhIx0fa9rPYXm8jcBw0I.svg?width=552&height=554"
      alt="Card"
      className="w-[240px] md:w-[270px] object-contain"
    />
  </motion.div>

  {/* CARD 3 */}
  <motion.div
    initial={{
      opacity: 0,
      y: 120,
      rotate: 0,
      scale: 0.8,
    }}
    whileInView={{
  opacity: 1,
  y: 0,
  rotate: -26,
  scale: 1,
}}
    transition={{
      duration: 0.9,
      delay: 1.7,
      ease: "easeOut",
    }}
    viewport={{ once: true }}
    className="absolute left-[28%] bottom-[0%] z-30"
  >
    <img
      src="https://framerusercontent.com/images/ksm6etic3GIzmKXwnniKxLFDkK4.svg?width=551&height=553"
      alt="Card"
      className="w-[240px] md:w-[270px] object-contain"
    />
  </motion.div>

</div>

            {/* RIGHT CONTENT */}
<div className="w-full max-w-[580px]">

  {/* TITLE */}
  <div className="mb-10">

    <h2
    className="
  font-['Switzer']
  text-[42px]
  md:text-[56px]
  leading-[1]
  tracking-[-2.5px]
  font-semibold
  text-white
"
    >
      <span className="bg-white bg-clip-text text-transparent">
        AI-Powered solutions for every industry
      </span>
    </h2>

  </div>

  {/* ACCORDION */}
  <div className="w-full">

    {accordionData.map((item, index) => {
      const isOpen = open === index;

      return (
        <div
          key={index}
          className="border-b border-white/10 py-6"
        >

          {/* HEADER */}
          <button
            onClick={() => setOpen(isOpen ? null : index)}
            className="
              w-full
              flex
              items-center
              justify-between
              gap-4
              text-left
              group
            "
          >

            <h3
              className="
                text-[22px]
                md:text-[24px]
                font-medium
                leading-[1.2]
                text-white
              "
            >
              {item.title}
            </h3>

            <motion.div
              animate={{
                rotate: isOpen ? -180 : 0,
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="flex-shrink-0"
            >
              <ChevronDown
                className="text-white/90"
                size={18}
              />
            </motion.div>

          </button>

          {/* CONTENT */}
          <AnimatePresence initial={false}>

            {isOpen && (
              <motion.div
                initial={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  height: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
                className="overflow-hidden"
              >

                <p
                  className="
                    pt-5
                    max-w-[500px]
                    text-[16px]
                    leading-[1.7]
                    text-[#999999]
                    font-normal
                  "
                >
                  {item.content}
                </p>

              </motion.div>
            )}

          </AnimatePresence>

        </div>
      );
    })}
  </div>

  {/* BUTTON */}
  <div className="mt-10">

    <button
      className="
  relative
  overflow-hidden
  rounded-[10px]
  bg-white
  text-black
  px-7
  py-4
  text-[16px]
  font-semibold

  backdrop-blur-xl
  transition-all
  duration-500
  hover:scale-[1.02]
  before:absolute
  before:inset-0
  before:bg-gradient-to-b
  before:from-[#4679d8]
  before:to-transparent
  before:opacity-4
  hover:before:opacity-100
  before:transition-opacity
  before:duration-500
">

      <span className="relative z-10">
        Get started now
      </span>

      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-300
          hover:opacity-100
          bg-gradient-to-b
          from-[#1362F8]
          to-transparent
        "
      />

    </button>

  </div>

</div>
          </div>

        
      {/* BENEFITS GRID */}
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-16 gap-y-14 mb-32">

  {[
    {
      icon: "https://framerusercontent.com/images/SZcQ32zGo1stvhl2rOcanpetaw.svg",
      title: "Increased efficiency",
      desc: "Automate repetitive tasks and streamline workflows to save time and resources.",
    },
    {
      icon: "https://framerusercontent.com/images/JDJ52D0mKMJr89zQJ3TK2ZDL8.svg?width=29&height=29",
      title: "AI-driven accuracy",
      desc: "Reduce human errors with intelligent automation that ensures precision and reliability.",
    },
    {
      icon: "https://framerusercontent.com/images/ZqVMg62bkxTce4z0Rnwxc6wsEig.svg",
      title: "Scalable & Flexible",
      desc: "Adapt AI automation to fit your business needs, whether you're a startup or an enterprise.",
    }, 
    
    {
      icon: "https://framerusercontent.com/images/fMTo7Z386idqssObelRPF9chu8Y.svg?width=28&height=28",
      title: "Seamless integration",
      desc: "Easily connect with 50+ tools and platforms to enhance your existing systems.",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className="flex flex-col"
    >

      {/* ICON */}
      <div className="mb-8">

        <img
          src={item.icon}
          alt={item.title}
          className="w-[28px] h-[28px] object-contain"
        />

      </div>

      {/* TITLE */}
      <h3
        className="
   font-[Instrument_Serif] 
  text-[19px]
  md:text-[22px]
  leading-[1.2]
  tracking-[-0.6px]
  font-bold
  text-white
  mb-3
"
      >
        {item.title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          
          
          text-[17px]
          leading-[1.65]
          tracking-[-0.3px]
          
          text-[#999999]
          font-[600]
          font-bold
          max-w-[320px]
        "
      >
        {item.desc}
      </p>

    </motion.div>
  ))}

</div>

  
{/* PRICING HEADER */}
<div className="text-center mb-10">

  <h2
    className="
      text-[42px]
      md:text-[64px]
      leading-[1]
      tracking-[-2px]
      font-semibold
      text-center
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
      "
    >
      Simple & flexible pricing
    </span>
  </h2>

</div>

{/* PRICING GRID */}
<div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 max-w-7xl mx-auto items-start">

  {/* FREE PLAN */}
  <div
    className="
      relative
      rounded-[16px]
      p-[1px]
      bg-gradient-to-b
      from-[#1B1F2F]
      to-transparent
      lg:w-[102%]
    "
  >
    <div
      className="
        relative
        overflow-hidden
        rounded-[15px]
        border
        border-white/[0.03]
        p-8
        flex
        flex-col
        bg-[#070B15]
        min-h-[300px]
      "
    >
      <div className="relative z-10 flex flex-col h-full">

        {/* HEADER */}
        <div className="flex items-start justify-between mb-10">

          {/* ICON */}
          <div
            className="
              w-[62px]
              h-[62px]
              rounded-full
              border
              border-[#1B1F2F]
              bg-[#05070F]
              flex
              items-center
              justify-center
              relative
              overflow-hidden
            "
          >
            <img
              src="https://framerusercontent.com/images/IzL2LxNI0iHN91WN1hNEvbZznAM.svg"
              alt="Pricing Icon"
              className="w-[34px] h-[34px] object-contain"
            />
          </div>

          {/* TAG */}
          <div
            className="
              px-4
              py-1.5
              rounded-[5px]
              bg-[#05070F]
            "
          >
            <p className="text-white text-[13px] font-semibold">
              Free plan
            </p>
          </div>
        </div>

        {/* PRICE */}
        <div className="mb-8">
          <div className="flex items-end gap-2 mb-2">

            <h2
              className="
                text-white
                text-[64px]
                leading-none
                tracking-[-3px]
                font-semibold
              "
            >
              $0
            </h2>

           <p className="text-[#999] text-lg font-bold mb-2 leading-none
                ">
  /1-month trial
</p>
          </div>

         
        </div>

        {/* BUTTON */}
        <button
          className="
            relative
            w-full
            rounded-[8px]
            overflow-hidden
            mb-10
          "
        >
          <div className="absolute inset-0 bg-white/20" />

          <div
            className="
              relative
              m-[1px]
              rounded-[7px]
              py-4
              flex
              items-center
              justify-center
              gap-2
              bg-white
            "
          >
            <span
              className="
                text-[15px]
                font-semibold
                text-[#05070F]
              "
            >
              Get started
            </span>
          </div>
        </button>

        {/* FEATURES */}
        <div className="flex flex-col  gap-[18px] -mt-5 font-bold ">

          {[
            "AI-powered automation tools",
            "Up to 5,000 tasks/month",
            "Basic integrations",
            "Standard AI processing speed",
          ].map((item, index) => (
           <div
  key={index}
  className="flex items-center gap-[12px] leading-none font-bold"
>
              <img
                src="https://framerusercontent.com/images/MlUc3QOWcx3ZwgsjwhTp2QsUbU0.svg"
                alt=""
                className="w-[15px] h-[15px]"
              />

              <span className="text-[#999] text-[15px] leading-[1.2]">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  </div>

  {/* PREMIUM PLAN */}
  <div
    className="
      relative
      rounded-[16px]
      p-[1px]
      bg-gradient-to-b
      from-[#1B1F2F]
      to-transparent
      lg:w-[100%]
    "
  >
    <div
      className="
        relative
        overflow-hidden
        rounded-[15px]
        border
        border-white/[0.03]
        p-8
        flex
        flex-col
        bg-[#070B15]
        min-h-[400px]
        scale-[1.02]
        bg-[url('https://framerusercontent.com/images/kPJfTrw8t2Djgt3HmG5x83WcJuM.jpg')]
        bg-cover
        bg-top
      "
    >

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#070B15]/70 z-0"></div>

      <div className="relative z-10 flex flex-col h-full">

        {/* HEADER */}
        <div className="flex items-start justify-between mb-10">

  {/* LEFT SIDE */}
  <div
    className="
      w-[62px]
      h-[62px]
      rounded-full
      border
      border-[#1B1F2F]
      bg-[#05070F]
      flex
      items-center
      justify-center
      relative
      overflow-hidden
      shrink-0
    "
  >
    <img
      src="https://framerusercontent.com/images/rU422NgXfa8OMai2hlR5s94I.svg"
      alt="Premium Icon"
      className="
        w-[24px]
        h-[30px]
        object-contain
        block
      "
    />
  </div>

  {/* RIGHT SIDE */}
  <div className="flex flex-col items-end gap-4">

    {/* TAG */}
    <div
      className="
        px-4
        py-1.5
        rounded-[5px]
        bg-gradient-to-b
        from-[#2A71F6]
        to-[#092863]
      "
    >
      <p className="text-white text-[13px] font-semibold">
        Premium Plan
      </p>
    </div>

    {/* TOGGLE */}
    <div className="flex items-center gap-3">

      <p className="text-[#b0aeae] text-[13px] font-bold">
        Monthly
      </p>

      {/* SWITCH */}
      <div
        className="
          w-[38px]
          h-[22px]
          rounded-full
          border
          border-[#22252F]
          bg-[#05070F]
          flex
          items-center
          px-[3px]
        "
      >
        <div
          className="
            w-[14px]
            h-[14px]
            rounded-full
            bg-[#999]
          "
        />
      </div>

      <p className="text-[#b0aeae] text-[13px] font-bold">
        Yearly 10% off
      </p>

    </div>

  </div>
</div>

        {/* PRICE */}
        <div className="mb-8">

          <div className="flex items-end gap-2 mb-2">

            <h2
              className="
                text-white
                text-[64px]
                leading-none
                tracking-[-3px]
                font-semibold
              "
            >
              $49
            </h2>

            <p className="text-[#999] text-sm mb-2">
              /per month
            </p>
          </div>

          <p className="text-[#999] text-[15px] leading-[1.7]">
            Ideal for growing businesses needing more power.
          </p>
        </div>

        {/* BUTTON */}
        <button
          className="
            relative
            w-full
            rounded-[8px]
            overflow-hidden
            mb-10
          "
        >
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#3469CF]
              to-[#0A2354]
            "
          />

          <div
            className="
              relative
              m-[1px]
              rounded-[7px]
              py-4
              flex
              items-center
              justify-center
              gap-2
              bg-gradient-to-b
              from-[#0D41A4]
              to-[#0A204C]
            "
          >
            <span
              className="
                text-[15px]
                font-semibold
                text-white
              "
            >
              Subscribe to pro
            </span>
          </div>
        </button>

        {/* FEATURES */}
       <div className="grid grid-cols-2 gap-x-5 gap-y-[12px] -mt-5">

  {[
    "Everything from Free Plan +",
    "Advanced AI automation features",
    "Real-time AI insights & analytics",
    "Enterprise-level security & compliance",
    "Up to 100,000 tasks/month",
    "Priority customer support",
    "API access for custom workflows",
  ].map((item, index) => (
    <div
      key={index}
      className="flex items-start gap-[12px]"
    >
      <img
        src="https://framerusercontent.com/images/MlUc3QOWcx3ZwgsjwhTp2QsUbU0.svg"
        alt=""
        className="
          w-[15px]
          h-[15px]
          mt-[4px]
          shrink-0
        "
      />

      <span
        className="
          text-[#999]
          text-[15px]
          leading-[1.45]
          font-medium
        "
      >
        {item}
      </span>
    </div>
  ))}
</div>

      </div>
    </div>
  </div>

</div>

        </Container>
      </section>
    
  );
};

export default Pricing;