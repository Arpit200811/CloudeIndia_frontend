"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { Search, MapPin, Clock, ArrowUpRight, Cpu, Code2, Globe, Palette, Sparkles, Rocket } from "lucide-react";
import { useState, useRef } from "react";
import { useSession, signIn } from "next-auth/react";

const positions = [
    {
        id: 1,
        title: "Senior AI Engineer",
        team: "Engineering",
        icon: Cpu,
        location: "Bengaluru, India",
        type: "Full-time",
        experience: "5+ Years",
        salary: "Competitive",
        color: "from-blue-500 to-cyan-400",
        glow: "shadow-blue-500/20",
        description: "Architecting Large Language Models and custom GenAI pipelines for institutional reliability.",
        growth: "Principal AI Architect"
    },
    {
        id: 2,
        title: "Full Stack Developer",
        team: "Product Labs",
        icon: Code2,
        location: "Remote",
        type: "Full-time",
        experience: "3+ Years",
        salary: "Competitive",
        color: "from-emerald-500 to-teal-400",
        glow: "shadow-emerald-500/20",
        description: "Building high-performance, reactive interfaces and resilient Node.js microservices.",
        growth: "Product Engineering Lead"
    },
    {
        id: 3,
        title: "Cloud Architect",
        team: "Infrastructure",
        icon: Globe,
        location: "Pune, India",
        type: "Full-time",
        experience: "8+ Years",
        salary: "High Range",
        color: "from-purple-600 to-pink-500",
        glow: "shadow-purple-500/20",
        description: "Designing zero-trust, multi-cloud architectures for mission-critical enterprise systems.",
        growth: "Head of Infrastructure"
    },
    {
        id: 4,
        title: "UI/UX Designer",
        team: "Experience",
        icon: Palette,
        location: "Remote",
        type: "Contract-to-Hire",
        experience: "4+ Years",
        salary: "Fixed Rate",
        color: "from-rose-500 to-orange-400",
        glow: "shadow-rose-500/20",
        description: "Crafting holographic, futuristic digital experiences for high-conversion portals.",
        growth: "Design Director"
    }
];

function JobCard({ job, idx }: { job: any, idx: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const { status } = useSession();

    const handleApplyClick = (e: React.MouseEvent) => {
        if (status !== "authenticated") {
            e.preventDefault();
            signIn("google");
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="group relative"
        >


            <div className="relative bg-white border border-slate-200 p-10 rounded-[3rem] transition-all duration-500 group-hover:border-primary/50 flex flex-col gap-8 h-full">
                {/* Header Line */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className={`size-12 rounded-2xl bg-linear-to-br ${job.color} flex items-center justify-center text-white`}>
                            <job.icon size={22} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{job.team} • {job.experience}</span>
                            <span className="text-primary font-bold text-[11px] uppercase tracking-tighter">Growth: {job.growth}</span>
                        </div>
                    </div>
                    <div className="size-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-primary group-hover:text-white transition-all">
                        <ArrowUpRight size={20} />
                    </div>
                </div>

                {/* Title and Description */}
                <div className="space-y-4">
                    <h3 className="text-3xl font-black text-[#111418] leading-none tracking-tight group-hover:text-primary transition-colors">
                        {job.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                        {job.description}
                    </p>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4 mt-auto">
                    <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
                        <MapPin size={16} className="text-slate-300" />
                        <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 font-medium text-sm">
                        <Clock size={16} className="text-slate-300" />
                        <span>{job.type}</span>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                    <span className="text-slate-900 font-black tracking-tighter">{job.salary}</span>
                    <Link
                        href="/contact"
                        onClick={handleApplyClick}
                        className="text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2 group/btn"
                    >
                        Apply Now
                        <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <ArrowUpRight size={14} />
                        </motion.div>
                    </Link>
                </div>

                {/* Floating "Apply" Badge on Hover */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <div className="bg-primary text-white text-[8px] font-black uppercase tracking-[0.2em] px-4 py-2 rounded-full border-2 border-white">
                        Immediate Join
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function OpenPositions() {
    const [searchQuery, setSearchQuery] = useState("");
    const { status } = useSession();

    const handleApplyClick = async (e: React.MouseEvent) => {
        if (status !== "authenticated") {
            e.preventDefault();
            try {
                await signIn("google", { callbackUrl: "/contact" });
            } catch (error) {
                console.error("Sign-in failed or cancelled", error);
            }
        }
    };

    return (
        <section id="jobs" className="py-20 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-[1440px] mx-auto px-6 lg:px-10 relative z-10">
                {/* Futuristic Header & Search */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-3 py-2 px-6 rounded-full bg-white border border-slate-200 mb-8"
                    >
                        <Sparkles size={16} className="text-primary animate-pulse" />
                        <span className="text-slate-500 font-black text-[10px] uppercase tracking-[0.5em]">Global Talent Pool</span>
                    </motion.div>

                    <h2 className="text-[#111418] text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-none uppercase mb-12">
                        Open <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-500 italic">Opportunities</span>
                    </h2>

                    <div className="relative w-full max-w-2xl group">
                        <div className="relative bg-white border border-slate-200 rounded-3xl p-2 flex items-center">
                            <div className="pl-6 pr-4">
                                <Search className="text-slate-400" size={24} />
                            </div>
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search roles..."
                                className="flex-1 bg-transparent py-4 text-base md:text-xl font-bold text-[#111418] placeholder-slate-300 outline-none"
                            />
                            <div className="pr-4">
                                <span className="bg-slate-50 text-slate-400 text-[10px] font-black uppercase px-3 py-2 rounded-xl border border-slate-100">Esc to clear</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Grid Layout - Creative 3-Column on Desktop */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {positions.filter(p =>
                        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        p.team.toLowerCase().includes(searchQuery.toLowerCase())
                    ).map((job, idx) => (
                        <JobCard key={job.id} job={job} idx={idx} />
                    ))}

                    {/* Speculative Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="group relative lg:col-span-1"
                    >
                        <div className="h-full bg-slate-900 rounded-[3rem] p-10 flex flex-col justify-center items-center text-center gap-6 relative overflow-hidden group-hover:bg-slate-800 transition-colors">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full translate-x-12 -translate-y-12"></div>
                            <div className="size-16 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-2">
                                <Rocket size={32} />
                            </div>
                            <h3 className="text-white text-3xl font-black leading-tight">Can't find <br /> your fit?</h3>
                            <p className="text-slate-400 font-medium">We're always looking for geniuses to join our rogue lab.</p>
                            <Link
                                href="/contact"
                                onClick={handleApplyClick}
                                className="px-8 py-4 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-[11px] hover:scale-105 transition-transform"
                            >
                                Send Speculative CV
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Bottom Info */}
                <div className="mt-20 flex flex-col items-center gap-6">
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="size-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                                <div className="w-full h-full bg-linear-to-br from-slate-300 to-slate-400"></div>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-400 font-bold uppercase tracking-[0.3em] text-[10px]">Trusted by 200+ Architecture Leaders</p>
                </div>
            </div>
        </section>
    );
}
