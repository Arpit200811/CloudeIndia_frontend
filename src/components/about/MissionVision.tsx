"use client";

import { motion } from "framer-motion";
import { Target, Eye, Rocket } from "lucide-react";

export default function MissionVision() {
    return (
        <section id="story" className="py-12 bg-white relative overflow-hidden">
            {/* Background Accents */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -z-10 skew-x-12 translate-x-1/2"></div>

            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Story Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-[10px] mb-2">
                            <Rocket size={14} />
                            <span>Our Story</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black text-[#111418] mb-6 leading-tight">
                            From Specialized Engineering to <span className="text-primary">Enterprise Authority</span>
                        </h2>
                        <div className="space-y-4 text-gray-600 text-base leading-relaxed font-light">
                            <p>
                                Founded in 2022, CloudeIndia was established with a clear mandate: to deliver high-integrity enterprise technology. What began as a team of passionate architects has evolved into a specialized collective of 7 elite engineers.
                            </p>
                            <p>
                                Throughout our journey, we have mastered the evolution from legacy systems to cloud-native microservices. Today, we stand as a cornerstone of digital innovation, enabling enterprises to scale with absolute confidence.
                            </p>
                        </div>
                    </motion.div>

                    {/* Mission/Vision Cards Side */}
                    <div className="grid gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="bg-white/40 backdrop-blur-3xl p-8 rounded-3xl shadow-2xl border border-white relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="size-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5">
                                <Target size={28} />
                            </div>
                            <h3 className="text-xl font-black text-[#111418] mb-3">Our Mission</h3>
                            <p className="text-gray-500 leading-relaxed uppercase tracking-wider text-[9px] font-bold mb-3">The Purpose</p>
                            <p className="text-gray-700 text-base leading-relaxed italic">
                                &quot;To empower organizations of all sizes to harness the exponential power of AI and Cloud, transforming complex challenges into seamless digital success.&quot;
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="bg-[#0f172a]/80 backdrop-blur-3xl p-8 rounded-3xl shadow-2xl border border-white/10 relative group overflow-hidden text-white"
                        >
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
                            <div className="size-14 bg-white/10 rounded-xl flex items-center justify-center text-primary mb-5">
                                <Eye size={28} />
                            </div>
                            <h3 className="text-xl font-black mb-3">Our Vision</h3>
                            <p className="text-primary/70 leading-relaxed uppercase tracking-wider text-[9px] font-bold mb-3">The Future</p>
                            <p className="text-gray-300 text-base leading-relaxed font-light">
                                To be the global standard for digital resilience, where every line of code we engineer contributes to a more efficient, secure, and intelligent world.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
