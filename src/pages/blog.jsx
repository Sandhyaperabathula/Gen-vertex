import React from "react";

const blogs = [
  {
    category: "Business Automation",
    title:
      "The future of AI automation, what businesses need to know",
    image:
      "https://framerusercontent.com/images/biymv8JpOIn1p8QTRsHBkedVOpk.jpg?width=770&height=480",
  },
  {
    category: "Productivity",
    title:
      "How AI enhances workflow automation for productivity",
    image:
      "https://framerusercontent.com/images/TFEy2zgpeC5gppciS7EfGaocYE.jpg?width=770&height=480",
  },
  {
    category: "AI SaaS",
    title: "The Rise of No-Code AI SaaS Platforms",
    image:
      "https://framerusercontent.com/images/o2h6PqTwVCPDYWO4KiWtQVgnys.jpg?width=770&height=480",
  },
  {
    category: "Software Trends",
    title:
      "AI SaaS vs Traditional Software: What’s the Future?",
    image:
      "https://framerusercontent.com/images/wdXh8ukTwopD6dXaPsUyk48GkA.jpg?width=770&height=480",
  },
  {
    category: "Business Automation",
    title:
      "How AI-Powered SaaS is Transforming Business Automation",
    image:
      "https://framerusercontent.com/images/9fyAGckllPoqExsEatKaPKWEFOk.jpg?width=770&height=480",
  },
  {
    category: "Cybersecurity",
    title:
      "The Role of AI in Enhancing SaaS Security",
    image:
      "https://framerusercontent.com/images/67QZGqrNqYZUoH6AGGyvMMfOQ9Q.jpg?width=770&height=480",
  },
];

const Blog = () => {
  return (
    <section
      id="blog"
      className="w-full bg-black text-white overflow-hidden"
    >
      {/* HERO SECTION */}

<section
  className="
    relative
    w-full
    h-[420px]
    overflow-hidden
    flex
    items-center
    justify-center
    bg-[#04060E]
  "
>
  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0 z-0 ">
    <img
      src="https://framerusercontent.com/images/0BwRRWSF5yhlcSBgafJVDrpT2vY.jpg?width=1800&height=1450"
      alt="Background"
      className="
        w-full
        h-full
        object-cover
        object-center
      "
    />
  </div>

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/60 z-[1]" />

  {/* CENTER BLUE GLOW */}
  <div
    className="
      absolute
      top-[10%]
      left-1/2
      -translate-x-1/2
      w-[1000px]
      h-[420px]
      rounded-full
      bg-[#123B8A]
      opacity-30
      blur-[170px]
      z-[2]
      pointer-events-none
    "
  />

  {/* BOTTOM DARK BLUR */}
  <div
    className="
      absolute
      bottom-[-180px]
      left-1/2
      -translate-x-1/2
      w-[1200px]
      h-[320px]
      rounded-full
      bg-[#04060E]
      opacity-100
      blur-[120px]
      z-[2]
      pointer-events-none
    "
  />

  {/* CONTENT */}
  <div className="relative z-10">
    <h1
      className="
        text-[#EBEBEB]
        text-center
        text-[56px]
        sm:text-[82px]
        md:text-[120px]
        lg:text-[70px]
        leading-[0.9]
        tracking-[-7px]
        font-medium
        font-[instrument-serif]
        mt-[100px]
      "
    >
      Blog
    </h1>
  </div>
</section>


      {/* BLOG SECTION */}
      <section className="px-5 md:px-10 bg-[#04060E] lg:px-[55px] pt-[5 0px] pb-[40px]">
        <div className="max-w-[1260px] mx-auto">

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-[32px] gap-y-[56px]">
            {blogs.map((blog, index) => (
              <a
                href="/"
                key={index}
                className="group block w-full"
              >
                {/* IMAGE */}
                <div className="overflow-hidden rounded-2xl">
                  <div className="aspect-[1.604/1] overflow-hidden rounded-2xl">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="
                        w-full
                        h-full
                        object-cover
                        scale-[1.01]
                        group-hover:scale-[1.05]
                        transition-transform
                        duration-500
                      "
                    />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="pt-[22px]">
                  <p
                    className="
                      text-[#999999]
                      text-[14px]
                      leading-[20px]
                      font-medium
                      tracking-[-0.2px]
                      mb-[10px]
                    "
                  >
                    {blog.category}
                  </p>

                  <h3
                    className="
                      text-white
                      text-[26px]
                      md:text-[30px]
                      leading-[1.15]
                      tracking-[-1.2px]
                      font-semibold
                    "
                  >
                    {blog.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          {/* LOAD MORE */}
          <div className="flex justify-center mt-[70px]">
            <button
              className="
                relative
                rounded-[8px]
                p-[1px]
                bg-gradient-to-b
                from-[#3469CF]
                to-[#0A2354]
              "
            >
              <div
                className="
                  px-[26px]
                  py-[15px]
                  rounded-[6px]
                  bg-gradient-to-b
                  from-[#0D41A4]
                  to-[#0A204C]
                  text-white
                  text-[15px]
                  font-medium
                  tracking-[-0.3px]
                  hover:brightness-110
                  transition-all
                  duration-300
                "
              >
                Load More
              </div>
            </button>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Blog;