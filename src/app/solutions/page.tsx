import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SolutionsHero from "@/components/solutions/SolutionsHero";
import IndustrySections from "@/components/solutions/IndustrySections";
import SolutionsCTA from "@/components/solutions/SolutionsCTA";

export const metadata: Metadata = {
    title: "Industry Solutions | Scalable Enterprise Platforms",
    description: "Mission-critical solutions for Fintech, Healthcare, and Logistics. Deploying resilient, high-availability architecture for large-scale institutional operations.",
};

export default function Solutions() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
            <Navbar />
            <main className="w-full">
                <SolutionsHero />
                <IndustrySections />
                <SolutionsCTA />
            </main>
            <Footer />
        </div>
    );
}
