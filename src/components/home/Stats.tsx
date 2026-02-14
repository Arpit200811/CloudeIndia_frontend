import { Rocket, Calendar, Users, BadgeCheck } from "lucide-react";
import Counter from "@/components/ui/Counter";

export default function Stats() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className="flex flex-col items-center text-center mb-10 gap-2" data-aos="fade-up">
                    <span className="text-primary font-bold uppercase tracking-wider text-[10px] mb-1 block">Our Track Record</span>
                    <h2 className="text-2xl md:text-3xl font-black text-[#111418] tracking-tight">A Legacy of Innovation & Trust</h2>
                    <div className="w-16 h-1 bg-primary rounded-full mt-2"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6">
                    <div
                        className="flex flex-col items-center p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:-translate-y-1 group hover:border-primary/30"
                        data-aos="fade-up"
                        data-aos-delay="0"
                    >
                        <div className="size-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Rocket size={24} strokeWidth={1.5} />
                        </div>
                        <p className="text-3xl md:text-4xl font-black tracking-tighter text-primary mb-1">
                            <Counter value={25} suffix="+" />
                        </p>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Projects Completed</p>
                    </div>

                    <div
                        className="flex flex-col items-center p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:-translate-y-1 group hover:border-primary/30"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <div className="size-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Calendar size={24} strokeWidth={1.5} />
                        </div>
                        <p className="text-3xl md:text-4xl font-black tracking-tighter text-primary mb-1">
                            <Counter value={4} />
                        </p>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Years of Excellence</p>
                    </div>

                    <div
                        className="flex flex-col items-center p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:-translate-y-1 group hover:border-primary/30"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <div className="size-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Users size={24} strokeWidth={1.5} />
                        </div>
                        <p className="text-3xl md:text-4xl font-black tracking-tighter text-primary mb-1">
                            <Counter value={7} />
                        </p>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Team Members</p>
                    </div>

                    <div
                        className="flex flex-col items-center p-6 rounded-2xl bg-slate-50 border border-slate-100 transition-all hover:-translate-y-1 group hover:border-primary/30"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <div className="size-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-colors">
                            <BadgeCheck size={24} strokeWidth={1.5} />
                        </div>
                        <p className="text-3xl md:text-4xl font-black tracking-tighter text-primary mb-1">
                            <Counter value={98} suffix="%" />
                        </p>
                        <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest text-center">Client Retention</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

