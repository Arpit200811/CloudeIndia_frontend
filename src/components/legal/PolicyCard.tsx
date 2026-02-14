"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import React from "react";

interface PolicyCardProps {
    id: string;
    icon: LucideIcon;
    title: string;
    summary: string;
    content: React.ReactNode;
    index: number;
}

export default function PolicyCard({ id, icon: Icon, title, summary, content, index }: PolicyCardProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group relative bg-white/40 backdrop-blur-3xl rounded-[3rem] p-10 lg:p-14 border border-white shadow-2xl shadow-slate-200/50 hover:shadow-primary/5 transition-all"
        >
            {/* Hover Decorative Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="flex flex-col gap-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-center gap-6 lg:gap-10 pb-8 border-b border-slate-100/50">
                    <div className="size-16 rounded-3xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                        <Icon size={28} />
                    </div>

                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2 uppercase tracking-widest">{title}</h2>
                        <div className="flex items-center gap-3">
                            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Executive Summary:</span>
                            <p className="text-xs text-slate-500 font-medium italic">{summary}</p>
                        </div>
                    </div>

                    <div className="hidden md:block text-[4rem] font-black text-slate-50/50 select-none">
                        0{index + 1}
                    </div>
                </div>

                {/* Main Content Body */}
                <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed font-medium">
                    {content}
                </div>
            </div>

            {/* Subtle Bottom Accent */}
            <div className="absolute bottom-0 left-10 right-10 h-1 bg-linear-to-r from-transparent via-primary/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
        </motion.section>
    );
}
