"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, ArrowDown, Target, Zap, Circle } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function ContactHero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 30, stiffness: 200 };
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

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    return (
        <section
            onMouseMove={handleMouseMove}
            className="relative w-full min-h-[20vh] flex items-center justify-center overflow-hidden bg-slate-950 pt-20 pb-8"
        >
            {/* High-End Cyber Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Holographic 3D Grid */}
                <motion.div
                    style={{ rotateX, rotateY, perspective: 1200 }}
                    className="absolute inset-0 flex items-center justify-center opacity-20"
                >
                    <div
                        className="w-[180vw] h-[180vh] absolute -top-[40%] -left-[40%]"
                        style={{
                            backgroundImage: `
                                linear-gradient(to right, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
                            `,
                            backgroundSize: '100px 100px',
                            transform: 'rotateX(75deg) translateY(-200px)',
                            maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'
                        }}
                    ></div>
                </motion.div>

                {/* Orbital HUD Rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                    {[1, 2, 3].map((i) => (
                        <motion.div
                            key={i}
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20 + i * 10, repeat: Infinity, ease: "linear" }}
                            className="absolute rounded-full border border-primary/10"
                            style={{
                                width: `${400 + i * 200}px`,
                                height: `${400 + i * 200}px`,
                                borderStyle: i === 2 ? 'dashed' : 'solid'
                            }}
                        />
                    ))}
                </div>

                {/* Floating Energy Spheres */}
                {isMounted && [...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                            opacity: [0, 0.3, 0],
                            scale: [0, 2, 0],
                            x: Math.sin(i) * 600,
                            y: Math.cos(i) * 400
                        }}
                        transition={{
                            duration: 6 + Math.random() * 6,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                            ease: "easeInOut"
                        }}
                        className="absolute top-1/2 left-1/2 w-4 h-4 bg-primary/40 rounded-full blur-[40px]"
                    ></motion.div>
                ))}

                {/* Scanline Effect */}
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent h-20 w-full animate-scan" style={{ top: '-10%' }}></div>

                {/* HUD Markers */}
                <div className="absolute top-32 left-10 hidden lg:block opacity-40">
                    <div className="flex flex-col gap-2 font-mono text-[10px] text-primary tracking-widest uppercase">
                        <div className="flex items-center gap-2">
                            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                            <span>System Status: Optimal</span>
                        </div>
                        <div className="p-2 border-l-2 border-primary bg-primary/5">
                            COORD: 12.9716° N, 77.5946° E
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-40 right-10 hidden lg:block opacity-40">
                    <div className="flex flex-col gap-2 font-mono text-[10px] text-primary tracking-widest uppercase text-right">
                        <div className="flex items-center gap-2 justify-end">
                            <span>Uplink Frequency: 5.4GHz</span>
                            <Zap size={10} />
                        </div>
                        <div className="p-2 border-r-2 border-primary bg-primary/5">
                            SIG_PROTOCOL: ZERO_TRUST_V2
                        </div>
                    </div>
                </div>

                {/* Radial Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_60%)]"></div>

                {/* Bottom Fade to White Transition Point */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-white to-transparent opacity-0 group-hover:opacity-10 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-linear-to-t from-slate-950 to-transparent"></div>
            </div>

            <div className="relative z-20 max-w-[1400px] w-full px-6 lg:px-12 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-8 w-full"
                >
                    {/* Unique Badge */}
                    <div className="flex items-center gap-3 self-center py-2 px-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(59,130,246,0.3)] text-primary text-[10px] font-black uppercase tracking-[0.4em] mb-4">
                        <Target size={16} className="animate-pulse" />
                        <span>Establish Command Connection</span>
                    </div>

                    <h1 className="text-white text-5xl md:text-7xl lg:text-[6.5rem] font-black leading-[0.95] tracking-tight max-w-[900px] mx-auto relative z-30">
                        Design Your <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-primary to-blue-600 drop-shadow-[0_0_50px_rgba(59,130,246,0.5)]">Digital Empire.</span>
                    </h1>

                    <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto mt-8 leading-relaxed">
                        We don&apos;t just build interfaces. We architect the digital backbone of the world&apos;s most innovative enterprises.
                    </p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-8 flex flex-col items-center gap-4"
                    >
                        {/* HUD Scanning Line Decorative */}
                        <div className="flex items-center gap-4 overflow-hidden py-2">
                            <motion.div
                                animate={{ x: [-100, 100] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="w-20 h-0.5 bg-primary blur-sm"
                            />
                            <span className="text-[10px] font-mono text-primary/60 tracking-[0.5em] uppercase">Ready for transmission</span>
                            <motion.div
                                animate={{ x: [-100, 100] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: 1.5 }}
                                className="w-20 h-0.5 bg-primary blur-sm"
                            />
                        </div>

                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="text-primary mt-8 cursor-pointer hover:scale-110 transition-transform"
                            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                        >
                            <div className="relative">
                                <ArrowDown size={32} strokeWidth={1.5} />
                                <motion.div
                                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute inset-0 -m-2 rounded-full border border-primary/50"
                                />
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
