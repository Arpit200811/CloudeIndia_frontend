"use client";

import { motion } from "framer-motion";
import { ArrowDown, Rocket } from "lucide-react";
import Link from "next/link";

export default function SolutionsHero() {
    return (
        <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#0f172a]">
            {/* Background Pattern/Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-b from-primary/10 via-transparent to-[#0f172a] z-10"></div>
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}
                ></div>
                {/* Animated Glows */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2 translate-x-1/2 animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-20 max-w-[1280px] w-full px-6 lg:px-10 pt-32 pb-24 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6 max-w-4xl"
                >
                    <div className="flex items-center gap-2 self-center py-1 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-widest mb-2">
                        <Rocket size={14} />
                        <span>Architecting Success</span>
                    </div>
                    <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight">
                        Enterprise <span className="text-primary italic">Platforms</span> & Solutions
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                        We don't just build software; we engineer specialized platforms that solve real-world industry challenges. Explore our mission-critical solutions for Healthcare, Education, and Enterprises.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-12"
                    >
                        <Link
                            href="#industry-solutions"
                            className="flex flex-col items-center gap-4 text-gray-400 hover:text-white transition-colors group"
                        >
                            <span className="text-sm font-semibold uppercase tracking-[0.2em]">Explore Solutions</span>
                            <div className="size-10 rounded-full border border-white/10 flex items-center justify-center animate-bounce group-hover:border-primary/50 transition-colors">
                                <ArrowDown size={20} className="text-primary" />
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
