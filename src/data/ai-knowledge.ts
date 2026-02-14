export const INTENTS = {
    BUSINESS: "BUSINESS",
    TECHNOLOGY: "TECHNOLOGY",
    PRICING: "PRICING",
    CAREERS: "CAREERS",
    CONTACT: "CONTACT",
    GREETING: "GREETING",
    OUT_OF_SCOPE: "OUT_OF_SCOPE"
};

export const SERVICES = {
    ERP: ["erp", "crm", "management", "inventory", "system", "dashboard"],
    AI: ["ai", "automation", "ml", "bot", "intelligence", "gpt", "agent", "genai"],
    WEB: ["web", "website", "frontend", "react", "nextjs", "platform", "app"],
    APP: ["mobile", "android", "ios", "flutter", "native"],
    CLOUD: ["cloud", "aws", "azure", "deploy", "server", "devops"],
    CYBER: ["security", "cyber", "protection", "guard"]
};

export const BUYING_SIGNALS = [
    "need",
    "looking for",
    "build",
    "project",
    "software",
    "solution",
    "hire",
    "company",
    "want",
    "create",
    "develop"
];

export const KEYWORDS = {
    PRICING: ["price", "cost", "budget", "quote", "rate", "expensive", "cheap", "packages"],
    CAREERS: ["job", "career", "vacancy", "intern", "join", "working", "apply", "hiring"],
    CONTACT: ["contact", "email", "phone", "call", "schedule", "meet", "uplink"],
    TECHNOLOGY: ["tech", "stack", "technology", "language", "framework", "frontend", "backend", "database", "python", "node"],
    GREETING: ["hello", "hi", "hey", "greetings", "start", "yo"]
};

// Rich Response Structure with Actionable Queries
export const RESPONSES = {
    GREETING: {
        text: `**Systems Online.** \n\nI am the Neural Architect. My function is to optimize your digital trajectory.\n\n*Select a protocol:*`,
        type: 'cards',
        data: [
            { title: "Scale Business", desc: "Enterprise ERP & Automation", icon: "🚀", query: "I need to scale my business with ERP" },
            { title: "Deploy AI", desc: "Autonomous Agents & ML", icon: "🤖", query: "I want to deploy AI solutions" },
            { title: "Modernize Tech", desc: "Cloud & Next.js Stacks", icon: "⚡", query: "Tell me about your Tech Stack" }
        ]
    },

    BUSINESS: (service?: string) => ({
        text: `**Strategic Analysis:**\n\nWe design solutions around **business outcomes**.\n\n${service ? `Since you're exploring **${service}**, we align architecture with your specific workflow goals.` : "We build high-performance ecosystems tailored to your growth vectors."}\n\n*Our Capabilities Matrix:*`,
        type: 'cards',
        data: [
            { title: "Custom ERP", desc: "Tailored OperationsOS", icon: "🏢", query: "Tell me about Custom ERP" },
            { title: "AI Agents", desc: "24/7 Auto-Pilot Support", icon: "🧠", query: "Tell me about AI Agents" },
            { title: "Global Platforms", desc: "High-Scale Web/App", icon: "🌐", query: "Tell me about Web & App Development" }
        ]
    }),

    TECHNOLOGY: {
        text: `**Architecture Protocol:**\n\nTechnology decisions are made for **stability, performance, and scale**.\n\nWe employ a battle-tested stack designed for velocity:`,
        type: 'tech_grid',
        data: [
            { name: "Next.js 14", status: "Core", desc: "Sub-second Latency", query: "Why use Next.js?" },
            { name: "Python AI", status: "Intelligence", desc: "Predictive Logic", query: "How is Python used in AI?" },
            { name: "AWS/Azure", status: "Infra", desc: "99.99% Uptime", query: "Tell me about cloud infrastructure" },
            { name: "Tailwind", status: "UI", desc: "Pixel Precision", query: "Why Tailwind CSS?" }
        ]
    },

    PRICING: {
        text: `**Investment Strategy:**\n\nWe price based on **Outcomes & ROI**, not just hourly effort.\n\n*Select an engagement model to analyze:*`,
        type: 'cards',
        data: [
            { title: "MVP Sprint", desc: "4-6 Weeks Launch", icon: "⚡", query: "How much for an MVP?" },
            { title: "Enterprise", desc: "Full-Scale Transformation", icon: "🏢", query: "Enterprise pricing details" },
            { title: "Retainer", desc: "Continuous R&D", icon: "🔄", query: "Retainer model info" }
        ]
    },

    CAREERS: {
        text: `**Talent Pipeline:**\n\nWe recruit the top 1% of engineers who value clean architecture and impact.\n\n*Open Roles:*`,
        type: 'action',
        data: { label: "View Open Positions", action: "/careers" }
    },

    CONTACT: {
        text: `**Establish Uplink:**\n\nIf you’re evaluating this seriously, the next step is a strategic consultation.\n\n*Secure channel open:*`,
        type: 'action',
        data: { label: "Schedule Consultation", action: "/contact" }
    },

    OUT_OF_SCOPE: {
        text: `**Domain Restriction Active.**\n\nI operate strictly within CloudeIndia’s software and AI solutions.\n\nIf you're looking to **build**, **automate**, or **scale** a system, I can help.`,
        type: 'text'
    },

    LEAD_QUAL: {
        text: `**Strategic Inquiry Detected.**\n\nTo tailor our architectural blueprint effectively, could you specify your **Industry** or **Business Type**?`,
        type: 'text'
    }
};
