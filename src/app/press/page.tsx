import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Download, Copy, Check } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Press & Media Kit | CloudeIndia",
    description: "Official brand assets, logos, and media resources for CloudeIndia.",
};

export default function PressPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />
            <div className="pt-32 pb-20">
                <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
                    <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
                        Media <span className="text-blue-600">Kit</span>
                    </h1>
                    <p className="text-xl text-slate-500 mb-12 max-w-2xl leading-relaxed">
                        Download official logos, photos, and brand guidelines. Help us tell the story of India's digital transformation.
                    </p>

                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Logo Section */}
                        <div className="p-8 rounded-[2.5rem] border border-slate-200 bg-slate-50">
                            <h2 className="text-2xl font-bold mb-6">Brand Logos</h2>
                            <div className="space-y-6">
                                <div className="p-6 bg-white rounded-2xl border border-slate-100 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 bg-blue-600 rounded-lg"></div>
                                        <span className="font-bold text-slate-900">Primary Logo</span>
                                    </div>
                                    <button className="text-sm font-bold text-blue-600 flex items-center gap-2 hover:underline">
                                        <Download size={16} /> SVG
                                    </button>
                                </div>
                                <div className="p-6 bg-slate-900 rounded-2xl border border-slate-800 flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div className="size-10 bg-white rounded-lg"></div>
                                        <span className="font-bold text-white">Dark Mode</span>
                                    </div>
                                    <button className="text-sm font-bold text-white flex items-center gap-2 hover:underline">
                                        <Download size={16} /> PNG
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Boilerplate */}
                        <div className="p-8 rounded-[2.5rem] border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
                            <h2 className="text-2xl font-bold mb-6">About CloudeIndia</h2>
                            <div className="prose prose-slate bg-slate-50 p-6 rounded-2xl border border-slate-100 text-sm mb-6">
                                <p>
                                    "CloudeIndia is a premier software engineering collective based in Lucknow, specializing in Generative AI, Cloud Architecture, and Enterprise Digital Transformation. Since 2022, we have empowered top-tier organizations to scale their digital infrastructure."
                                </p>
                            </div>
                            <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-slate-800 transition-all">
                                <Copy size={18} /> Copy Boilerplate
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
