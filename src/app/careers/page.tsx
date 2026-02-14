import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CareersHero from "@/components/careers/CareersHero";
import OpenPositions from "@/components/careers/OpenPositions";
import LifeAtCloude from "@/components/careers/LifeAtCloude";
import InternshipProgram from "@/components/careers/InternshipProgram";

export const metadata: Metadata = {
    title: "Careers | Join the Engineering Collective",
    description: "Build mission-critical systems at global scale. Explore open engineering roles and our path to principal architect program.",
};

export default function CareersPage() {
    return (
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden bg-slate-50">
            <Navbar />
            <main className="grow">
                <CareersHero />
                <OpenPositions />
                <LifeAtCloude />
                <InternshipProgram />
            </main>
            <Footer />
        </div>
    );
}
