export interface Experience {
  title: string;
  company: string;
  companyUrl: string;
  date: string;
  location: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company: "Elice",
    companyUrl: "https://elice.io",
    date: "Nov 2022 – June 2023",
    location: "Seoul",
    description: [
      "Mentored beginner developers and provided technical guidance in a collaborative, fast-paced dev environment.",
      "Participated in internal hackathons and contributed to frontend feature development using React.",
      "Implemented reusable UI components and integrated RESTful APIs for internal tooling projects.",
      "Assisted with debugging sessions and code reviews, reinforcing best practices in modern JavaScript.",
    ],
  },
  {
    title: "Senior Video Producer / Technical Content Lead",
    company: "Youniv",
    companyUrl: "https://youniv.com",
    date: "Jan 2020 – July 2022",
    location: "Seoul",
    description: [
      "Led content strategy and video production for the company's tech-focused YouTube channel, helping grow subscribers from 100K to 600K.",
      "Collaborated with engineers and designers to create educational, developer-friendly media assets.",
      "Optimized video delivery workflows through automation tools and basic scripting, improving production efficiency.",
      "Contributed to content planning with a user-centric mindset, enhancing product storytelling for a tech audience.",
    ],
  },
];
