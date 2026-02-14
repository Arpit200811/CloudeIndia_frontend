"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X, Minimize2, Maximize2, Terminal } from "lucide-react";
import { INTENTS, SERVICES, BUYING_SIGNALS, KEYWORDS, RESPONSES } from "@/data/ai-knowledge";
import Link from "next/link";

interface Message {
    id: string;
    text: string;
    sender: 'user' | 'bot';
    timestamp: Date;
    type?: 'text' | 'cards' | 'tech_grid' | 'action';
    data?: any;
}

export default function NeuralAssistant() {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'init-1',
            text: "Secure Connection Established. I am the Neural Architect. Ready to optimize your digital roadmap.",
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const memoryRef = useRef<{
        lastIntent: string | null;
        lastService: string | null;
    }>({
        lastIntent: null,
        lastService: null
    });
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isTyping]);

    const findResponse = (query: string) => {
        const text = query.toLowerCase();

        let intentScores: Record<string, number> = {
            BUSINESS: 0,
            TECHNOLOGY: 0,
            PRICING: 0,
            CAREERS: 0,
            CONTACT: 0,
            GREETING: 0
        };

        // Intent scoring
        if (["service", "build", "work", "solution"].some(w => text.includes(w))) intentScores.BUSINESS += 2;
        if (KEYWORDS.TECHNOLOGY.some(k => text.includes(k))) intentScores.TECHNOLOGY += 2;
        if (KEYWORDS.PRICING.some(k => text.includes(k))) intentScores.PRICING += 2;
        if (KEYWORDS.CAREERS.some(k => text.includes(k))) intentScores.CAREERS += 2;
        if (KEYWORDS.CONTACT.some(k => text.includes(k))) intentScores.CONTACT += 2;
        if (KEYWORDS.GREETING.some(k => text.includes(k))) intentScores.GREETING += 2;

        // Detect service
        let detectedService: string | null = null;
        Object.entries(SERVICES).forEach(([service, keywords]) => {
            if (keywords.some(k => text.includes(k))) {
                detectedService = service;
                intentScores.BUSINESS += 3;
            }
        });

        // Buying signal
        const isLead = BUYING_SIGNALS.some(w => text.includes(w));

        // Select highest intent
        const highestScore = Object.entries(intentScores).sort((a, b) => b[1] - a[1])[0];
        const selectedIntent = highestScore[1] > 0 ? highestScore[0] : INTENTS.OUT_OF_SCOPE;

        // Update memory
        memoryRef.current.lastIntent = selectedIntent;
        if (detectedService) memoryRef.current.lastService = detectedService;

        // Lead qualification
        if (isLead && selectedIntent === INTENTS.BUSINESS) {
            return RESPONSES.LEAD_QUAL;
        }

        // Return logic
        switch (selectedIntent) {
            case INTENTS.BUSINESS:
                // TS fix: ensure BUSINESS is treated as function
                return RESPONSES.BUSINESS(memoryRef.current.lastService || undefined);
            case INTENTS.TECHNOLOGY:
                return RESPONSES.TECHNOLOGY;
            case INTENTS.PRICING:
                return RESPONSES.PRICING;
            case INTENTS.CAREERS:
                return RESPONSES.CAREERS;
            case INTENTS.CONTACT:
                return RESPONSES.CONTACT;
            case INTENTS.GREETING:
                return RESPONSES.GREETING;
            default:
                return RESPONSES.OUT_OF_SCOPE;
        }
    };

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMsg: Message = {
            id: Date.now().toString(),
            text: input,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setIsTyping(true);

        // Simulate AI "Processing" time
        setTimeout(() => {
            const response = findResponse(userMsg.text);
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: response.text,
                sender: 'bot',
                timestamp: new Date(),
                type: response.type as any,
                data: (response as any).data
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1000);
    };

    // Auto-send when state updates from quick action could be complex, 
    // so let's just call a modified handler or update state and trigger.
    // Better:
    const startQuickAction = (text: string) => {
        const userMsg: Message = {
            id: Date.now().toString(),
            text: text,
            sender: 'user',
            timestamp: new Date()
        };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        setTimeout(() => {
            const response = findResponse(text);
            const botMsg: Message = {
                id: (Date.now() + 1).toString(),
                text: response.text,
                sender: 'bot',
                timestamp: new Date(),
                type: response.type as any,
                data: (response as any).data
            };
            setMessages(prev => [...prev, botMsg]);
            setIsTyping(false);
        }, 1000);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') handleSend();
    };

    // Parse links in text (Simple Markdown Link support [Text](/url))
    const renderText = (text: string) => {
        const parts = text.split(/(\[.*?\]\(.*?\))/g);
        return parts.map((part, index) => {
            const match = part.match(/\[(.*?)\]\((.*?)\)/);
            if (match) {
                return <Link key={index} href={match[2]} className="text-blue-400 hover:underline font-bold">{match[1]}</Link>;
            }
            // Basic formatting for bold
            const boldParts = part.split(/(\*\*.*?\*\*)/g);
            return boldParts.map((subPart, subIndex) => {
                if (subPart.startsWith('**') && subPart.endsWith('**')) {
                    return <strong key={`${index}-${subIndex}`} className="text-white">{subPart.slice(2, -2)}</strong>;
                }
                return subPart;
            });
        });
    };

    return (
        <>
            {/* Toggle Button (Floating Orb) */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="fixed bottom-6 right-6 z-50 size-14 md:size-16 rounded-full bg-slate-900 border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.3)] flex items-center justify-center group overflow-hidden"
                    >
                        {/* Orb Animation */}
                        <div className="absolute inset-0 bg-linear-to-tr from-blue-600/20 to-purple-600/20 animate-pulse-slow"></div>
                        <div className="absolute inset-2 rounded-full border border-blue-400/30 border-t-blue-400 border-r-transparent animate-spin-slow"></div>

                        <Bot size={28} className="text-blue-400 relative z-10 group-hover:text-white transition-colors" />

                        {/* Status Dot */}
                        <span className="absolute top-3 right-3 size-2 bg-green-500 rounded-full animate-pulse border border-slate-900"></span>
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Chat Interface */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className={`fixed z-50 bg-slate-950/90 backdrop-blur-xl border border-blue-500/20 shadow-2xl overflow-hidden flex flex-col transition-all duration-300 ${isMinimized
                            ? "bottom-6 right-6 w-72 h-16 rounded-2xl"
                            : "bottom-6 right-6 w-[90vw] md:w-96 h-[600px] max-h-[80vh] rounded-3xl"
                            }`}
                    >
                        {/* Header */}
                        <div
                            className="h-16 bg-slate-900/50 border-b border-white/5 flex items-center justify-between px-4 cursor-pointer"
                            onClick={() => !isMinimized && setIsMinimized(true)}
                        >
                            <div className="flex items-center gap-3">
                                <div className="size-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center">
                                    <Bot size={18} className="text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm tracking-wide">CLOUDE <span className="text-blue-500">NEURAL</span></h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="size-1.5 bg-green-500 rounded-full animate-pulse"></span>
                                        <span className="text-[10px] text-slate-400 uppercase tracking-wider">Online</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                {isMinimized ? (
                                    <button onClick={(e) => { e.stopPropagation(); setIsMinimized(false); }} className="p-1 text-slate-400 hover:text-white"><Maximize2 size={16} /></button>
                                ) : (
                                    <button onClick={(e) => { e.stopPropagation(); setIsMinimized(true); }} className="p-1 text-slate-400 hover:text-white"><Minimize2 size={16} /></button>
                                )}
                                <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="p-1 text-slate-400 hover:text-red-400"><X size={18} /></button>
                            </div>
                        </div>

                        {/* Chat Area */}
                        {!isMinimized && (
                            <>
                                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
                                    {/* Intro Date */}
                                    <div className="text-center">
                                        <span className="text-[10px] text-slate-600 font-mono">ENCRYPTED SESSION ESTABLISHED</span>
                                    </div>

                                    {messages.map((msg) => (
                                        <motion.div
                                            initial={{ opacity: 0, x: msg.sender === 'bot' ? -20 : 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            key={msg.id}
                                            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`max-w-[85%] p-3.5 rounded-2xl text-sm leading-relaxed ${msg.sender === 'user'
                                                    ? 'bg-blue-600 text-white rounded-br-none shadow-lg shadow-blue-600/10'
                                                    : 'bg-slate-800/80 text-slate-300 rounded-bl-none border border-slate-700/50 backdrop-blur-md'
                                                    }`}
                                            >
                                                {renderText(msg.text)}

                                                {/* RICH UI COMPONENTS */}

                                                {/* Clickable Vertical Cards (Services/Pricing) */}
                                                {msg.type === 'cards' && msg.data && (
                                                    <div className="flex flex-col gap-2 mt-4">
                                                        {msg.data.map((card: any, idx: number) => (
                                                            <button
                                                                key={idx}
                                                                onClick={() => startQuickAction(card.query)}
                                                                className="w-full text-left bg-slate-900 border border-slate-700 p-3 rounded-xl flex items-center gap-3 hover:border-blue-500/40 hover:bg-slate-800 transition-all group"
                                                            >
                                                                <span className="text-2xl bg-slate-800 p-2 rounded-lg group-hover:scale-110 transition-transform">{card.icon}</span>
                                                                <div>
                                                                    <h4 className="text-xs font-bold text-white group-hover:text-blue-400 transition-colors">{card.title}</h4>
                                                                    <p className="text-[10px] text-slate-400 leading-tight mt-0.5">{card.desc}</p>
                                                                </div>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Tech Grid */}
                                                {msg.type === 'tech_grid' && msg.data && (
                                                    <div className="grid grid-cols-2 gap-2 mt-4">
                                                        {msg.data.map((tech: any, idx: number) => (
                                                            <button
                                                                key={idx}
                                                                onClick={() => startQuickAction(tech.query || tech.name)}
                                                                className="bg-slate-900 border border-slate-700 p-2.5 rounded-lg flex items-center justify-between hover:bg-slate-800 hover:border-blue-500/40 transition-all group text-left w-full"
                                                            >
                                                                <div>
                                                                    <div className="text-[11px] font-bold text-white group-hover:text-blue-400 transition-colors">{tech.name}</div>
                                                                    <div className="text-[9px] text-slate-500">{tech.desc}</div>
                                                                </div>
                                                                <span className="text-[9px] bg-blue-500/10 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/20 font-medium group-hover:bg-blue-500/20 transition-colors">{tech.status}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Action Button */}
                                                {msg.type === 'action' && msg.data && (
                                                    <div className="mt-4">
                                                        <Link href={msg.data.action} className="w-full block text-center py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold rounded-xl transition-all shadow-lg shadow-blue-600/20">
                                                            {msg.data.label}
                                                        </Link>
                                                    </div>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}

                                    {isTyping && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                            <div className="bg-slate-800 p-3 rounded-2xl rounded-bl-none border border-slate-700 flex gap-1.5 items-center">
                                                <span className="text-[10px] text-slate-400 mr-1">Neural Core Processing</span>
                                                <span className="size-1 bg-blue-400 rounded-full animate-bounce"></span>
                                                <span className="size-1 bg-blue-400 rounded-full animate-bounce delay-100"></span>
                                                <span className="size-1 bg-blue-400 rounded-full animate-bounce delay-200"></span>
                                            </div>
                                        </motion.div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {/* Quick Actions */}
                                {messages.length < 3 && (
                                    <div className="px-4 pb-2 flex gap-2 overflow-x-auto scrollbar-hide">
                                        {[
                                            { label: "💰 Pricing", val: "Pricing" },
                                            { label: "🚀 Careers", val: "Hiring" },
                                            { label: "🛠️ Tech Stack", val: "Tech Stack" },
                                            { label: "📞 Contact", val: "Contact" }
                                        ].map(chip => (
                                            <button
                                                key={chip.label}
                                                onClick={() => startQuickAction(chip.val)}
                                                className="whitespace-nowrap px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-full text-[10px] text-slate-300 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all font-medium"
                                            >
                                                {chip.label}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {/* Input Area */}
                                <div className="p-4 bg-slate-900 border-t border-white/5 relative">
                                    {/* Holographic Grid Background for Input */}
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-size-[10px_10px] opacity-10 pointer-events-none"></div>
                                    <div className="relative">
                                        <input
                                            type="text"
                                            value={input}
                                            onChange={(e) => setInput(e.target.value)}
                                            onKeyDown={handleKeyPress}
                                            placeholder="Ask about Strategy, Tech, or Growth..."
                                            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-4 pr-12 py-3.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500/50 transition-colors"
                                        />
                                        <button
                                            onClick={handleSend}
                                            disabled={!input.trim()}
                                            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 rounded-lg text-white disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-500 transition-colors"
                                        >
                                            <Send size={16} />
                                        </button>
                                    </div>
                                    <div className="flex justify-center mt-2 gap-2">
                                        <span className="text-[10px] text-slate-600 flex items-center gap-1">
                                            <Terminal size={10} /> CloudeIndia Neural Core v1.0
                                        </span>
                                    </div>
                                </div>
                            </>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
