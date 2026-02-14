"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Zap, ArrowRight } from "lucide-react";

export default function ContactInfo() {
    const contactMethods = [
        {
            icon: MapPin,
            title: "Visit Headquarters",
            detail: "Tedhi Puliya, Vikas Nagar Sector A",
            subDetail: "Lucknow, UP 226022, India",
            color: "text-primary",
            bg: "bg-primary/5",
            href: "https://maps.google.com/?q=Tedhi+Puliya+Vikas+Nagar+Sector+A+Lucknow+226022"
        },
        {
            icon: Phone,
            title: "Direct Connection",
            detail: "+91 6386373577",
            subDetail: "Mon-Sat, 9am - 7pm IST",
            color: "text-primary",
            bg: "bg-primary/5",
            href: "tel:+916386373577"
        },
        {
            icon: Mail,
            title: "Email Inquiry",
            detail: "hello@cloudeindia.com",
            subDetail: "Typical response in 2h",
            color: "text-primary",
            bg: "bg-primary/5",
            href: "mailto:hello@cloudeindia.com"
        }
    ];

    const badges = [
        { icon: ShieldCheck, text: "ISO 27001 Certified" },
        { icon: Zap, text: "99.9% Support SLA" },
        { icon: Clock, text: "24/7 Monitoring" }
    ];

    return (
        <div className="lg:col-span-12 flex flex-col gap-6" data-aos="fade-up">
            {/* Horizontal Info Modules */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactMethods.map((method, idx) => (
                    <motion.a
                        href={method.href}
                        key={idx}
                        whileHover={{ y: -5 }}
                        className={`group relative bg-white rounded-[2.5rem] p-6 md:p-8 border border-slate-100 transition-all hover:border-primary/50 block`}
                    >
                        <div className="relative z-10">
                            <div className={`size-16 flex items-center justify-center rounded-2xl ${method.bg} ${method.color} mb-6 transition-transform group-hover:rotate-6`}>
                                <method.icon size={32} strokeWidth={1.5} />
                            </div>
                            <h4 className="text-xl font-black text-slate-900 mb-2">{method.title}</h4>
                            <p className="text-slate-700 font-bold mb-1">{method.detail}</p>
                            <p className="text-slate-400 text-xs font-medium uppercase tracking-widest">{method.subDetail}</p>

                            <div
                                className="mt-8 flex items-center gap-2 text-primary font-black text-xs uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity"
                            >
                                Get in touch <ArrowRight size={14} />
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 py-6 border-y border-slate-100 border-dashed">
                {badges.map((badge, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                        <div className="size-8 rounded-full bg-slate-50 flex items-center justify-center text-primary">
                            <badge.icon size={18} />
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{badge.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
