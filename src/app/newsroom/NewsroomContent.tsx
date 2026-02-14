"use client";

import Link from "next/link";
import NextImage from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Calendar, Share2, Sparkles, ArrowUpRight } from "lucide-react";

interface Article {
    id: number;
    title: string;
    date: string;
    category: string;
    excerpt: string;
    image: string;
    readTime: string;
}

const articles: Article[] = [
    {
        id: 1,
        title: "The Future of GenAI in Enterprise Logistics",
        date: "JAN 28, 2026",
        category: "Artificial Intelligence",
        excerpt: "Exploring how recursive neural networks are optimizing last-mile delivery protocols in global supply chains.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
        readTime: "5 min read"
    },
    {
        id: 2,
        title: "Zero-Trust Architecture: Beyond the Hype",
        date: "JAN 25, 2026",
        category: "Security",
        excerpt: "CloudeIndia's technical breakdown of implementing zero-trust mandates in banking core systems.",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        readTime: "8 min read"
    },
    {
        id: 3,
        title: "CloudeIndia Expands to Singapore Hub",
        date: "JAN 20, 2026",
        category: "Company News",
        excerpt: "Establishing a new engineering collective in the heart of the Pacific tech corridor.",
        image: "https://images.unsplash.com/photo-1525625239514-46d9bba0c63f?auto=format&fit=crop&q=80&w=800",
        readTime: "3 min read"
    }
];

export default function NewsroomContent() {
    return (
        <div className="flex flex-col min-h-screen w-full bg-white font-display overflow-x-hidden pt-32">
            <Navbar />

            <main className="flex-1 relative">
                {/* PRISMATIC DECORATIONS */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <div className="absolute top-[10%] right-[-10%] w-[60%] h-[40%] bg-blue-100/30 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[50%] bg-indigo-100/20 rounded-full blur-[100px]"></div>
                </div>

                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 pb-32">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10">
                        <div className="max-w-2xl">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex items-center gap-3 py-2 px-6 rounded-full bg-primary/5 border border-primary/10 text-primary w-fit mb-8"
                            >
                                <Sparkles size={16} />
                                <span className="text-[10px] font-black uppercase tracking-[0.5em]">Engineering Insights</span>
                            </motion.div>
                            <h1 className="text-6xl md:text-8xl font-black text-slate-950 leading-[0.85] tracking-tighter">
                                News <br />
                                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-600 italic">Room.</span>
                            </h1>
                        </div>
                        <p className="text-slate-500 text-xl font-medium max-w-sm border-l-4 border-primary pl-8 py-2">
                            The latest signals from our global engineering collective and the evolution of tech.
                        </p>
                    </div>

                    {/* Article Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        {articles.map((article, idx) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`group relative bg-white/40 backdrop-blur-3xl rounded-[3rem] border border-white overflow-hidden hover:shadow-2xl transition-all duration-700 ${idx === 0 ? 'lg:col-span-8' : 'lg:col-span-4'}`}
                            >
                                <div className="relative aspect-video lg:aspect-auto h-full min-h-[400px] flex flex-col">
                                    <div className="absolute inset-0 overflow-hidden">
                                        <NextImage
                                            src={article.image}
                                            alt={article.title}
                                            width={600}
                                            height={400}
                                            quality={100}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-linear-to-t from-white via-white/80 to-transparent"></div>
                                    </div>

                                    <div className="relative z-10 p-10 mt-auto flex flex-col h-full justify-end">
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="px-4 py-1.5 rounded-full bg-slate-950 text-white text-[9px] font-black uppercase tracking-widest">{article.category}</span>
                                            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                                                <Calendar size={14} />
                                                <span>{article.date}</span>
                                            </div>
                                        </div>

                                        <h2 className={`font-black text-slate-950 mb-6 leading-tight group-hover:text-primary transition-colors ${idx === 0 ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>
                                            {article.title}
                                        </h2>

                                        <p className="text-slate-500 font-medium text-lg leading-relaxed mb-8 max-w-xl">
                                            {article.excerpt}
                                        </p>

                                        <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{article.readTime}</span>
                                            <div className="flex gap-4">
                                                <button className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-950 hover:text-white transition-all">
                                                    <Share2 size={18} />
                                                </button>
                                                <button className="size-12 rounded-2xl bg-primary flex items-center justify-center text-white hover:bg-slate-950 transition-all shadow-lg shadow-primary/20">
                                                    <ArrowUpRight size={24} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
