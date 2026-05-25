import React, { useState } from "react";
import {
  BarChart3,
  Database,
  Image as ImageIcon,
  Type,
  CheckCircle2,
  MinusCircle,
  XCircle,
  BrainCircuit,
  PieChart,
  Layers3,
  ScanText,
} from "lucide-react";

import Section from "./Section";
import Container from "./Container";

const Dashboard = () => {
  const tabs = [
    {
      id: 1,
      title: "Sentiment analysis",
      icon: <BarChart3 size={18} />,
      heading: "Understanding emotions in a text instantly",
      desc: "Analyze customer feedback, social media mentions, and reviews to detect positive, neutral, or negative sentiments in real time.",
    },

    {
      id: 2,
      title: "Data processing",
      icon: <Database size={18} />,
      heading: "Fast and scalable data processing",
      desc: "Transform raw information into structured insights with AI-powered automation workflows.",
    },

    {
      id: 3,
      title: "Smart image labeling",
      icon: <ImageIcon size={18} />,
      heading: "Automatically identify image content",
      desc: "Detect objects, scenes, and visual patterns with advanced AI image recognition models.",
    },

    {
      id: 4,
      title: "AI-text classification",
      icon: <Type size={18} />,
      heading: "Classify content with AI precision",
      desc: "Automatically categorize articles, emails, and customer conversations instantly.",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <Section
      id="dashboard"
      className="relative overflow-hidden bg-[#000000] py-[90px] md:py-[120px] backdrop-blur-xl"
    >
      {/* BG */}
      <div className="absolute top-[-240px] left-[-240px] w-[520px] h-[520px] bg-black blur-[180px] rounded-full" />

      <div className="absolute bottom-[-260px] right-[-240px] w-[520px] h-[520px] bg-black blur-[180px] rounded-full" />

      <Container>
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-10 md:mb-14">
          <h2
            className="
              max-w-[920px]
              text-white
              text-[42px]
              sm:text-[58px]
              md:text-[74px]
              lg:text-[52px]
              leading-[1]
              tracking-[-3px]
              
            "
            style={{
              fontFamily: "Instrument Serif",
              letterSpacing: "-0.04em",
         
            }}
          >
            Advanced AI features for smarter <br />  automation
          </h2>

          <button
            className="
              relative
              overflow-hidden
              w-fit
              rounded-[10px]
              border
              border-blue-400/20
              bg-gradient-to-b
              from-[#3469cf]
              to-[#0a2354]
              px-6
              py-4
              text-white
              text-[15px]
              font-semibold
              shadow-[0_10px_40px_rgba(37,99,235,0.25)]
            "
          >
            <span className="relative z-10">Get started now</span>

            <div className="absolute inset-[1px] rounded-[8px] bg-gradient-to-b from-[#0d41a4] to-[#0a204c]" />
          </button>
        </div>

        {/* MAIN */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* LEFT */}
          <div className="w-full lg:w-[290px] flex flex-col gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`
                  w-full
                  flex
                  items-center
                  gap-3
                  rounded-[10px]
                  px-4
                  py-4
                  border
                  transition-all
                  duration-300
                  text-left

                  ${
                    activeTab.id === tab.id
                      ? "bg-[#0b1220] border-white/10 text-white"
                      : "bg-transparent border-transparent text-[#6f7785]"
                  }
                `}
              >
                <div
                  className={`
                    w-9
                    h-9
                    rounded-lg
                    flex
                    items-center
                    justify-center

                    ${
                      activeTab.id === tab.id
                        ? "bg-blue-500/10 text-blue-400"
                        : "text-[#5f6774]"
                    }
                  `}
                >
                  {tab.icon}
                </div>

                <span className="text-[14px] md:text-[17px] font-medium">
                  {tab.title}
                </span>
              </button>
            ))}
          </div>

          {/* RIGHT */}
          <div
            className="
              flex-1
              relative
              overflow-hidden
              rounded-[22px]
              border
              border-white/[0.05]
              bg-[#060d1a]
              p-5
              sm:p-8
              lg:p-10
            "
          >
            <div className="flex flex-col xl:flex-row items-center gap-10 xl:gap-14">
              {/* VISUALS */}
              <div className="relative w-full xl:w-[48%] flex justify-center">
                {/* TAB 1 */}
                {activeTab.id === 1 && (
                  <div className="relative w-full max-w-[430px] h-[250px] sm:h-[320px]">
                    <div className="absolute inset-0 border border-dashed border-white/10 rounded-[22px]" />

                    <div className="absolute top-3 left-3 sm:left-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/10 bg-[#0b1220] flex items-center justify-center">
                      <ImageIcon
                        size={22}
                        className="text-cyan-300 stroke-cyan-300"
                      />
                    </div>

                    <div className="absolute top-[-18px] left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-white/10 bg-[#0b1220] flex items-center justify-center">
                      <BrainCircuit
                        size={34}
                        className="text-violet-400 stroke-violet-400"
                      />
                    </div>

                    <div className="absolute top-3 right-3 sm:right-8 w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/10 bg-[#0b1220] flex items-center justify-center">
                      <PieChart
                        size={22}
                        className="text-green-300 stroke-green-300"
                      />
                    </div>

                    <div className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2">
                      <div className="px-5 py-2 rounded-xl bg-[#0b1220] border border-white/5 text-white text-sm font-semibold">
                        Analysis
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 flex gap-2 sm:gap-4">
                      <div className="flex-1 bg-[#dff7d8] rounded-[18px] p-3 sm:p-5 text-center">
                        <CheckCircle2
                          size={24}
                          className="mx-auto mb-2 text-green-500 stroke-green-500"
                        />

                        <h4 className="text-[11px] sm:text-[15px] text-black font-semibold">
                          Positive
                        </h4>

                        <p className="text-[9px] sm:text-[12px] text-gray-700">
                          sentiments
                        </p>
                      </div>

                      <div className="flex-1 bg-[#fff5cf] rounded-[18px] p-3 sm:p-5 text-center">
                        <MinusCircle
                          size={24}
                          className="mx-auto mb-2 text-yellow-500 stroke-yellow-500"
                        />

                        <h4 className="text-[11px] sm:text-[15px] text-black font-semibold">
                          Neutral
                        </h4>

                        <p className="text-[9px] sm:text-[12px] text-gray-700">
                          sentiments
                        </p>
                      </div>

                      <div className="flex-1 bg-[#ffdfe2] rounded-[18px] p-3 sm:p-5 text-center">
                        <XCircle
                          size={24}
                          className="mx-auto mb-2 text-red-500 stroke-red-500"
                        />

                        <h4 className="text-[11px] sm:text-[15px] text-black font-semibold">
                          Negative
                        </h4>

                        <p className="text-[9px] sm:text-[12px] text-gray-700">
                          sentiments
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2 */}
               
{activeTab.id === 2 && (
  <div className="relative w-full max-w-[430px] h-[250px] sm:h-[320px] md:h-[360px]">
    <img
      src="https://framerusercontent.com/images/3TBLMSoYmYZWwwfG5z2MBMqmmw.svg"
      alt="Data processing"
      className="
        w-full
        h-full
        object-contain
      "
    />
  </div>
)}

                {/* TAB 3 */}
              
{activeTab.id === 3 && (
  <div className="relative w-full max-w-[430px] h-[250px] sm:h-[320px] md:h-[360px]">
    <img
      src="https://framerusercontent.com/images/UAWCkcOwiIGWlZzk6TjxjSm4DU.png"
      alt="Smart image labeling"
      className="
        w-full
        h-full
        object-contain
      "
    />
  </div>
)}

                {/* TAB 4 */}
             
{activeTab.id === 4 && (
  <div className="relative w-full max-w-[430px] h-[250px] sm:h-[320px] md:h-[360px]">
    <img
      src="https://framerusercontent.com/images/Ib9kSuswBGe1xRfpYuMVBWhZPao.svg"
      alt="AI text classification"
      className="
        w-full
        h-full
        object-contain
      "
    />
  </div>
)}
              </div>

              {/* TEXT */}
              <div className="w-full xl:w-[52%]">
                <h3
                  className="
                    text-white
                    text-[30px]
                    sm:text-[40px]
                    md:text-[52px]
                    leading-[1.08]
                    font-bold
                    mb-5
                  "
                >
                  {activeTab.heading}
                </h3>

                <p
                  className="
                    text-[#9ca3af]
                    text-[15px]
                    sm:text-[18px]
                    md:text-[21px]
                    leading-[1.7]
                    max-w-[560px]
                  "
                >
                  {activeTab.desc}
                </p>
              </div>
            </div>

            {/* OVERLAY */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/[0.02] via-transparent to-transparent" />
          </div>
        </div>
      </Container>
      {/* BOTTOM BLUR */}
<div
  className="
    absolute
    bottom-[-180px]
    left-1/2
    -translate-x-1/2
    w-[900px]
    h-[300px]
    bg-blue-500/20
    blur-[140px]
    rounded-full
    pointer-events-none
  "
/>
    </Section>
  );
};

export default Dashboard;