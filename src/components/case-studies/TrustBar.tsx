export default function TrustBar() {
    return (
        <section className="py-8 border-b border-[#f0f2f4] bg-white">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
                <p className="text-center text-gray-500 text-[10px] font-semibold uppercase tracking-widest mb-6">Trusted by Global Leaders</p>
                <div className="flex flex-wrap justify-center items-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="h-6 w-24 bg-gray-300 rounded" data-alt="Client logo 1"></div>
                    <div className="h-6 w-20 bg-gray-300 rounded" data-alt="Client logo 2"></div>
                    <div className="h-6 w-28 bg-gray-300 rounded" data-alt="Client logo 3"></div>
                    <div className="h-6 w-24 bg-gray-300 rounded" data-alt="Client logo 4"></div>
                    <div className="h-6 w-16 bg-gray-300 rounded" data-alt="Client logo 5"></div>
                </div>
            </div>
        </section>
    );
}
