import Link from "next/link";

export default function AboutCTA() {
    return (
        <div className="w-full max-w-[1100px] px-6 pb-12 mx-auto">
            <div className="bg-primary rounded-2xl p-8 md:p-10 flex flex-col items-center text-center text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
                <h2 className="text-2xl md:text-3xl font-black mb-4 relative z-10">Ready to build the future together?</h2>
                <p className="text-base text-blue-100 max-w-xl mb-8 relative z-10">
                    Whether you're looking for a technology partner or your next career move, we'd love to hear from you.
                </p>
                <div className="flex flex-wrap justify-center gap-3 relative z-10">
                    <Link href="/contact" className="bg-white text-primary px-6 py-3 rounded-lg font-bold text-base hover:bg-blue-50 transition-colors shadow-lg">Start a Project</Link>
                    <Link href="/careers" className="bg-primary/20 backdrop-blur-md border border-white/30 text-white px-6 py-3 rounded-lg font-bold text-base hover:bg-primary/30 transition-colors">Join the Team</Link>
                </div>
            </div>
        </div>
    );
}
