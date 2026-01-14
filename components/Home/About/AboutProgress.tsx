import React from "react";
import { FaBullseye } from "react-icons/fa";
import { HiOutlineChartBar } from "react-icons/hi2";

export default function AboutProgress() {
    const data = [
        {
            id: 1,
            title: "Project Analysis",
            percent: "95",
            icon: <FaBullseye className="bg-[#b59b76]  text-3xl" />,
        },
        {
            id: 2,
            title: "Design & Development",
            percent: "90",
            icon: <HiOutlineChartBar className="bg-[#b59b76] text-3xl" />,
        },
    ];

    return (
        <div className="space-y-8 py-6 md:py-10">
            {data.map((item) => (
                <div
                    key={item.id}
                    className="bg-white p-5 rounded-md flex gap-4 items-center shadow-sm"
                >
                    {/* Icon */}
                    <div className="text-2xl text-gray-700">{item.icon}</div>

                    {/* Text + Progress */}
                    <div className="flex-1">
                        <div className="flex justify-between items-center mb-2">
                            <h3 className="font-semibold text-gray-800 text-lg">
                                {item.title}
                            </h3>
                            <p className="font-semibold text-gray-800">{item.percent}%</p>
                        </div>
                        <div className="w-full h-2 bg-gray-300 rounded-full overflow-hidden">
                            <div
                                className="h-2 bg-blue-500 rounded-full transition-all duration-300 ease-in-out"
                                style={{ width: `${item.percent}%` }}
                            ></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}