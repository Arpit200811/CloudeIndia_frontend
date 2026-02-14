"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NextImage from "next/image";
import {
    ExternalLink, Cpu, Shield, ArrowUpRight, User,
    Zap, BarChart3, Database, Lock, Activity,
    Stethoscope, Heart, Settings, Waves, Layers
} from "lucide-react";
import { CASE_STUDIES } from "@/data/caseStudies";


// Clean Tech Light Themes with Unique Patterns
const THEMES = [
    {
        span: "lg:col-span-2",
        wrapper: "from-blue-50 to-white border-blue-100 hover:border-blue-300 shadow-[0_10px_40px_-10px_rgba(59,130,246,0.1)]",
        iconColor: "text-blue-600",
        accent: "bg-blue-600",
        accentBorder: "border-blue-200",
        pattern: "bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]",
        floatingIcons: [Zap, BarChart3, Database]
    },
    {
        span: "lg:col-span-1",
        wrapper: "from-emerald-50 to-white border-emerald-100 hover:border-emerald-300 shadow-[0_10px_40px_-10px_rgba(16,185,129,0.1)]",
        iconColor: "text-emerald-600",
        accent: "bg-emerald-600",
        accentBorder: "border-emerald-200",
        pattern: "bg-[linear-gradient(45deg,#10b981_1px,transparent_1px)] [background-size:20px_20px]",
        floatingIcons: [Shield, Lock, Cpu]
    },
    {
        span: "lg:col-span-1",
        wrapper: "from-purple-50 to-white border-purple-100 hover:border-purple-300 shadow-[0_10px_40px_-10px_rgba(168,85,247,0.1)]",
        iconColor: "text-purple-600",
        accent: "bg-purple-600",
        accentBorder: "border-purple-200",
        pattern: "bg-[repeating-linear-gradient(0deg,transparent,transparent_19px,#a855f7_20px)] [background-size:100%_20px] opacity-10",
        floatingIcons: [Activity, Stethoscope, Heart]
    },
    {
        span: "lg:col-span-2",
        wrapper: "from-orange-50 to-white border-orange-100 hover:border-orange-300 shadow-[0_10px_40px_-10px_rgba(249,115,22,0.1)]",
        iconColor: "text-orange-600",
        accent: "bg-orange-600",
        accentBorder: "border-orange-200",
        pattern: "bg-[radial-gradient(circle_at_center,#f97316_0.5px,transparent_1px)] [background-size:12px_12px]",
        floatingIcons: [Settings, Waves, Layers]
    },
    {
        span: "lg:col-span-1",
        wrapper: "from-cyan-50 to-white border-cyan-100 hover:border-cyan-300 shadow-[0_10px_40px_-10px_rgba(6,182,212,0.1)]",
        iconColor: "text-cyan-600",
        accent: "bg-cyan-600",
        accentBorder: "border-cyan-200",
        pattern: "bg-[linear-gradient(to_right,#06b6d4_1px,transparent_1px),linear-gradient(to_bottom,#06b6d4_1px,transparent_1px)] [background-size:24px_24px]",
        floatingIcons: [Cpu, Database, Layers]
    },
    {
        span: "lg:col-span-1",
        wrapper: "from-pink-50 to-white border-pink-100 hover:border-pink-300 shadow-[0_10px_40px_-10px_rgba(236,72,153,0.1)]",
        iconColor: "text-pink-600",
        accent: "bg-pink-600",
        accentBorder: "border-pink-200",
        pattern: "bg-[radial-gradient(#ec4899_1px,transparent_1px)] [background-size:20px_20px]",
        floatingIcons: [Heart, Activity, Zap]
    },
    {
        span: "lg:col-span-1",
        wrapper: "from-indigo-50 to-white border-indigo-100 hover:border-indigo-300 shadow-[0_10px_40px_-10px_rgba(99,102,241,0.1)]",
        iconColor: "text-indigo-600",
        accent: "bg-indigo-600",
        accentBorder: "border-indigo-200",
        pattern: "bg-[linear-gradient(to_right,#6366f1_1px,transparent_1px),linear-gradient(to_bottom,#6366f1_1px,transparent_1px)] [background-size:24px_24px]",
        floatingIcons: [Cpu, Shield, Zap]
    },
];

