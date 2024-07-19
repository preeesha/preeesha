import { Injectable } from "@angular/core";

interface ProjectInterface {
  name: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  projectUrl: string;
  imageUrl?: string;
}

@Injectable({
  providedIn: "root",
})
export class DataService {
  resumeLink: string = "/assets/resume.pdf"
  email: string = "golu@gmail.com";
  social: Record<string, string> = {
    github: "https://github.com/yogesh-aggarwal",
    twitter: "https://twitter.com/YogeshDev215",
    facebook: "https://www.facebook.com/yogesh.aggarwal.50702769",
    instagram: "https://www.instagram.com/developer.exe",
    linkedin: "https://www.linkedin.com/in/YogeshDev215",
  };
  featuredProjects: ProjectInterface[] = [
    {
      name: "Fanatic",
      imageUrl: "https://bit.ly/37tmGmR",
      description:
        "Website for Anime Fans where they can enjoy their favorite Anime Series. Desktop Application.",
      githubUrl: "https://github.com/yogesh-aggarwal/fanatic",
      projectUrl: "https://anime-fanatic.web.app/",
      technologies: ["Angular", "Firebase", "Firestore"],
    }
  ];
  otherProjects: ProjectInterface[] = [
    {
      name: "Jycore Assistant",
      description:
        "Machine Learning & Artificial intelligence powered virtual assistant that help you automate your daily tasks.",
      githubUrl: "https://github.com/yogesh-aggarwal/assistant",
      projectUrl: "https://github.com/yogesh-aggarwal/assistant/releases",
      technologies: ["Python", "ML & AI", "MongoDB", "PyMongo", "Automation"],
    },
  ];
  technologies: string[] = [
  ];
  madeUsing: string[] = [];

  constructor() {}
}
