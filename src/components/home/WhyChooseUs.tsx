"use client";

import { Sparkles, ShieldCheck, Box, Headset } from "lucide-react";
import Counter from "@/components/ui/Counter";

const features = [
    {
        title: "Precision AI",
        icon: Sparkles,
        desc: "We integrate specialized AI models into the core of your operations to drive measurable efficiency.",
    },
    {
        title: "Zero-Trust Security",
        icon: ShieldCheck,
        desc: "Built with a rigorous security model to protect mission-critical institutional and enterprise data.",
    },
    {
        title: "Enterprise-Grade SSR",
        icon: Box,
        desc: "Our high-performance Next.js architecture ensures sub-second loads and maximum SEO visibility for global operations.",
    },
    {
        title: "Proactive Support",
        icon: Headset,
        desc: "Dedicated 24/7 post-launch maintenance to ensure continuous uptime and system reliability.",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-12 bg-slate-800 text-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div data-aos="fade-right">
                        <span className="text-primary font-bold uppercase tracking-wider text-[10px] mb-1 block">Why Choose CloudeIndia</span>
                        <h2 className="text-2xl md:text-3xl font-black mb-4 leading-tight">Engineering Reliability at Scale</h2>
                        <p className="text-gray-400 text-base leading-relaxed mb-6">
                            We engineer high-availability digital ecosystems designed to exceed the rigorous performance and security standards of healthcare, education, and government sectors.
                        </p>
                        <div className="flex gap-4">
                            <div className="text-center">
                                <h4 className="text-3xl font-bold text-white mb-1">
                                    <Counter value={4} suffix="+" />
                                </h4>
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Years of Impact</span>
                            </div>
                            <div className="w-px bg-gray-700 h-10"></div>
                            <div className="text-center">
                                <h4 className="text-3xl font-bold text-white mb-1">
                                    <Counter value={200} suffix="+" />
                                </h4>
                                <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">Projects completed</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/5 p-5 rounded-xl border border-white/10 hover:bg-white/10 transition-colors"
                                data-aos="fade-left"
                                data-aos-delay={index * 50}
                            >
                                <div className="mb-3 text-primary">
                                    <feature.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="font-bold text-base mb-1">{feature.title}</h3>
                                <p className="text-xs text-gray-400 leading-relaxed">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

