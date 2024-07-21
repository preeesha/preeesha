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
  resumeLink: string = "/assets/resume.pdf";
  email: string = "prishapg101@gmail.com";
  social: Record<string, string> = {
    github: "https://github.com/preeesha",
    twitter: "https://x.com/prishapg01",
    instagram: "https://www.instagram.com/prishag0202",
    linkedin: "https://www.linkedin.com/in/preeesha",
  };
  featuredProjects: ProjectInterface[] = [
    {
      name: "AI Assistant to help with understanding Rocket.Chat core codebase",
      imageUrl: "/assets/",
      description:
        "An AI-Assistant for Rocket.Chat helps developers understand the codebase by answering questions, creating diagrams, finding documentation, and suggesting improvements. This tool aims to enhance code quality, consistency, and developer productivity.",
      githubUrl: "https://github.com/RocketChat/Apps.AI.Codebase.Assistant",
      projectUrl: "",
      technologies: [
        "javascript",
        "neo4j",
        "typescript",
        "HuggingFace",
        "Large Language Models",
        "Mistral",
        "CodeLLama",
      ],
    },
    {
      name: "Florence",
      imageUrl: "/assets/florence.png",
      description: `A next gen Ecom which provides personalized recomandation`,
      githubUrl: "https://github.com/preeesha/florance-frontend",
      projectUrl: "",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "KNN (machine learning)",
        "Razorpay",
        "BERT (NLP with Python implementation)",
      ],
    },
    {
      name: "Vibeline",
      imageUrl: "/assets/vibe.png",
      description: `A real time chat application`,
      githubUrl: "https://github.com/preeesha/vibeline",
      projectUrl: "https://vibeline.vercel.app/",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "sockect.io (lib)",
      ],
    },
    {
      name: "Bookwee",
      imageUrl: "/assets/bookwee.png",
      description: `A books recommendation website, according to popularity and simlarity`,
      githubUrl: "https://github.com/preeesha/bookwee",
      projectUrl: "https://bookwee.vercel.app/",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "python",
      ],
    },
    {
      name: "Bingsights",
      imageUrl: "/assets/bingsights.png",
      description: `A social media analysis platform`,
      githubUrl: "https://github.com/bingsights-official",
      projectUrl: "https://bingsights.web.app/",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
        "chart.js",
        "bert",
      ],
    },
    {
      name: "Poller",
      imageUrl: "/assets/poller.png",
      description: `A polling website where you can vot on existing poll or even create your own poll`,
      githubUrl: "https://github.com/preeesha/poller",
      projectUrl: "https://poller-pink.vercel.app/",
      technologies: [
        "MongoDB",
        "Express.js",
        "React.js",
      ],
    },
    
  ];
  otherProjects: ProjectInterface[] = [
    {
      name: "Lane Dectetor",
      description:
        "Hepls in detcting lanes ,used in self driving cars",
      githubUrl: "https://github.com/preeesha/road-lane-finding-application-using-flask",
      projectUrl: "",
      technologies: ["Python", "ML & AI", "MongoDB", "PyMongo", "Automation"],
    },
    {
      name: "Amazon Scrapper",
      description:
        "Helps in scrapping data especially from anazon websites",
      githubUrl: "https://github.com/preeesha/amazon-scrapper",
      projectUrl: "",
      technologies: ["Python","Selenium","Automation"],
    },
    {
      name: "Reverse Shell",
      description:
        "A trojon designed in python ",
      githubUrl: "https://github.com/preeesha/reverse-shell",
      projectUrl: "",
      technologies: ["Python","py os","Automation"],
    },
    {
      name: "Image Stegnography",
      description:
        "Securely hide and extract messages within images using our Java-based steganography app.",
      githubUrl: "https://github.com/preeesha/reverse-shell",
      projectUrl: "",
      technologies: ["Java"],
    },
    {
      name: "Fake News Detection",
      description:
        "Detect and combat misinformation with our machine learning-powered fake news detection app, built using Python.",
      githubUrl: "https://github.com/preeesha/fake-news-detection",
      projectUrl: "",
      technologies: ["Java"],
    },
    {
      name: "House Price Prediction",
      description:
        "Accurately predict house prices with our advanced machine learning app.",
      githubUrl: "https://github.com/preeesha/bengaluru-housings",
      projectUrl: "",
      technologies: ["Java"],
    },
  ];
  technologies: string[] = [];
  madeUsing: string[] = [];

  constructor() {}
}
