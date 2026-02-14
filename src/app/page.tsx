import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import TechStack from "@/components/home/TechStack";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import Stats from "@/components/home/Stats";
import ClientMarquee from "@/components/home/ClientMarquee";

export const metadata: Metadata = {
  title: "CloudeIndia | Mission-Critical AI & Cloud Engineering",
  description: "Global engineering collective specializing in zero-trust architectures, GenAI orchestration, and high-performance enterprise software. Architecting resilience since 2022.",
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="grow pt-15">
        <Hero />
        <ClientMarquee />
        <Services />
        <Industries />
        <WhyChooseUs />
        <TechStack />
        <FeaturedProjects />
        <Stats />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
