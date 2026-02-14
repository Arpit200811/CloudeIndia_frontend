"use client";

import { motion } from "framer-motion";
import { CheckCircle, Cloud, Rocket, Globe, PartyPopper } from "lucide-react";

export default function JourneyTimeline() {
    return (
        <div id="story" className="w-full max-w-[1200px] px-6 py-20 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div
                className="space-y-6"
                data-aos="fade-right"
            >
                <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-widest">Our Heritage</div>
                <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight text-[#111418]">Years of driving digital evolution</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Founded with a vision to simplify complex cloud infrastructures, CloudeIndia began in a small office in Lucknow with just three engineers. Today, we are a global leader in digital transformation.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                    Our journey has been defined by a relentless pursuit of innovation and a commitment to our clients' success. We don't just provide services; we build long-term partnerships that survive the rapidly changing technological landscape.
                </p>
                <div className="pt-4 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                        <CheckCircle size={24} className="text-primary" />
                        <span className="font-semibold text-[#111418]">ISO 27001 Certified</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Cloud size={24} className="text-primary" />
                        <span className="font-semibold text-[#111418]">AWS Premier Tier</span>
                    </div>
                </div>
            </div>
            <div
                className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
                data-aos="fade-left"
            >
                <div className="grid grid-cols-[48px_1fr] gap-x-4">
                    {/* 2022 */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex flex-col items-center gap-1"
                    >
                        <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center border-2 border-primary">
                            <Rocket size={20} />
                        </div>
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="w-[2px] bg-primary/30 h-16 origin-top"
                        ></motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex flex-1 flex-col pb-8"
                    >
                        <p className="text-primary text-sm font-bold uppercase tracking-widest">2022</p>
                        <p className="text-[#111418] text-lg font-bold leading-normal">Founded in Lucknow</p>
                        <p className="text-slate-500 text-sm">Starting with a core team of cloud enthusiasts focused on infrastructure migration.</p>
                    </motion.div>

                    {/* 2023 */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="flex flex-col items-center gap-1"
                    >
                        <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center border-2 border-primary">
                            <Globe size={20} />
                        </div>
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 1.8 }}
                            className="w-[2px] bg-primary/30 h-16 origin-top"
                        ></motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 1.4 }}
                        className="flex flex-1 flex-col pb-8"
                    >
                        <p className="text-primary text-sm font-bold uppercase tracking-widest">2023</p>
                        <p className="text-[#111418] text-lg font-bold leading-normal">Global Expansion</p>
                        <p className="text-slate-500 text-sm">Opened our first North India office and crossed 20+ enterprise clients.</p>
                    </motion.div>

                    {/* 2024 */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 2.2 }}
                        className="flex flex-col items-center gap-1"
                    >
                        <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center border-2 border-primary">
                            <Cloud size={20} />
                        </div>
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 2.8 }}
                            className="w-[2px] bg-primary/30 h-16 origin-top"
                        ></motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 2.4 }}
                        className="flex flex-1 flex-col pb-8"
                    >
                        <p className="text-primary text-sm font-bold uppercase tracking-widest">2024</p>
                        <p className="text-[#111418] text-lg font-bold leading-normal">Cloud Native Transition</p>
                        <p className="text-slate-500 text-sm">Pivoted to full-scale Kubernetes and Serverless solutions for the Fortune 500.</p>
                    </motion.div>

                    {/* 2025 */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 3.2 }}
                        className="flex flex-col items-center gap-1"
                    >
                        <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center border-2 border-primary">
                            <Rocket size={20} />
                        </div>
                        <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 3.8 }}
                            className="w-[2px] bg-primary/30 h-16 origin-top"
                        ></motion.div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 3.4 }}
                        className="flex flex-1 flex-col pb-8"
                    >
                        <p className="text-primary text-sm font-bold uppercase tracking-widest">2025</p>
                        <p className="text-[#111418] text-lg font-bold leading-normal">AI Integration & Automation</p>
                        <p className="text-slate-500 text-sm">Launched AI-powered solutions and automated workflows for enterprise clients.</p>
                    </motion.div>

                    {/* 2026 */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 4.2 }}
                        className="flex flex-col items-center gap-1"
                    >
                        <div className="size-10 rounded-full bg-primary text-white flex items-center justify-center border-2 border-primary">
                            <PartyPopper size={20} />
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 4.4 }}
                        className="flex flex-1 flex-col"
                    >
                        <p className="text-primary text-sm font-bold uppercase tracking-widest">2026</p>
                        <p className="text-[#111418] text-lg font-bold leading-normal">4th Year Milestone</p>
                        <p className="text-slate-500 text-sm">Celebrating our growth with over 25+ successful digital transformations and enterprise partnerships.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
