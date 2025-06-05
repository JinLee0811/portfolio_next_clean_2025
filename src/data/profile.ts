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
  role: "Full Stack Engineer",
  shortDescription: "focused on AI-powered applications",
  location: "Sydney",
  email: "jinlee811811@gmail.com",
  introduction: {
    greeting: "Hi, my name is",
    shortBio:
      "I'm a full-stack engineer based in Sydney with a passion for building intuitive, AI-powered digital products. I specialize in React, TypeScript, and scalable frontend architecture, with hands-on experience integrating APIs, cloud infrastructure, and machine learning models into real-world applications.",
    detailedBio: [
      "Currently, I lead the frontend development of a part-time job marketplace tailored for international students in Australia, and an AI-based restaurant review summarizer built for global travelers. These projects reflect my ability to design, build, and ship complete products from idea to deployment — independently or in small teams.",
      "Previously, I worked as a developer in Korea while pursuing my Master's in IT at UTS, where I earned distinction-level results across AI and software engineering coursework. I enjoy experimenting with new ideas in my spare time — whether it's prototyping microservices, deploying ML APIs, or designing product interfaces with Tailwind and Figma.",
      "I'm driven by curiosity, practicality, and the excitement of turning ideas into polished, user-focused experiences — especially when those ideas can scale.",
    ],
    currentWork:
      "I'm currently looking for new opportunities. Let's talk if you're interested in collaboration or hiring.",
    previousWork: "Building web experiences that matter",
    interests: "Passionate about accessibility and performance optimization",
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
