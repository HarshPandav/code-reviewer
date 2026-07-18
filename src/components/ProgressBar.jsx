import React from "react";

const ProgressBar = ({ name, score }) => {
  const getProgressColor = () => {
    if (score >= 80) return "bg-emerald-500";
    if (score >= 60) return "bg-amber-400";
    if (score >= 40) return "bg-orange-500";

    return "bg-red-500";
  };

  const getBorderColor = () => {
    if (score >= 80) return "border-l-4 border-emerald-500";
    if (score >= 60) return "border-l-4 border-amber-400";
    if (score >= 40) return "border-l-4 border-orange-500";

    return "border-l-4 border-red-500";
  };

  return (
    <div
      className={`rounded-xl border border-slate-700 bg-slate-900 p-5 transition-all duration-300 hover:border-indigo-500 hover:bg-slate-800 hover:shadow-lg hover:shadow-indigo-500/10 ${getBorderColor()}`}
    >
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-base font-semibold text-white">
          {name}
        </h3>

        <p className="text-sm font-semibold text-slate-300">
          {score}
          <span className="text-xs text-slate-500"> /100</span>
        </p>
      </div>

      {/* Progress Track */}
      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-800">
        <div
          className={`h-full rounded-full transition-all duration-700 ease-in-out ${getProgressColor()}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;