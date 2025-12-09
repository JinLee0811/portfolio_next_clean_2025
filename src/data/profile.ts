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
  role: "Data Engineer",
  shortDescription: "data pipelines and cloud, with a full-stack background",
  location: "Sydney",
  email: "jinlee811811@gmail.com",
  introduction: {
    greeting: "Hi, my name is",
    shortBio:
      "I'm a data-focused engineer in Sydney with a full-stack foundation. I build reliable data pipelines, analytics-ready models, and the product surfaces that sit on top of them.",
    detailedBio: [
      "I focus on API-driven ETL, Airflow automation, and data modeling while still shipping user-facing features when needed. This mix lets me bridge product engineering and data engineering so systems feel smooth on the surface and solid underneath.",
      "Previously, I worked as a developer in Korea and completed my Master's in IT at UTS with Dean's List recognition. I enjoy tinkering with new stacks, improving pipelines, and keeping my full-stack skills sharp.",
      "I'm driven by clarity, reliability, and the satisfaction of turning ideas into systems that scale for both users and data.",
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
