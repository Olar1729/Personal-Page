export type TalkType = "conference" | "seminar" | "invited" | "workshop" | "colloquium";

export interface Talk {
    id: string;
    title: string;
    type: TalkType;
    event: string;
    location: string;
    date: string; // ISO date string
    abstract?: string;
    slides?: string;
    video?: string;
    tags: string[];
}
