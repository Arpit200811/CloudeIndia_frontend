"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, Sparkles, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import NextImage from "next/image";

export default function ExitIntentModal() {
    const [isVisible, setIsVisible] = useState(false);
    const [hasLeft, setHasLeft] = useState(false); // Track if user has left before
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Check session storage to ensure we don't spam the user
        const alreadyShown = sessionStorage.getItem("exit_intent_shown");
        if (alreadyShown) return;

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0) {
                // User moved mouse out of top of browser (tabs/address bar)
                setIsVisible(true);
                sessionStorage.setItem("exit_intent_shown", "true");
            }
        };

        // Delay attaching listener to avoid immediate triggers on load
        const timer = setTimeout(() => {
            document.addEventListener("mouseleave", handleMouseLeave);
        }, 3000);

        return () => {
            document.removeEventListener("mouseleave", handleMouseLeave);
            clearTimeout(timer);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
            setTimeout(() => {
                setIsVisible(false);
            }, 3000);
        }, 1000);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsVisible(false)}
                        className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
                    ></motion.div>

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row group"
                    >
                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 z-20 p-2 bg-white/5 hover:bg-white/10 rounded-full text-slate-400 hover:text-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {/* Creative Left Side - Visual */}
                        <div className="md:w-2/5 bg-blue-600 relative overflow-hidden flex flex-col justify-between p-8">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-30"></div>
                            <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-indigo-600 to-slate-900 opacity-90"></div>

                            <div className="relative z-10">
                                <span className="inline-block py-1 px-3 rounded-full bg-white/20 border border-white/20 text-white text-[10px] font-black uppercase tracking-widest mb-4">
                                    Exclusive Resource
                                </span>
                                <h3 className="text-3xl font-black text-white leading-tight">
                                    The 2026 GenAI <br />
                                    <span className="text-blue-200 italic">Blueprint</span>
                                </h3>
                            </div>

                            <div className="relative z-10 mt-8 md:mt-0">
                                <div className="p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-sm">
                                    <div className="flex gap-3 mb-2">
                                        <div className="size-2 rounded-full bg-red-400"></div>
                                        <div className="size-2 rounded-full bg-yellow-400"></div>
                                        <div className="size-2 rounded-full bg-green-400"></div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-2 w-3/4 bg-white/20 rounded"></div>
                                        <div className="h-2 w-1/2 bg-white/20 rounded"></div>
                                        <div className="h-2 w-full bg-white/20 rounded"></div>
                                    </div>
                                    <div className="mt-4 flex items-center gap-2 text-white/80 text-xs font-bold">
                                        <FileText size={14} />
                                        <span>Enterprise_Scale_Strategy.pdf</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Form */}
                        <div className="md:w-3/5 p-8 md:p-12 relative bg-slate-900">
                            {/* Light Effect */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

                            {isSubmitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center">
                                    <div className="size-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Secure Uplink Established.</h3>
                                    <p className="text-slate-400">The blueprint is on its way to your inbox.</p>
                                </div>
                            ) : (
                                <>
                                    <h4 className="text-xl font-bold text-white mb-2">Wait! Don't Build in the Dark.</h4>
                                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                                        70% of Enterprise AI projects fail due to poor architecture. Get the checklist our architects use to guarantee scalability.
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        {[
                                            "Zero-Trust Security Protocols",
                                            "LLM Orchestration Patterns",
                                            "Cost-Optimization Strategies"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                                                <CheckCircle2 size={16} className="text-primary" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                        <input
                                            type="email"
                                            placeholder="Enter your work email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder:text-slate-500 focus:border-primary focus:ring-0 outline-none"
                                        />
                                        <button
                                            type="submit"
                                            className="w-full py-3 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group/btn"
                                        >
                                            <Download size={18} />
                                            <span>Send Me the Blueprint</span>
                                            <Sparkles size={16} className="opacity-70 group-hover/btn:animate-pulse" />
                                        </button>
                                        <p className="text-[10px] text-center text-slate-500 mt-2">
                                            No spam. Unsubscribe anytime. High-density signals only.
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
