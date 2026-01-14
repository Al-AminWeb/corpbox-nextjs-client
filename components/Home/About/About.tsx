import React from "react";
import Image from "next/image";

export default function About() {
    return (
        <div className="pt-16 pb-15 bg-white">
            <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative flex justify-center items-center">
                    <Image src="/images/a3.png" width={550} height={550} alt="img"
                           className="animate-spin [animation-duration: 20s]"/>
                    <Image
                        src="/images/a4.png"
                        alt="img"
                        width={350}
                        height={350}
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg md:ml-4 w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
                    />
                </div>
            </div>
        </div>
    );
}