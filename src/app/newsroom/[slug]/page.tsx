import { ARTICLES } from "@/data/articles";
import { notFound } from "next/navigation";
import NextImage from "next/image";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, Facebook } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata(
    { params }: PageProps
): Promise<Metadata> {
    const { slug } = await params;
    const article = ARTICLES.find((a) => a.slug === slug);

    if (!article) {
        return {
            title: "Article Not Found | CloudeIndia",
        };
    }

    return {
        title: `${article.title} | CloudeIndia Newsroom`,
        description: article.summary,
        openGraph: {
            images: [article.image],
        },
    };
}

// Generate static params for all articles to boost build speed and SEO
export async function generateStaticParams() {
    return ARTICLES.map((article) => ({
        slug: article.slug,
    }));
}

export default async function ArticlePage({ params }: PageProps) {
    const { slug } = await params;
    const article = ARTICLES.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <main className="bg-white min-h-screen">
            <Navbar />

            <article className="pt-32 pb-20">
                {/* Hero Section */}
                <div className="max-w-[1000px] mx-auto px-6 lg:px-10 mb-12">
                    <Link href="/newsroom" className="inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-8 font-bold uppercase tracking-widest text-xs">
                        <ArrowLeft size={16} /> Back to Newsroom
                    </Link>

                    <div className="flex items-center gap-4 mb-6">
                        <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-wider">
                            {article.category}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500 text-xs font-medium">
                            <Clock size={14} /> {article.readTime}
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight mb-8 tracking-tight">
                        {article.title}
                    </h1>

                    <div className="flex items-center justify-between border-y border-slate-100 py-6">
                        <div className="flex items-center gap-4">
                            <div className="size-12 rounded-full bg-slate-200 overflow-hidden">
                                <NextImage
                                    src={article.image}
                                    alt={article.author}
                                    width={48}
                                    height={48}
                                    quality={100}
                                    className="size-12 rounded-full border-2 border-white object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 text-sm">{article.author}</p>
                                <p className="text-slate-500 text-xs">{article.role} • {article.date}</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button className="size-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-200 transition-all">
                                <Share2 size={18} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10 mb-16">
                    <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
                        <NextImage
                            src={article.image}
                            alt={article.title}
                            width={1200}
                            height={800}
                            quality={100}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900/20 to-transparent"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="max-w-[800px] mx-auto px-6 lg:px-10">
                    <div
                        className="prose prose-lg prose-slate prose-headings:font-black prose-p:text-slate-600 prose-a:text-blue-600 hover:prose-a:text-blue-700"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />

                    {/* Tags */}
                    <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-2">
                        {article.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 bg-slate-50 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-slate-100 transition-colors cursor-pointer">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}
