"use client";

import NextImage from "next/image";
import NoSSR from "@/components/common/NoSSR";

const clientLogos = [
    { name: "Microsoft", url: "https://www.vectorlogo.zone/logos/microsoft/microsoft-ar21.svg" },
    { name: "Google", url: "https://www.vectorlogo.zone/logos/google/google-ar21.svg" },
    { name: "Amazon", url: "https://www.vectorlogo.zone/logos/amazon/amazon-ar21.svg" },
    { name: "IBM", url: "https://www.vectorlogo.zone/logos/ibm/ibm-ar21.svg" },
    { name: "Oracle", url: "https://www.vectorlogo.zone/logos/oracle/oracle-ar21.svg" },
    { name: "Intel", url: "https://www.vectorlogo.zone/logos/intel/intel-ar21.svg" },
    { name: "Meta", url: "https://www.vectorlogo.zone/logos/facebook/facebook-ar21.svg" },
];

export default function ClientMarquee() {
    return (
        <section className="py-8 bg-white border-b border-gray-100 overflow-hidden">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <p className="text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-8">Leveraging Global Technology Ecosystems</p>

                <NoSSR>
                    <div className="relative flex overflow-x-hidden">
                        <div className="flex animate-marquee-fast whitespace-nowrap gap-16 lg:gap-32 items-center opacity-80">
                            {[...clientLogos, ...clientLogos, ...clientLogos].map((client, index) => (
                                <NextImage
                                    key={index}
                                    src={client.url}
                                    alt={client.name}
                                    width={120}
                                    height={60}
                                    quality={100}
                                    unoptimized
                                    className="h-12 w-auto object-contain opacity-600 hover:opacity-100 transition-opacity"
                                />
                            ))}
                        </div>
                    </div>
                    <style jsx>{`
                        .animate-marquee-fast {
                            animation: marquee 40s linear infinite;
                        }
                        @keyframes marquee {
                            0% { transform: translateX(0); }
                            100% { transform: translateX(-50%); }
                        }
                    `}</style>
                </NoSSR>
            </div>
        </section>
    );
}

