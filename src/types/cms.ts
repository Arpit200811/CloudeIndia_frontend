export type CaseStudyStatus = "published" | "draft" | "archived";

export interface CaseStudy {
    id: string;
    title: string;
    client: string;
    category: string;
    summary: string;
    challenge: string;
    solution: string;
    results: string;
    imageUrl?: string;
    status: CaseStudyStatus;
    createdAt: string;
    updatedAt: string;
    tags: string[];
}
