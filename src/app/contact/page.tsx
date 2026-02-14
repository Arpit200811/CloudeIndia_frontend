import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
    title: "Contact Us | Architect Your Digital Future",
    description: "Ready to start your next mission-critical project? Connect with CloudeIndia's engineering experts for a high-velocity strategy session.",
};

export default function ContactPage() {
    return <ContactContent />;
}
