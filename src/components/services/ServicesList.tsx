"use client";

import Link from "next/link";
import { Cloud, Brain, Code, Building, ShieldCheck, Headset, ArrowRight } from "lucide-react";

export default function ServicesList() {
    return (
        <>
            <div
                className="mb-8"
                data-aos="fade-down"
            >
                <h2 className="text-3xl font-bold tracking-tight mb-2 text-[#111418]">Our Digital Expertise</h2>
                <div className="h-1 w-20 bg-primary rounded-full"></div>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
                {/* Cloud Migration */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="0"
                    className="bg-white p-8 rounded-xl border border-[#f0f2f4] hover:border-primary/50 transition-all group"
                >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Cloud size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#111418]">Cloud Migration</h3>
                    <p className="text-[#617589] mb-6 leading-relaxed">
                        Accelerate your transition to Azure, AWS, or Google Cloud with zero-downtime migration strategies and cost optimization.
                    </p>
                    <Link href="/contact" className="text-primary font-bold inline-flex items-center gap-2 group/link">
                        Learn More
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
                {/* AI/ML Implementation */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="bg-white p-8 rounded-xl border border-[#f0f2f4] hover:border-primary/50 transition-all group"
                >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Brain size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#111418]">AI/ML Implementation</h3>
                    <p className="text-[#617589] mb-6 leading-relaxed">
                        Harness predictive analytics and generative AI to automate workflows and uncover deep business insights.
                    </p>
                    <Link href="/contact" className="text-primary font-bold inline-flex items-center gap-2 group/link">
                        Learn More
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
                {/* Custom App Development */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="bg-white p-8 rounded-xl border border-[#f0f2f4] hover:border-primary/50 transition-all group"
                >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Code size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#111418]">Custom App Development</h3>
                    <p className="text-[#617589] mb-6 leading-relaxed">
                        Build high-performance, scalable web and mobile applications tailored to your specific business requirements and user needs.
                    </p>
                    <Link href="/contact" className="text-primary font-bold inline-flex items-center gap-2 group/link">
                        Learn More
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
                {/* Enterprise Software */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="bg-white p-8 rounded-xl border border-[#f0f2f4] hover:border-primary/50 transition-all group"
                >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Building size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#111418]">Enterprise Software</h3>
                    <p className="text-[#617589] mb-6 leading-relaxed">
                        Modernize legacy systems with robust ERP and CRM solutions designed for large-scale corporate efficiency.
                    </p>
                    <Link href="/contact" className="text-primary font-bold inline-flex items-center gap-2 group/link">
                        Learn More
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
                {/* Cyber Security */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="bg-white p-8 rounded-xl border border-[#f0f2f4] hover:border-primary/50 transition-all group"
                >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                        <ShieldCheck size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#111418]">Cyber Security</h3>
                    <p className="text-[#617589] mb-6 leading-relaxed">
                        Protect your digital assets with advanced threat detection, compliance auditing, and secure cloud architecture.
                    </p>
                    <Link href="/contact" className="text-primary font-bold inline-flex items-center gap-2 group/link">
                        Learn More
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
                {/* Managed Services */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="500"
                    className="bg-white p-8 rounded-xl border border-[#f0f2f4] hover:border-primary/50 transition-all group"
                >
                    <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                        <Headset size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-[#111418]">Managed Services</h3>
                    <p className="text-[#617589] mb-6 leading-relaxed">
                        Get peace of mind with 24/7 technical support, proactive monitoring, and continuous system optimization.
                    </p>
                    <Link href="/contact" className="text-primary font-bold inline-flex items-center gap-2 group/link">
                        Learn More
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </>
    );
}
