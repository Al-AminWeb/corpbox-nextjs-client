"use client";
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <section className="relative py-24 bg-[#eef1f6] overflow-hidden">
            <div className="w-[92%] xl:w-[80%] mx-auto">

                {/* SECTION TITLE */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <p className="text-sm tracking-widest text-[#b69974] font-semibold uppercase">
                        Get in Touch
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-3">
                        Contact Us
                    </h2>
                </motion.div>

                {/* CONTENT */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 items-start">

                    {/* LEFT — FORM */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 bg-gradient-to-br from-[#0a1226] via-[#0e1a33] to-[#101d38] rounded-3xl p-10 md:p-14 shadow-2xl"
                    >
                        <h3 className="text-white text-2xl font-semibold mb-8">
                            Send Us a Message
                        </h3>

                        <form className="space-y-7">
                            {["Name*", "Email*", "Subject*"].map((label) => (
                                <input
                                    key={label}
                                    type={label.includes("Email") ? "email" : "text"}
                                    placeholder={label}
                                    className="w-full bg-transparent border border-white/30 rounded-full px-7 py-4 text-white placeholder-white/60 focus:outline-none focus:border-[#c7a97b] focus:ring-2 focus:ring-[#c7a97b]/30 transition"
                                />
                            ))}

                            <textarea
                                rows={5}
                                placeholder="Comments*"
                                className="w-full bg-transparent border border-white/30 rounded-2xl px-7 py-4 text-white placeholder-white/60 resize-none focus:outline-none focus:border-[#c7a97b] focus:ring-2 focus:ring-[#c7a97b]/30 transition"
                            />

                            <button
                                type="submit"
                                className="group relative w-full bg-gradient-to-r from-[#c7a97b] to-[#b69974] text-white font-semibold tracking-[0.25em] rounded-full py-4 overflow-hidden"
                            >
                                <span className="relative z-10">SUBMIT</span>
                                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                            </button>
                        </form>
                    </motion.div>

                    {/* RIGHT — INFO CARDS */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {[
                            { title: "Call Now", value: "+555 6767 6734" },
                            { title: "E-mail Now", value: "example@gmail.com" },
                            { title: "Address", value: "Dhaka, Bangladesh" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.03 }}
                                className="group bg-gradient-to-br from-[#1e3fc4] to-[#1634a1] rounded-2xl p-6 flex items-center gap-6 shadow-lg"
                            >
                                <div className="w-14 h-14 rounded-full bg-lime-300 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                                    <HiArrowRight className="text-2xl text-[#1e3fc4]" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/80 mb-1">
                                        {item.title}
                                    </p>
                                    <h4 className="text-lg font-semibold text-white">
                                        {item.value}
                                    </h4>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
