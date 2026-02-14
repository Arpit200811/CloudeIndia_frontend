import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServicesHero from "@/components/services/ServicesHero";
import DetailedServices from "@/components/services/DetailedServices";
import ProcessFlow from "@/components/services/ProcessFlow";
import ServicesCTA from "@/components/services/ServicesCTA";
import TechTicker from "@/components/services/TechTicker";

export const metadata: Metadata = {
    title: "Engineering Services | GenAI, Cloud & Full-Stack Development",
    description: "Enterprise-grade digital engineering. From sub-second latency microservices to sovereign cloud deployments and AI-first product ecosystems.",
};

export default function ServicesPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
            <Navbar />
            <main className="w-full pt-15">
                <ServicesHero />
                <div className="max-w-[1280px] mx-auto px-6 lg:px-10 pb-12">
                    <DetailedServices />
                    <ProcessFlow />
                    <TechTicker />
                    <ServicesCTA />
                </div>
            </main>
            <Footer />
        </div>
    );
}
