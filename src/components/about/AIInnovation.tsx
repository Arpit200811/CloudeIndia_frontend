"use client";

import { motion } from "framer-motion";
import { Cpu, Lightbulb, ShieldCheck, Zap } from "lucide-react";
import NextImage from "next/image";
import Typewriter from "@/components/ui/Typewriter";

const innovationPoints = [
    {
        icon: Cpu,
        title: "Enterprise GenAI Blueprints",
        desc: "We engineer the underlying frameworks that govern, secure, and scale generative AI across mission-critical enterprise workflows.",
    },
    {
        icon: ShieldCheck,
        title: "Ethical AI Governance",
        desc: "Innovation without responsibility is risk. Our AI systems are built with built-in bias detection and transparency.",
    },
    {
        icon: Zap,
        title: "Rapid Prototyping",
        desc: "Go from concept to production-grade AI model in weeks, not months, using our proprietary R&D labs.",
    },
];

export default function AIInnovation() {
    return (
        <section className="py-12 bg-slate-50 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary/30 to-transparent"></div>

            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Visual Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="relative z-10 rounded-4xl overflow-hidden shadow-2xl border-4 border-white">
                            <NextImage
                                src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
                                alt="AI Innovation"
                                width={800}
                                height={600}
                                quality={100}
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay Badge */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-xl flex items-center gap-4 border border-white">
                                <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shrink-0">
                                    <Lightbulb size={20} />
                                </div>
                                <p className="text-xs font-bold text-[#111418]">We invest 30% of our annual revenue directly back into AI R&D.</p>
                            </div>
                        </div>
                        {/* Decorative Rings */}
                        <div className="absolute -top-8 -left-8 w-32 h-32 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                        <div className="absolute -bottom-8 -right-8 w-48 h-48 border-2 border-blue-500/10 rounded-full animate-[spin_15s_linear_infinite]"></div>
                    </motion.div>

                    {/* Content Side */}
                    <div className="lg:w-1/2">
                        <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2 block">AI-First Engineering</span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#111418] mb-6 leading-tight">
                            Pushing the Boundaries of <br />
                            <span className="bg-clip-text text-transparent bg-linear-to-r from-primary to-blue-600">
                                <Typewriter text="Cognitive Computing" />
                            </span>
                        </h2>
                        <p className="text-gray-600 text-base mb-8 leading-relaxed font-light">
                            At CloudeIndia, innovation is the core of our technical DNA. We architect the future by blending deep domain expertise with high-availability artificial intelligence.
                        </p>

                        <div className="space-y-6">
                            {innovationPoints.map((point, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex gap-5 group"
                                >
                                    <div className="size-10 rounded-lg bg-white shadow-md border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                                        <point.icon size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-[#111418] mb-1">{point.title}</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed">{point.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
