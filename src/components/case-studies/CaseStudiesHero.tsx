"use client";

import { motion } from "framer-motion";
import { Award, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function CaseStudiesHero() {
    return (
        <section className="relative w-full min-h-[10vh] flex items-center justify-center overflow-hidden bg-slate-800">
            {/* Cinematic Background Elements - Dark Edition */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-radial-at-t from-primary/20 via-transparent to-transparent z-10"></div>
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
                        backgroundSize: '40px 40px'
                    }}
                ></div>

                {/* Pulsing Neural Nodes */}
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[120px]"
                ></motion.div>
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.05, 0.15, 0.05] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[140px]"
                ></motion.div>
            </div>

            <div className="relative z-20 max-w-[1280px] w-full px-6 lg:px-10 pt-16 pb-2 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col gap-6 max-w-4xl"
                >
                    <div className="flex items-center gap-2 self-center py-1.5 px-5 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-2 shadow-2xl">
                        <Award size={14} className="text-primary animate-pulse" />
                        <span>Engineering Excellence</span>
                    </div>

                    <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter">
                        Engineering <br />
                        <span className="text-primary italic drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]">Success Stories</span>
                    </h1>

                    <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-xl mx-auto mt-2">
                        Explore how we've powered industry leaders since 2022.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2 }}
                        className="mt-6"
                    >
                        <Link
                            href="#gallery"
                            className="group flex flex-col items-center gap-6"
                        >
                            <span className="text-[9px] font-black text-white/40 uppercase tracking-[0.5em] group-hover:text-primary transition-colors">Enter Portfolio</span>
                            <div className="size-10 rounded-full border border-white/10 flex items-center justify-center animate-bounce group-hover:border-primary/50 group-hover:bg-primary/10 transition-all">
                                <ChevronDown size={20} className="text-primary group-hover:scale-125 transition-transform" />
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom transition line - Glowing */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-10 bg-linear-to-b from-primary via-primary/50 to-transparent z-20 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
        </section>
    );
}
