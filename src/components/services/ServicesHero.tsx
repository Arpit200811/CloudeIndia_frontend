"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ServicesHero() {
    return (
        <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden bg-[#0f172a]">
            {/* Background Image with Gradient Overlay */}
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
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-20 max-w-[1280px] w-full px-6 lg:px-10 pt-32 pb-24 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex flex-col gap-6 max-w-4xl"
                >
                    <div className="flex items-center gap-2 self-center py-1 px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-primary text-xs font-bold uppercase tracking-widest mb-2">
                        <Sparkles size={14} />
                        <span>Our Specialized Expertise</span>
                    </div>
                    <h1 className="text-white text-5xl md:text-7xl font-black leading-tight tracking-tight">
                        Enterprise Software <span className="text-primary italic">Engineering</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                        We engineer mission-critical software architectures for industry-leading institutions and enterprises, bridging the gap between complexity and reliability.
                    </p>

                    <div className="flex flex-wrap justify-center gap-6 mt-8">
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 h-14 px-8 bg-primary hover:bg-primary/90 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary/20 group"
                        >
                            Talk to an Expert
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="#services"
                            className="flex items-center justify-center h-14 px-8 bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 rounded-xl backdrop-blur-sm transition-all"
                        >
                            Explore Our Capabilities
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
