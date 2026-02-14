"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import NextImage from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";

const projects = [
    {
        title: "Fintech Core Migration",
        industry: "Banking / Fintech",
        tech: "AWS, Node.js, Docker",
        problem: "Legacy monolithic architecture causing critical downtime during peak institutional transactions.",
        solution: "Re-engineered to a resilient microservices architecture on AWS with elastic auto-scaling.",
        result: "Restored 100% throughput with 99.99% uptime during sub-second peak load bursts.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4hBIgZzjOS5vKikj8KD13fUyogPbnbZp_xtBlsu1XUZxp4bmC7DTVWXbKIt1Y3ebbbW6VA8b59zmDJHPcP7RABNeKXovfOXTySoAVOOav97crQ64R31rEiFGuYbF9Q7mbOLNz9bjVmg6arTWEJosQ_Y7psAoWtJPhrp9gtKnCe9BnADI9vFLnDeJ5nmCgFVPja7tnYqU8lceD0LwAVXeOxXb7sd4RRwFmjhlYcIjzgXsl2uswoLwjB1S9Iugc3cOmJ_aljD3bCOUA",
    },
    {
        title: "AI Supply Chain Optimizer",
        industry: "Retail / Logistics",
        tech: "Python, TensorFlow, Azure",
        problem: "Inefficient inventory management leading to stockouts.",
        solution: "Built an AI demand forecasting model integrated with ERP.",
        result: "Optimized inventory accuracy to 98%, saving $2.4M in annual lost-capital.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Enterprise Telehealth Framework",
        industry: "Healthcare",
        tech: "React Native, WebRTC, HIPAA Cloud",
        problem: "Urgent requirements for secure, scalable remote patient monitoring and consultation.",
        solution: "Engineered an end-to-end encrypted, HIPAA-compliant video consultation ecosystem.",
        result: "Enabled 50k+ secure consultations with zero HIPAA compliance breaches reported.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6a9jV2Qct_6S8xDtsGhcetWqT-hg9JPI270Ribr0RN-KVLLNpKovZqfKOK3nNSHk-_1wSAoPBY5yhFBcB_zSTclpEkVM1HOPmzls2njLNxkdDPUA_cUZ5OHBfCJs5YD4gmBxEwRgdzu_bj8Fo4mGDzgccldYURHIC8AXkXIoqLdI8ddyOGn0s-tcfm6On9UtSLodSNXNtO4Wv-1QNETahEV5StYWhYG2xI37vEDUE0u44YzpSRj_HeHA1OErYSnGkjsx2ziyp957q",
    },
];

export default function FeaturedProjects() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
                    <div data-aos="fade-right">
                        <span className="text-primary font-bold uppercase tracking-wider text-[10px] mb-1 block">Featured Projects</span>
                        <h2 className="text-2xl md:text-3xl font-black text-[#111418]">Delivering Real Impact</h2>
                    </div>
                    <Link href="/case-studies" className="text-primary font-bold hover:underline flex items-center gap-1 group text-sm">
                        View All <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 flex flex-col hover:border-primary/50"
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                        >
                            <div className="h-40 overflow-hidden relative">
                                <NextImage
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    quality={100}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-3 left-3 flex gap-2">
                                    <span className="bg-white/90 backdrop-blur text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full text-indigo-600 border border-indigo-100">{project.industry}</span>
                                </div>
                            </div>

                            <div className="p-5 grow flex flex-col">
                                <h3 className="text-lg font-bold mb-1.5 text-gray-900 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-3">{project.tech}</p>

                                <div className="space-y-2 mb-4 bg-slate-50 p-3 rounded-lg border border-slate-100">
                                    <div>
                                        <span className="text-[9px] font-black text-gray-400 uppercase block mb-0.5">Problem:</span>
                                        <p className="text-xs text-gray-700 leading-snug">{project.problem}</p>
                                    </div>
                                    <div>
                                        <span className="text-[9px] font-black text-primary uppercase block mb-0.5">Solution:</span>
                                        <p className="text-xs text-gray-700 leading-snug">{project.solution}</p>
                                    </div>
                                </div>

                                <div className="mt-auto border-t border-gray-100 pt-3 flex items-center justify-between">
                                    <span className="text-xs font-bold text-green-600 flex items-center gap-1">
                                        <CheckCircle size={14} />
                                        {project.result}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
