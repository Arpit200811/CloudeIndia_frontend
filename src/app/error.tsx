"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("System Malfunction:", error);
    }, [error]);

    return (
        <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden text-center px-6 font-sans">
            {/* Background Effects (Red Alert Theme) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.05)_0%,transparent_70%)]"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(239,68,68,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(239,68,68,0.02)_1px,transparent_1px)] bg-size-[40px_40px]"></div>

            {/* Central Animated Icon */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8 relative"
            >
                <div className="size-32 md:size-40 rounded-full bg-red-950/30 border-2 border-red-500/20 flex items-center justify-center shadow-[0_0_50px_rgba(239,68,68,0.2)]">
                    <AlertTriangle size={64} className="text-red-500 animate-pulse" />
                </div>
            </motion.div>

            {/* Content */}
            <div className="relative z-10 max-w-xl">
                <div className="inline-block px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                    Critical System Failure
                </div>

                <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
                    PROTOCOL <span className="text-red-500">INTERRUPTED</span>
                </h1>

                <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
                    We've detected a specialized anomaly in the current operation. The navigation grid has been destabilized.
                    <br className="hidden md:block" />
                    Please re-initialize the sequence or return to the main dashboard.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={reset}
                        className="px-8 py-3.5 bg-red-600 text-white font-bold rounded-xl hover:bg-red-500 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-600/20"
                    >
                        <RefreshCw size={18} />
                        Re-Initialize System
                    </button>

                    <Link
                        href="/"
                        className="px-8 py-3.5 bg-transparent border border-slate-700 text-slate-300 font-bold rounded-xl hover:bg-slate-800 hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                        <Home size={18} />
                        Return to Base
                    </Link>
                </div>

                {/* Tech Details (Optional, nice for "Engineering" company) */}
                <div className="mt-12 pt-6 border-t border-slate-800/50">
                    <p className="text-slate-600 font-mono text-xs">
                        Error Code: {error.digest || "UNKNOWN_VECTOR"}
                    </p>
                </div>
            </div>
        </div>
    );
}
