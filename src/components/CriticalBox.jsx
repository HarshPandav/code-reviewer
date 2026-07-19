import React from "react";
import { FaFileAlt } from "react-icons/fa";

const CriticalBox = ({ data }) => {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:border-red-400 hover:shadow-lg hover:shadow-red-500/10">

      <div className="flex items-start gap-5">

        {/* Icon */}
        <div className="mt-1 rounded-lg bg-red-500/10 p-3">
          <FaFileAlt className="text-2xl text-red-400" />
        </div>

        {/* Content */}
        <div className="flex-1">

          <h3 className="text-3xl font-semibold text-white">
            {data.title}
          </h3>

          <p className="mt-3 text-lg leading-8 text-slate-400">
            {data.description}
          </p>

        </div>

      </div>

    </div>
  );
};

export default CriticalBox;