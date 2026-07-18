import React from "react";

const ScoreSquare = ({ score }) => {
    const size = 120;
    const radius = 12;
    let perimeter = 4 * (size - 20)
    let progress = (score / 100) * perimeter

    return (
        <div className="relative w-30 h-30">
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="-rotate-90"
            >
                <rect
                    x="10"
                    y="10"
                    width={size - 20}
                    height={size - 20}
                    rx={radius}
                    fill="none"
                    stroke="#1f1f2e"
                    strokeWidth={10}
                />

                <rect
                    x="10"
                    y="10"
                    width={size - 20}
                    height={size - 20}
                    rx={radius}
                    fill="none"
                    stroke="#6366F1"
                    strokeWidth={10}
                    strokeLinecap="round"
                    pathLength={perimeter}
                    strokeDasharray={perimeter}
                    strokeDashoffset={perimeter - progress}
                />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-indigo-500">
                    {score}
                </span>
                <span className="text-sm text-gray-400">/100</span>
            </div>

        </div>
    );
};

export default ScoreSquare;