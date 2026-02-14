import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialSlider() {
    return (
        <section className="py-24 bg-primary/5">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-[#111418]">What Our Clients Say</h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
                </div>
                <div className="relative bg-white rounded-2xl p-8 lg:p-16 shadow-xl max-w-4xl mx-auto border border-primary/10">
                    <Quote className="text-6xl text-primary/20 absolute top-8 left-8 select-none" size={64} />
                    <div className="relative z-10 text-center">
                        <p className="text-xl lg:text-2xl font-medium italic leading-relaxed text-gray-700 mb-10">
                            "CloudeIndia's expertise was instrumental in our digital overhaul. Their team didn't just provide a service; they became a strategic partner that understood our unique challenges in the fintech space. The ROI was visible within the first quarter."
                        </p>
                        <div className="flex flex-col items-center">
                            <div className="size-16 rounded-full bg-gray-200 mb-4 border-2 border-primary"></div>
                            <h4 className="font-bold text-lg text-[#111418]">Michael Chen</h4>
                            <p className="text-gray-500 text-sm">CTO, Global Finance Corp</p>
                            <div className="mt-6 h-8 w-32 bg-gray-200 rounded opacity-50"></div>
                        </div>
                    </div>
                    <div className="absolute top-1/2 -left-6 -translate-y-1/2 hidden lg:block">
                        <button className="size-12 rounded-full bg-white shadow-lg border border-[#f0f2f4] flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                            <ChevronLeft size={24} />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -right-6 -translate-y-1/2 hidden lg:block">
                        <button className="size-12 rounded-full bg-white shadow-lg border border-[#f0f2f4] flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                    <div className="flex justify-center gap-2 mt-12">
                        <div className="h-2 w-8 bg-primary rounded-full"></div>
                        <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                        <div className="h-2 w-2 bg-gray-300 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
