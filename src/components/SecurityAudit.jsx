import React from "react";
import {
  FaCheck,
  FaTimes,
  FaLightbulb,
} from "react-icons/fa";

const SecurityAudit = () => {
  return (
    <div className="space-y-8">

      {/* ================= Security Audit ================= */}
      <div>

        <h2 className="mb-5 text-xl font-bold text-white">
          Security Audit
        </h2>

        <div className="grid grid-cols-2 gap-6">

          {/* OWASP */}
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:border-indigo-500">

            <p className="text-sm text-slate-400">
              OWASP Score
            </p>

            <h3 className="mt-3 text-4xl font-bold text-red-400">
              D-
            </h3>

          </div>

          {/* Injection Risk */}
          <div className="rounded-xl border border-slate-700 bg-slate-900 p-6 transition-all duration-300 hover:border-indigo-500">

            <p className="text-sm text-slate-400">
              Injection Risk
            </p>

            <h3 className="mt-3 text-4xl font-bold text-red-500">
              MAX
            </h3>

          </div>

        </div>

      </div>

      {/* ================= Compliance ================= */}
      <div>

        <h2 className="mb-5 text-xl font-bold text-white">
          Compliance Standards
        </h2>

        <div className="space-y-4">

          <div className="flex items-center gap-4">

            <FaCheck className="text-xl text-emerald-500" />

            <span className="text-xl text-white">
              Strict Typing Enforced
            </span>

          </div>

          <div className="flex items-center gap-4">

            <FaTimes className="text-xl text-red-400" />

            <span className="text-xl text-white">
              Missing Error Handling
            </span>

          </div>

        </div>

      </div>

      {/* ================= Pro Tip ================= */}
      <div className="rounded-xl border-l-4 border-indigo-500 bg-slate-900 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">

        <div className="mb-4 flex items-center gap-4">

          <FaLightbulb className="text-2xl text-indigo-400" />

          <h2 className="text-2xl font-bold text-white">
            PRO TIP
          </h2>

        </div>

        <p className="text-lg leading-8 text-slate-400">
          Parameter binding prevents SQL Injection by ensuring
          that user input is never executed as code.
          This is the industry standard for database security.
        </p>

      </div>

    </div>
  );
};

export default SecurityAudit;