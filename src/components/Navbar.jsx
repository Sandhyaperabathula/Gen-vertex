import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Play,
  Shield,
  Info,
  PenBox,
  DollarSign,
  ArrowUpRight,
  Star,
} from 'lucide-react';

import Container from './Container';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');
  const [resourceOpen, setResourceOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
  ];

  const resourceItems = [
    {
      title: 'Watch Demo',
      desc: 'See Ailex in action',
      icon: <Play size={20} />,
    },

    {
      title: 'Support',
      desc: 'Get in touch with our team',
      icon: <X size={20} />,
    },

    {
      title: 'Explore Features',
      desc: 'Discover Ailex capabilities.',
      icon: <Star size={20} />,
    },

    {
      title: 'About Us',
      desc: 'Who we are, what we do.',
      icon: <Info size={20} />,
    },

    {
      title: 'Blog',
      icon: <PenBox size={20} />,
    },

    {
      title: 'Pricing',
      icon: <DollarSign size={20} />,
    },

    {
      title: 'Privacy Policy',
      icon: <Shield size={20} />,
    },

    {
      title: 'Get Template',
      icon: <ArrowUpRight size={20} />,
    },
  ];

  return (
    <nav
      className={`
        absolute
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        ${scrolled ? 'py-4' : 'py-6'}
      `}
    >
      <Container>
        <div
          className="
            flex
            items-center
            justify-between
            px-2
            md:px-4
          "
        >
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
  <img
    src={logo}
    alt="logo"
    className="
      w-[104px]
      h-auto
      object-contain
    "
  />
</Link>

          {/* DESKTOP MENU */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-10
            "
          >
            {/* HOME */}
            <Link
              to="/"
              onClick={() => setActiveLink('Home')}
              className={`
                text-[18px]
                font-medium
                transition
                duration-300
                ${
                  activeLink === 'Home'
                    ? 'text-white'
                    : 'text-[#CFCFCF] hover:text-white'
                }
              `}
            >
              Home
            </Link>

            {/* PRICING */}
            <Link
              to="/pricing"
              onClick={() => setActiveLink('Pricing')}
              className={`
                text-[18px]
                font-medium
                transition
                duration-300
                ${
                  activeLink === 'Pricing'
                    ? 'text-white'
                    : 'text-[#CFCFCF] hover:text-white'
                }
              `}
            >
              Pricing
            </Link>

            {/* RESOURCES */}
            <div
              className="relative"
              onMouseEnter={() => setResourceOpen(true)}
              onMouseLeave={() => setResourceOpen(false)}
            >
              <button
                className="
                  text-[18px]
                  font-medium
                  flex
                  items-center
                  gap-1
                  text-[#CFCFCF]
                  hover:text-white
                  transition-all
                  duration-300
                "
              >
                Resources

                <ChevronDown
                  size={16}
                  className={`
                    transition-all
                    duration-300
                    ${resourceOpen ? 'rotate-180' : ''}
                  `}
                />
              </button>

              {/* DROPDOWN */}
              <div
                className={`
                  absolute
                  top-12
                  left-[-250px]
                  w-[820px]
                  bg-[#030712]
                  border
                  border-white/10
                  rounded-[28px]
                  p-8
                  grid
                  grid-cols-2
                  gap-6
                  backdrop-blur-2xl
                  shadow-2xl
                  transition-all
                  duration-300
                  z-50
                  ${
                    resourceOpen
                      ? 'opacity-100 visible translate-y-0'
                      : 'opacity-0 invisible translate-y-4'
                  }
                `}
              >
                {resourceItems.map((item, i) => (
                  <div
                    key={i}
                    className="
                      flex
                      items-start
                      gap-4
                      p-4
                      rounded-2xl
                      hover:bg-white/5
                      transition-all
                      duration-300
                      cursor-pointer
                    "
                  >
                    <div
                      className="
                        w-14
                        h-14
                        rounded-2xl
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        text-white
                      "
                    >
                      {item.icon}
                    </div>

                    <div>
                      <h3 className="text-white text-[20px] font-semibold">
                        {item.title}
                      </h3>

                      {item.desc && (
                        <p className="text-gray-400 mt-1 text-[16px]">
                          {item.desc}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* BLOG */}
            <a
              href="/blog"
              onClick={() => setActiveLink('Blog')}
              className={`
                text-[18px]
                font-medium
                transition
                duration-300
                ${
                  activeLink === 'Blog'
                    ? 'text-white'
                    : 'text-[#CFCFCF] hover:text-white'
                }
              `}
            >
              Blog
            </a>
          </div>

          {/* BUTTON */}
       <Link to="/contact">
  <button
    className="
      group
      relative
      hidden
      md:flex
      items-center
      justify-center
      overflow-hidden
      h-[44px]
      px-7
      rounded-[16px]
      bg-white
      text-black
      text-[16px]
      font-semibold
      tracking-[-0.2px]
      transition-all
      duration-300
      hover:scale-[1.02]
    "
  >
    {/* Overlay */}
    <span
      className="
        absolute
        inset-0
        opacity-0
        transition-opacity
        duration-500
        group-hover:opacity-80
      "
      style={{
        background:
          "linear-gradient(rgb(19, 98, 248) 0%, rgba(10, 32, 76, 0) 100%)",
      }}
    />

    {/* Text */}
    <span className="relative z-10  font-semibold transition-colors duration-300">
      Try free
    </span>
  </button>
</Link>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </Container>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            className="
              md:hidden
              mt-4
              px-6
            "
          >
            <div
              className="
                bg-black/90
                border
                border-white/10
                backdrop-blur-xl
                rounded-3xl
                p-6
                flex
                flex-col
                gap-6
              "
            >
              {/* HOME */}
              <Link
                to="/"
                className="text-white text-lg font-medium"
                onClick={() => {
                  setActiveLink('Home');
                  setIsOpen(false);
                }}
              >
                Home
              </Link>

              {/* PRICING */}
              <Link
                to="/pricing"
                className="text-white text-lg font-medium"
                onClick={() => {
                  setActiveLink('Pricing');
                  setIsOpen(false);
                }}
              >
                Pricing
              </Link>
              

              {/* RESOURCES */}
              <div>
                <button
                  onClick={() => setResourceOpen(!resourceOpen)}
                  className="
                    text-white
                    text-lg
                    font-medium
                    flex
                    items-center
                    justify-between
                    w-full
                  "
                >
                  Resources

                  <ChevronDown
                    size={18}
                    className={`
                      transition-all
                      duration-300
                      ${resourceOpen ? 'rotate-180' : ''}
                    `}
                  />
                </button>

                {resourceOpen && (
                  <div
                    className="
                      mt-4
                      border
                      border-white/10
                      rounded-3xl
                      p-4
                      flex
                      flex-col
                      gap-4
                    "
                  >
                    {resourceItems.map((item, i) => (
                      <div
                        key={i}
                        className="
                          flex
                          items-center
                          gap-4
                        "
                      >
                        <div
                          className="
                            w-14
                            h-14
                            rounded-2xl
                            border
                            border-white/10
                            flex
                            items-center
                            justify-center
                            text-white
                          "
                        >
                          {item.icon}
                        </div>

                        <div>
                          <h3 className="text-white text-lg font-semibold">
                            {item.title}
                          </h3>

                          {item.desc && (
                            <p className="text-gray-400 text-sm">
                              {item.desc}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* BLOG */}
             <Link
                to="/blog"
                className="text-white text-lg font-medium"
                onClick={() => {
                  setActiveLink('Blog');
                  setIsOpen(false);
                }}
              >
                Blog
              </Link>

              

              {/* BUTTON */}
              <button
                className="
                  bg-white
                  text-black
                  rounded-2xl
                  py-4
                  font-semibold
                "
              >
                Try free
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;