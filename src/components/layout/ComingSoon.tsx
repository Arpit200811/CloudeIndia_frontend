import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { Construction } from "lucide-react";

export default function ComingSoon({ title }: { title: string }) {
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar />
            <main className="grow flex flex-col items-center justify-center text-center px-4 py-20">
                <div className="bg-primary/10 p-6 rounded-full text-primary mb-6">
                    <Construction size={48} />
                </div>
                <h1 className="text-4xl font-black mb-4 text-[#111418]">{title}</h1>
                <p className="text-xl text-gray-500 max-w-lg mb-8">
                    We are currently building this page to serve you better. Check back soon for updates!
                </p>
                <Link
                    href="/"
                    className="bg-primary text-white px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
                >
                    Return Home
                </Link>
            </main>
            <Footer />
        </div>
    );
}
