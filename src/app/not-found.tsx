"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowRight, ShieldAlert } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden text-center px-6">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05)_0%,transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

            {/* Floating Element */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, -5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="mb-8 relative"
            >
                <div className="size-40 md:size-60 rounded-full bg-slate-900 border-4 border-slate-800 flex items-center justify-center shadow-[0_0_80px_rgba(59,130,246,0.2)]">
                    <ShieldAlert size={80} className="text-primary opacity-80" />
                </div>
                {/* Orbiting Dot */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 size-4 bg-red-500 rounded-full shadow-[0_0_20px_rgba(239,68,68,0.5)]"></div>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl relative z-10"
            >
                <div className="inline-block py-1 px-4 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-widest mb-6 animate-pulse">
                    404 Error: Signal Lost
                </div>

                <h1 className="text-5xl md:text-8xl font-black text-white mb-6 tracking-tighter">
                    Mission <span className="text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-500">Aborted</span>
                </h1>

                <p className="text-slate-400 text-lg md:text-xl font-medium leading-relaxed mb-10">
                    You've drifted into coordinates that don't exist in our current matrix. <br className="hidden md:block" />
                    Let's re-establish the uplink and get you back to base.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link
                        href="/"
                        className="h-14 px-8 bg-white text-slate-950 font-black rounded-xl transition-all hover:scale-105 hover:bg-slate-200 flex items-center gap-3 shadow-xl shadow-white/10"
                    >
                        <Home size={20} />
                        Return to Base
                    </Link>
                    <Link
                        href="/contact"
                        className="h-14 px-8 bg-slate-800/50 text-white border border-white/10 font-bold rounded-xl backdrop-blur-sm transition-all hover:bg-slate-800 flex items-center gap-3 group"
                    >
                        Report Anomaly
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
