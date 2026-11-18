export interface Course {
    id: string;
    title: string;
    code?: string;
    institution: string;
    semester: string;
    year: number;
    level: "undergraduate" | "graduate" | "seminar";
    description: string;
    topics: string[];
    lectureNotes?: string;
    assignments?: string;
    officeHours?: string;
}
