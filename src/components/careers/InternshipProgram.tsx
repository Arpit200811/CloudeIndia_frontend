"use client";

import { motion } from "framer-motion";
import {
    Zap, Rocket, GraduationCap, Cpu,
    Code2, Palette, Globe, Layers,
    Binary, Microscope, Sparkles
} from "lucide-react";
import { useSession, signIn } from "next-auth/react";

const modules = [
    { title: "GenAI Core", icon: Binary, color: "bg-blue-500", top: "15%", left: "10%", rotation: -12 },
    { title: "High-Availability Cloud", icon: Globe, color: "bg-emerald-500", top: "25%", left: "45%", rotation: 8 },
    { title: "Design Systems", icon: Palette, color: "bg-rose-500", top: "10%", left: "75%", rotation: -5 },
    { title: "Backend Orchestration", icon: Layers, color: "bg-amber-500", top: "60%", left: "15%", rotation: 15 },
    { title: "Neural Networks", icon: Cpu, color: "bg-indigo-500", top: "75%", left: "55%", rotation: -8 },
    { title: "Security Protocols", icon: Microscope, color: "bg-violet-500", top: "55%", left: "80%", rotation: 12 },
];

export default function InternshipProgram() {
    const { status } = useSession();

    const handleApplyClick = () => {
        if (status !== "authenticated") {
            signIn("google", { callbackUrl: "/contact" });
        } else {
            // Scroll to contact form or show success if logic exists
            window.location.href = "/contact";
        }
    };
    return (
        <section id="launchpad" className="py-16 bg-slate-950 relative overflow-hidden min-h-screen">
            {/* Perspective Grid Background */}
            <div className="absolute inset-0 z-0">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        perspective: '1000px',
                        transformStyle: 'preserve-3d'
                    }}
                >
                    <div
                        className="w-[200%] h-[200%] absolute -top-1/2 -left-1/2"
                        style={{
                            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
                            backgroundSize: '80px 80px',
                            transform: 'rotateX(60deg) translateY(-200px)'
                        }}
                    ></div>
                </div>
                <div className="absolute inset-0 bg-linear-to-b from-slate-950 via-transparent to-slate-950"></div>
                <div className="absolute inset-0 bg-radial-at-c from-primary/20 via-transparent to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 h-full">
                {/* Section Header - Ultra Creative Styling */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-3 py-3 px-8 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-xl mb-8 group"
                    >
                        <GraduationCap className="text-primary group-hover:rotate-12 transition-transform" />
                        <span className="text-primary font-black text-xs uppercase tracking-[0.5em]">The Academy 2026</span>
                    </motion.div>

                    <h2 className="text-white text-4xl md:text-6xl lg:text-9xl font-black italic tracking-tighter leading-[0.9] md:leading-[0.8] uppercase flex flex-col items-center">
                        The <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-400 to-indigo-500">Launchpad</span>
                    </h2>

                    <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto mt-12 bg-slate-900/50 backdrop-blur-md p-6 rounded-3xl border border-white/5">
                        A high-intensity immersion into mission-critical engineering. Master the blueprints of enterprise intelligence and digital resilience.
                    </p>
                </div>

                {/* Skill Modules Layout - Responsive */}
                <div className="relative min-h-[400px] md:h-[600px] mt-12 md:mt-20">
                    {/* Mobile Grid */}
                    <div className="md:hidden grid grid-cols-2 gap-4">
                        {modules.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 p-4 flex flex-col items-center gap-3 text-center"
                            >
                                <div className={`size-10 rounded-xl ${m.color} flex items-center justify-center text-white`}>
                                    <m.icon size={20} />
                                </div>
                                <span className="text-white font-black uppercase tracking-widest text-[9px]">
                                    {m.title}
                                </span>
                            </motion.div>
                        ))}
                    </div>

                    {/* Desktop Floating Modules */}
                    <div className="hidden md:block absolute inset-0">
                        {modules.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -15, scale: 1.1 }}
                                style={{
                                    top: m.top,
                                    left: m.left,
                                    rotate: `${m.rotation}deg`
                                }}
                                className="absolute z-20"
                            >
                                <div className="relative group cursor-pointer">
                                    {/* Glass Node */}
                                    <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 group-hover:border-primary/50 transition-all"></div>

                                    <div className="relative p-6 flex flex-col items-center gap-4 min-w-[200px]">
                                        <div className={`size-14 rounded-2xl ${m.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                                            <m.icon size={28} />
                                        </div>
                                        <span className="text-white font-black uppercase tracking-widest text-[11px] text-center">
                                            {m.title}
                                        </span>

                                        {/* Connection Line Decor */}
                                        <div className="w-px h-8 bg-linear-to-b from-white/20 to-transparent group-hover:from-primary/50 transition-all"></div>
                                        <div className="size-2 rounded-full bg-white/10 group-hover:bg-primary shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition-all"></div>
                                    </div>


                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Central Rocket Icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-10 blur-sm pointer-events-none overflow-hidden">
                        <Rocket size={400} className="text-white rotate-12 max-w-full" />
                    </div>
                </div>

                {/* Footer Invite */}
                <div className="mt-20 flex flex-col items-center gap-10">
                    <div className="flex gap-4">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="size-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
                        ))}
                    </div>
                    <button
                        onClick={handleApplyClick}
                        className="px-12 py-6 bg-white text-slate-950 font-black uppercase tracking-[0.4em] rounded-full hover:bg-primary hover:text-white transition-all flex items-center gap-4 group"
                    >
                        <Sparkles size={20} className="group-hover:rotate-180 transition-transform duration-700" />
                        <span>Apply for Academy</span>
                    </button>
                    <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Applications open for Summer 2026 Batch</p>
                </div>
            </div>

            {/* Scrolling Watermark */}
            <div className="absolute bottom-10 left-0 w-full overflow-hidden whitespace-nowrap opacity-5 pointer-events-none">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="text-[12vw] font-black text-white italic tracking-tighter"
                >
                    TRAINING • INNOVATION • LEADERSHIP • FUTURE • TALENT • ACADEMY •
                </motion.div>
            </div>
        </section>
    );
}
