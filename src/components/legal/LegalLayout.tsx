"use client";

import { motion } from "framer-motion";
import { ShieldCheck, FileText, Lock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

interface LegalLayoutProps {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    lastUpdated: string;
    icon: React.ElementType;
}

export default function LegalLayout({ children, title, subtitle, lastUpdated, icon: Icon }: LegalLayoutProps) {
    return (
        <main className="relative min-h-screen w-full bg-white overflow-hidden pt-32">
            {/* PRISMATIC BACKGROUND SYSTEM */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-50/50 rounded-full blur-[120px] animate-pulse delay-700"></div>
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-cyan-50/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>

                {/* Thin Architectural Grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                        backgroundSize: '100px 100px'
                    }}
                ></div>
            </div>

            <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
                {/* TOP HEADER SECTION */}
                <div className="flex flex-col items-center text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8 p-6 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] border border-white shadow-2xl shadow-blue-100/50 relative overflow-hidden group"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <Icon size={48} className="text-primary relative z-10" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter mb-6"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-500 font-light max-w-2xl leading-relaxed"
                    >
                        {subtitle}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 bg-slate-50/50 px-6 py-2 rounded-full border border-slate-100"
                    >
                        <span>Last Architecture Review:</span>
                        <span className="text-primary">{lastUpdated}</span>
                    </motion.div>
                </div>

                {/* CONTENT AREA */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Sidebar TOC - Desktop */}
                    <aside className="hidden lg:block lg:col-span-3 sticky top-32">
                        <div className="p-8 bg-white/40 backdrop-blur-xl rounded-[2.5rem] border border-white shadow-xl shadow-slate-100/50">
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 px-2">Navigation</h3>
                            <nav className="flex flex-col gap-2">
                                <Link href="/privacy" className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${title.includes("Privacy") ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-500 hover:bg-white hover:text-primary"}`}>
                                    <ShieldCheck size={18} />
                                    <span className="text-xs font-bold uppercase tracking-widest">Privacy</span>
                                </Link>
                                <Link href="/terms" className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${title.includes("Terms") ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-500 hover:bg-white hover:text-primary"}`}>
                                    <FileText size={18} />
                                    <span className="text-xs font-bold uppercase tracking-widest">Terms</span>
                                </Link>
                                <Link href="/security" className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${title.includes("Security") ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-slate-500 hover:bg-white hover:text-primary"}`}>
                                    <Lock size={18} />
                                    <span className="text-xs font-bold uppercase tracking-widest">Security</span>
                                </Link>
                            </nav>

                            <div className="mt-12 pt-8 border-t border-slate-100 px-2">
                                <Link href="/" className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-primary transition-colors">
                                    <ArrowLeft size={14} />
                                    <span>Back to Command</span>
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Main Content Sections */}
                    <div className="lg:col-span-9 flex flex-col gap-12">
                        {children}
                    </div>
                </div>
            </div>

            {/* Bottom Glow Decoration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150vw] h-[50vh] bg-[radial-gradient(ellipse_at_top,rgba(19,127,236,0.05),transparent_70%)] pointer-events-none"></div>
        </main>
    );
}