export default function CreativeCaseStudies() {
    return (
        <section id="gallery" className="py-12 bg-white relative overflow-hidden">
            {/* Base Background Texture */}
            <div className="absolute inset-0 bg-[#fafafa]"></div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-20">
                <div className="mb-12 text-center uppercase tracking-widest">
                    <span className="text-[10px] font-bold text-blue-600 border border-blue-200 px-3 py-1 rounded-full bg-white shadow-sm">Global Impact</span>
                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mt-4 mb-2 tracking-tighter">
                        Engineering <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">The Future</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CASE_STUDIES.map((project, idx) => {
                        const theme = THEMES[idx % THEMES.length];

                        return (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.8 }}
                                className={`${theme.span} group relative flex flex-col bg-white rounded-3xl border overflow-hidden hover:-translate-y-1 transition-all duration-500 ${theme.wrapper}`}
                            >
                                {/* Unique Background Pattern for Each Card */}
                                <div className={`absolute inset-0 ${theme.pattern} opacity-[0.03] pointer-events-none`}></div>

                                {/* Visual Header with HUD Animation */}
                                <div className="relative aspect-video overflow-hidden bg-slate-100 group-hover:shadow-inner transition-shadow">
                                    {/* Scanning Animation */}
                                    <div className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className={`w-full h-[2px] ${theme.accent} shadow-[0_0_15px_rgba(255,255,255,0.8)] absolute top-0 animate-[scan_2s_linear_infinite]`}></div>
                                    </div>

                                    {/* Tech HUD Overlay */}
                                    <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        {/* Corners */}
                                        <div className={`absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 ${theme.accentBorder} opacity-60`}></div>
                                        <div className={`absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 ${theme.accentBorder} opacity-60`}></div>
                                        <div className={`absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 ${theme.accentBorder} opacity-60`}></div>
                                        <div className={`absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 ${theme.accentBorder} opacity-60`}></div>

                                        {/* Center Reticle */}
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="size-24 rounded-full border border-white/20 scale-50 group-hover:scale-100 transition-transform duration-700 ease-out flex items-center justify-center">
                                                <div className="size-20 rounded-full border border-white/10 rotate-45"></div>
                                                <span className="text-white/60 text-[9px] font-black tracking-widest">VIEW</span>
                                            </div>
                                        </div>
                                    </div>

                                    <NextImage
                                        src={project.image}
                                        alt={project.title}
                                        width={600}
                                        height={400}
                                        quality={100}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover/card:scale-110"
                                    />
                                    {/* Subtle Gradient Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent opacity-80"></div>

                                    {/* Tech Badge */}
                                    <div className="absolute top-6 left-6 z-20">
                                        <div className="flex items-center gap-2">
                                            <div className={`size-2.5 rounded-full ${theme.accent} shadow-[0_0_10px] shadow-current animate-pulse`}></div>
                                            <span className="text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] bg-white/90 backdrop-blur border border-slate-200 px-3 py-1.5 rounded-lg shadow-sm">
                                                {project.industry}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Engineering Icons */}
                                    <div className="absolute top-6 right-6 flex flex-col gap-3 z-20">
                                        {theme.floatingIcons.map((Icon, i) => (
                                            <div key={i} className={`p-2 rounded-lg bg-white/90 border border-slate-200 backdrop-blur text-slate-400 group-hover:${theme.iconColor} transition-colors duration-500 shadow-sm`}>
                                                <Icon size={16} />
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6 lg:p-7 flex flex-col flex-1 gap-5 relative">
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className={`${theme.iconColor} font-mono text-[10px] font-bold uppercase`}>SYS.ID_00{project.id}</span>

                                            {/* Top Right Action - Restored & Animated */}
                                            <Link href={`/case-studies/${project.slug}`}>
                                                <div className={`flex items-center gap-2 px-3 py-1 rounded-full border border-slate-100 bg-slate-50 text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:bg-white hover:border-slate-300 hover:text-slate-900 transition-all cursor-pointer`}>
                                                    Explore
                                                    <ArrowUpRight size={14} />
                                                </div>
                                            </Link>
                                        </div>
                                        <h3 className="text-2xl font-black text-slate-900 leading-tight tracking-tight group-hover:text-blue-600 transition-colors">
                                            {project.title}
                                        </h3>

                                        {/* New Content Row: Client & Timeline */}
                                        <div className="flex items-center gap-6 pb-2 border-b border-dashed border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                            <div className="flex items-center gap-2">
                                                <User size={12} className={`${theme.iconColor}`} />
                                                {project.client}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <div className={`size-1.5 rounded-full ${theme.accent}`}></div>
                                                2025 - 2026
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {project.techStack.map((t) => (
                                                <span key={t} className="px-2.5 py-1 rounded-md bg-slate-50 text-slate-700 text-[10px] font-bold uppercase tracking-widest border border-slate-100 group-hover:border-slate-200 group-hover:bg-slate-100 transition-colors">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Info Box */}
                                    <div className="mt-auto pt-6 border-t border-slate-100">
                                        <p className="text-slate-600 text-sm leading-relaxed font-medium line-clamp-2">
                                            {project.summary}
                                        </p>

                                        {/* Dense Stats Grid */}
                                        <div className="grid grid-cols-3 gap-3 mt-4">
                                            {project.stats.map((stat, i) => (
                                                <div key={i} className="flex flex-col">
                                                    <span className="text-[8px] uppercase tracking-wider text-slate-400 font-bold">{stat.label}</span>
                                                    <span className="text-base font-black text-slate-900 leading-tight">{stat.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
            <style jsx global>{`
                @keyframes scan {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>
        </section>
    );
}
