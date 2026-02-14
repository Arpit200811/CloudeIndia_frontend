import { Mail, Linkedin, Twitter } from "lucide-react";

export const HEADER_LINKS = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/solutions" },
    { label: "About", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Case Studies", href: "/case-studies" },
];

export const SOCIAL_LINKS = [
    { icon: Linkedin, href: "https://www.linkedin.com/company/cloude-india", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/CloudeIndia", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@cloudeindia.com", label: "Email" },
];

export const FOOTER_LINKS = {
    services: [
        { label: "IT Services", href: "/services" },
        { label: "Enterprise Solutions", href: "/solutions" },
        { label: "Cloud Engineering", href: "/services" },
        { label: "AI & Automation", href: "/services" },
    ],
    company: [
        { label: "About Us", href: "/about" },
        { label: "Case Studies", href: "/case-studies" },
        { label: "Careers", href: "/careers" },
        { label: "Newsroom", href: "/newsroom" },
        { label: "Contact Us", href: "/contact" },
    ],
    legal: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "Security & NDA", href: "/security" },
    ]
};
