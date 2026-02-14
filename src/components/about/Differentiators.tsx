"use client";

import { motion } from "framer-motion";
import { Award, Clock, Heart, Users, Shield, Globe } from "lucide-react";

const diffs = [
    {
        icon: Award,
        title: "Value-Engineered",
        desc: "We focus on high-impact outcomes. Our engineering is strategically aligned with your critical business ROI.",
    },
    {
        icon: Clock,
        title: "Agility at Scale",
        desc: "We combine the speed of a startup with the rigorous governance and security of a global enterprise.",
    },
    {
        icon: Heart,
        title: "Human-Centric",
        desc: "Beyond the code, we prioritize the people who use it. Every UX decision is backed by behavioral research.",
    },
    {
        icon: Users,
        title: "Strategic Partnerships",
        desc: "Our engineers integrate seamlessly as an extension of your board and technical teams with absolute transparency.",
    },
    {
        icon: Shield,
        title: "Security First",
        desc: "Zero-Trust is not a buzzword for us; it's our architecture. Every line of code is audited for vulnerability.",
    },
    {
        icon: Globe,
        title: "Global Expertise",
        desc: "Our teams bring insights from diverse industries and markets, providing a truly global perspective.",
    },
];

export default function Differentiators() {
    return (
        <section className="py-16 bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center mb-16">
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">The CloudeIndia Edge</span>
                <h2 className="text-4xl md:text-5xl font-black text-[#111418] mb-6">What Makes Us <span className="italic">Different</span></h2>
                <p className="text-gray-500 max-w-2xl mx-auto text-lg">In a crowded market, we stand out through our commitment to quality, speed, and ethical innovation.</p>
            </div>

            <div className="max-w-[1280px] mx-auto px-6 lg:px-10 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {diffs.map((diff, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="p-10 rounded-4xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
                    >
                        <div className="size-14 bg-white shadow-sm rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                            <diff.icon size={28} />
                        </div>
                        <h4 className="text-2xl font-black text-[#111418] mb-4">{diff.title}</h4>
                        <p className="text-gray-500 leading-relaxed font-light">{diff.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
