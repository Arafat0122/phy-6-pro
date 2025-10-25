import { ArrowRight } from "lucide-react";
import React from "react";

const Courses = () => {
  const courses = [
    {
      title: "SSC Physics",
      description:
        "SSC স্তরের শিক্ষার্থীদের জন্য ভিত্তি মজবুত করার সম্পূর্ণ কোর্স।",
      image: "/PHY-6 ProCourse Banner.png",
    },
    {
      title: "HSC Physics",
      description: "HSC স্তরের জন্য Concept ভিত্তিক আধুনিক প্রস্তুতি কোর্স।",
      image: "/PHY-6 ProCourse Banner.png",
    },
    {
      title: "Admission Physics",
      description: "ভর্তি পরীক্ষার জন্য একদম Target ভিত্তিক কোর্স।",
      image: "/PHY-6 ProCourse Banner.png",
    },
  ];

  return (
    <section className="relative flex items-center justify-center pb-[120px] overflow-hidden text-white bg-gradient-to-br">
      <div class="absolute inset-0">
        <div class="absolute top-10 left-4 sm:top-20 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#921ace]/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-10 right-4 sm:bottom-20 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 bg-[#7c3aed]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-2xl"></div>
      </div>
      <div className="">
        <h2
          class="text-3xl text-center sm:text-4xl lg:text-5xl  text-white mb-4 leading-tight py-2"
          lang="bn"
        >
          আমাদের{" "} বিশেষ {" "}
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#921ace] to-[#7c3aed]">
            কোর্সসমূহ
          </span>
        </h2>

        <div className="grid gap-8 py-16 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex flex-col justify-between pb-4 overflow-hidden transition-all duration-300 border rounded-2xl shadow-lg hover:shadow-[#921ace]/30 hover:shadow-2xl 
             bg-black/40 backdrop-blur-md border-white/10 hover:bg-gradient-to-br from-black/40 via-[#921ace]/10 to-[#7c3aed]/10"
            >
              <img
                src={course.image}
                alt={course.title}
                className="object-cover w-full h-56"
              />
              <div className="p-6 text-center">
                <h2 className="mb-2 text-2xl font-semibold text-white drop-shadow-sm">
                  {course.title}
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-gray-200/90">
                  {course.description}
                </p>
              </div>

              <div className="px-6">
                <button
                  className="group/btn w-full inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white 
                      bg-gradient-to-r from-[#921ace] to-[#7c3aed] border border-transparent rounded-md
                      hover:from-[#7c3aed] hover:to-[#921ace] hover:scale-[1.03] hover:shadow-lg hover:shadow-[#921ace]/25 
                      transition-all duration-300"
                >
                  কোর্সটি দেখুন
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
