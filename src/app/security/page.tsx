"use client";

import LegalLayout from "@/components/legal/LegalLayout";
import PolicyCard from "@/components/legal/PolicyCard";
import { Lock, ShieldCheck, FileCheck, Server, Key, EyeOff } from "lucide-react";

export default function SecurityPage() {
    const sections = [
        {
            id: "infrastructure",
            icon: Server,
            title: "Zero-Trust Infrastructure",
            summary: "Hardened architectural layers for mission-critical data.",
            content: (
                <div className="space-y-4">
                    <p>Our engineering ecosystem is built upon a Zero-Trust architecture. Every signal, every access request, and every data packet is verified at the point of origin, regardless of network location.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Isolation:</strong> Compute resources are isolated within strictly partitioned virtual private clouds (VPCs).</li>
                        <li><strong>Redundancy:</strong> Triple-layered data backups across geographically diverse secure zones.</li>
                        <li><strong>Monitoring:</strong> 24/7 automated threat detection and anomaly scanning.</li>
                    </ul>
                </div>
            )
        },
        {
            id: "encryption",
            icon: Key,
            title: "Cryptographic Defense",
            summary: "Advanced encryption standards for data at rest and in transit.",
            content: (
                <div className="space-y-4">
                    <p>We utilize AES-256 for data at rest and TLS 1.3 for data in transit. Our key management system ensures that encryption keys are rotated frequently and stored in hardware security modules (HSMs).</p>
                </div>
            )
        },
        {
            id: "nda",
            icon: EyeOff,
            title: "NDA Commitment",
            summary: "Standardized confidentiality protocols for all engagements.",
            content: (
                <div className="space-y-4">
                    <p>Confidentiality is the bedrock of our digital partnership. Every engagement begins with a mutual Non-Disclosure Agreement (NDA) that protects your intellectual property, trade secrets, and operational blueprints.</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Clean Room Development:</strong> Developers work within secure, monitored environments.</li>
                        <li><strong>Need-to-Know Access:</strong> Information is atomized; personnel only access data required for their specific task.</li>
                        <li><strong>Post-Mission Sanitation:</strong> Optional data purging and archive sealing after successful project completion.</li>
                    </ul>
                </div>
            )
        },
        {
            id: "certification",
            icon: ShieldCheck,
            title: "Trust Standards",
            summary: "Adherence to global security and quality frameworks.",
            content: (
                <div className="space-y-4">
                    <p>CloudeIndia aligns with top-tier international standards for information security management. We are in continuous pursuit of excellence, maintaining compliance with industry-leading frameworks including ISO 27001 and SOC 2 Type II.</p>
                </div>
            )
        },
        {
            id: "audits",
            icon: FileCheck,
            title: "Security Audits",
            summary: "Continuous validation of our defensive posture.",
            content: (
                <div className="space-y-4">
                    <p>We conduct semi-annual penetration testing and vulnerability assessments through accredited third-party security firms. Our "Bug Bounty" program encourages the ethical disclosure of potential vulnerabilities by security researchers.</p>
                </div>
            )
        }
    ];

    return (
        <LegalLayout
            title="Security & NDA"
            subtitle="Architecting trust through zero-trust engineering and absolute confidentiality."
            lastUpdated="JANUARY 2026"
            icon={Lock}
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
