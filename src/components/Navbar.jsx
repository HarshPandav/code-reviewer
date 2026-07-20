import React from "react";
import { IoSettings } from "react-icons/io5";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 h-18 w-full border-b border-[#2A2D36] bg-[#13131B]/95 backdrop-blur-md">
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

            <span className="text-sm relative left-0 font-medium uppercase tracking-[0.25em] text-indigo-400">
              AI Powered
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;