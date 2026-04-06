interface SocialLink {
  platform: string;
  url: string;
}

export interface Profile {
  name: string;
  role: string;
  shortDescription: string;
  location: string;
  email: string;
  introduction: {
    greeting: string;
    shortBio: string;
    detailedBio: string[];
    currentWork: string;
    previousWork: string;
    interests: string;
  };
  socialLinks: SocialLink[];
}

export const profile: Profile = {
  name: "Jin Lee",
  role: "Software Engineer",
  shortDescription:
    "full-stack engineer delivering production web apps with React, TypeScript, Node.js, and AWS — AWS Certified DevOps Engineer – Professional",
  location: "Sydney",
  email: "jinlee.engineer@gmail.com",
  introduction: {
    greeting: "Hi, my name is",
    shortBio:
      "I'm a full-stack software engineer in Sydney with about 3.5 years of experience shipping production-grade web applications across frontend, backend, and cloud. I specialise in React, TypeScript, and Node.js, and I hold the AWS Certified DevOps Engineer – Professional certification.",
    detailedBio: [
      "I design scalable APIs, integrate secure payment flows, and deploy reliable services on AWS, with a strong focus on performance, observability, and real-world user impact.",
      "I completed my Master of Information Technology (Software Development) at UTS with a WAM of 90.50 (HD) and Dean's List recognition (2024–2025). Before Sydney, I built APIs and payments systems at TPZ Studio and led a React migration and platform work at Youniv in Seoul.",
      "I'm based in Sydney with full Australian work rights (Partner Visa — no sponsorship required). I stay proactive with modern tooling, including AI-assisted development, to ship faster without sacrificing quality.",
      "I'm driven by clarity, reliability, and turning ideas into systems that scale for users and the teams behind them.",
    ],
    currentWork:
      "I'm open to roles where I can own features end-to-end and contribute to dependable production systems. Let's connect if that sounds like a fit.",
    previousWork: "APIs, payments, and full-stack delivery",
    interests:
      "Performance, system reliability, and continuous learning across the stack",
  },
  socialLinks: [
    {
      platform: "GitHub",
      url: "https://github.com/JinLee0811",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/jin-lee-72b653272/",
    },
  ],
};
