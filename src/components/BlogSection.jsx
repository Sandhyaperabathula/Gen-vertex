import React from "react";

const BlogSection = () => {
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
    <section className="w-full bg-[#04060e] py-24 px-6 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* MAIN LAYOUT */}
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-14 lg:gap-6 items-start">

          {/* LEFT SIDE */}
          <div className="lg:sticky lg:top-10">
            <h2
              className="
                font-[Instrument_Serif]
                text-[42px]
                md:text-[52px]
                leading-[1.1]
                tracking-[-1px]
                text-white
                mb-5
              "
            >
              Latest insights & AI <br />
              trends
            </h2>

            <a
              href="/blog"
              className="
                inline-flex
                items-center
                justify-center
                rounded-[10px]
                p-[1px]
                bg-gradient-to-b
                from-[#3469CF]
                to-[#0A2354]
                group
              "
            >
              <div
                className="
                  relative
                  px-6
                  py-3
                  rounded-[9px]
                  overflow-hidden
                  bg-gradient-to-b
                  from-[#0D41A4]
                  to-[#091D47]
                "
              >
                <span className="relative z-10 text-white font-semibold">
                  Browse all blogs
                </span>

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
              </div>
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid md:grid-cols-2 gap-8">
            {blogs.map((blog, index) => (
              <a
                key={index}
                href={blog.link}
                className="group block"
              >
                {/* IMAGE */}
                <div className="overflow-hidden rounded-[18px] mb-5">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="
                      w-full
                      h-[260px]
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.03]
                    "
                  />
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-[#8F9094] text-[14px] mb-3">
                    {blog.category}
                  </p>

                  <h3
                    className="
                      text-white
                      text-[24px]
                      leading-[1.15]
                      tracking-[-1px]
                      font-semibold
                      transition-colors
                      duration-300
                      group-hover:text-[#7EA6FF]
                    "
                  >
                    {blog.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;