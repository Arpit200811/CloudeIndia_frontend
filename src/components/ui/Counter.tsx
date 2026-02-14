"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface CounterProps {
    value: number;
    suffix?: string;
    duration?: number;
    decimals?: number;
}

export default function Counter({ value, suffix = "", duration = 2, decimals = 0 }: CounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: duration,
                ease: "easeOut",
                onUpdate(v) {
                    if (ref.current) {
                        ref.current.textContent = v.toFixed(decimals) + suffix;
                    }
                },
            });
            return () => controls.stop();
        }
    }, [isInView, value, suffix, duration, decimals]);

    return <span ref={ref}>0{suffix}</span>;
}
