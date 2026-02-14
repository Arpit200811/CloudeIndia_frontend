"use client";

import { motion } from "framer-motion";
import {
    School, Building2, LayoutDashboard, Briefcase,
    AlertCircle, Lightbulb, CheckCircle, ShieldCheck,
    Users, BookOpen, Clock, BarChart3,
    HeartPulse, Stethoscope, ClipboardList, Database,
    Zap, Layers, Globe, Headphones,
    BrainCircuit, ScanLine, Eye, FileSearch, History, Activity, Radio, SearchCode
} from "lucide-react";

const InfinityIcon = ({ size }: { size: number }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18.17 7.67c1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.31-.73 1.76l-7.94 7.94c-.45.45-1.07.73-1.76.73-.69 0-1.31-.28-1.76-.73l-7.94-7.94c-.45-.45-.73-1.07-.73-1.76 0-1.38 1.12-2.5 2.5-2.5.69 0 1.31.28 1.76.73l7.94 7.94c.45.45 1.07.73 1.76.73.69 0 1.31-.28 1.76-.73l7.94-7.94c.45-.45.73-1.07.73-1.76z" />
    </svg>
);

const solutions = [
    {
        id: "college",
        title: "College Management System",
        tagline: "The Digital Campus",
        icon: School,
        theme: "blue",
        color: "text-blue-600",
        bg: "bg-blue-50",
        accent: "bg-blue-600",
        problem: "Legacy educational institutions face significant challenges with fragmented data systems, manual enrollment bottlenecks, and a lack of real-time student performance intelligence.",
        solution: "A unified ERP ecosystem that digitizes the entire student lifecycle—from admission to graduation—with automated administrative workflows and AI-driven predictive insights.",
        features: [
            { icon: Users, title: "Admission CRM", desc: "Automated funnel for student enrollment." },
            { icon: BookOpen, title: "LMS Integration", desc: "Seamless course and content delivery." },
            { icon: Clock, title: "Smart Attendance", desc: "Biometric and geo-fenced tracking." },
            { icon: BarChart3, title: "Exams & Results", desc: "Instantly generated digitised marksheets." }
        ],
        benefits: ["50% faster admissions", "Paperless administration", "360° student visibility", "Secure data warehousing"]
    },
    {
        id: "hospital",
        title: "Hospital Management System",
        tagline: "Precision Healthcare",
        icon: HeartPulse,
        theme: "emerald",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        accent: "bg-emerald-600",
        problem: "Hospitals struggle with patient record duplication, inefficient billing cycles, and critical clinical errors due to fragmented Health Information Systems (HIS).",
        solution: "A clinical-first HIS architecture that prioritizes patient safety and operational velocity, featuring integrated EMR and fully automated pharmacy management.",
        features: [
            { icon: Stethoscope, title: "Integrated EMR", desc: "Unified history of patient encounters." },
            { icon: ClipboardList, title: "Inventory Flow", desc: "Real-time drug and supply tracking." },
            { icon: Database, title: "Lab Integration", desc: "Direct sync with diagnostic equipment." },
            { icon: ShieldCheck, title: "Tele-Health", desc: "Remote consultation with secure VOIP." }
        ],
        benefits: ["Reduced wait times by 40%", "Zero billing errors", "Hardened patient privacy", "Improved doctor efficiency"]
    },
    {
        id: "admin",
        title: "Admin Dashboards",
        tagline: "Intelligence at Glance",
        icon: LayoutDashboard,
        theme: "indigo",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        accent: "bg-indigo-600",
        problem: "Decision-makers are often overwhelmed by 'Data Noise' while lacking real-time visibility into their own operational KPIs.",
        solution: "Custom high-fidelity executive dashboards that distill petabytes of raw data into actionable, visual business intelligence.",
        features: [
            { icon: Zap, title: "Live Sync", desc: "Microsecond updates from all sources." },
            { icon: BarChart3, title: "Predictive UI", desc: "AI forecasts embedded in every chart." },
            { icon: ShieldCheck, title: "Audit Trail", desc: "Every click and change is logged." },
            { icon: Layers, title: "Custom UI Docs", desc: "Drag-and-drop widget customization." }
        ],
        benefits: ["Faster decision making", "Unified data view", "Cost anomaly detection", "Automated executive reporting"]
    },
    {
        id: "enterprise",
        title: "Enterprise Software",
        tagline: "Scalability Unleashed",
        icon: Briefcase,
        theme: "slate",
        color: "text-slate-800",
        bg: "bg-slate-100",
        accent: "bg-slate-800",
        problem: "Enterprises face systemic 'Technical Debt' with legacy monolithic architectures, resulting in high maintenance overhead and stagnant innovation cycles.",
        solution: "Resilient cloud-native, microservices-driven architectures engineered for massive horizontal scaling and rapid, iterative feature deployment.",
        features: [
            { icon: Globe, title: "Cloud Native", desc: "Born for AWS, Azure, and GCP." },
            { icon: Database, title: "Master Data", desc: "Single source of truth for all units." },
            { icon: Headphones, title: "API Gateway", desc: "Secure, high-bandwidth data hub." },
            { icon: InfinityIcon, title: "CI/CD Ready", desc: "Zero-downtime blue/green deployments." }
        ],
        benefits: ["99.99% system uptime", "Ultra-low ops overhead", "Agile feature delivery", "Maximum data compliance"]
    },
    {
        id: "ai-ml",
        title: "AI & ML Core Hub",
        tagline: "Neural Intelligence",
        icon: BrainCircuit,
        theme: "violet",
        color: "text-violet-600",
        bg: "bg-violet-50",
        accent: "bg-violet-600",
        problem: "Businesses possess vast amounts of data but lack the algorithmic depth to extract predictive patterns, leading to reactive rather than proactive strategies.",
        solution: "A scalable AI foundry that deploys custom deep-learning models for NLP, computer vision, and predictive demand forecasting.",
        features: [
            { icon: BrainCircuit, title: "Neural Networks", desc: "Custom transformers and CNN architectures." },
            { icon: SearchCode, title: "Semantic Search", desc: "Vector-based contextual data retrieval." },
            { icon: Zap, title: "Edge AI", desc: "Lightweight models for on-device inference." },
            { icon: ShieldCheck, title: "Ethical AI", desc: "Built-in bias detection and audit logs." }
        ],
        benefits: ["Predictive accuracy > 95%", "Automated decision logic", "Personalized user experiences", "Operational risk reduction"]
    },
    {
        id: "ocr",
        title: "Smart OCR Systems",
        tagline: "Vision to Data",
        icon: ScanLine,
        theme: "orange",
        color: "text-orange-600",
        bg: "bg-orange-50",
        accent: "bg-orange-600",
        problem: "Manual data entry from physical documents, handwritten notes, and low-quality scans is slow, expensive, and prone to human error.",
        solution: "Enterprise-grade Intelligent Document Processing (IDP) that combines OCR with NLP to extract structured data from any visual source.",
        features: [
            { icon: Eye, title: "Handwriting Rec", desc: "Advanced ICR for cursive and printed notes." },
            { icon: FileSearch, title: "Layout Parsing", desc: "Identifying tables and complex forms." },
            { icon: ScanLine, title: "Automated Deskew", desc: "Real-time image cleanup and rotation." },
            { icon: CheckCircle, title: "Zero Error Labelling", desc: "Validation against master databases." }
        ],
        benefits: ["90% reduction in manual entry", "Instant doc digitization", "Searchable archive creation", "High-volume batch processing"]
    },
    {
        id: "tracereact",
        title: "TraceReact Platforms",
        tagline: "Real-time Traceability",
        icon: History,
        theme: "cyan",
        color: "text-cyan-600",
        bg: "bg-cyan-50",
        accent: "bg-cyan-600",
        problem: "Complex supply chains and high-value asset environments suffer from visibility 'Black Holes', making it impossible to track items in real-time.",
        solution: "A high-performance reactive tracking ecosystem built with React & IoT sensors to provide millisecond-accurate asset tracing.",
        features: [
            { icon: Activity, title: "Live Streaming", desc: "Socket-based real-time state updates." },
            { icon: Radio, title: "IoT Gateway", desc: "Direct integration with RFID and GPS." },
            { icon: History, title: "Time Travel", desc: "Historical replay of asset movement." },
            { icon: Briefcase, title: "Audit Trail", desc: "Immutable logs for chain of custody." }
        ],
        benefits: ["End-to-end transparency", "Lost asset recovery", "Compliance audit ready", "Real-time alerts & triggers"]
    }
];

