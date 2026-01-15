import React from "react";

type Props = {
    number: string;   // changed from number to string
    title?: string;
    isExtraClass?: boolean;
};

export default function WorkPageCard({ number, title, isExtraClass }: Props) {
    return (
        <div
            className={`flex items-center gap-3 ${
                isExtraClass ? "lg:border-r-2 lg:border-gray-300" : ""
            }`}
        >
            <div className="text-[40px] md:text-[60px] lg:text-[80px] font-bold mr-5 leading-none text-amber-600">
                {number}
            </div>
            <div>
                <h1 className="text-[#252525] font-semibold text-xl">{title}</h1>
                <p className="lg:w-[90%] mt-3 leading-8 font-medium text-gray-700">
                    It is a long established fact that a reader will be distracted by
                    readable content of a page when looking at its layout.
                </p>
            </div>
        </div>
    );
}