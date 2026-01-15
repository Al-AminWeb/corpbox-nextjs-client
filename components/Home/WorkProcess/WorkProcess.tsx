import React from "react";
import WorkPageCard from "./WorkProcessCard";

export default function WorkProcess() {
    return (
        <div className="pt-24 pb-24 bg-white">
            <h1 className="text-[#b69974] text-lg text-center font-medium tracking-widest">Work Process</h1>
            <h1 className="text-3xl md:text-5xl mt-4 font-bold text-center">Transforming Ideas into <br/> digital
                reality </h1>

            <div className="w-[80%] mt-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-14">
                <WorkPageCard number="01" title="creative craze" isExtraClass/>
                <WorkPageCard number="02" title="Brand Boost"/>
                <WorkPageCard number="03" title="Media Mind" isExtraClass/>
                <WorkPageCard number="04" title="Media Minds"/>

            </div>
        </div>
    );
}