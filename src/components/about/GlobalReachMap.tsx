"use client";

import { motion } from "framer-motion";
import { useState } from "react";

// Simplified relative coordinates for major regions (0-100 scale)
const LOCATIONS = [
    { id: "us-west", x: 18, y: 38, name: "Silicon Valley", role: "Innovation Hub", active: true },
    { id: "us-east", x: 28, y: 40, name: "New York", role: "Finance Ops", active: true },
    { id: "uk", x: 48, y: 30, name: "London", role: "Euro Base", active: true },
    { id: "india-north", x: 68, y: 45, name: "Lucknow", role: "HQ & R&D", active: true, main: true },
    { id: "india-south", x: 70, y: 52, name: "Bangalore", role: "Tech Center", active: true },
    { id: "singapore", x: 78, y: 58, name: "Singapore", role: "APAC Node", active: true },
    { id: "dubai", x: 60, y: 48, name: "Dubai", role: "MENA Region", active: true },
    { id: "aus", x: 85, y: 75, name: "Sydney", role: "Oceania", active: true },
];

export default function GlobalReachMap() {
    const [activeNode, setActiveNode] = useState<string | null>(null);

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-4"
                    >
                        Global Operations
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-black text-white mb-6"
                    >
                        Engineering Across <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-500">Borders</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-slate-400 max-w-2xl mx-auto text-lg"
                    >
                        Our decentralized collective spans key global technology corridors, ensuring 24/7 operational continuity and localized expertise.
                    </motion.p>
                </div>

                <div className="relative w-full aspect-video md:aspect-2/1 bg-slate-900/50 rounded-3xl border border-white/5 backdrop-blur-sm shadow-2xl p-4 md:p-8 group overflow-hidden">
                    {/* World Map Silhouette (Simplified Abstract Representation) */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none">
                        {/* This SVG is a simplified abstract world map for aesthetic purposes */}
                        <svg viewBox="0 0 100 50" fill="none" className="w-full h-full text-slate-500">
                            {/* Americas */}
                            <path d="M15 10 Q 25 10 28 20 Q 30 35 25 45 Q 15 40 12 25 Q 10 15 15 10 Z" fill="currentColor" />
                            {/* Europe/Africa */}
                            <path d="M45 15 Q 55 10 60 20 Q 58 40 50 45 Q 40 35 42 20 Z" fill="currentColor" />
                            {/* Asia */}
                            <path d="M65 10 Q 85 10 90 20 Q 85 35 75 35 Q 65 30 65 15 Z" fill="currentColor" />
                            {/* Australia */}
                            <path d="M80 38 Q 90 38 92 45 Q 85 48 80 45 Z" fill="currentColor" />
                        </svg>
                    </div>

                    {/* Grid Overlay on Map */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)]"></div>

                    {/* Nodes */}
                    {LOCATIONS.map((loc) => (
                        <div
                            key={loc.id}
                            className="absolute"
                            style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
                            onMouseEnter={() => setActiveNode(loc.id)}
                            onMouseLeave={() => setActiveNode(null)}
                        >
                            <div className="relative flex items-center justify-center cursor-pointer">
                                {/* Pulse */}
                                <div className={`absolute inset-0 rounded-full bg-primary/30 animate-ping ${loc.main ? 'size-6 md:size-8' : 'size-4 md:size-6'}`}></div>
                                {/* Core */}
                                <div className={`relative rounded-full border-2 border-white shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 ${activeNode === loc.id ? 'bg-white scale-125' : 'bg-primary'} ${loc.main ? 'size-3 md:size-4' : 'size-2 md:size-3'}`}></div>

                                {/* Connecting Lines (Decorative) */}
                                {loc.id === 'india-north' && (
                                    <svg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible w-[500px] h-[300px] pointer-events-none opacity-20 hidden md:block">
                                        <path d="M0 0 L-250 -50" stroke="url(#line-grad)" strokeWidth="1" fill="none" /> {/* To US East */}
                                        <path d="M0 0 L-300 -60" stroke="url(#line-grad)" strokeWidth="1" fill="none" /> {/* To US West */}
                                        <path d="M0 0 L-100 -80" stroke="url(#line-grad)" strokeWidth="1" fill="none" /> {/* To UK */}
                                        <path d="M0 0 L50 60" stroke="url(#line-grad)" strokeWidth="1" fill="none" /> {/* To Singapore */}
                                        <path d="M0 0 L-40 20" stroke="url(#line-grad)" strokeWidth="1" fill="none" /> {/* To Dubai */}
                                        <defs>
                                            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stopColor="#3b82f6" />
                                                <stop offset="100%" stopColor="transparent" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                )}

                                {/* Tooltip */}
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{
                                        opacity: activeNode === loc.id ? 1 : 0,
                                        y: activeNode === loc.id ? -10 : 10,
                                        scale: activeNode === loc.id ? 1 : 0.9
                                    }}
                                    className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 bg-slate-900/90 border border-white/10 backdrop-blur-xl p-3 rounded-xl shadow-xl w-32 text-center pointer-events-none z-20"
                                >
                                    <div className="text-xs font-black text-white uppercase tracking-wider mb-1">{loc.name}</div>
                                    <div className="text-[10px] text-primary font-bold">{loc.role}</div>
                                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 size-2 bg-slate-900 border-r border-b border-white/10"></div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
