export interface SoftwareProject {
    id: string;
    name: string;
    description: string;
    longDescription?: string;
    language: string;
    github?: string;
    docs?: string;
    pypi?: string;
    stars?: number;
    tags: string[];
    status: "active" | "maintained" | "archived" | "experimental";
    featured?: boolean;
}
