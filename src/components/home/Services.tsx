"use client";

import Link from "next/link";
import { Brain, Smartphone, Globe, Cloud, Network, LayoutDashboard, ShieldCheck, Apple } from "lucide-react";

const services = [
    {
        title: "AI & Automation",
        icon: Brain,
        desc: "Intelligent enterprise workflows, predictive data modeling, and secure custom LLM architectures.",
    },
    {
        title: "Android App Development",
        icon: Smartphone,
        desc: "Native high-performance Android apps built for scale and user engagement.",
    },
    {
        title: "iOS App Development",
        icon: Apple,
        desc: "Premium iOS experiences crafted with Swift for the Apple ecosystem.",
    },
    {
        title: "Web Systems Engineering",
        icon: Globe,
        desc: "High-performance web architectures engineered for extreme scalability, speed, and security.",
    },
    {
        title: "Cloud & DevOps",
        icon: Cloud,
        desc: "Resilient hybrid-cloud architectures and zero-touch DevOps pipelines for mission-critical uptime.",
    },
    {
        title: "IoT Solutions",
        icon: Network,
        desc: "Connected device ecosystems and real-time data processing at the edge.",
    },
    {
        title: "Admin Dashboards",
        icon: LayoutDashboard,
        desc: "Centralized control panels for data visualization and business management.",
    },
    {
        title: "Security & Maintenance",
        icon: ShieldCheck,
        desc: "24/7 monitoring, threat protection, and proactive system updates.",
    },
];

export default function Services() {
    return (
        <section id="services" className="py-12 bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className="text-center mb-10" data-aos="fade-down">
                    <span className="text-primary font-bold uppercase tracking-wider text-[10px] mb-1 block">Our Expertise</span>
                    <h2 className="text-3xl font-black text-[#111418] mb-4">Our Capabilities</h2>
                    <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
                        Specialized engineering services designed to solve complex institutional and enterprise challenges.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {services.map((service, index) => (
                        <Link
                            href="/services"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 50}
                            className="block p-6 bg-slate-50 rounded-xl hover:bg-white transition-all duration-300 group border border-slate-100 hover:border-primary/50"
                        >
                            <div className="size-12 rounded-lg bg-white flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors border border-slate-100">
                                <service.icon size={28} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-base font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">{service.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">
                                {service.desc}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
