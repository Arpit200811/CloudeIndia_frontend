"use client";

import LegalLayout from "@/components/legal/LegalLayout";
import PolicyCard from "@/components/legal/PolicyCard";
import { FileText, Cpu, Scale, AlertCircle, Ban, Zap } from "lucide-react";

export default function TermsPage() {
    const sections = [
        {
            id: "acceptance",
            icon: Zap,
            title: "Command Acceptance",
            summary: "Defining the legal binding of our digital engagement.",
            content: (
                <div className="space-y-4">
                    <p>By accessing the portals of CloudeIndia Technologies, you acknowledge and agree to abide by these architectural mandates. If you do not agree to these protocols, your access to our engineering resources is automatically terminated.</p>
                </div>
            )
        },
        {
            id: "usage",
            icon: Cpu,
            title: "Operational Usage",
            summary: "Permissible interaction with our engineering ecosystems.",
            content: (
                <div className="space-y-4">
                    <p>Users are granted a non-exclusive, non-transferable license to interact with our public-facing digital assets. Prohibited activities include:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Recursive logic manipulation (reverse engineering).</li>
                        <li>Automated signal extraction (data scraping).</li>
                        <li>Unauthorized penetration testing.</li>
                        <li>Distribution of malicious code within our architecture.</li>
                    </ul>
                </div>
            )
        },
        {
            id: "ip",
            icon: Scale,
            title: "Intellectual Property",
            summary: "Ownership of the digital blueprints and logic we generate.",
            content: (
                <div className="space-y-4">
                    <p>All source code, UI designs, AI algorithms, and brand assets presented within this ecosystem are the exclusive intellectual property of CloudeIndia Technologies. No title or property rights are transferred through portal interaction.</p>
                    <p>Reproduction of our "Prismatic" architecture or specialized AI models without explicit written clearance is strictly forbidden.</p>
                </div>
            )
        },
        {
            id: "liability",
            icon: AlertCircle,
            title: "Liability Boundaries",
            summary: "Defining the limits of our technical responsibility.",
            content: (
                <div className="space-y-4">
                    <p>While we strive for 99.9% architectural uptime, CloudeIndia shall not be held liable for indirect, incidental, or consequential damages resulting from digital service instability or third-party interference.</p>
                </div>
            )
        },
        {
            id: "termination",
            icon: Ban,
            title: "Protocol Termination",
            summary: "Mandates for ending your engagement with our resources.",
            content: (
                <div className="space-y-4">
                    <p>We reserve the right to revoke your access credentials and terminate your engagement with our ecosystems immediately upon detection of security protocol breaches or misuse of our engineering intelligence.</p>
                </div>
            )
        }
    ];

    return (
        <LegalLayout
            title="Terms of Service"
            subtitle="The legal framework governing your interaction with our high-end engineering ecosystems."
            lastUpdated="JANUARY 2026"
            icon={FileText}
        >
            {sections.map((section, idx) => (
                <PolicyCard
                    key={section.id}
                    index={idx}
                    {...section}
                />
            ))}
        </LegalLayout>
    );
}
