import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Intelligence Grid | Engineering Insights & News",
    description: "Deep-dives into AI orchestration, zero-trust cloud engineering, and the future of enterprise technology. Insights from the CloudeIndia frontline.",
};

import NewsroomClient from "./NewsroomClient";

export default function NewsroomPage() {
    return (
        <NewsroomClient />
    );
}

// ... original content moved to NewsroomClient.tsx ...
