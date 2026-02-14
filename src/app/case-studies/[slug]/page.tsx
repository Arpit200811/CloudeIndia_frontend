import { CASE_STUDIES } from "@/data/caseStudies";
import { notFound } from "next/navigation";
import NextImage from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Cpu, BarChart3, Globe, Shield } from "lucide-react";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {
    const { slug } = await params;
    const study = CASE_STUDIES.find((s) => s.slug === slug);

    if (!study) {
        return {
            title: "Case Study Not Found | CloudeIndia",
        };
    }

    return {
        title: `${study.title} | CloudeIndia Case Studies`,
        description: study.summary,
    };
}

export async function generateStaticParams() {
    return CASE_STUDIES.map((study) => ({
        slug: study.slug,
    }));
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const study = CASE_STUDIES.find((s) => s.slug === slug);

    if (!study) {
        notFound();
    }

    return (
        <main className="bg-slate-50 min-h-screen">
            <Navbar />

            <article className="pt-32 pb-20">
                {/* Header */}
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10 mb-16">
                    <Link href="/case-studies" className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 font-bold uppercase tracking-widest text-xs">
                        <ArrowLeft size={16} /> Back to Work
                    </Link>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-black text-xs uppercase tracking-widest mb-6 inline-block">
                                {study.industry}
                            </span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6 tracking-tight">
                                {study.title}
                            </h1>
                            <p className="text-xl text-slate-500 font-medium leading-relaxed mb-8">
                                {study.summary}
                            </p>

                            <div className="grid grid-cols-3 gap-6">
                                {study.stats.map((stat, i) => (
                                    <div key={i} className="bg-white p-4 rounded-2xl border border-slate-200 shadow-lg shadow-slate-200/50">
                                        <p className="text-2xl md:text-3xl font-black text-blue-600 mb-1">{stat.value}</p>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{stat.label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-blue-900/20 aspect-video lg:aspect-square">
                            <NextImage src={study.image} alt={study.title} width={1200} height={800} quality={100} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
                        </div>
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="max-w-[1000px] mx-auto px-6 lg:px-10">
                    <div className="grid md:grid-cols-2 gap-12 mb-20">
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                            <div className="size-12 rounded-2xl bg-red-100 flex items-center justify-center text-red-600 mb-6">
                                <Shield size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">The Challenge</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                {study.challenge}
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm">
                            <div className="size-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 mb-6">
                                <Cpu size={24} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4">Our Solution</h3>
                            <p className="text-slate-600 leading-relaxed font-medium">
                                {study.solution}
                            </p>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-black text-slate-900 mb-8 text-center">Technologies Deployed</h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {study.techStack.map((tech) => (
                                <span key={tech} className="px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm shadow-lg shadow-slate-900/20">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Impact List */}
                    <div className="bg-blue-600 rounded-[3rem] p-12 text-white relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-4xl font-black mb-8">Business Impact</h2>
                            <ul className="space-y-6">
                                {study.impact.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4">
                                        <CheckCircle2 className="shrink-0 text-blue-200 mt-1" size={24} />
                                        <span className="text-lg md:text-xl font-medium leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
