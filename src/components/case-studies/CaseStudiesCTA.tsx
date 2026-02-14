import Link from "next/link";

export default function CaseStudiesCTA() {
    return (
        <section className="py-8">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className="bg-slate-950 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden text-center lg:text-left transition-all">
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-primary/20 to-transparent pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                        <div className="max-w-xl">
                            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4 leading-tight">Ready to start your own success story?</h2>
                            <p className="text-gray-400 text-sm font-medium">Join over 200+ global enterprises that have scaled their operations with our cloud-native solutions.</p>
                        </div>
                        <div className="flex flex-wrap justify-center sm:flex-row gap-3">
                            <Link href="/contact" className="bg-primary text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:shadow-lg hover:shadow-primary/20 transition-all">Schedule Consultation</Link>
                            <Link href="/services" className="bg-white/10 text-white border border-white/20 px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-white/20 transition-all">Our Services</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
