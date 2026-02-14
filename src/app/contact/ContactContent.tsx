"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
import { motion } from "framer-motion";

export default function ContactContent() {
    return (
        <div className="flex flex-col min-h-screen w-full bg-white font-display text-slate-900 transition-colors duration-300">
            <Navbar />

            <main className="flex-1 flex flex-col pt-15">
                {/* PART 1: Dark Creative Hero */}
                <ContactHero />

                {/* PART 2: Unique Immersive Body Section */}
                <section className="py-4 bg-white relative z-20 overflow-hidden">
                    {/* Architectural Grid Background */}
                    <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, #ccc 1px, transparent 1px), linear-gradient(to bottom, #ccc 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>

                    <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 relative z-10">
                        <div className="flex flex-col gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                            >
                                <ContactInfo />
                            </motion.div>

                            <motion.div
                                id="contact-form"
                                initial={{ opacity: 0, scale: 0.98 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2 }}
                            >
                                <ContactForm />
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* PART 3: Map Section */}
                <ContactMap />

                {/* PART 4: Final CTA Banner */}
                <section className="py-8 bg-white">
                    <div className="max-w-[1100px] mx-auto px-6">
                        <motion.div
                            whileInView={{ opacity: 1, y: 0 }}
                            initial={{ opacity: 0, y: 20 }}
                            transition={{ duration: 0.8 }}
                            className="bg-slate-950 rounded-[2.5rem] p-10 md:p-12 text-center text-white relative overflow-hidden"
                        >
                            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 leading-none">
                                Ready to Architect <br />
                                <span className="text-primary italic">Your Future?</span>
                            </h2>
                            <p className="text-slate-400 text-base max-w-xl mx-auto mb-8 font-medium leading-relaxed">
                                Book a 30-minute strategy call with our cloud architects and product engineers. No pitch, just a high-velocity collaborative session.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="#contact-form" className="px-10 py-4 bg-primary text-white font-black rounded-2xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 text-sm uppercase tracking-widest">
                                    Book Strategy Call
                                </Link>
                                <Link href="/services" className="px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-black border border-white/10 rounded-2xl backdrop-blur-sm transition-all text-sm uppercase tracking-widest">
                                    Explore Services
                                </Link>
                            </div>

                            {/* Abstract Blob Decorations */}
                            <div className="absolute -top-32 -left-32 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
                            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-[120px] pointer-events-none"></div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
