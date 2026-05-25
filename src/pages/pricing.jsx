import React from "react";

import Pricing from "../components/Pricing";
import Companies from "../components/Companies";
import Footer from "../components/Footer";

const benefits = [
  {
    title: "Affordable plans",
    desc: "Flexible pricing options to fit every budget.",
  },
  {
    title: "Transparent costs accuracy",
    desc: "No hidden fees—clear and upfront pricing.",
  },
  {
    title: "Seamless flexibility",
    desc: "Easily switch or adjust plans as needed.",
  },
];

const PricingPage = () => {
  return (
    <div className="bg-[#04060E] overflow-hidden ">

      {/* SECTION 1 */}
      <section className="mt-50">
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
        font-[instrument-serif]
      "
    >
     Choose your plan
    </span>
  </h2>
  <p className="bg-gradient-to-r
        from-white
        to-[#AAABAD]
        bg-clip-text
        font-semibold
        text-[20px]
        text-transparent
        pb-[23px]
        ">Free 14-day trial for all plans   ·   No credit card required   ·   Cancel anytime</p>

</div>
</section>

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

      {/* SECTION 2 */}
      <section className="relative py-32 px-6">

        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-20">

            <h2
              className="
                text-[42px]
                md:text-[72px]
                leading-[1]
                tracking-[-3px]
                mb-6
                bg-gradient-to-r
                from-white
                to-[#AAABAD]
                bg-clip-text
                text-transparent
                font-['Instrument_Serif']
              "
            >
              Pricing benefits
            </h2>

            <p
              className="
                text-[#999999]
                text-[22px]
                leading-[1.4]
                max-w-[700px]
                mx-auto
                font-semibold
              "
            >
              Enjoy affordable plans, transparent pricing,
              flexible subscriptions, and ongoing value
              for your investment.
            </p>
          </div>

          {/* BENEFIT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">

            {benefits.map((item, index) => (
              <div
                key={index}
                className="
                  relative
                  rounded-[16px]
                
                  bg-gradient-to-b
                  from-white/[0.05]
                  to-transparent
                  backdrop-blur-[5px]
                 
                  p-8
                "
              >
                <h3
                  className="
                    text-white
                    text-[24px]
                    font-semibold
                    mb-4
                    font-[instrument-serif]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                    text-[#999999]
                    text-[19px]
                    leading-[1.7]
                    font-semibold
                  "
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* QUOTE */}
          <div className="text-center max-w-4xl mx-auto">

            <p
              className="
                text-white
                text-[30px]
                md:text-[24px]
                leading-[1.25]
                tracking-[-2px]
                font-switzwer
                mb-10
              "
            >
              “AI unlocks efficiency — let automation do the
              work <br/>while you focus on what matters.”
            </p>

            <div className="flex flex-row items-center justify-center w-full gap-2">

              <img
                src="https://framerusercontent.com/images/E4GezEwqCEHkJYdYXnBilOi2oy4.jpg"
                alt="Avatar"
                className="
                  w-[42px]
                  h-[42px]
                  rounded-full
                  object-cover
                  mb-1
                "
              />

              <p
                className="
                  text-[#999999]
                  text-[16px]
                  font-semibold
                  blur-[0.5]
                "
              >
                Carlos Jonson, Founder & CEO
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3 */}
      <Companies />

      {/* SECTION 4 */}
      <Footer />

    </div>
  );
};

export default PricingPage;