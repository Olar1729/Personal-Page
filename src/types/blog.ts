export type BlogCategory =
    | "mathematics"
    | "programming"
    | "research"
    | "ai"
    | "personal-notes";

export interface BlogPost {
    slug: string;
    title: string;
    date: string; // ISO date string
    lastUpdated?: string;
    excerpt: string;
    category: BlogCategory;
    tags: string[];
    readingTime: number; // minutes
    featured?: boolean;
    draft?: boolean;
}

export interface BlogPostWithContent extends BlogPost {
    content: string;
}
