"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NextImage from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
    return (
        <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#0f172a]">
            {/* Background Pattern/Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-b from-primary/20 via-transparent to-[#0f172a] z-10"></div>
                <NextImage
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsBECAyAUrlbkNhB7An2u6aCAQt_PyqVc2WUoumvyyOUa-qmm7eJ0wDvIiRXSqTiqb8_4zOma5mXhob1iTeHyw3yGo2nFgFQMqqs2Og6pSg1X_gkxPgklRykPYw_523XwPftuNiFUQkw1qqLmUJDrKf-tgEDPIu5s3IMyWl2z5czKLVgXQuJxnxUAZONCgg0xJDxDdMHvRzGsApsYYtt_KdBzkLP643lK6ueoI7yQJlCcmLipI40lxYSzY-JDzJvUcZd-sIZNrkJ-b"
                    alt="About Story"
                    fill
                    priority
                    quality={90}
                    className="object-cover object-[center_34%] opacity-30 grayscale"
                />
                {/* Animated Particles/Shapes placeholder */}
                <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/30 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
            </div>

            <div className="relative z-20 max-w-[1280px] w-full px-6 lg:px-10 pt-32 pb-24 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-4 max-w-4xl"
                >
                    <span className="inline-block py-0.5 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest self-center mb-1">
                        Our Origin Story
                    </span>
                    <h1 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
                        Defining the Future of <span className="text-primary italic">Engineering</span>
                    </h1>
                    <p className="text-gray-300 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto">
                        Since 2022, CloudeIndia has engineered digital resilience for enterprises with absolute speed and scalability.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mt-6">
                        <Link
                            href="/careers"
                            className="flex items-center gap-2 h-11 px-6 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all shadow-lg shadow-primary/20 group text-sm"
                        >
                            Join Our Journey
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#story"
                            className="flex items-center justify-center h-11 px-6 bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 rounded-lg backdrop-blur-sm transition-all text-sm"
                        >
                            Read Our Story
                        </Link>
                    </div>
                </motion.div>
            </div>

        </section>
    );
}
