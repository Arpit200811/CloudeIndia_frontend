import { Cloud, LayoutGrid, Globe, Terminal, Database } from "lucide-react";

export default function TechTicker() {
    return (
        <div className="mt-16 pt-10 border-t border-[#f0f2f4]">
            <p className="text-center text-[#617589] text-sm font-semibold uppercase tracking-widest mb-8">Trusted technologies we leverage</p>
            <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                <div className="flex items-center gap-2 font-bold text-xl text-[#111418]"><Cloud size={20} /> AWS</div>
                <div className="flex items-center gap-2 font-bold text-xl text-[#111418]"><LayoutGrid size={20} /> Azure</div>
                <div className="flex items-center gap-2 font-bold text-xl text-[#111418]"><Globe size={20} /> Google Cloud</div>
                <div className="flex items-center gap-2 font-bold text-xl text-[#111418]"><Terminal size={20} /> Kubernetes</div>
                <div className="flex items-center gap-2 font-bold text-xl text-[#111418]"><Database size={20} /> MongoDB</div>
            </div>
        </div>
    );
}
