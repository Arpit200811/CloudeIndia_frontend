"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SolutionsCTA() {
    return (
        <section className="bg-[#0f172a] rounded-[3rem] overflow-hidden relative mb-24 mx-6 lg:mx-10">
            {/* Background highlights */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="relative z-10 px-8 py-20 md:py-32 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-3xl"
                >
                    <h2 className="text-white text-4xl md:text-6xl font-black mb-8 leading-tight">
                        Need a <span className="text-primary italic">Custom</span> Solution?
                    </h2>
                    <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed">
                        Every industry has unique challenges. If our standard solutions don't fit your exact needs, our engineering team is ready to architect a fully bespoke platform for your enterprise.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link
                            href="/contact"
                            className="flex items-center gap-2 h-16 px-10 bg-primary hover:bg-primary/90 text-white font-bold rounded-2xl transition-all group text-lg border border-primary/20"
                        >
                            Request a Consult
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/case-studies"
                            className="flex items-center justify-center h-16 px-10 bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 rounded-2xl backdrop-blur-sm transition-all text-lg"
                        >
                            View Case Studies
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
