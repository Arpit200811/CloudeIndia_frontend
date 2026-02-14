"use client";

import { useEffect, useState } from "react";

export default function FogAnimation() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="absolute inset-0 z-0 overflow-hidden bg-[linear-gradient(to_bottom,#87CEEB,#E0F7FA)] pointer-events-none">
            {/* SVG Filters for Cloud Effect */}
            <svg className="hidden">
                <defs>
                    <filter id="cloud-filter">
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.012"
                            numOctaves="5"
                            seed="5"
                        />
                        <feColorMatrix type="saturate" values="0" />
                        <feComponentTransfer>
                            <feFuncA type="linear" slope="0.8" />
                            <feFuncR type="linear" slope="1.5" intercept="-0.2" />
                            <feFuncG type="linear" slope="1.5" intercept="-0.2" />
                            <feFuncB type="linear" slope="1.5" intercept="-0.2" />
                        </feComponentTransfer>
                        <feColorMatrix
                            values="1 0 0 0 1
                      0 1 0 0 1
                      0 0 1 0 1
                      0 0 0 1 -0.5"
                        />
                        <feGaussianBlur stdDeviation="6" />
                    </filter>
                </defs>
            </svg>

            {/* Layer 1: Slow Moving Background Clouds */}
            <div
                className="absolute inset-0 opacity-80"
                style={{
                    filter: "url(#cloud-filter)",
                    animation: "moveClouds 60s linear infinite",
                    background: "rgba(255, 255, 255, 0.4)",
                }}
            ></div>

            {/* Layer 2: Faster Foreground Clouds */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    filter: "url(#cloud-filter)",
                    animation: "moveClouds 40s linear infinite reverse",
                    background: "rgba(255, 255, 255, 0.3)",
                    transform: "scale(1.2)",
                }}
            ></div>

            {/* Sun Glow Overlay */}
            <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,rgba(255,255,255,0)_70%)] opacity-60 blur-3xl"></div>

            <style jsx>{`
        @keyframes moveClouds {
          0% {
            transform: translateX(-5%) scale(1.1);
          }
          50% {
            transform: translateX(5%) scale(1.15);
          }
          100% {
            transform: translateX(-5%) scale(1.1);
          }
        }
      `}</style>
        </div>
    );
}
