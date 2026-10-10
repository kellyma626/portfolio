
export const links = {
  email: "kellyma.dev@gmail.com",
  github: "https://github.com/kellyma626",
  medium: "https://kellycodes.medium.com/",
  linkedin: "https://www.linkedin.com/in/kellyma626/",
  resume: "/resume.pdf", 
};

export const aboutParagraphs = [
  "Hi! I’m Kelly. I’m from the San Gabriel Valley in Los Angeles, California, and I study Computer Science at the University of California, Riverside.",
  "I recently worked at Wells Fargo as a Software Engineering Intern, where I developed an internal developer tool that used AI to automate parts of a debugging workflow.",
  "I’ve also built a foundation in machine learning through Break Through Tech, an initiative by Cornell Tech and MIT to support underrepresented students in tech. As a part of this program, I worked with the Fitch Group on a corporate bankruptcy prediction model.",
  "I’ve done freelance work for a local business, designing and building an e-commerce website for their customers to shop online.",
  "Throughout my time in college, I’ve developed websites as a part of the Association for Computing Machinery, researched computer science education as an undergraduate research assistant, and taught programming and version control to beginner coders.",
];

export const happiness = [
  "boba milk tea, matcha lattes, leung cha",
  "anime, K-dramas, manga, manhwa",
  "skincare, makeup, clothes, shopping",
  "Asian food and mahjong with my family",
  "sleep, exercise, water, sunlight",
];

export const filters = ["all", "projects", "notes", "AI/ML", "fullstack"] as const;
export type Filter = (typeof filters)[number];
export type Tag = Exclude<Filter, "all">;

export type Work = {
  title: string;
  description: string;
  tags: Tag[];
  date: string;
  linkLabel: string;
  href: string;
  image?: string; // optional preview image in /public
};

export const work: Work[] = [
  {
    title: "e-commerce website",
    description: "an online storefront for a local business designed and built by me",
    tags: ["projects", "fullstack"],
    date: "MAR 2026 - PRESENT",
    linkLabel: "github ↗",
    href: "https://github.com/kellyma626/universal-craft",
    image: "/website.png"
  },
  {
    title: "corporate bankruptcy prediction model",
    description: "an ML model for predicting corporate bankruptcy using historical financial data",
    tags: ["projects", "AI/ML"],
    date: "AUG 2025 - DEC 2025",
    linkLabel: "github ↗",
    href: "https://github.com/Pablongo24/break-thru-tech-fitch-1a",
    image: "/model.png"
  },
  {
    title: "undergraduate research overview",
    description: "a short video introducing my research topic (notes on how the project evolved will be added)",
    tags: ["notes", "AI/ML"],
    date: "OCT 2024 - DEC 2025",
    linkLabel: "video ↗",
    href: "/research.mp4",
    image: "/research.png"
  },
];

export type Post = {
  date: string;
  title: string;
  excerpt: string;
  href: string;
};

export const posts: Post[] = [
  {
    date: "August 28, 2026",
    title: "my software engineering internship at wells fargo",
    excerpt:
      "an info dump about interning at wells fargo and interning out-of-state",
    href: "https://kellycodes.medium.com/my-software-engineering-internship-at-wells-fargo-c8d16ec4ca2b",
  },
];
