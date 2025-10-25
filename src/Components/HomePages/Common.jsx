import React from "react";

const Common = () => {
  return (
    <div className="px-2 mx-auto my-20 max-w-7xl md:px-0">
      <div className="items-center justify-center hidden pb-10 md:flex h-[100px] text-white">
        <div className="mx-auto duration-300 ease-in-out w-[600px] opacity-100">
          <img
            alt="10 Minute School Banner"
            src="https://cdn.10minuteschool.com/images/Frame_2147223622%402x_%281%29_1732776618989.png"
            className="mx-auto"
          />
        </div>
      </div>

      <div className="flex flex-col gap-10 mt-10 md:flex-row md:gap-6">
        <div className="flex-1 min-w-0">
          <div className="relative bg-[linear-gradient(180deg,rgba(19,57,146,0.40)_0%,rgba(6,14,83,0.40)_100%)] rounded-[34px] border border-[#253A71] text-center px-4 md:px-6 pt-10 pb-4 md:pb-8">
            <h2 className="absolute text-[#2B72FF] border border-[#2B72FF] inline-block rounded-full px-[20px] py-[4px] bg-[#15275D] mb-10 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              অনলাইন কোর্স
            </h2>

            <h3 className="text-base md:text-2xl md:max-w-[360px] mb-4 mx-auto">
              অনলাইন ব্যাচ ২০২৫ এর সকল কোর্সে ভর্তি চলছে!
            </h3>

            <div className="flex gap-2 pb-1 pr-1 mb-4 overflow-x-auto lg:justify-center md:gap-4 md:mb-6 scrollbar-hide">
              {[
                {
                  title: "ক্লাস ৯, ১০",
                  src: "https://cdn.10minuteschool.com/images/9-10_1732778140427.png",
                },
                {
                  title: "HSC ২৫, ২৬",
                  src: "https://cdn.10minuteschool.com/images/ssc_1732778162589.png",
                },
                {
                  title: "HSC ২৭",
                  src: "https://cdn.10minuteschool.com/images/hscbag_1732778180651.png",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="flex w-full backdrop-blur-md md:max-w-[122px] md:h-[129px] cursor-pointer flex-col items-center justify-between rounded-2xl text-white bg-white/10 px-2 py-5 transition-all duration-300 md:w-[172px] hover:bg-white/20"
                >
                  <img
                    alt={card.title}
                    src={card.src}
                    className="max-w-[40px] md:max-w-[65px]"
                  />
                  <h4 className="text-xs md:text-base whitespace-nowrap">
                    {card.title}
                  </h4>
                </div>
              ))}
            </div>
            <a
              href="#"
              className=" text-[#2B72FF] border border-[#2B72FF] inline-block rounded-full px-[20px] py-[4px]  "
            >
              বিস্তারিত দেখুন
            </a>
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="relative bg-[linear-gradient(180deg,rgba(150,96,20,0.40)_0%,rgba(59,37,6,0.40)_100%)] rounded-[34px] border border-[#64523D] text-center px-6 pt-10 pb-4 md:pb-8">
            <h2 className="absolute text-[#F29D1F] border border-[#F29D1F] inline-block rounded-full px-[20px] py-[4px] bg-[#583112] mb-10 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
              অফলাইন কোর্স
            </h2>

            <h3 className="md:text-2xl max-w-[360px] mb-4 mx-auto">
              সরাসরি ক্লাসে শিখুন — অভিজ্ঞ শিক্ষকের তত্ত্বাবধানে
            </h3>

            <div className="flex gap-2 pb-1 pr-1 mb-4 overflow-x-auto lg:justify-center md:gap-4 md:mb-6 scrollbar-hide">
              {[
                {
                  title: "ক্লাস ৯, ১০",
                  src: "https://cdn.10minuteschool.com/images/9-10_1732778140427.png",
                },
                {
                  title: "HSC ২৫, ২৬",
                  src: "https://cdn.10minuteschool.com/images/ssc_1732778162589.png",
                },
                {
                  title: "HSC ২৭",
                  src: "https://cdn.10minuteschool.com/images/hscbag_1732778180651.png",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="flex w-full backdrop-blur-md md:max-w-[122px] md:h-[129px] cursor-pointer flex-col items-center justify-between rounded-2xl text-white bg-white/10 px-2 py-5 transition-all duration-300 md:w-[172px] hover:bg-white/20"
                >
                  <img
                    alt={card.title}
                    src={card.src}
                    className="max-w-[40px] md:max-w-[65px]"
                  />
                  <h4 className="text-xs md:text-base whitespace-nowrap">
                    {card.title}
                  </h4>
                </div>
              ))}
            </div>

            <a
              href="#"
              className=" text-[#F29D1F] border border-[#F29D1F] inline-block rounded-full px-[20px] py-[4px]  "
            >
              বিস্তারিত দেখুন
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Common;
