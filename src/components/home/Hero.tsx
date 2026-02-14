"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import NextImage from "next/image";
import Typewriter from "@/components/ui/Typewriter";

export default function Hero() {
    return (
        <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-linear-to-r from-sky-400/50 via-blue-400/30 to-transparent z-10"></div>
                <NextImage
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxBWI8T417WtX2N0IgRfMYLbpbaiRZF-fYGZUUNuAvTx07zVT7Ip3CmDzuXQSdCKhdTZQ3jO11oTUT_P5wNierAdIAK76z0Haq8PDbqy-1RYrziYDDb8U4_C74h9YqFdMG2Tu3d1eOKd3xWoFY1s5dXM_fskRSvsW1RT-gKfFnkhmL33bXx4MEVS1cFuW0YKGaPe0cNjMysKLfcXNDm0qRrizWLCrgCFFxiIaGLjAggj09k5Qi1WvCS8zC1387k_A-CPgDbvNuxaMo"
                    alt="CloudeIndia Hero"
                    fill
                    priority
                    quality={90}
                    className="object-cover"
                />
            </div>

            <div className="relative z-20 max-w-[1280px] w-full px-6 lg:px-10 py-12 text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-[600px] flex flex-col gap-3"
                >
                    <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-sm w-fit">
                        <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-[9px] font-bold uppercase tracking-wider">Celebrating 4 Years</span>
                    </div>

                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                        Engineering High-Impact <br />
                        <span className="text-light-100">
                            <Typewriter text="Software Solutions" speed={0.15} cursorColor="bg-sky-300" />
                        </span>
                    </h1>

                    <p className="text-sm md:text-base text-light-100 max-w-md font-light leading-relaxed">
                        Empowering enterprises with resilient cloud architectures and mission-critical engineering excellence.
                    </p>

                    <div className="flex flex-wrap gap-2 mt-2">
                        <Link
                            href="/solutions"
                            className="h-9 px-5 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-all flex items-center justify-center border border-primary/20 text-xs"
                        >
                            Our Solutions
                        </Link>
                        <Link
                            href="/case-studies"
                            className="h-9 px-5 bg-white/10 hover:bg-white/20 text-white font-bold border border-white/30 rounded-lg backdrop-blur-sm transition-all flex items-center justify-center text-xs"
                        >
                            Case Studies
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
