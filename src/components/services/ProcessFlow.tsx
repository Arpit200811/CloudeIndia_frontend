"use client";

import { motion } from "framer-motion";
import { Search, Map, Settings, CheckCircle } from "lucide-react";

export default function ProcessFlow() {
    const steps = [
        {
            icon: Search,
            title: "1. Discovery",
            description: "Comprehensive auditing and infrastructure planning.",
            delay: 0.3
        },
        {
            icon: Map,
            title: "2. Strategy",
            description: "Custom roadmapping and solution architecture.",
            delay: 1.5
        },
        {
            icon: Settings,
            title: "3. Implementation",
            description: "Agile execution with continuous delivery focus.",
            delay: 2.7
        },
        {
            icon: CheckCircle,
            title: "4. Support",
            description: "24/7 proactive monitoring and management.",
            delay: 3.9
        }
    ];

    return (
        <section className="mb-16">
            <div
                className="text-center mb-10"
                data-aos="fade-down"
            >
                <h2 className="text-3xl font-bold mb-4 text-[#111418]">Our Proven Methodology</h2>
                <p className="text-[#617589] dark:text-gray-400 max-w-2xl mx-auto">From initial audit to long-term support, we ensure your digital transformation is smooth and impactful.</p>
            </div>
            <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 px-4">
                {/* Animated Connector Lines (Desktop) */}
                <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 z-0">
                    {/* Line segments that animate with icons and text */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: steps[0].delay }}
                        className="absolute left-0 w-1/3 h-full bg-primary/30 origin-left"
                    />
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: steps[1].delay }}
                        className="absolute left-1/3 w-1/3 h-full bg-primary/30 origin-left"
                    />
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: steps[2].delay }}
                        className="absolute left-2/3 w-1/3 h-full bg-primary/30 origin-left"
                    />
                </div>

                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center md:w-1/4">
                            {/* Icon with synchronized animation */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 1,
                                    delay: step.delay,
                                    type: "spring",
                                    stiffness: 150
                                }}
                                className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white mb-6 border-8 border-white shadow-md"
                            >
                                <Icon size={30} />
                            </motion.div>

                            {/* Text content with synchronized animation */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: step.delay }}
                            >
                                <h4 className="text-lg font-bold mb-2 text-[#111418]">{step.title}</h4>
                                <p className="text-sm text-[#617589]">{step.description}</p>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
