import Link from "next/link";

export default function ServicesBreadcrumb() {
    return (
        <nav className="flex flex-wrap gap-2 py-6">
            <Link href="/" className="text-[#617589] dark:text-gray-400 text-sm font-medium hover:text-primary">Home</Link>
            <span className="text-[#617589] dark:text-gray-600 text-sm font-medium">/</span>
            <span className="text-primary text-sm font-medium">Services Overview</span>
        </nav>
    );
}
