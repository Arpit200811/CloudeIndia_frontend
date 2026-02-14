export default function ServicesCTA() {
    return (
        <section className="bg-primary rounded-2xl overflow-hidden relative mt-16">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxzpcn0w-9b5fT8h-6nr7U5sIPWC3LRSsa_CEyHdmT61s6G9r5llFLWwZefEr3QCT7TLkYtrz4uV6iXJ_siDt0WfhEenVl9DtINvm2Hb8rlkjljulW8xFK4GL2VPkePz9chNzx_rAY0TvO7n3HDGK5tXkML91aDnRZdMbldxwfMDdFAbplUtJJsGApZPIy5X9SVashtI9stwkSkundKpgn3z81XkYRy8fsJO6_LSn-FZ_SD2hbM3UCihtymywLqYVa-6dssumFJRCr')", backgroundSize: "cover" }}>
            </div>
            <div className="relative z-10 px-8 py-12 md:py-16 flex flex-col items-center text-center">
                <h2 className="text-white text-3xl md:text-5xl font-black mb-6">Ready to Innovate?</h2>
                <p className="text-white/80 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
                    Partner with our team of experts to start your journey toward a more efficient, scalable, and secure digital future.
                </p>
                <div className="flex flex-wrap justify-center gap-4 w-full">
                    <button className="bg-white text-primary text-base font-bold h-14 px-10 rounded-lg hover:bg-gray-100 transition-colors border border-primary/20">
                        Talk to an Expert
                    </button>
                    <button className="bg-primary/20 text-white border border-white/40 text-base font-bold h-14 px-10 rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm">
                        Request a Quote
                    </button>
                </div>
            </div>
        </section>
    );
}
