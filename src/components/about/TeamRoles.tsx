"use client";

import { motion } from "framer-motion";
import { Code2, BrainCircuit, Cloud, Fingerprint, Database, Sparkles } from "lucide-react";

const roles = [
    {
        icon: Code2,
        title: "Platform Engineers",
        desc: "The architects of scale. They build resilient, high-throughput systems that power enterprise demands without breaking a sweat.",
        color: "bg-blue-500",
    },
    {
        icon: BrainCircuit,
        title: "AI & ML Scientists",
        desc: "The minds behind the models. They specialize in deep learning, neural networks, and generative AI orchestration.",
        color: "bg-purple-500",
    },
    {
        icon: Cloud,
        title: "Cloud Architects",
        desc: "Defining the multi-cloud future. Experts in AWS, Azure, and GCP, ensuring high availability and zero-trust security.",
        color: "bg-cyan-500",
    },
    {
        icon: Fingerprint,
        title: "Security Analysts",
        desc: "The guardians of integrity. They bake security into every layer, from the kernel to the edge.",
        color: "bg-indigo-500",
    },
    {
        icon: Database,
        title: "Data Engineers",
        desc: "Structuring the chaos. They turn raw data into high-velocity pipelines that feed our AI intelligence.",
        color: "bg-emerald-500",
    },
    {
        icon: Sparkles,
        title: "UI/UX Visionaries",
        desc: "Bridging tech and humans. They craft industrial-grade interfaces that feel intuitive and premium.",
        color: "bg-amber-500",
    },
];

export default function TeamRoles() {
    return (
        <section className="py-12 bg-[#0f172a] text-white overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className="max-w-2xl mb-12" data-aos="fade-right">
                    <span className="text-primary font-bold uppercase tracking-widest text-[10px] mb-2 block">The Talented Minds</span>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
                        Powering Innovation Through <span className="text-primary italic">Expertise</span>
                    </h2>
                    <p className="text-gray-400 text-base font-light leading-relaxed">
                        Our strength lies in our specialized roles. We assemble teams of domain experts who live and breathe their specific technology stack.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                    {roles.map((role, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="group relative"
                        >
                            <div className="relative h-full p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 flex flex-col items-start text-left">
                                <div className={`size-12 rounded-xl ${role.color}/20 flex items-center justify-center text-white mb-6 border border-white/10 group-hover:scale-110 transition-transform`}>
                                    <role.icon size={24} className="text-white" />
                                </div>
                                <h4 className="text-xl font-black mb-3 tracking-tight">{role.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed font-light mb-4">
                                    {role.desc}
                                </p>
                                <div className={`h-1 w-0 group-hover:w-12 transition-all duration-500 ${role.color}`}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
