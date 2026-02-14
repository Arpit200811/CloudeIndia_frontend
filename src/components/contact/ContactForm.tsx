import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, User, Building, Globe, MessageSquare, Mail, ArrowRight, Shield, Cpu, Activity, GraduationCap, Code, Link, FileText, Zap } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useSession, signIn } from "next-auth/react";
import NextImage from "next/image";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Swal from "sweetalert2";

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid uplink address"),
    org: z.string().min(2, "Organization name required"),
    phone: z.string().regex(/^[0-9]{10,15}$/, "Invalid phone number (10-15 digits)"),
    domain: z.string().min(1, "Please select a mission profile"),
    duration: z.string().min(1, "Please select a timeline"),
    message: z.string().min(10, "Briefing must be at least 10 characters"),
    attachment: z.any().optional(), // File upload
});

type FormData = z.infer<typeof contactSchema>;


export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [activeField, setActiveField] = useState<string | null>(null);
    const [inquiryType, setInquiryType] = useState<"business" | "internship">("business");

    // NEW: File upload state
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [filePreview, setFilePreview] = useState<string | null>(null);

    // NEW: Auto-save state
    const [lastSaved, setLastSaved] = useState<Date | null>(null);
    const [formProgress, setFormProgress] = useState(0);

    const { register, handleSubmit, formState: { errors }, reset, watch, setValue } = useForm<FormData>({
        resolver: zodResolver(contactSchema)
    });

    const watchedFields = watch();

    // Progress Calculation
    useEffect(() => {
        const fields = ['name', 'email', 'org', 'phone', 'domain', 'duration', 'message'];
        const filled = fields.filter(field => (watchedFields as any)[field]?.length > 0).length;
        setFormProgress(Math.round((filled / fields.length) * 100));
    }, [watchedFields]);

    // Auto-save Logic
    useEffect(() => {
        const timeout = setTimeout(() => {
            if (Object.keys(watchedFields).length > 0) {
                localStorage.setItem('contact_form_draft', JSON.stringify({
                    data: watchedFields,
                    type: inquiryType,
                    timestamp: new Date().getTime()
                }));
                setLastSaved(new Date());
            }
        }, 5000);
        return () => clearTimeout(timeout);
    }, [watchedFields, inquiryType]);

    // Load Draft on Mount
    useEffect(() => {
        const draft = localStorage.getItem('contact_form_draft');
        if (draft) {
            try {
                const { data, type } = JSON.parse(draft);
                setInquiryType(type);
                reset(data);
            } catch (e) {
                console.error("Failed to load draft", e);
            }
        }
    }, [reset]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            if (file.size > 5 * 1024 * 1024) {
                Swal.fire('File too large', 'Maximum size is 5MB', 'error');
                return;
            }
            setSelectedFile(file);
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = () => setFilePreview(reader.result as string);
                reader.readAsDataURL(file);
            } else {
                setFilePreview(null);
            }
        }
    };

    const removeFile = () => {
        setSelectedFile(null);
        setFilePreview(null);
    };

    const { data: session, status } = useSession();

    const onFormSubmit = useCallback(async (data: FormData) => {
        if (status !== "authenticated") {
            // Save state to resume after login
            sessionStorage.setItem("pending_submission", JSON.stringify({
                data,
                type: inquiryType,
                timestamp: Date.now()
            }));
            try {
                await signIn("google");
            } catch (error) {
                console.error("Google Sign-In failed", error);
                sessionStorage.removeItem("pending_submission");
                setErrorMessage("Authentication was cancelled or failed. Please try again.");
                setIsLoading(false);
            }
            return;
        }
        setIsLoading(true);
        setErrorMessage(null);

        try {
            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('email', data.email);
            formData.append('phone', data.phone);
            formData.append('org', data.org);
            formData.append('domain', data.domain);
            formData.append('duration', data.duration);
            formData.append('message', data.message);
            formData.append('inquiryType', inquiryType);

            if (selectedFile) {
                formData.append('attachment', selectedFile);
            }

            const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/contact`, {
                method: 'POST',
                // Note: Don't set Content-Type header when using FormData
                body: formData,
            });

            if (response.status === 401) {
                setErrorMessage("Your session has expired. Please sign in again.");
                signIn("google");
                return;
            }

            if (!response.ok) {
                throw new Error("Failed to send message. Please try again later.");
            }

            setIsSubmitted(true);
            localStorage.removeItem('contact_form_draft');

            // Show SweetAlert2 success popup
            Swal.fire({
                icon: 'success',
                title: 'Mission Transmission Successful!',
                html: `
                    <p>Your architecture briefing has been uplinked to our lead engineers.</p>
                    <p class="text-sm text-gray-600 mt-2">Expect interception within 120 minutes.</p>
                    <p class="text-sm font-semibold text-primary mt-3">Response ETA: 24-48 hours</p>
                `,
                confirmButtonText: 'Acknowledged',
                confirmButtonColor: '#3B82F6',
                timer: 5000,
                timerProgressBar: true,
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            });

            reset();
        } catch (error) {
            console.error("Submission error:", error);
            setErrorMessage(error instanceof Error ? error.message : "A network error occurred. Check your connection.");
        } finally {
            setIsLoading(false);
        }
    }, [status, inquiryType, reset]);

    // Resume submission after login
    useEffect(() => {
        const pending = sessionStorage.getItem("pending_submission");
        if (status === "authenticated" && pending) {
            try {
                const { data, type, timestamp } = JSON.parse(pending);

                // Only resume if it's recent (e.g., last 10 minutes)
                if (Date.now() - timestamp < 10 * 60 * 1000) {
                    setInquiryType(type);
                    reset(data);
                    onFormSubmit(data);
                }
            } catch (e) {
                console.error("Failed to resume submission", e);
            } finally {
                sessionStorage.removeItem("pending_submission");
            }
        }
    }, [status, reset, onFormSubmit]);

    if (isSubmitted) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="lg:col-span-12 bg-slate-950 rounded-[4rem] p-16 shadow-[0_0_100px_rgba(59,130,246,0.15)] border border-white/5 flex flex-col items-center text-center justify-center min-h-[600px] relative overflow-hidden"
            >
                <div className="absolute inset-0 pointer-events-none opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2)_0%,transparent_70%)]"></div>
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                </div>

                <motion.div
                    initial={{ rotate: -180, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="size-32 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-10 border border-primary/30 shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                >
                    <CheckCircle2 size={64} />
                </motion.div>

                <h3 className="text-5xl font-black text-white mb-6 tracking-tighter">
                    {inquiryType === "business" ? "Mission Transmission Successful." : "Application Received."}
                </h3>
                <p className="text-slate-400 max-w-lg mx-auto leading-relaxed text-xl font-light">
                    {inquiryType === "business"
                        ? "Your architecture briefing has been uplinked to our lead engineers. Expect interception within 120 minutes."
                        : "Your technical profile has been entered into our recruitment matrix. Our talent scouts will review your signal soon."}
                    <span className="block mt-4 text-primary font-bold">Expect a response within 24-48 hours.</span>
                </p>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="mt-16 px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-black uppercase tracking-[0.3em] text-[10px] transition-all"
                >
                    Initiate New Directive
                </motion.button>
            </motion.div>
        );
    }

    return (
        <div className="lg:col-span-12 group relative">
            {/* Backdrop Glow */}
            <div className="absolute -inset-1 bg-slate-200 rounded-[4.2rem] opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-1000"></div>

            <div className="relative bg-white rounded-4xl p-5 md:p-6 shadow-xl border border-slate-100 overflow-hidden">
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(59,130,246,0.2) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

                {/* Dual Path Switcher */}
                <div className="relative z-20 flex justify-center mb-10">
                    <div className="flex bg-slate-100/50 p-1.5 rounded-2xl border border-slate-200/50 backdrop-blur-md shadow-inner max-w-md w-full">
                        <button
                            type="button"
                            onClick={() => setInquiryType("business")}
                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-black text-[10px] uppercase tracking-[0.2em] transition-all ${inquiryType === "business" ? "bg-white text-primary shadow-lg shadow-primary/10 border border-white" : "text-slate-400 hover:text-slate-600"}`}
                        >
                            <Building size={12} />
                            Enterprise
                        </button>
                        <button
                            type="button"
                            onClick={() => setInquiryType("internship")}
                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg font-black text-[10px] uppercase tracking-[0.2em] transition-all ${inquiryType === "internship" ? "bg-white text-primary shadow-lg shadow-primary/10 border border-white" : "text-slate-400 hover:text-slate-600"}`}
                        >
                            <GraduationCap size={14} />
                            Internship
                        </button>
                    </div>
                </div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
                    {/* Creative Left Panel */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <motion.span
                                key={inquiryType}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                className="inline-block py-1.5 px-4 rounded-full bg-primary/5 border border-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.3em] self-start"
                            >
                                {inquiryType === "business" ? "Project Integration Portal" : "Talent Acquisition Signal"}
                            </motion.span>
                            <h3 className="text-3xl xl:text-4xl font-black tracking-tight text-slate-950 leading-[0.85]">
                                {inquiryType === "business" ? (
                                    <>Architect <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-600 italic">Tomorrow.</span></>
                                ) : (
                                    <>Launch Your <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-primary italic">Career.</span></>
                                )}
                            </h3>
                        </div>

                        <p className="text-slate-500 text-sm font-medium leading-relaxed">
                            {inquiryType === "business"
                                ? "We engineer digital gravity. Tell us about your vision."
                                : "Join our engineering collective. Submit your profile."}
                        </p>

                        {/* Interactive Status Metrics */}
                        <div className="grid grid-cols-1 gap-4 mt-4">
                            {[
                                { icon: Shield, label: inquiryType === "business" ? "Encrypted Uplink" : "Neural Link", status: "Active", color: "text-primary" },
                                { icon: Cpu, label: inquiryType === "business" ? "Core Availability" : "Intern Slots", status: inquiryType === "business" ? "98%" : "Limited", color: "text-primary" },
                                { icon: Activity, label: "Response Velocity", status: inquiryType === "business" ? "< 2h" : "48h Max", color: "text-primary" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-2 p-2.5 bg-slate-50/50 rounded-xl border border-slate-100 transition-colors hover:bg-white hover:shadow-lg group/item"
                                >
                                    <div className={`size-8 rounded-lg bg-white shadow-sm flex items-center justify-center ${item.color} group-hover/item:scale-110 transition-transform`}>
                                        <item.icon size={16} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.label}</p>
                                        <p className="text-xs font-bold text-slate-900">{item.status}</p>
                                    </div>
                                    <div className="size-2 rounded-full bg-emerald-500 animate-pulse"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Highly Creative Form Panel */}
                    <div className="lg:col-span-8 flex flex-col gap-4">
                        {/* Form Progress Bar */}
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden mb-1">
                            <motion.div
                                className="h-full bg-primary"
                                initial={{ width: 0 }}
                                animate={{ width: `${formProgress}%` }}
                                transition={{ type: "spring", stiffness: 50 }}
                            />
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 italic">
                                Mission Readiness: {formProgress}%
                            </span>
                            {lastSaved && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest flex items-center gap-1"
                                >
                                    <CheckCircle2 size={10} /> Local Sync Active: {lastSaved.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </motion.span>
                            )}
                        </div>

                        <form onSubmit={handleSubmit(onFormSubmit)} noValidate className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={inquiryType}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    className="col-span-full grid grid-cols-1 md:grid-cols-2 gap-5"
                                >
                                    {[
                                        { id: "name", label: inquiryType === "business" ? "Agent Name" : "Student Name", icon: User, placeholder: inquiryType === "business" ? "John Architecture" : "Jane Coder", type: "text" },
                                        { id: "email", label: inquiryType === "business" ? "Uplink Address" : "Academic Email", icon: Mail, placeholder: inquiryType === "business" ? "john@enterprise.io" : "jane@university.edu", type: "email" },
                                        { id: "org", label: inquiryType === "business" ? "Organization" : "University/College", icon: inquiryType === "business" ? Building : GraduationCap, placeholder: inquiryType === "business" ? "Global Systems Inc." : "IIT Bombay / MIT", type: "text" },
                                        { id: "phone", label: "Contact Number", icon: Activity, placeholder: "+91 00000 00000", type: "tel" },
                                    ].map((field) => (
                                        <div key={field.id} className="relative">
                                            <label className={`absolute left-0 -top-4 text-[9px] font-black uppercase tracking-[0.2em] transition-all ${activeField === field.id ? 'text-primary' : 'text-slate-400 opacity-0'}`}>
                                                {field.label}
                                            </label>
                                            <div className="relative group/field">
                                                <field.icon className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${activeField === field.id ? 'text-primary' : 'text-slate-300'}`} size={16} />
                                                <input
                                                    {...register(field.id as keyof FormData)}
                                                    type={field.type}
                                                    placeholder={field.placeholder}
                                                    onFocus={() => setActiveField(field.id)}
                                                    onBlur={(e) => {
                                                        setActiveField(null);
                                                        register(field.id as keyof FormData).onBlur(e);
                                                    }}
                                                    className="w-full pl-12 pr-6 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-950 placeholder:text-slate-400 focus:bg-white focus:border-primary focus:ring-0 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] outline-none transition-all font-bold text-sm hover:border-slate-300"
                                                />
                                                {errors[field.id as keyof FormData] && (
                                                    <p className="text-[10px] text-red-500 mt-1 ml-6 font-bold uppercase tracking-wider">
                                                        {String(errors[field.id as keyof FormData]?.message)}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    ))}

                                    <div className="relative">
                                        <label className={`absolute left-0 -top-4 text-[9px] font-black uppercase tracking-[0.2em] transition-all ${activeField === 'domain' ? 'text-primary' : 'text-slate-400 opacity-0'}`}>
                                            {inquiryType === "business" ? "Mission Profile" : "Tech Stack"}
                                        </label>
                                        <div className="relative">
                                            <Code className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${activeField === 'domain' ? 'text-primary' : 'text-slate-300'}`} size={16} />
                                            <select
                                                {...register("domain")}
                                                onFocus={() => setActiveField('domain')}
                                                onBlur={(e) => {
                                                    setActiveField(null);
                                                    register("domain").onBlur(e);
                                                }}
                                                className="w-full pl-12 pr-8 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-950 focus:bg-white focus:border-primary focus:ring-0 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] outline-none transition-all font-bold text-sm appearance-none cursor-pointer hover:border-slate-300"
                                            >
                                                <option value="">{inquiryType === "business" ? "Mission Profile" : "Primary Stack"}</option>
                                                <option value="AI">Generative AI</option>
                                                <option value="Frontend">Frontend (React)</option>
                                                <option value="Backend">Backend (Node.js)</option>
                                                <option value="Cloud">Cloud (AWS/GCP)</option>
                                                <option value="Design">UI/UX Design</option>
                                            </select>
                                            <ArrowRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-slate-300 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className="relative">
                                        <label className={`absolute left-0 -top-4 text-[9px] font-black uppercase tracking-[0.2em] transition-all ${activeField === 'duration' ? 'text-primary' : 'text-slate-400 opacity-0'}`}>
                                            Timeline
                                        </label>
                                        <div className="relative">
                                            <Zap className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${activeField === 'duration' ? 'text-primary' : 'text-slate-300'}`} size={16} />
                                            <select
                                                {...register("duration")}
                                                onFocus={() => setActiveField('duration')}
                                                onBlur={(e) => {
                                                    setActiveField(null);
                                                    register("duration").onBlur(e);
                                                }}
                                                className="w-full pl-12 pr-8 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-950 focus:bg-white focus:border-primary focus:ring-0 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] outline-none transition-all font-bold text-sm appearance-none cursor-pointer hover:border-slate-300"
                                            >
                                                <option value="">{inquiryType === "business" ? "Timeline" : "Duration"}</option>
                                                <option value="1-3">1-3 Months</option>
                                                <option value="3-6">3-6 Months</option>
                                                <option value="6+">6+ Months</option>
                                                <option value="Immediate">Immediate</option>
                                            </select>
                                            <ArrowRight size={16} className="absolute right-4 top-1/2 -translate-y-1/2 rotate-90 text-slate-300 pointer-events-none" />
                                        </div>
                                    </div>

                                    <div className="md:col-span-2 relative mt-4">
                                        <label className={`absolute left-0 -top-4 text-[9px] font-black uppercase tracking-[0.2em] text-primary`}>
                                            {inquiryType === "business" ? "Project Specification / Brief" : "Curriculum Vitae / Resume"}
                                        </label>
                                        <div
                                            onClick={() => document.getElementById('file-upload')?.click()}
                                            className="w-full flex items-center gap-3 p-3 rounded-xl border border-dashed border-slate-200 bg-slate-50/50 hover:bg-white hover:border-primary transition-all cursor-pointer group/upload"
                                        >
                                            <div className="size-9 rounded-lg bg-white shadow-sm flex items-center justify-center text-slate-400 group-hover/upload:text-primary transition-colors overflow-hidden">
                                                {filePreview ? (
                                                    <NextImage src={filePreview} alt="Preview" width={36} height={36} className="w-full h-full object-cover" />
                                                ) : (
                                                    <FileText size={18} />
                                                )}
                                            </div>
                                            <div className="flex-1 overflow-hidden">
                                                <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter mb-0.5">Uplink &lt; 5MB</p>
                                                <p className="text-sm font-bold text-slate-900 truncate">
                                                    {selectedFile ? selectedFile.name : (inquiryType === "business" ? "Select Docs" : "Upload Resume")}
                                                </p>
                                            </div>
                                            {selectedFile && (
                                                <button
                                                    type="button"
                                                    onClick={(e) => { e.stopPropagation(); removeFile(); }}
                                                    className="p-3 bg-red-50 text-red-500 rounded-xl hover:bg-red-100 transition-colors"
                                                >
                                                    <Zap size={18} />
                                                </button>
                                            )}
                                        </div>
                                        <input
                                            id="file-upload"
                                            type="file"
                                            className="hidden"
                                            onChange={handleFileChange}
                                            accept=".pdf,.doc,.docx,.jpg,.png"
                                        />
                                        {selectedFile && (
                                            <div className="mt-2 flex items-center gap-2 px-4">
                                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                                    <div className="h-full bg-emerald-500 w-full" />
                                                </div>
                                                <span className="text-[10px] font-black text-emerald-500 uppercase">Ready</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="md:col-span-2 relative mt-4">
                                        <label className={`absolute left-0 -top-4 text-[9px] font-black uppercase tracking-[0.2em] transition-all ${activeField === 'message' ? 'text-primary' : 'text-slate-400 opacity-0'}`}>
                                            {inquiryType === "business" ? "Architecture Briefing" : "Personal Directive"}
                                        </label>
                                        <div className="relative group/field">
                                            {inquiryType === "business" ? (
                                                <MessageSquare className={`absolute left-4 top-4 transition-colors duration-300 ${activeField === 'message' ? 'text-primary' : 'text-slate-300'}`} size={18} />
                                            ) : (
                                                <FileText className={`absolute left-4 top-4 transition-colors duration-300 ${activeField === 'message' ? 'text-primary' : 'text-slate-300'}`} size={18} />
                                            )}
                                            <textarea
                                                {...register("message")}
                                                rows={3}
                                                onFocus={() => setActiveField('message')}
                                                onBlur={(e) => {
                                                    setActiveField(null);
                                                    register("message").onBlur(e);
                                                }}
                                                placeholder={inquiryType === "business" ? "Project details..." : "Why join us?"}
                                                className="w-full pl-12 pr-6 py-3 rounded-2xl border border-slate-200 bg-slate-50/50 text-slate-950 placeholder:text-slate-400 focus:bg-white focus:border-primary focus:ring-0 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] outline-none transition-all font-bold text-sm resize-none hover:border-slate-300"
                                            />
                                            <div className="flex justify-between items-center mt-1 px-4">
                                                {errors.message ? (
                                                    <p className="text-[10px] text-red-500 font-bold uppercase tracking-wider">
                                                        {String(errors.message.message)}
                                                    </p>
                                                ) : (
                                                    <div className="flex items-center gap-2">
                                                        <div className="size-1 rounded-full bg-primary/40 animate-pulse"></div>
                                                        <span className="text-[8px] text-slate-400 font-black uppercase tracking-widest">Neural Input</span>
                                                    </div>
                                                )}
                                                <span className={`text-[8px] font-black uppercase tracking-widest ${(watchedFields.message?.length || 0) > 1800 ? 'text-amber-500' : 'text-slate-400'}`}>
                                                    {watchedFields.message?.length || 0} / 2000
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>

                            <div className="md:col-span-2 flex flex-col md:flex-row items-center justify-between gap-10 pt-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="size-10 rounded-full border-4 border-white bg-slate-200 flex items-center justify-center overflow-hidden relative">
                                                <NextImage
                                                    src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${i + (inquiryType === 'business' ? 10 : 50)}`}
                                                    alt="Expert"
                                                    width={40}
                                                    height={40}
                                                    quality={100}
                                                    unoptimized
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[10px] font-black text-slate-900 uppercase tracking-widest leading-none">
                                            {inquiryType === "business" ? "Architects Ready" : "Mentors Active"}
                                        </p>
                                        <p className="text-[9px] text-primary font-bold uppercase tracking-widest mt-1">Uplink Secured</p>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02, x: 5 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    disabled={isLoading}
                                    className="group relative flex items-center justify-center gap-4 bg-slate-950 text-white font-black py-3 px-8 rounded-xl shadow-lg transition-all overflow-hidden w-full md:w-auto disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    <span className="relative z-10 text-sm uppercase tracking-[0.2em]">
                                        {isLoading ? "Wait..." : (inquiryType === "business" ? "Uplink" : "Launch")}
                                    </span>
                                    {!isLoading && <Send size={16} className="relative z-10 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />}

                                    <div className="absolute inset-0 bg-linear-to-r from-primary via-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <div className="absolute top-0 -inset-full h-full w-1/2 z-20 block transform -skew-x-12 bg-linear-to-r from-transparent to-white/10 group-hover:animate-shine"></div>
                                </motion.button>
                            </div>
                            {errorMessage && (
                                <div className="md:col-span-2 mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-center font-bold">
                                    {errorMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-48 h-1 bg-primary/20 rounded-full blur-sm"></div>
        </div >
    );
}
