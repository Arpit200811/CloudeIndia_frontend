"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { Users, Sparkles, Rocket, ChevronDown } from "lucide-react";
import React from "react";

const MotionLink = motion(Link);

export default function CareersHero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    const rotateX = useTransform(springY, [-500, 500], ["15deg", "-15deg"]);
    const rotateY = useTransform(springX, [-500, 500], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const moveX = clientX - (typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
        const moveY = clientY - (typeof window !== 'undefined' ? window.innerHeight / 2 : 0);
        mouseX.set(moveX);
        mouseY.set(moveY);
    };

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-800 pt-28 pb-16 md:pt-44 md:pb-32"
        >
            {/* 3D Cinematic Background Layers */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                {/* 3D Perspective Grid - Interactive */}
                <motion.div
                    style={{ rotateX, rotateY, perspective: 1000 }}
                    className="absolute inset-0 flex items-center justify-center opacity-15"
                >
                    <div
                        className="w-[200vw] h-[200vh] absolute -top-[50%] -left-[50%]"
                        style={{
                            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
                            backgroundSize: '100px 100px',
                            transform: 'rotateX(75deg) translateY(-200px)',
                            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
                        }}
                    ></div>
                </motion.div>

                {/* Floating 3D Holographic Shards */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            y: [0, (i % 2 === 0 ? 30 : -30), 0],
                            rotate: [i * 60, i * 60 + 20, i * 60],
                            opacity: [0.1, 0.2, 0.1]
                        }}
                        transition={{
                            duration: 8 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            top: `${15 + (i * 12)}%`,
                            left: `${5 + (i * 15)}%`,
                        }}
                        className="absolute w-32 h-64 bg-primary/20 backdrop-blur-3xl border border-white/5 rounded-full blur-2xl"
                    ></motion.div>
                ))}

                {/* Ambient Radial Glows */}
                <div className="absolute inset-0 bg-radial-at-t from-primary/30 via-transparent to-transparent"></div>

                {/* Pulsing Energy Nodes */}
                {[...Array(3)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.1, 0.2, 0.1],
                            x: [0, (i === 1 ? -40 : 40), 0]
                        }}
                        transition={{
                            duration: 12 + i * 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className={`absolute w-[600px] h-[600px] rounded-full blur-[150px] ${i === 0 ? 'bg-primary/40 top-1/4 left-1/4' :
                            i === 1 ? 'bg-blue-600/20 bottom-1/4 right-1/3' :
                                'bg-indigo-600/20 top-1/2 left-1/2'
                            }`}
                    ></motion.div>
                ))}
            </div>

            <div className="relative z-10 max-w-[1280px] w-full px-6 lg:px-10 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="flex flex-col items-center"
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="flex items-center gap-3 self-center py-2 px-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm text-primary text-[10px] font-black uppercase tracking-[0.5em] mb-4 cursor-default"
                    >
                        <Sparkles size={16} className="animate-pulse" />
                        <span>Architect the Future</span>
                    </motion.div>

                    <h1 className="text-white text-5xl md:text-8xl font-black leading-[0.9] tracking-tighter">
                        Scale. Engineer. <br />
                        <motion.span
                            animate={{ opacity: [1, 0.7, 1] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="text-primary italic"
                        >Excel.</motion.span>
                    </h1>

                    <p className="text-slate-400 text-lg md:text-2xl font-medium max-w-2xl mx-auto mt-6 leading-relaxed">
                        Join an elite engineering collective dedicated to architecting high-availability systems for global enterprises and institutions.
                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8">
                        <MotionLink
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            href="#jobs"
                            className="px-12 py-5 bg-primary text-white rounded-2xl font-black uppercase tracking-widest transition-all flex items-center gap-4 group"
                        >
                            <span>Explore Roles</span>
                            <Users size={20} className="group-hover:translate-x-1 transition-transform" />
                        </MotionLink>
                        <MotionLink
                            whileHover={{ scale: 1.05, y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            href="#launchpad"
                            className="px-12 py-5 bg-white/5 text-white border border-white/10 backdrop-blur-2xl rounded-2xl font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-4 group"
                        >
                            <span>The Academy</span>
                            <Rocket size={20} className="group-hover:-translate-y-1 transition-transform" />
                        </MotionLink>
                    </div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-20 text-white"
                >
                    <ChevronDown size={40} strokeWidth={1} />
                </motion.div>
            </div>
        </section>
    );
}