export default function IndustrySections() {
    return (
        <div id="industry-solutions" className="max-w-[1280px] mx-auto px-6 lg:px-10 py-16 space-y-24">
            {solutions.map((solution, idx) => (
                <section key={solution.id} className="relative">
                    <div className={`flex flex-col ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-24 items-center`}>

                        {/* Left: Narrative Side */}
                        <motion.div
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 space-y-10"
                        >
                            <div className="space-y-4">
                                <div className={`inline-flex items-center gap-2 py-1 px-4 rounded-full ${solution.bg} ${solution.color} text-xs font-bold uppercase tracking-widest`}>
                                    <solution.icon size={14} />
                                    <span>{solution.tagline}</span>
                                </div>
                                <h2 className="text-5xl md:text-6xl font-black text-[#111418] leading-[1.1]">
                                    {solution.title}
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-2 text-rose-500 font-bold uppercase text-xs tracking-wider">
                                        <AlertCircle size={14} />
                                        <span>The Problem</span>
                                    </div>
                                    <p className="text-gray-500 leading-relaxed text-lg">
                                        {solution.problem}
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <div className={`flex items-center gap-2 ${solution.color} font-bold uppercase text-xs tracking-wider`}>
                                        <Lightbulb size={14} />
                                        <span>Our Solution</span>
                                    </div>
                                    <p className="text-gray-500 leading-relaxed text-lg">
                                        {solution.solution}
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h4 className="text-[#111418] font-bold text-xl">Key Benefits</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {solution.benefits.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className={`size-5 rounded-full ${solution.bg} flex items-center justify-center ${solution.color}`}>
                                                <CheckCircle size={14} />
                                            </div>
                                            <span className="text-gray-600 text-sm font-medium">{benefit}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Creative Feature Grid Side */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:w-1/2 w-full pt-8 pb-8"
                        >
                            <div className="grid grid-cols-2 gap-x-8 gap-y-12 relative">
                                {/* Decorative elements */}
                                <div className={`absolute -inset-4 ${solution.bg} opacity-50 rounded-[4rem] -z-10 blur-3xl`}></div>

                                {solution.features.map((feature, i) => (
                                    <div
                                        key={i}
                                        className={`group p-8 rounded-3xl bg-white border border-slate-100 transition-all duration-500 hover:border-primary/50 ${i % 2 !== 0 ? 'translate-y-12' : '-translate-y-12'}`}
                                    >
                                        <div className={`size-12 rounded-xl ${solution.bg} ${solution.color} flex items-center justify-center mb-6 border border-slate-100 group-hover:bg-white group-hover:border-slate-200 transition-all`}>
                                            <feature.icon size={24} />
                                        </div>
                                        <h4 className="text-lg font-bold text-[#111418] mb-2">{feature.title}</h4>
                                        <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </section>
            ))}
        </div>
    );
}

