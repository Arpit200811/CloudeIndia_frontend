"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import NextImage from "next/image";
import { useRef } from "react";
import { Camera, Heart, Zap, Coffee, Users, Sparkles } from "lucide-react";

const photos = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=100&w=2400",
        title: "The Brainstorm",
        tag: "GenAI Labs",
        width: "w-[45%]",
        height: "h-[500px]",
        top: "0%",
        left: "5%",
        rotate: -3
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=100&w=2400",
        title: "Deep Focus",
        tag: "Engineering",
        width: "w-[35%]",
        height: "h-[400px]",
        top: "10%",
        right: "5%",
        rotate: 5
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=100&w=2400",
        title: "Future Talk",
        tag: "Collaboration",
        width: "w-[30%]",
        height: "h-[350px]",
        bottom: "0%",
        left: "10%",
        rotate: 2
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=100&w=2400",
        title: "Solar Hub",
        tag: "Environment",
        width: "w-[40%]",
        height: "h-[450px]",
        bottom: "5%",
        right: "10%",
        rotate: -4
    }
];

export default function LifeAtCloude() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section ref={containerRef} className="py-20 bg-white relative overflow-hidden">
            {/* Artistic Background Text */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex flex-col items-center pointer-events-none opacity-[0.02]">
                <h2 className="text-[30vw] md:text-[25vw] font-black leading-none uppercase tracking-tighter select-none">CULTURE</h2>
            </div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-10">
                <div className="flex flex-col items-start gap-6 mb-16 relative z-20">
                    <div className="flex items-center gap-3 py-2 px-6 rounded-full bg-slate-50 border border-slate-100">
                        <Camera size={14} className="text-primary" />
                        <span className="text-primary font-black text-[10px] uppercase tracking-[0.5em]">The Human Side</span>
                    </div>

                    <h2 className="text-[#111418] text-4xl md:text-6xl lg:text-9xl font-black leading-[0.9] md:leading-[0.8] tracking-tighter uppercase">
                        Life in the <br />
                    </h2>
                    <p className="text-[#617589] text-xl font-medium max-w-2xl mt-4 leading-relaxed">
                        We don't just build software; we engineer resilience. At CloudeIndia, ownership is the baseline, and mission-critical thinking is our DNA. Join a culture where your code protects institutional integrity and drives global innovation.
                    </p>
                </div>

                {/* Experimental Photo Stack Layout */}
                <div className="relative h-auto md:h-[1200px] w-full mt-10 md:mt-0">
                    <div className="md:hidden grid grid-cols-1 gap-8">
                        {photos.map((photo) => (
                            <motion.div
                                key={photo.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="relative w-full aspect-4/5 overflow-hidden rounded-4xl bg-white border-4 border-white"
                            >
                                <NextImage
                                    src={photo.src}
                                    alt={photo.title}
                                    width={600}
                                    height={400}
                                    quality={100}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-x-4 bottom-4 p-4 bg-white/20 backdrop-blur-xl border border-white/20 rounded-2xl">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col gap-0.5">
                                            <span className="text-white font-black text-[8px] uppercase tracking-[0.2em]">{photo.tag}</span>
                                            <h3 className="text-white text-lg font-black">{photo.title}</h3>
                                        </div>
                                        <div className="size-8 rounded-full bg-white flex items-center justify-center text-primary">
                                            <Heart size={14} fill="currentColor" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        {photos.map((photo, idx) => (
                            <motion.div
                                key={photo.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{
                                    scale: 1.05,
                                    rotate: 0,
                                    zIndex: 50,
                                    transition: { duration: 0.3 }
                                }}
                                className={`absolute ${photo.width} ${photo.height} overflow-hidden rounded-[3rem] bg-white border-4 border-white group cursor-pointer transition-all hover:border-primary/50`}
                                style={{
                                    top: photo.top,
                                    left: photo.left,
                                    right: photo.right,
                                    bottom: photo.bottom,
                                    y: idx % 2 === 0 ? y1 : y2,
                                    rotate: photo.rotate
                                }}
                            >
                                <NextImage
                                    src={photo.src}
                                    alt={photo.title}
                                    width={2400}
                                    height={1800}
                                    quality={100}
                                    className="w-full h-full object-cover grayscale-[0.5] group-hover:grayscale-0 transition-all duration-700"
                                />

                                {/* Glass Content Overlay */}
                                <div className="absolute inset-x-6 bottom-6 p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-4xl opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-white font-black text-[9px] uppercase tracking-[0.3em]">{photo.tag}</span>
                                            <h3 className="text-white text-xl font-black">{photo.title}</h3>
                                        </div>
                                        <div className="size-10 rounded-full bg-white flex items-center justify-center text-primary">
                                            <Heart size={18} fill="currentColor" />
                                        </div>
                                    </div>
                                </div>

                                {/* Texture Overlay */}
                                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Benefits Micro-Modules */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 relative z-20">
                    {[
                        { icon: Zap, title: "Velocity", desc: "High-intensity delivery" },
                        { icon: Coffee, title: "Ownership", desc: "Mission-critical mindset" },
                        { icon: Heart, title: "Wellness", desc: "Cognitive health labs" },
                        { icon: Sparkles, title: "Excellence", desc: "Zero-defect engineering" }
                    ].map((benefit, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] flex flex-col items-center text-center gap-4 group hover:bg-white transition-all hover:border-primary/30"
                        >
                            <div className="size-14 rounded-2xl bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                                <benefit.icon size={24} />
                            </div>
                            <h4 className="text-[#111418] font-black uppercase tracking-widest text-xs mt-2">{benefit.title}</h4>
                            <p className="text-slate-400 font-medium text-sm leading-tight">{benefit.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
