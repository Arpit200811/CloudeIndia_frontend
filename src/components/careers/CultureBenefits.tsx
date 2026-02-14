import { Users, Globe, Heart, Cpu, GraduationCap, Clock } from "lucide-react";

export default function CultureBenefits() {
    const benefits = [
        { icon: Users, title: "Mentorship", desc: "Learn from industry veterans with years of specialized experience in digital strategy." },
        { icon: Globe, title: "Global Projects", desc: "Work on large-scale digital transformation for Fortune 500 clients worldwide." },
        { icon: Heart, title: "Wellness Program", desc: "Comprehensive health and mental wellness support for all team members." },
        { icon: Cpu, title: "Cutting-Edge Tech", desc: "Get hands-on with the latest cloud platforms and AI-driven infrastructure." },
        { icon: GraduationCap, title: "Continuous Learning", desc: "Regular internal workshops and full certification reimbursement programs." },
        { icon: Clock, title: "Flexible Work", desc: "Maintain healthy work-life balance with our hybrid and remote options." },
    ];

    return (
        <section className="mb-20">
            <div
                className="flex flex-col gap-4 mb-10"
                data-aos="fade-up"
            >
                <h2 className="text-primary text-sm font-bold uppercase tracking-widest">Why CloudeIndia?</h2>
                <h1 className="text-[#111418] dark:text-white text-3xl font-black leading-tight md:text-4xl">
                    Our Culture & Benefits
                </h1>
                <p className="text-[#617589] dark:text-gray-400 text-lg font-normal leading-normal max-w-[720px]">
                    We provide an environment where innovation thrives and talent is nurtured through global exposure, continuous growth, and holistic wellness.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                    <div
                        key={index}
                        data-aos="zoom-in"
                        data-aos-delay={index * 50}
                        className="flex flex-col gap-4 rounded-xl border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-background-dark p-6 transition-all hover:border-primary/50"
                    >
                        <div className="text-primary">
                            <benefit.icon size={40} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-[#111418] dark:text-white text-xl font-bold">{benefit.title}</h2>
                            <p className="text-[#617589] dark:text-gray-400 text-base">{benefit.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
