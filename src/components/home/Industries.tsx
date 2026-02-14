"use client";

import { motion } from "framer-motion";
import NoSSR from "@/components/common/NoSSR";
import { School, HeartPulse, Landmark, ShoppingCart, Building2, Truck, Factory, Plane, Film, Gavel, Sprout, Zap, Scale, Dumbbell } from "lucide-react";

const industries = [
    {
        name: "Education & E-Learning",
        icon: School,
        description: "Enterprise-grade LMS, secure digital campuses, and AI-driven predictive analytics for institutions.",
        color: "bg-blue-50 text-blue-600 border-blue-100"
    },
    {
        name: "Healthcare & Biotech",
        icon: HeartPulse,
        description: "Mission-critical EHR systems, HIPAA-compliant telemedicine platforms, and advanced diagnostic hubs.",
        color: "bg-emerald-50 text-emerald-600 border-emerald-100"
    },
    {
        name: "Banking & Fintech",
        icon: Landmark,
        description: "Secure payment gateways, fraud detection, and digital wallets.",
        color: "bg-indigo-50 text-indigo-600 border-indigo-100"
    },
    {
        name: "Retail & E-commerce",
        icon: ShoppingCart,
        description: "Multi-vendor marketplaces, inventory bots, and omnichannel UX.",
        color: "bg-amber-50 text-amber-600 border-amber-100"
    },
    {
        name: "Real Estate & PropTech",
        icon: Building2,
        description: "Virtual tours, property management, and investment portals.",
        color: "bg-rose-50 text-rose-600 border-rose-100"
    },
    {
        name: "Logistics & Supply Chain",
        icon: Truck,
        description: "Fleet tracking, warehouse automation, and route optimization.",
        color: "bg-orange-50 text-orange-600 border-orange-100"
    },
    {
        name: "Manufacturing 4.0",
        icon: Factory,
        description: "Industrial IoT, predictive maintenance, and smart factory tools.",
        color: "bg-cyan-50 text-cyan-600 border-cyan-100"
    },
    {
        name: "Travel & Hospitality",
        icon: Plane,
        description: "Booking engines, itinerary managers, and guest concierge apps.",
        color: "bg-sky-50 text-sky-600 border-sky-100"
    },
    {
        name: "Media & Entertainment",
        icon: Film,
        description: "Streaming platforms, content management, and fan engagement.",
        color: "bg-purple-50 text-purple-600 border-purple-100"
    },
    {
        name: "Government & Public Sector",
        icon: Gavel,
        description: "Robust e-governance frameworks, secure citizen portals, and high-integrity data management.",
        color: "bg-slate-50 text-slate-600 border-slate-100"
    },
    {
        name: "Agricultural Tech",
        icon: Sprout,
        description: "Precision farming, soil monitoring, and supply forecasting.",
        color: "bg-green-50 text-green-600 border-green-100"
    },
    {
        name: "Energy & Utilities",
        icon: Zap,
        description: "Smart grid monitoring, energy analytics, and resource management.",
        color: "bg-yellow-50 text-yellow-600 border-yellow-100"
    },
    {
        name: "Legal & Compliance",
        icon: Scale,
        description: "Contract automation, case management, and e-discovery.",
        color: "bg-zinc-50 text-zinc-600 border-zinc-100"
    },
    {
        name: "Sports & Fitness",
        icon: Dumbbell,
        description: "Training apps, wearable integrations, and fan platforms.",
        color: "bg-lime-50 text-lime-600 border-lime-100"
    },
];

export default function Industries() {
    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10 mb-8" data-aos="fade-right">
                <span className="text-primary font-bold uppercase tracking-wider text-[10px] mb-1 block">Industry Expertise</span>
                <h2 className="text-2xl md:text-3xl font-black text-[#111418] tracking-tight">Driving Innovation Across Sectors</h2>
                <div className="w-16 h-1 bg-primary rounded-full mt-3"></div>
            </div>

            <NoSSR>
                <div className="relative flex overflow-x-hidden group">
                    <div className="flex animate-marquee-slow whitespace-nowrap gap-5 py-3">
                        {[...industries, ...industries].map((industry, index) => (
                            <div
                                key={index}
                                className={`inline-block w-72 p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 whitespace-normal shrink-0 border-slate-200 hover:border-primary/50 ${industry.color}`}
                            >
                                <div className="size-10 rounded-lg bg-white border border-slate-100 flex items-center justify-center mb-5">
                                    <industry.icon size={20} strokeWidth={2} />
                                </div>
                                <h3 className="font-bold mb-2 text-lg">{industry.name}</h3>
                                <p className="text-xs opacity-80 leading-relaxed font-medium">
                                    {industry.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <style jsx>{`
            .animate-marquee-slow {
              animation: marquee 80s linear infinite;
            }
            @keyframes marquee {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-marquee-slow:hover {
              animation-play-state: paused;
            }
          `}</style>
            </NoSSR>
        </section>
    );
}
