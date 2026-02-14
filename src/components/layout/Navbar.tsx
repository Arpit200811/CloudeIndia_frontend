"use client";

import Link from "next/link";
import NextImage from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { HEADER_LINKS } from "@/config/navigation";
import UserProfile from "./UserProfile";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const pathname = usePathname();
    const isTransitioning = useRef(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Re-trigger entrance effect when passing the scroll threshold (~50px)
            if (currentScrollY > 50 && !isScrolled && !isTransitioning.current) {
                isTransitioning.current = true;
                setIsVisible(false);

                // Wait for the slide-up to fully finish (300ms) plus a tiny gap
                setTimeout(() => {
                    setIsScrolled(true);
                    setIsVisible(true);
                    isTransitioning.current = false;
                }, 350);
            }

            // Stabilization: Only reset when returning to the absolute top
            else if (currentScrollY <= 20 && isScrolled && !isTransitioning.current) {
                setIsScrolled(false);
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isScrolled]);

    return (
        <header className="fixed top-0 z-100 w-full">
            <motion.div
                initial={{ y: -100 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{
                    duration: isVisible ? 0.5 : 0.3, // Faster when hiding, smoother when showing
                    ease: [0.16, 1, 0.3, 1]
                }}
                className={`w-full transition-all duration-300 border-b bg-white/95 backdrop-blur-md ${isScrolled
                    ? "py-2 border-gray-200 shadow-sm"
                    : "py-3 border-gray-100"
                    }`}
            >
                <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3 group">
                        <NextImage
                            src="/logo-icon.png"
                            alt="CloudeIndia"
                            width={32}
                            height={32}
                            quality={100}
                            className="h-7 md:h-8 w-auto object-contain transition-all duration-300 mix-blend-multiply group-hover:scale-110"
                        />
                        <span className="text-xl md:text-2xl font-black tracking-tighter text-slate-900">
                            Cloude<span className="text-primary">India</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8 text-slate-600">
                        {HEADER_LINKS.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={`text-[13px] font-bold uppercase tracking-wider transition-colors relative group ${isActive ? 'text-primary' : 'hover:text-primary'}`}
                                >
                                    {link.label}
                                    <span className={`absolute -bottom-1.5 left-0 h-0.5 bg-primary transition-all ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-3">
                        {/* User Profile */}
                        <UserProfile />

                        <Link
                            href="/contact"
                            className="hidden sm:flex items-center justify-center px-5 h-9 rounded-lg font-black uppercase tracking-widest text-[10px] transition-all bg-primary text-white hover:scale-105 active:scale-95 border border-primary/20"
                        >
                            Contact
                        </Link>

                        {/* Mobile Menu Button */}
                        <button
                            aria-label="Toggle mobile menu"
                            className="md:hidden p-1.5 text-slate-600"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Overlay */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-white border-y border-gray-100 shadow-2xl p-6 flex flex-col gap-1 animate-in slide-in-from-top-4 duration-300">
                        {HEADER_LINKS.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-sm font-black text-slate-900 uppercase tracking-widest hover:text-primary transition-colors py-3.5 border-b border-gray-50 flex items-center justify-between group"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                                <span className="size-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                            </Link>
                        ))}

                        <Link
                            href="/contact"
                            className="mt-2 bg-primary hover:bg-primary/90 text-white text-center text-[10px] font-black uppercase tracking-[0.2em] h-12 rounded-xl transition-all flex items-center justify-center border border-primary/20"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Get Started
                        </Link>
                    </div>
                )}
            </motion.div>
        </header>
    );
}
