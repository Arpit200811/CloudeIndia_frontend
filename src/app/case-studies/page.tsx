import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import CreativeCaseStudies from "@/components/case-studies/CreativeCaseStudies";
import CaseStudiesCTA from "@/components/case-studies/CaseStudiesCTA";

export const metadata: Metadata = {
    title: "Case Studies | Engineering Impact & Global Architecture",
    description: "Deep-dive into our specialized engineering projects. From zero-trust core migrations to AI-powered supply chain optimization reaching global scale.",
};

export default function CaseStudiesPage() {
    return (
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-slate-50 transition-colors">
            <Navbar />
            <main className="grow pt-15">
                <CaseStudiesHero />
                <CreativeCaseStudies />
                <CaseStudiesCTA />
            </main>
            <Footer />
        </div>
    );
}
