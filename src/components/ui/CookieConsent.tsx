"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, ShieldCheck, X } from "lucide-react";
import Link from "next/link";

export default function CookieConsent() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem("cloude_cookie_consent");
        if (!consent) {
            // Small delay to not overwhelm user immediately on load
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cloude_cookie_consent", "accepted");
        setIsVisible(false);
        // Here you would trigger analytics initialization if not already active
    };

    const handleDecline = () => {
        localStorage.setItem("cloude_cookie_consent", "declined");
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 right-6 z-50 max-w-sm w-full"
                >
                    <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6 shadow-2xl shadow-blue-900/20 overflow-hidden">
                        {/* Background Effects */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -ml-16 -mb-16 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 text-blue-400">
                                    <Cookie size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-white font-bold text-lg mb-1">Privacy Protocols</h3>
                                    <p className="text-slate-400 text-xs leading-relaxed">
                                        We use cookies to secure the grid and optimize your navigation vectors.
                                        Required for full mission capability.
                                    </p>
                                </div>
                                <button
                                    onClick={handleDecline}
                                    className="text-slate-500 hover:text-white transition-colors"
                                    aria-label="Close"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={handleDecline}
                                    className="flex-1 px-4 py-2.5 rounded-lg border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider hover:bg-slate-800 transition-all focus:ring-2 focus:ring-slate-500 focus:outline-none"
                                >
                                    Necessary Only
                                </button>
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 px-4 py-2.5 rounded-lg bg-blue-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-blue-500 shadow-lg shadow-blue-600/25 transition-all focus:ring-2 focus:ring-blue-500 focus:outline-none flex items-center justify-center gap-2 group"
                                >
                                    Accept All <ShieldCheck size={14} className="group-hover:scale-110 transition-transform" />
                                </button>
                            </div>

                            <div className="mt-4 text-center">
                                <Link href="/privacy" className="text-[10px] text-slate-500 hover:text-blue-400 underline decoration-slate-700 underline-offset-2 transition-colors">
                                    View Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
