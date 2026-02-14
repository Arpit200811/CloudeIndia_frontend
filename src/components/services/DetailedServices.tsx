"use client";

import { motion } from "framer-motion";
import {
    Brain, MessageSquare, LineChart, LayoutDashboard, Eye,
    Smartphone, Apple, TabletSmartphone, Terminal,
    Globe, Layout, Database, Hospital, Building2,
    Cloud, Infinity, Server, Shield, Lock, Fingerprint,
    Headset, LifeBuoy, RefreshCw, Activity, ArrowRight
} from "lucide-react";
import Link from "next/link";

const sections = [
    {
        id: "ai",
        title: "AI & Automation",
        icon: Brain,
        color: "text-purple-500",
        bg: "bg-purple-50",
        items: [
            { icon: MessageSquare, name: "Intelligent Chatbots", desc: "Next-gen NLP driven support systems." },
            { icon: LineChart, name: "Predictive Analytics", desc: "Data-driven forecasting for smart decisions." },
            { icon: LayoutDashboard, name: "AI Dashboards", desc: "Real-time cognitive business monitoring." },
            { icon: Eye, name: "Computer Vision", desc: "Visual recognition and automated inspection." }
        ]
    },
    {
        id: "mobile",
        title: "Mobile App Development",
        icon: Smartphone,
        color: "text-blue-500",
        bg: "bg-blue-50",
        items: [
            { icon: TabletSmartphone, name: "Android Apps", desc: "Native high-performance Android solutions." },
            { icon: Apple, name: "iOS Apps", desc: "Premium, polished Apple ecosystem apps." },
            { icon: RefreshCw, name: "Cross-platform", desc: "Flutter and React Native versatility." },
            { icon: Terminal, name: "Admin Panels", desc: "Robust backend control systems." }
        ]
    },
    {
        id: "web",
        title: "Web Applications",
        icon: Globe,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
        items: [
            { icon: Layout, name: "Business Websites", desc: "Modern, high-conversion brand presence." },
            { icon: Database, name: "ERP Systems", desc: "Centralized enterprise resource planning." },
            { icon: Building2, name: "Portals", desc: "Secure customer and institutional gateways." },
            { icon: Hospital, name: "Institutional Software", desc: "High-availability frameworks for hospitals and colleges." }
        ]
    },
    {
        id: "cloud",
        title: "Cloud & DevOps",
        icon: Cloud,
        color: "text-cyan-500",
        bg: "bg-cyan-50",
        items: [
            { icon: Infinity, name: "CI/CD Pipelines", desc: "Continuous automated deployment flows." },
            { icon: Server, name: "Managed Infrastructure", desc: "Mission-critical hosting with absolute reliability." },
            { icon: Activity, name: "Scalability", desc: "Auto-scaling for massive traffic loads." },
            { icon: RefreshCw, name: "Migration", desc: "Seamless cloud transformation." }
        ]
    },
    {
        id: "security",
        title: "Security & Compliance",
        icon: Shield,
        color: "text-rose-500",
        bg: "bg-rose-50",
        items: [
            { icon: Lock, name: "API Security", desc: "Hardened endpoints and gateway protection." },
            { icon: Fingerprint, name: "RBAC", desc: "Granular role-based access controls." },
            { icon: Shield, name: "Data Encryption", desc: "End-to-end encryption at rest & transit." },
            { icon: Activity, name: "Threat Audit", desc: "Continuous vulnerability assessment." }
        ]
    },
    {
        id: "support",
        title: "Maintenance & Support",
        icon: Headset,
        color: "text-amber-500",
        bg: "bg-amber-50",
        items: [
            { icon: LifeBuoy, name: "24/7 Support", desc: "Round-the-clock technical assistance." },
            { icon: Activity, name: "Proactive Monitoring", desc: "Real-time health and performance checks." },
            { icon: RefreshCw, name: "Regular Updates", desc: "Iterative improvements and security patches." },
            { icon: Terminal, name: "Bug Fixes", desc: "Rapid response to any system anomalies." }
        ]
    }
];

export default function DetailedServices() {
    return (
        <div id="services" className="space-y-20 pt-20 pb-16">
            {sections.map((section, idx) => (
                <section key={section.id} className="scroll-mt-24">
                    <div className={`flex flex-col lg:flex-row gap-12 items-start ${idx % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                        {/* Section Intro */}
                        <motion.div
                            initial={{ opacity: 0, x: idx % 2 === 1 ? 30 : -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/3"
                        >
                            <div className={`size-16 ${section.bg} ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                                <section.icon size={32} />
                            </div>
                            <h2 className="text-4xl font-black text-[#111418] mb-6 leading-tight">
                                {section.title}
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed mb-8">
                                We provide high-integrity {section.title.toLowerCase()} tailored to the rigorous demands of modern enterprises and institutions.
                            </p>
                            <Link href="/contact" className="inline-flex items-center gap-2 text-primary font-bold group">
                                Get a Quote
                                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>

                        {/* Service Cards Grid */}
                        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                            {section.items.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: idx % 2 === 1 ? -20 : 20, y: 20 }}
                                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:border-primary/50 transition-all duration-500 group"
                                >
                                    <div className={`size-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center ${section.color} mb-6 group-hover:bg-primary group-hover:text-white transition-colors`}>
                                        <item.icon size={24} />
                                    </div>
                                    <h4 className="text-xl font-bold text-[#111418] mb-2">{item.name}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}
