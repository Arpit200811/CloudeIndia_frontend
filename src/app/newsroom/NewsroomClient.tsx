"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NextImage from "next/image";
import {
    Calendar, ArrowRight, Clock,
    Zap, Terminal
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ARTICLES } from "@/data/articles";


const CATEGORIES = [
    { name: 'All', color: 'bg-slate-900 text-white' },
    { name: 'AI Research', color: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
    { name: 'Cloud Eng', color: 'bg-blue-100 text-blue-700 border-blue-200' },
    { name: 'Cybersec', color: 'bg-red-100 text-red-700 border-red-200' },
    { name: 'Industry', color: 'bg-purple-100 text-purple-700 border-purple-200' },
];


import { useState } from "react";
import { Search, XCircle } from "lucide-react";

export default function NewsroomClient() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Filter Logic
    const filteredArticles = ARTICLES.filter(article => {
        const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <main className="bg-white min-h-screen font-sans">
            <Navbar />

            {/* Header / Command Center */}
            <section className="pt-32 pb-16 px-6 lg:px-10 relative overflow-hidden bg-slate-50 border-b border-slate-200">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-size-[40px_40px] opacity-40"></div>

                <div className="max-w-[1440px] mx-auto relative z-10">
                    <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-2 mb-4"
                            >
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
                                </span>
                                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest">Live Intelligence Feed</span>
                            </motion.div>

                            <h1 className="text-5xl lg:text-8xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                                INTELLIGENCE <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">GRID</span>
                            </h1>
                        </div>

                        <div className="lg:max-w-md w-full">
                            <p className="text-slate-500 font-medium leading-relaxed mb-6">
                                Analyzing the latest vectors in AI, Cloud Engineering, and Cyber-Defense. Insights from the frontline of innovation.
                            </p>

                            {/* Search & Filter Controls */}
                            <div className="flex flex-col gap-4">
                                {/* Search Bar */}
                                <div className="relative group">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors" size={18} />
                                    <input
                                        type="text"
                                        placeholder="Search intelligence grid..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-12 pr-4 text-sm font-bold text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all shadow-sm"
                                    />
                                    {searchQuery && (
                                        <button
                                            onClick={() => setSearchQuery("")}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                        >
                                            <XCircle size={18} />
                                        </button>
                                    )}
                                </div>

                                {/* Category Buttons */}
                                <div className="flex flex-wrap gap-2">
                                    {CATEGORIES.map(cat => (
                                        <button
                                            key={cat.name}
                                            onClick={() => setSelectedCategory(cat.name)}
                                            className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest border transition-all hover:scale-105 active:scale-95 ${selectedCategory === cat.name ? cat.color + ' shadow-md' : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'}`}
                                        >
                                            {cat.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Integrated Bento Grid */}
            <section className="py-20 px-6 lg:px-10 bg-white min-h-[500px]">
                <div className="max-w-[1440px] mx-auto">
                    {filteredArticles.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[minmax(300px,auto)] gap-6">

                            {/* Render Filtered Articles */}
                            {filteredArticles.map((article) => (
                                renderArticleCard(article)
                            ))}

                        </div>
                    ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-center">
                            <div className="size-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 border border-slate-100">
                                <Search size={40} className="text-slate-300" />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-2">No Signals Detected</h3>
                            <p className="text-slate-500 max-w-md mb-8">
                                We couldn't find any articles matching "{searchQuery}" in the current intelligence stream.
                            </p>
                            <button
                                onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
                                className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-all"
                            >
                                Clear Filters
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}

// Helper to render article cards with new 4-column span logic
const renderArticleCard = (article: any) => {
    // Map existing 3-col logic to 4-col logic
    let spanClass = "lg:col-span-1 lg:row-span-1";
    if (article.id === '1') spanClass = "lg:col-span-2 lg:row-span-2"; // Big Feature
    if (article.id === '5') spanClass = "lg:col-span-1 lg:row-span-1"; // Standard Card (was wide)

    // Theme colors
    const accentColor =
        article.theme === 'emerald' ? 'bg-emerald-500' :
            article.theme === 'red' ? 'bg-red-500' :
                article.theme === 'purple' ? 'bg-purple-500' :
                    'bg-blue-600';

    const borderColor =
        article.theme === 'emerald' ? 'border-emerald-200 group-hover:border-emerald-400' :
            article.theme === 'red' ? 'border-red-200 group-hover:border-red-400' :
                article.theme === 'purple' ? 'border-purple-200 group-hover:border-purple-400' :
                    'border-blue-200 group-hover:border-blue-400';

    return (
        <motion.div
            key={article.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`${spanClass} group relative bg-white rounded-[2.5rem] border overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col ${borderColor}`}
        >
            <Link href={`/newsroom/${article.slug}`} className="absolute inset-0 z-30 focus:outline-hidden">
                <span className="sr-only">Read {article.title}</span>
            </Link>

            {/* HUD Elements */}
            <div className="absolute top-6 left-6 z-20 flex gap-2 pointer-events-none">
                <div className={`p-2 rounded-lg bg-white/90 backdrop-blur border border-slate-200 shadow-sm flex items-center gap-2`}>
                    <span className={`size-2 rounded-full ${accentColor} animate-pulse`}></span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-800">{article.category}</span>
                </div>
            </div>

            {/* Image Section with HUD Animation */}
            <div className="relative h-64 lg:h-full lg:min-h-[300px] overflow-hidden bg-slate-100 p-2 flex-1">
                <div className="absolute inset-0 z-10 pointer-events-none">
                    {/* Corner Brackets */}
                    <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-white/50 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-white/50 rounded-tr-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-white/50 rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-white/50 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="w-full h-full rounded-4xl overflow-hidden relative">
                    <NextImage
                        src={article.image}
                        alt={article.title}
                        width={600}
                        height={400}
                        quality={100}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent"></div>

                    {/* Content Overlay (Bottom) */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 pt-32 bg-linear-to-t from-slate-900 to-transparent">
                        <div className="flex items-center gap-3 text-white/70 text-xs font-mono mb-3">
                            <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                            <span>•</span>
                            <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                        </div>
                        <h2 className="text-2xl font-black text-white leading-tight group-hover:text-blue-300 transition-colors mb-2">
                            {article.title}
                        </h2>
                        {spanClass.includes('col-span-2') && (
                            <p className="text-white/80 text-sm font-medium line-clamp-2">{article.summary}</p>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
