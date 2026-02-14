export type NewsStatus = "published" | "draft" | "archived";

export interface NewsArticle {
    id: string;
    title: string;
    summary: string;
    content: string; // HTML or Markdown content
    author: string;
    category: string;
    imageUrl?: string;
    status: NewsStatus;
    publishedAt: string;
    updatedAt: string;
    tags: string[];
}
