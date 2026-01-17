"use client";
import React from "react";
import Image from "next/image";
import { FaRegFolder } from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import Link from "next/link";

type Props = {
    image: string;
    title: string;
};

export default function BlogCard({ image, title }: Props) {
    return (
        <div className="border border-gray-100 rounded-xl overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
            {/* Image */}
            <Image
                src={image}
                width={400}
                height={260}
                alt={title}
                className="w-full h-[240px] object-cover"
            />

            {/* Content */}
            <div className="p-6">
                {/* Meta */}
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        <FaRegFolder className="text-orange-600 w-5 h-5" />
                        <span className="text-sm font-medium text-gray-700">
                            Category
                        </span>
                    </div>

                    <div className="flex items-center gap-2">
                        <BiCalendar className="text-orange-600 w-5 h-5" />
                        <span className="text-sm font-medium text-gray-700">
                            October 27, 2025
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 leading-snug mb-6">
                    {title}
                </h3>

                {/* Read More */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 uppercase tracking-widest border-b-2 border-gray-900 pb-1 hover:text-orange-600 hover:border-orange-600 transition-all duration-300"
                >
                    Read More
                    <span className="text-lg">→</span>
                </Link>
            </div>
        </div>
    );
}
