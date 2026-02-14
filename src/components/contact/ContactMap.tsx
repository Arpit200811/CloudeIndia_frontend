"use client";

import { MapPin, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactMap() {
    return (
        <section className="relative w-full h-[400px] bg-slate-50 overflow-hidden">
            {/* Map Embed */}
            <div className="absolute inset-0 group/map cursor-crosshair">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d222.35106374694502!2d80.97321544258656!3d26.915647077459628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDU0JzU2LjMiTiA4MMKwNTgnMjMuNiJF!5e0!3m2!1sen!2sin!4v1769847401017!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    className="w-full h-full transition-all duration-1000 ease-in-out"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* Clean Overlay */}
                <div className="absolute inset-0 bg-transparent pointer-events-none"></div>
            </div>

            {/* Premium Info Card */}
            <div className="absolute top-8 left-8 z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-[320px] backdrop-blur-md"
                >
                    <div className="size-12 bg-primary text-white rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-primary/30 group-hover:rotate-12 transition-transform">
                        <MapPin size={24} strokeWidth={2} />
                    </div>
                    <h5 className="text-xl font-black text-slate-900 mb-2 tracking-tight">Lucknow HQ</h5>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">
                        Tedhi Puliya, Vikas Nagar <br />
                        Lucknow, UP 226022
                    </p>
                    <Link
                        href="https://maps.google.com"
                        target="_blank"
                        className="flex items-center justify-center gap-3 w-full py-2.5 bg-slate-950 hover:bg-slate-800 text-white font-black rounded-lg transition-all text-sm uppercase tracking-widest"
                    >
                        <Navigation size={16} />
                        Get Directions
                    </Link>
                </motion.div>
            </div>

            {/* Bottom Right Status */}
            <div className="absolute bottom-8 right-8 z-10">
                <div className="bg-white/95 backdrop-blur-md px-6 py-3 rounded-full border border-white shadow-lg flex items-center gap-4">
                    <div className="size-3 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span className="text-[11px] font-black uppercase tracking-[0.15em] text-slate-800">Live Traffic Optimized</span>
                </div>
            </div>
        </section>
    );
}
