import { ChevronDown, TrendingUp, ArrowRight, ShieldCheck, RefreshCw } from "lucide-react";
import Link from "next/link";
import NextImage from "next/image";

export default function CaseStudiesGrid() {
    return (
        <>
            <section className="py-20 max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div data-aos="fade-right">
                        <h2 className="text-3xl font-bold dark:text-white">Proven Results</h2>
                        <p className="text-gray-500 mt-2">Filter our projects by industry or service specialization</p>
                    </div>
                    <div className="flex flex-wrap gap-2" data-aos="fade-left">
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium">
                            All Projects
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#e0e4e8] text-sm font-medium hover:border-primary transition-all">
                            Fintech <ChevronDown size={16} />
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#e0e4e8] text-sm font-medium hover:border-primary transition-all">
                            Cloud Migration <ChevronDown size={16} />
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white border border-[#e0e4e8] text-sm font-medium hover:border-primary transition-all">
                            AI & ML <ChevronDown size={16} />
                        </button>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="0"
                        className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#f0f2f4]"
                    >
                        <div className="aspect-video relative overflow-hidden">
                            <NextImage
                                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
                                alt="AI Solutions"
                                width={800}
                                height={600}
                                quality={100}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all z-10"></div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-2 py-1 bg-blue-50 text-primary text-[10px] font-bold uppercase rounded">Fintech</span>
                                <div className="flex items-center gap-1 text-green-600 font-bold text-sm">
                                    <TrendingUp size={16} />
                                    40% Savings
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-primary transition-colors">Enterprise Cloud Migration for Fintech Giant</h3>
                            <p className="text-gray-600 text-sm mb-6 line-clamp-2">Migrating a legacy banking core to AWS with zero downtime and enhanced security protocols.</p>
                            <div className="flex items-center justify-between pt-4 border-t border-[#f0f2f4]">
                                <span className="text-xs font-semibold text-gray-500">99.99% Uptime</span>
                                <Link href="/contact" className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Read More <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Card 2 */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#f0f2f4]"
                    >
                        <div className="aspect-video relative overflow-hidden">
                            <NextImage
                                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                                alt="Cloud Infrastructure"
                                width={800}
                                height={600}
                                quality={100}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all z-10"></div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-2 py-1 bg-blue-50 text-primary text-[10px] font-bold uppercase rounded">E-commerce</span>
                                <div className="flex items-center gap-1 text-green-600 font-bold text-sm">
                                    <TrendingUp size={16} />
                                    2x Speed
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-primary transition-colors">Legacy Modernization for Global Retailer</h3>
                            <p className="text-gray-600 text-sm mb-6 line-clamp-2">Optimizing supply chain operations through AI-driven inventory management and automated scaling.</p>
                            <div className="flex items-center justify-between pt-4 border-t border-[#f0f2f4]">
                                <span className="text-xs font-semibold text-gray-500">35% Efficiency Gain</span>
                                <Link href="/contact" className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Read More <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Card 3 */}
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-[#f0f2f4]"
                    >
                        <div className="aspect-video relative overflow-hidden">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6a9jV2Qct_6S8xDtsGhcetWqT-hg9JPI270Ribr0RN-KVLLNpKovZqfKOK3nNSHk-_1wSAoPBY5yhFBcB_zSTclpEkVM1HOPmzls2njLNxkdDPUA_cUZ5OHBfCJs5YD4gmBxEwRgdzu_bj8Fo4mGDzgccldYURHIC8AXkXIoqLdI8ddyOGn0s-tcfm6On9UtSLodSNXNtO4Wv-1QNETahEV5StYWhYG2xI37vEDUE0u44YzpSRj_HeHA1OErYSnGkjsx2ziyp957q"
                                alt="AI-Driven Diagnostics"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all z-10"></div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-2 py-1 bg-blue-50 text-primary text-[10px] font-bold uppercase rounded">Healthcare</span>
                                <div className="flex items-center gap-1 text-green-600 font-bold text-sm">
                                    <ShieldCheck size={16} />
                                    HIPAA Ready
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-3 leading-snug group-hover:text-primary transition-colors">AI-Driven Diagnostics Data Lake</h3>
                            <p className="text-gray-600 text-sm mb-6 line-clamp-2">Building a secure, compliant data repository for real-time patient analytics and research.</p>
                            <div className="flex items-center justify-between pt-4 border-t border-[#f0f2f4]">
                                <span className="text-xs font-semibold text-gray-500">60% Faster Insights</span>
                                <Link href="/contact" className="text-primary text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                                    Read More <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 flex justify-center">
                    <button className="flex items-center gap-2 px-8 py-3 rounded-lg border-2 border-[#f0f2f4] font-bold hover:bg-gray-50 transition-all">
                        Load More Success Stories <RefreshCw size={18} />
                    </button>
                </div>
            </section>
        </>
    );
}
