import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Companies from './components/Companies';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Contact from "./components/contact";
import PricingPage from "./pages/pricing";
import Blog from "./pages/blog";

import { MessageCircle, ArrowUp } from "lucide-react";

const HomePage = () => (
  <main>
    <Hero />
    <Companies />
    <Features />
    <Dashboard />
    <Testimonials />
    <Pricing />
   
    <FAQ />
  </main>
);

function App() {
  return (
    <>
      <div className="min-h-screen bg-dark selection:bg-primary/30">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<HomePage />} />
        </Routes>

        <Footer />
      </div>

      {/* FLOATING BUTTONS */}
      <div
        className="
          fixed
          right-6
          bottom-6
          z-[999]
          flex
          flex-col
          gap-4
        "
      >

        
    <a
  href="https://framer.link/zz5bZL7?duplicateType=siteTemplate"
  target="_blank"
  rel="noopener noreferrer"
  className="
    group
    relative
    w-[170px]
    h-[44px]
    rounded-[10px]
    bg-white
    shadow-[0px_2px_4px_rgba(5,8,12,0.1)]
    flex
    items-center
    justify-between
    px-6
    overflow-hidden
    hover:scale-[1.02]
    transition-all
    duration-300
  "
>

  {/* TEXT */}
  <div className="relative flex items-center overflow-hidden h-full">

    <span
      className="
        text-[14px]
        font-bold
        text-black
        tracking-[-0.02em]
      "
    >
      Get it for FREE
    </span>
  </div>

  {/* ICON */}
  <div className="w-[15px] h-[15px]">
    <img
      src="https://framerusercontent.com/images/JCDk8i61Ec1N2laCFRxqdUPv0sM.svg"
      alt=""
      className="w-full h-full object-contain"
    />
  </div>
</a>

        {/* SCROLL TOP BUTTON */}
        {/* <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            ml-auto
            w-[56px]
            h-[56px]
            rounded-[14px]
            bg-white
            shadow-[0px_2px_10px_rgba(0,0,0,0.15)]
            flex
            items-center
            justify-center
            hover:scale-105
            transition-all
            duration-300
          "
        >
          <ArrowUp className="text-black" size={20} />
        </button> */}

{/* FRAMER BADGE */}
<a
  href="https://www.framer.com"
  target="_blank"
  rel="noopener noreferrer"
  className="
    w-[170px]
    h-[44px]
    rounded-[10px]
    bg-white
    shadow-[rgba(0,0,0,0.17)_0px_0.6px_1.5px_-1.5px,rgba(0,0,0,0.14)_0px_2.2px_5.9px_-3px,rgba(0,0,0,0.02)_0px_10px_26px_-4.5px]
    flex
    items-center
    justify-center
    gap-2
    overflow-hidden
    hover:scale-[1.02]
    transition-all
    duration-300
  "
>

  {/* LOGO */}
  <div className="w-[18px] h-[18px] flex items-center justify-center">
  <img
    src="https://img.icons8.com/?size=100&id=XKFRdQOs24QU&format=png&color=000000"
    alt="Framer"
    className="w-full h-full object-contain"
  />
</div>

  {/* TEXT */}
  <span
    className="
      text-[12px]
      font-bold
      tracking-[-0.02em]
      text-black
    "
  >
    Made in Framer
  </span>

  {/* INNER BORDER */}
  <div
    className="
      absolute
      inset-0
      rounded-[10px]
      shadow-[inset_0px_0px_0px_1px_rgba(0,0,0,0.04)]
      pointer-events-none
    "
  />
</a>
      </div>
    </>
  );
}

export default App;