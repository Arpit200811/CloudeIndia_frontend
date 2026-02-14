"use client";

import Link from "next/link";
import NextImage from "next/image";
import { Send } from "lucide-react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/config/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid Email',
                text: 'Please enter a valid email address',
                confirmButtonColor: '#3B82F6',
            });
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/newsletter/subscribe`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Subscribed!',
                    text: data.message || 'Successfully subscribed to our newsletter!',
                    confirmButtonColor: '#3B82F6',
                    timer: 3000,
                });
                setEmail('');
            } else {
                throw new Error(data.message || 'Subscription failed');
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops!',
                text: error instanceof Error ? error.message : 'Something went wrong. Please try again.',
                confirmButtonColor: '#3B82F6',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <footer className="relative bg-[#F8FAFC] text-slate-900 border-t border-slate-200 overflow-hidden pt-8 pb-4">
            {/* Creative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-linear-to-br from-primary/5 via-blue-100/20 to-transparent rounded-full blur-[80px] opacity-60" />
                <div className="absolute bottom-[10%] -left-[10%] w-[500px] h-[500px] bg-linear-to-tr from-purple-100/30 via-primary/5 to-transparent rounded-full blur-[80px] opacity-60" />
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/30 to-transparent" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:30px_30px] opacity-[0.02]" />
            </div>

            <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 mb-8">

                    {/* Brand & Identity Column (Spans 4) */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <Link href="/" className="relative flex items-center gap-3 group w-fit">
                            <NextImage
                                src="/logo-icon.png"
                                alt="CloudeIndia"
                                width={36}
                                height={36}
                                quality={100}
                                className="h-9 w-auto object-contain mix-blend-multiply transition-transform group-hover:scale-110 duration-500"
                            />
                            <span className="text-2xl font-black tracking-tighter text-slate-900">
                                Cloude<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">India</span>
                            </span>
                        </Link>

                        <div className="bg-white/60 backdrop-blur-md rounded-2xl p-4 border border-slate-200 transition-all duration-300 hover:border-primary/30">
                            <p className="text-slate-600 text-sm leading-relaxed font-medium">
                                Leading the digital frontier with high-impact software solutions. A legacy of excellence in driving enterprise success since 2022.
                            </p>
                            <div className="mt-2 pt-2 border-t border-slate-100">
                                <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider mb-0.5">Headquarters</p>
                                <p className="text-sm text-slate-700">Tedhi Puliya, Vikas Nagar Sector A, Lucknow 226022</p>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-2 md:col-span-4 mt-2 lg:mt-0">
                        <h5 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                            <span className="w-4 h-1 bg-primary rounded-full"></span> Services
                        </h5>
                        <ul className="flex flex-col gap-2">
                            {FOOTER_LINKS.services.map((link) => (
                                <li key={link.label}>
                                    <Link className="group flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors" href={link.href}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-primary transition-colors" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-2 md:col-span-4 mt-2 lg:mt-0">
                        <h5 className="font-bold text-sm text-slate-900 mb-3 flex items-center gap-2">
                            <span className="w-4 h-1 bg-primary rounded-full"></span> Company
                        </h5>
                        <ul className="flex flex-col gap-2">
                            {FOOTER_LINKS.company.map((link) => (
                                <li key={link.label}>
                                    <Link className="group flex items-center gap-2 text-sm text-slate-500 hover:text-primary transition-colors" href={link.href}>
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-primary transition-colors" />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link.label}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter & Socials */}
                    <div className="lg:col-span-4 flex flex-col gap-4">
                        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-5 text-white border border-slate-700 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full blur-[30px] -mr-6 -mt-6 transition-transform duration-700 group-hover:scale-150" />
                            <h5 className="font-bold text-base mb-1.5 relative z-10">Stay Updated</h5>
                            <p className="text-slate-300 text-xs mb-3 relative z-10">Insights into the future of enterprise tech delivered to your inbox.</p>
                            <form onSubmit={handleNewsletterSubmit} className="flex gap-2 relative z-10">
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    disabled={isSubmitting}
                                    className="flex-1 bg-white/10 border border-white/10 rounded-lg px-3 h-9 text-sm text-white placeholder:text-slate-400 focus:bg-white/20 focus:outline-none transition-all backdrop-blur-sm disabled:opacity-50"
                                    placeholder="your@email.com"
                                    type="email"
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    aria-label="Subscribe"
                                    className="bg-white text-slate-900 h-9 w-9 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-slate-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send size={14} className={isSubmitting ? 'animate-pulse' : ''} />
                                </button>
                            </form>
                        </div>
                        <div className="flex gap-3 items-center">
                            <span className="text-sm font-semibold text-slate-500">Connect with us:</span>
                            <div className="flex gap-2.5">
                                {SOCIAL_LINKS.map((link, i) => {
                                    const Icon = link.icon;
                                    return (
                                        <Link key={i} className="w-8 h-8 flex items-center justify-center rounded-full bg-white border border-slate-200 text-slate-500 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300" href={link.href} aria-label={link.label}>
                                            <Icon size={14} />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Static Partner Logos Section */}
                <div className="w-full py-6 border-t border-slate-100 mb-4 bg-slate-50/50 backdrop-blur-sm rounded-xl">
                    <p className="text-center text-[11px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-6">Accredited & Recognized By</p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 px-4">
                        {[
                            '/assets/images/msme-logo.jpeg',
                            '/assets/images/GST-logo.png',
                            '/assets/images/zem-logo.png',
                            '/assets/images/startupindia.png',
                            '/assets/images/digital.png',
                        ].map((src, idx) => (
                            <div key={idx} className="h-12 w-auto flex justify-center transition-all duration-300 hover:scale-110 cursor-pointer text-center">
                                <NextImage src={src} alt="Partner Badge" width={120} height={60} quality={100} className="h-full w-auto object-contain" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-3 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-slate-500">
                    <div className="flex flex-col gap-0.5 text-center md:text-left">
                        <p className="font-semibold text-slate-700">© 2026 CloudeIndia Technologies Private Limited. All rights reserved.</p>
                        <p className="text-xs text-slate-400 max-w-xl">
                            All logos and trademarks are the property of their respective owners. Their use does not imply endorsement, partnership, or direct affiliation.
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {FOOTER_LINKS.legal.map((link) => (
                            <Link key={link.label} className="hover:text-primary font-medium transition-colors" href={link.href}>{link.label}</Link>
                        ))}
                    </div>
                </div>
            </div>

        </footer>
    );
}
