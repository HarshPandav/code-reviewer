import React from "react";
import { IoSettings } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 h-[72px] w-full border-b border-[#2A2D36] bg-[#13131B]/95 backdrop-blur-md">
      <div className="mx-auto flex h-full items-center justify-between px-8">

        {/* ================= Logo ================= */}
        <div className="flex items-center gap-3 select-none cursor-pointer">

          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-lg font-bold text-white shadow-lg shadow-indigo-500/30">
            AI
          </div>

          <div className="flex flex-col">
            <h1 className="text-xl font-bold tracking-wide text-white">
              Code Reviewer
            </h1>

            <span className="text-xs font-medium uppercase tracking-[0.25em] text-indigo-400">
              AI Powered
            </span>
          </div>

        </div>

        {/* ================= Navigation ================= */}
        <nav className="hidden items-center gap-8 text-[15px] font-medium text-gray-400 md:flex">

          <a
            href="#"
            className="transition-all duration-300 hover:text-white"
          >
            History
          </a>

          <a
            href="#"
            className="transition-all duration-300 hover:text-white"
          >
            Documentation
          </a>

          <a
            href="#"
            className="transition-all duration-300 hover:text-white"
          >
            Account
          </a>

        </nav>

        {/* ================= Right Side ================= */}
        <div className="flex items-center gap-3">

          {/* Copy Report */}
          <button
            className="rounded-lg border border-[#34343D] bg-[#1A1D24] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-indigo-500 hover:bg-[#242833]"
          >
            Copy Report
          </button>

          {/* Download Code */}
          <button
            className="rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95"
          >
            Download Code
          </button>

          {/* Settings */}
          <button
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#34343D] bg-[#1A1D24] text-xl text-gray-300 transition-all duration-300 hover:border-indigo-500 hover:bg-[#242833] hover:text-white"
          >
            <IoSettings />
          </button>

        </div>
      </div>
    </header>
  );
};

export default Navbar;