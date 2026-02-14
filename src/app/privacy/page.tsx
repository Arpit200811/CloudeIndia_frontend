"use client";

import LegalLayout from "@/components/legal/LegalLayout";
import PolicyCard from "@/components/legal/PolicyCard";
import { Shield, Eye, Database, Cookie, Share2, Globe, MessageSquare, Key } from "lucide-react";

export default function PrivacyPage() {
    const sections = [
        {
            id: "data-collection",
            icon: Eye,
            title: "Data Intelligence",
            summary: "Transparency in how we perceive and collect signal data.",
            content: (
                <div className="space-y-4">
                    <p>We collect information that you provide directly to us through our digital portals, including identity markers, communication channels, and organizational context.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Identity:</strong> Name, professional title, and organizational affiliation.</li>
                        <li><strong>Connectivity:</strong> Email addresses, phone signals, and digital footprints.</li>
                        <li><strong>Project Intel:</strong> Specifications, requirements, and mission objectives shared during consultations.</li>
                    </ul>
                </div>
            )
        },
        {
            id: "data-usage",
            icon: Database,
            title: "Signal Processing",
            summary: "Defining the trajectory of your data within our ecosystem.",
            content: (
                <div className="space-y-4">
                    <p>Your data isn't just stored; it powers the engineering excellence we deliver. We process signals to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Initialize and maintain your digital command accounts.</li>
                        <li>Engineered personalized software experiences tailored to your organizational needs.</li>
                        <li>Facilitate secure transmission of project deliverables and maintenance updates.</li>
                        <li>Advance our internal AI models to better serve your technical requirements.</li>
                    </ul>
                </div>
            )
        },
        {
            id: "cookies",
            icon: Cookie,
            title: "Digital Breadcrumbs",
            summary: "Management of cookies and automated tracking signals.",
            content: (
                <div className="space-y-4">
                    <p>Our architecture utilizes small data fragments (Cookies) to optimize your portal experience. These telemetry signals help us understand architecture performance and user flow.</p>
                    <p>You maintain full control over these fragments via your local terminal (browser) settings, allowing you to intercept or reject these signals at any time.</p>
                </div>
            )
        },
        {
            id: "data-security",
            icon: Key,
            title: "Fortress Protocols",
            summary: "High-level encryption and zero-trust data protection.",
            content: (
                <div className="space-y-4">
                    <p>We implement a Zero-Trust security layer across all data repositories. Your information is encrypted at rest and in transit using military-grade cryptographic protocols.</p>
                    <p>Access is strictly audited and limited to cleared personnel through multi-factor authentication (MFA) and hardware-based security keys.</p>
                </div>
            )
        },
        {
            id: "disclosure",
            icon: Share2,
            title: "Mission Integrity",
            summary: "Zero-tolerance for unauthorized data transmission.",
            content: (
                <div className="space-y-4">
                    <p>CloudeIndia does not trade, lease, or distribute your data signals to third-party entities for non-mission purposes. Disclosure only occurs under strict legal mandates or to trusted operational partners bound by identical NDA protocols.</p>
                </div>
            )
        }
    ];

    return (
        <LegalLayout
            title="Privacy Protocol"
            subtitle="Our commitment to safeguarding the digital integrity of your data signals."
            lastUpdated="JANUARY 2026"
            icon={Shield}
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
