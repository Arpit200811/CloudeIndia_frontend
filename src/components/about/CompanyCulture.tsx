import { Users, Heart, Zap } from "lucide-react";
import NextImage from "next/image";

export default function CompanyCulture() {
    return (
        <div className="w-full max-w-[1200px] px-6 py-16 mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
                <div className="lg:w-1/3 space-y-6">
                    <h2 className="text-4xl font-black tracking-tight leading-tight text-[#111418]">Our Vibrant Culture</h2>
                    <p className="text-slate-600 text-lg">
                        We believe that great technology is built by people who are inspired, collaborative, and diverse. Our culture is the secret sauce that enables us to solve the world's most complex cloud challenges.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Users size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#111418]">Inclusion First</h4>
                                <p className="text-sm text-slate-500">Diverse perspectives drive better outcomes.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                <Zap size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-[#111418]">Lifelong Learning</h4>
                                <p className="text-sm text-slate-500">Every employee gets a yearly learning budget.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:w-2/3 grid grid-cols-12 gap-4 h-[500px]">
                    <div className="col-span-8 h-full bg-slate-200 rounded-2xl overflow-hidden relative border border-slate-200">
                        <NextImage
                            src="/team-collaboration.png"
                            alt="Team brainstorming"
                            width={800}
                            height={500}
                            quality={100}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-4 flex flex-col gap-4">
                        <div className="h-1/2 bg-slate-200 rounded-2xl overflow-hidden relative border border-slate-200">
                            <NextImage
                                src="/team-innovation.png"
                                alt="Collaboration"
                                width={600}
                                height={400}
                                quality={100}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="h-1/2 bg-slate-200 rounded-2xl overflow-hidden relative border border-slate-200">
                            <NextImage
                                src="/team-growth.png"
                                alt="Innovation"
                                width={600}
                                height={400}
                                quality={100}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
