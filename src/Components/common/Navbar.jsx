import React, { useState } from "react";
import {
  Home,
  BookOpen,
  Clock,
  Info,
  Phone,
  LogIn,
  UserPlus,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black shadow-md font-[Poppins] text-white">
      <nav className=" mx-auto max-w-7xl sm:px-6 lg:px-8 px-6 fixed top-2 md:top-5 left-0 right-0 w-full shadow-md z-50 backdrop-blur-2xl py-2 border border-white/10 bg-gradient-to-t from-[#090909] via-[#090909] to-white/5 rounded-xl">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img
              src="/public/Logo_White.png"
              alt=""
              className="h-[180px] -ml-6"
            />
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <a
              href="#"
              className="flex items-center gap-1 text-gray-300 transition hover:text-purple-400"
            >
              <Home className="w-4 h-4" /> Home
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-gray-300 transition hover:text-purple-400"
            >
              <BookOpen className="w-4 h-4" /> Courses
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-gray-300 transition hover:text-purple-400"
            >
              <Clock className="w-4 h-4" /> Schedule
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-gray-300 transition hover:text-purple-400"
            >
              <Info className="w-4 h-4" /> About
            </a>
            <a
              href="#"
              className="flex items-center gap-1 text-gray-300 transition hover:text-purple-400"
            >
              <Phone className="w-4 h-4" /> Contact
            </a>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="#"
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-200 transition border border-gray-600 rounded-md hover:text-purple-400 hover:border-purple-400"
            >
              <LogIn className="w-4 h-4" /> Log in
            </a>
            <a
              href="#"
              className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-white transition rounded-md shadow bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600"
            >
              <UserPlus className="w-4 h-4" /> Enroll Now
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 text-gray-300 rounded-md hover:text-purple-400 focus:outline-none"
            >
              {open ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {open && (
          <div className="pb-4 mt-2 border-t border-gray-800 md:hidden">
            <div className="flex flex-col px-2 space-y-2">
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-purple-900/20 hover:text-purple-400"
              >
                <Home className="w-4 h-4" /> Home
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-purple-900/20 hover:text-purple-400"
              >
                <BookOpen className="w-4 h-4" /> Courses
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-purple-900/20 hover:text-purple-400"
              >
                <Clock className="w-4 h-4" /> Schedule
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-purple-900/20 hover:text-purple-400"
              >
                <Info className="w-4 h-4" /> About
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-purple-900/20 hover:text-purple-400"
              >
                <Phone className="w-4 h-4" /> Contact
              </a>

              <div className="flex gap-2 px-2 mt-2">
                <a
                  href="#"
                  className="flex items-center justify-center flex-1 gap-1 px-4 py-2 text-center text-gray-200 transition border border-gray-600 rounded-md hover:text-purple-400 hover:border-purple-400"
                >
                  <LogIn className="w-4 h-4" /> Log in
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center flex-1 gap-1 px-4 py-2 font-semibold text-center text-white transition rounded-md bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600"
                >
                  <UserPlus className="w-4 h-4" /> Enroll Now
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
