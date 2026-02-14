import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import StatsRibbon from "@/components/about/StatsRibbon";
import MissionVision from "@/components/about/MissionVision";
import AIInnovation from "@/components/about/AIInnovation";
import Differentiators from "@/components/about/Differentiators";
import JourneyTimeline from "@/components/about/JourneyTimeline";
import TeamRoles from "@/components/about/TeamRoles";
import LeadershipTeam from "@/components/about/LeadershipTeam";
import CompanyCulture from "@/components/about/CompanyCulture";
import AboutCTA from "@/components/about/AboutCTA";
import GlobalReachMap from "@/components/about/GlobalReachMap";

export const metadata: Metadata = {
    title: "About Us | The CloudeIndia Story",
    description: "Since 2022, CloudeIndia has been a leader in digital resilience and AI innovation. Meet the specialized team driving our engineering excellence.",
};

export default function AboutPage() {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
            <Navbar />
            <main className="flex flex-col items-center w-full pt-15">
                <AboutHero />
                <StatsRibbon />
                <MissionVision />
                <AIInnovation />
                <GlobalReachMap />
                <Differentiators />
                <JourneyTimeline />
                <TeamRoles />
                <LeadershipTeam />
                <CompanyCulture />
                <AboutCTA />
            </main>
            <Footer />
        </div>
    );
}
