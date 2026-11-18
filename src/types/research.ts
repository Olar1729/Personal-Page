export interface ResearchArea {
    id: string;
    title: string;
    summary: string;
    description: string;
    relatedPapers: string[]; // ids referencing publications
    relatedProjects: string[];
    futureDirections: string[];
    icon?: string;
    tags: string[];
}
