import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "Netflix Clone",
    description:
      "A full-stack Netflix clone featuring user authentication (OAuth with GitHub and Google), responsive design, and comprehensive movie management functionality. Key features include wishlist management, movie playback, and mobile optimization. Built with modern tech stack including Next.js, Tailwind CSS, and Prisma, with MongoDB integration.",
    imageUrls: [
      "/images/netfilx/Login.png",
      "/images/netfilx/User.png",
      "/images/netfilx/VideoList.png",
      "/images/netfilx/Modal.png",
      "/images/netfilx/Video.png",
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
    githubUrl: "https://github.com/JinLee0811/jin-netflix-clone",
    liveUrl: "https://jin-netflix-clone.vercel.app/",
    date: "2024-07",
    featured: true,
    category: "Personal",

    projectGoal:
      "To replicate core Netflix features and learn full-stack development with Next.js and Prisma.",
    coreValue:
      "Provides a familiar streaming interface with user authentication and movie browsing.",
    yourRole: ["Lead Developer", "Frontend", "Backend", "Database Design"],
    techInfra: ["Vercel (Deployment)"],
    techDbApi: ["MongoDB Atlas", "NextAuth.js", "Prisma Client"],
    keyFeatures: [
      {
        title: "User Authentication",
        detail: "Implemented OAuth login with Google and GitHub using NextAuth.js.",
      },
      {
        title: "Movie Catalog & Playback",
        detail: "Fetched movie data and enabled video playback using custom components.",
      },
      {
        title: "Wishlist Management",
        detail:
          "Allowed users to add/remove movies from their personal wishlist, stored in MongoDB.",
      },
    ],
    architectureDesc:
      "Monolithic application structure using Next.js for both frontend and API routes. Leveraged Prisma ORM for database interactions with MongoDB. State management primarily handled by React's native hooks (useState, useContext).",
    architectureChoice:
      "Chose Next.js for its integrated frontend/backend capabilities and SEO benefits. Opted for React hooks for state management due to the project's moderate complexity and to minimize external dependencies.",
    challenges: [
      {
        problem: "Integrating Prisma with Next.js API routes efficiently.",
        solution: "Developed helper functions and optimized database queries.",
      },
      {
        problem: "Responsive design across various screen sizes.",
        solution: "Utilized Tailwind CSS utility classes and tested extensively.",
      },
    ],
    achievements: [
      "Successfully deployed the application on Vercel.",
      "Gained hands-on experience with the T3 stack components.",
      "Achieved Lighthouse performance score of 85+ on key pages.",
    ],
    collaboration: [
      "Solo project managed via GitHub Projects using a Kanban board.",
      "Followed conventional commits for version control.",
      "Self-conducted code reviews following best practices before merging branches.",
      "Documented core components and setup process in README.",
    ],
    testing: [
      "Manual testing for core user flows (authentication, browsing, wishlist).",
      "ESLint and Prettier configured for static code analysis and formatting.",
      "Implemented basic unit tests for utility functions using Jest (Coverage: ~30%).",
    ],
    deployment: [
      "Continuous deployment via Vercel connected to the GitHub main branch.",
      "Configured environment variables for API keys and database connection strings in Vercel.",
      "Monitored deployment status and runtime logs using the Vercel dashboard.",
    ],
    lessonsLearned: [
      "Deepened understanding of full-stack development with Next.js.",
      "Learned the importance of database schema design and indexing for performance.",
      "Realized the benefits of component-based architecture for maintainability.",
      "Improved skills in integrating third-party authentication services.",
    ],
  },
];
