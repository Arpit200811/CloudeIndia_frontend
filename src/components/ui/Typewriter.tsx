"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface TypewriterProps {
    text: string | string[];
    delay?: number;
    speed?: number;
    className?: string;
    loop?: boolean;
    cursorColor?: string;
}

export default function Typewriter({
    text,
    delay = 0,
    speed = 0.05,
    className = "",
    loop = false,
    cursorColor
}: TypewriterProps) {
    const [displayText, setDisplayText] = useState("");
    const baseText = Array.isArray(text) ? text[0] : text;

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const display = useTransform(rounded, (latest) => baseText.slice(0, latest));

    useEffect(() => {
        const controls = animate(count, baseText.length, {
            type: "tween",
            duration: baseText.length * speed,
            ease: "linear",
            delay: delay,
            repeat: loop ? Infinity : 0,
            repeatType: "reverse",
            repeatDelay: 2
        });
        return controls.stop;
    }, [baseText, delay, speed, loop, count]);

    return (
        <span className={className}>
            <motion.span>{display}</motion.span>
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                className={`inline-block w-[2px] h-[1em] ${cursorColor || "bg-current"} ml-1 align-middle`}
            />
        </span>
    );
}

