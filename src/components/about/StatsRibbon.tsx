"use client";

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
    { label: "Years of Excellence", value: 4, suffix: "" },
    { label: "Projects Delivered", value: 25, suffix: "+" },
    { label: "Team Members", value: 7, suffix: "" },
    { label: "Global Offices", value: 1, suffix: "" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10px" });
    const spring = useSpring(0, { mass: 1, stiffness: 30, damping: 20 });
    const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

    useEffect(() => {
        if (isInView) {
            spring.set(value);
        }
    }, [isInView, spring, value]);

    return (
        <span ref={ref} className="flex items-center">
            <motion.span>{display}</motion.span>
            {suffix}
        </span>
    );
}

export default function StatsRibbon() {
    return (
        <div className="w-full bg-white border-y border-slate-100 py-6 relative z-30">
            <div className="max-w-[1280px] px-6 lg:px-10 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="flex flex-col items-center md:items-start text-center md:text-left"
                        >
                            <p className="text-primary text-3xl md:text-4xl font-black tracking-tighter mb-1 flex items-center">
                                <Counter value={stat.value} suffix={stat.suffix} />
                            </p>
                            <p className="text-gray-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
