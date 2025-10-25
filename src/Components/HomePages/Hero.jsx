import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-[120px] min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-[#921ace]/5 to-[#7c3aed]/10 text-white overflow-hidden -mt-20">
   

      <div className="relative flex flex-col items-center justify-between w-full gap-12 px-6  mx-auto max-w-7xl md:flex-row sm:px-6 lg:px-1 py-[120px]">
        
        <div className="z-10 flex-1 space-y-6 text-center md:text-left w-[55%]">
          <h1 className="text-3xl !leading-[70px] sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl">
            <span lang="bn" className="font-semibold">
              ফিজিক্সে দক্ষতা অর্জন করুন
            </span>
            
             <span
              lang="bn"
              className="text-transparent bg-clip-text bg-gradient-to-r from-[#921ace] to-[#7c3aed] font-normal pl-4"
            >
               PHY-6 Pro
            </span>
          </h1>

          <div className="max-w-2xl mx-auto space-y-4 text-base leading-relaxed text-gray-300 lg:mx-0 sm:space-y-6 sm:text-lg lg:text-xl">
            <p className="opacity-90">
           আমরা ছোটোবেলা থেকে Physics পড়ছি। কিন্তু কি সত্যিই আমরা এর মৌলিক ধারণা বুঝি? শুধু সূত্র মনে রাখা কি যথেষ্ট, নাকি Physics-এর মূলভাবনা বোঝা জরুরি?
            </p>
            <p className="opacity-90">প্রতিটি Concept—Force, Energy, Motion—শুধু মনে রাখার বিষয় নয়; এগুলোকে বাস্তব উদাহরণে বোঝা এবং প্র্যাকটিকালভাবে ব্যবহার করা গুরুত্বপূর্ণ। PHY-6 Pro এ আমরা ঠিক এটি শেখাই।</p>
          </div>

          <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:gap-4 sm:pt-6 lg:pt-8">
            <button className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm font-medium text-white bg-gradient-to-r from-[#921ace] to-[#7c3aed] hover:from-[#7c3aed] hover:to-[#921ace] transition-all duration-300 border border-transparent hover:scale-105 hover:shadow-2xl hover:shadow-[#921ace]/25 rounded-md">
             কোর্সগুলো দেখুন <ArrowRight className="w-5 h-5 ml-1" />
            </button>
            <button className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 text-sm font-medium text-[#ae1af8] border border-[#921ace]/30 hover:border-[#921ace] hover:bg-gradient-to-r hover:from-[#921ace] hover:to-[#7c3aed] hover:text-white transition-all duration-300 rounded-md">
              Reviews দেখুন
            </button>
          </div>
        </div>

        <div className="relative max-w-sm mx-auto sm:max-w-md lg:max-w-lg xl:max-w-[47%]">
          <div class="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#921ace]/20 to-[#7c3aed]/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl"></div>
          <div className="relative overflow-hidden border shadow-2xl rounded-xl sm:rounded-2xl border-white/10">
            <img
              src="/PHY-6 ProCourse Banner.png"
              alt="PHY-6 Pro Course Banner"
              className="h-auto max-w-full transition-transform duration-500 shadow-2xl rounded-2xl "
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
