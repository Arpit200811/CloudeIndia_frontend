"use client";

import { Star } from "lucide-react";
import NextImage from "next/image";

const testimonials = [
    {
        quote: "CloudeIndia modernized our mission-critical systems into a high-availability cloud platform. Their AI architectural depth is exceptional.",
        author: "Rohan Gupta",
        role: "CTO, HealthPlus Systems",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
    },
    {
        quote: "The speed and quality of delivery were exceptional. We launched our MVP in record time and secured Series A funding shortly after.",
        author: "Priya Sharma",
        role: "Founder, EduTech Innovations",
        image: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
        quote: "Security and compliance were non-negotiable for us. Their team engineered a vault-like infrastructure while maintaining rapid delivery.",
        author: "Vikram Singh",
        role: "Director of Technology, FinServe",
        image: "https://i.pravatar.cc/150?u=a04258114e29026302d",
    },
];

export default function Testimonials() {
    return (
        <section className="py-12 bg-[#0f172a] text-white relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-[1280px] mx-auto px-6 lg:px-10 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
                    <div>
                        <span className="text-primary font-bold uppercase tracking-wider text-[10px] mb-1 block">Client Success Stories</span>
                        <h2 className="text-2xl md:text-3xl font-black">Trusted by Industry Leaders</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={i * 100}
                            className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors"
                        >
                            <div className="flex gap-1 text-yellow-400 mb-4">
                                {[...Array(5)].map((_, idx) => (
                                    <Star key={idx} size={14} className="fill-current" />
                                ))}
                            </div>
                            <p className="text-base font-medium leading-relaxed mb-6 text-gray-200">"{t.quote}"</p>
                            <div className="flex items-center gap-3">
                                <NextImage src={t.image} alt={t.author} width={40} height={40} quality={100} className="size-10 rounded-full border-2 border-primary/50 object-cover" />
                                <div>
                                    <h4 className="font-bold text-sm">{t.author}</h4>
                                    <p className="text-xs text-gray-400">{t.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
