import React from "react";

const WarningCom = ({ data }) => {
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900 p-5 transition-all duration-300 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/10">

      {/* Warning Title */}
      <h3 className="text-xl font-medium text-white">
        {data.title}
      </h3>

      {/* Line Badge */}
      <span className="rounded-xl bg-slate-700 px-5 py-2 text-base font-semibold text-white">
        Line {data.line}
      </span>

    </div>
  );
};

export default WarningCom;