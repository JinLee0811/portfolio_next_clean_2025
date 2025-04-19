import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "First React Portfolio",
    technologies: ["React", "JavaScript", "Styled-components", "CSS3"],
    description:
      "My first portfolio website showcasing the journey into React development. Built with a focus on component-based architecture and styled using Styled-components, this project represents the initial steps in modern web development while highlighting project experiences and technical skills.",
    imageUrls: [
      "/images/firstPortfolio/FirstPortfolio.png",
      "/images/firstPortfolio/Firstportfolio.detail.png",
      "/images/firstPortfolio/ProjectList.png",
      "/images/firstPortfolio/SkillList.png",
    ],
    githubUrl: "https://github.com/JinLee0811/portfolio",
    liveUrl: "https://jinlee0811.github.io/portfolio/",
    date: "2023-02",
    featured: false,
    category: "Personal",

    projectGoal:
      "To create a personal portfolio website while learning React fundamentals and modern web development practices.",
    coreValue: "Showcasing projects and skills through a clean, component-based React application.",
    yourRole: ["Frontend Developer", "UI/UX Designer", "Content Creator"],
    techInfra: ["GitHub Pages", "npm", "Git"],
    techDbApi: ["React Components", "Styled-components API"],
    keyFeatures: [
      {
        title: "Responsive Design",
        detail: "Mobile-first approach ensuring compatibility across all devices",
      },
      {
        title: "Component Architecture",
        detail: "Modular components built with React for better maintainability",
      },
      {
        title: "Dynamic Styling",
        detail: "Styled-components implementation for dynamic and maintainable CSS",
      },
      {
        title: "Project Showcase",
        detail: "Interactive project display with detailed information and links",
      },
    ],
    architectureDesc:
      "Built using React's component-based architecture, implementing reusable UI components and styled with Styled-components for dynamic styling capabilities. Deployed on GitHub Pages for easy accessibility.",
    architectureChoice:
      "Chose React for its component reusability and Styled-components for maintaining styling logic within components, making the codebase more maintainable.",
    challenges: [
      {
        problem: "Complex information architecture affecting UX",
        solution:
          "Simplified navigation and implemented clear visual hierarchy for better information display",
      },
      {
        problem: "JavaScript type safety concerns",
        solution: "Implemented thorough prop validation and documentation for components",
      },
      {
        problem: "Project organization and navigation",
        solution:
          "Restructured project layout and improved navigation patterns for better user experience",
      },
    ],
    achievements: [
      "Successfully built and deployed first React application",
      "Implemented responsive design principles",
      "Created reusable component library",
      "Achieved clean and maintainable styling with Styled-components",
    ],
    collaboration: [
      "Individual project with focus on learning React",
      "Implemented feedback from peer reviews",
      "Documented development process and learnings",
      "Maintained clean commit history with Git",
    ],
    testing: [
      "Manual testing across different devices",
      "Cross-browser compatibility testing",
      "Performance optimization for image loading",
      "User feedback collection and implementation",
    ],
    deployment: [
      "Successfully deployed on GitHub Pages",
      "Implemented continuous deployment workflow",
      "Optimized assets for production",
      "Set up custom domain configuration",
    ],
    lessonsLearned: [
      "Importance of TypeScript for large React applications",
      "Value of component-based architecture",
      "Significance of clean and intuitive UI/UX",
      "Benefits of proper project structure and organization",
    ],
  },
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
  {
    title: "Shopping Website",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Prisma",
      "MongoDB",
      "Node.js",
    ],
    description:
      "A full-stack e-commerce website built as a team project, featuring user authentication, product management, shopping cart functionality, and order processing. The project implements responsive design and RESTful API integration using MongoDB and Node.js backend.",
    imageUrls: [
      "/images/basicShoppingMall/main.gif",
      "/images/basicShoppingMall/product.gif",
      "/images/basicShoppingMall/cart.gif",
      "/images/basicShoppingMall/order.gif",
    ],
    githubUrl: "https://github.com/JinLee0811/Shoppingmall-Web-Service",
    liveUrl: "",
    date: "2023-01",
    featured: false,
    category: "Team Projects",

    projectGoal:
      "To create a fully functional e-commerce platform while learning full-stack development practices and team collaboration.",
    coreValue:
      "Provides essential e-commerce functionality with a focus on user experience and responsive design.",
    yourRole: ["Frontend Lead", "Backend Developer", "UI/UX Designer"],
    techInfra: ["Git", "GitHub", "VS Code", "MongoDB Atlas"],
    techDbApi: ["MongoDB", "REST API", "Express.js", "Mongoose"],
    keyFeatures: [
      {
        title: "Product Management",
        detail: "Complete product CRUD operations with image upload and category management",
      },
      {
        title: "Shopping Cart",
        detail: "Real-time cart updates, quantity adjustment, and persistent storage",
      },
      {
        title: "Order Processing",
        detail: "Secure checkout process with order history and status tracking",
      },
      {
        title: "Responsive Design",
        detail: "Mobile-first approach ensuring seamless experience across all devices",
      },
    ],
    architectureDesc:
      "Built with a modern tech stack featuring React and Next.js for the frontend, Node.js for the backend, and MongoDB for data persistence. Implements RESTful API architecture for seamless communication between frontend and backend.",
    architectureChoice:
      "Chose MongoDB for its flexibility with product data and Node.js for its robust ecosystem. Implemented TypeScript for better code maintainability and error prevention.",
    challenges: [
      {
        problem: "Integration challenges between frontend and backend services",
        solution:
          "Implemented structured API endpoints and utilized TypeScript for type safety across the full stack",
      },
      {
        problem: "Complex state management for shopping cart and order processing",
        solution:
          "Utilized React Context and local storage for persistent cart state and real-time updates",
      },
      {
        problem: "Team coordination and code consistency",
        solution:
          "Established coding standards, implemented regular code reviews, and utilized Git for version control",
      },
    ],
    achievements: [
      "Successfully implemented full e-commerce functionality",
      "Improved team collaboration and communication skills",
      "Delivered project on schedule with all core features",
    ],
    collaboration: [
      "Worked in a team of 4 developers with clear role distribution",
      "Led frontend development and UI/UX implementation",
      "Participated in backend API design and implementation",
      "Regular team meetings for progress updates and issue resolution",
    ],
    testing: [
      "Implemented unit tests for critical business logic",
      "Conducted user acceptance testing for core features",
      "Regular cross-browser testing for compatibility",
      "Performance testing for database queries and API responses",
    ],
    deployment: [
      "Version control using Git and GitHub",
      "Implemented CI/CD pipeline for automated testing",
      "Database backup and recovery procedures",
      "Environment configuration management",
    ],
    lessonsLearned: [
      "Importance of clear communication in team projects",
      "Value of TypeScript in maintaining large codebases",
      "Significance of proper state management in e-commerce applications",
      "Benefits of regular code reviews and standardized practices",
    ],
  },
  {
    title: "Data Analysis Web Service",
    technologies: [
      "React",
      "JavaScript",
      "Styled-components",
      "Node.js",
      "Prisma",
      "AWS",
      "Python",
    ],
    description:
      "A comprehensive web service that analyzes and visualizes subway travel time data in South Korea. The project combines data science with web development to provide users with accurate perceived travel time estimations, featuring interactive maps and detailed analysis results.",
    imageUrls: [
      "/images/dataProject/main.gif",
      "/images/dataProject/search.gif",
      "/images/dataProject/info.gif",
      "/images/dataProject/mypage.gif",
      "/images/dataProject/Admin.gif",
      "/images/dataProject/prize.png",
    ],
    githubUrl: "https://github.com/JinLee0811/subway-time-project",
    liveUrl: "",
    date: "2023-03",
    featured: false,
    category: "Team Projects",

    projectGoal:
      "To create a user-friendly web service that provides accurate subway travel time estimations based on comprehensive data analysis of South Korean public transportation data.",
    coreValue:
      "Combines data science with web development to deliver practical travel time insights through an intuitive interface.",
    yourRole: ["Team Lead", "Frontend Developer", "Data Analyst"],
    techInfra: ["AWS", "Git", "GitHub", "VS Code"],
    techDbApi: ["Prisma", "REST API", "Map APIs", "Python Data Analysis Tools"],
    keyFeatures: [
      {
        title: "Interactive Map Interface",
        detail:
          "Dynamic visualization of subway routes and travel times with interactive map features",
      },
      {
        title: "Data Analysis Engine",
        detail: "Python-based analysis system processing large-scale subway transportation data",
      },
      {
        title: "User Dashboard",
        detail: "Personalized travel time calculations and route recommendations",
      },
      {
        title: "Admin Panel",
        detail: "Comprehensive management interface for data updates and system monitoring",
      },
    ],
    architectureDesc:
      "Built with a React frontend and Node.js backend, utilizing Python for data processing. AWS infrastructure for deployment and Prisma for database management. Implements multiple third-party APIs for enhanced functionality.",
    architectureChoice:
      "Selected AWS for scalability and Python for efficient data processing. Chose React and Styled-components for a responsive and maintainable UI.",
    challenges: [
      {
        problem: "Complex data processing requirements for travel time calculations",
        solution:
          "Implemented optimized Python algorithms and caching mechanisms to improve processing speed",
      },
      {
        problem: "Map API integration and performance issues",
        solution:
          "Migrated to open-source alternatives and implemented lazy loading for better performance",
      },
      {
        problem: "API service discontinuation",
        solution:
          "Successfully transitioned to alternative open-source mapping solutions with minimal service disruption",
      },
    ],
    achievements: [
      "Successfully processed and analyzed large-scale subway transportation data",
      "Developed a user-friendly interface for complex data visualization",
      "Implemented efficient data processing algorithms",
      "Managed successful transition between different map API services",
    ],
    collaboration: [
      "Led a team through the entire project lifecycle",
      "Coordinated between frontend and data analysis teams",
      "Managed project timelines and deliverables",
      "Implemented agile methodologies for project management",
    ],
    testing: [
      "Comprehensive testing of data analysis algorithms",
      "Performed load testing for map rendering performance",
      "Implemented user acceptance testing for core features",
      "Regular testing of API integrations and data accuracy",
    ],
    deployment: [
      "Deployed frontend and backend services on AWS",
      "Implemented CI/CD pipeline for automated deployments",
      "Set up monitoring and logging systems",
      "Managed database migrations and backups",
    ],
    lessonsLearned: [
      "Importance of robust error handling in data processing",
      "Value of having backup plans for third-party service dependencies",
      "Benefits of clear communication in cross-functional teams",
      "Significance of performance optimization in data-heavy applications",
    ],
  },
  {
    title: "AI Crop Doctor - Plant Disease Diagnosis Platform",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Prisma",
      "TensorFlow",
      "Python",
    ],
    description:
      "An innovative AI-powered web platform for plant disease diagnosis. The service utilizes deep learning models to analyze plant images and provide accurate disease identification and treatment recommendations. Built with a modern tech stack and featuring real-time AI inference capabilities.",
    imageUrls: [
      "/images/cropDocter/2.main.gif",
      "/images/cropDocter/1. login.gif",
      "/images/cropDocter/3.User.gif",
      "/images/cropDocter/7.Board.gif",
      "/images/cropDocter/8.Board and Comment.gif",
      "/images/cropDocter/9.Likes and Write.gif",
      "/images/cropDocter/4.Admin1.gif",
      "/images/cropDocter/5.Admin2.gif",
      "/images/cropDocter/6.Admin3.gif",
      "/images/cropDocter/10.logout.gif",
    ],
    githubUrl: "https://github.com/JinLee0811/AiProject",
    liveUrl: "",
    date: "2023-04",
    featured: true,
    category: "Team Projects",

    projectGoal:
      "To develop an accessible and accurate AI-powered platform for plant disease diagnosis, helping farmers and gardeners identify and treat plant diseases efficiently.",
    coreValue:
      "Leveraging artificial intelligence to revolutionize plant disease diagnosis and treatment through an intuitive web interface.",
    yourRole: ["AI Model Developer", "Frontend Lead", "Data Scientist"],
    techInfra: ["TensorFlow", "Python ML Libraries", "Docker", "Cloud GPU Services"],
    techDbApi: [
      "Custom AI API",
      "RESTful Services",
      "Image Processing Pipeline",
      "Real-time Inference API",
    ],
    keyFeatures: [
      {
        title: "AI Disease Detection",
        detail:
          "Advanced deep learning model capable of identifying multiple plant diseases with high accuracy",
      },
      {
        title: "Real-time Analysis",
        detail:
          "Instant image processing and disease diagnosis with detailed treatment recommendations",
      },
      {
        title: "Interactive Dashboard",
        detail:
          "User-friendly interface for image upload, analysis history, and treatment tracking",
      },
      {
        title: "Expert Knowledge Base",
        detail: "Comprehensive database of plant diseases, treatments, and prevention methods",
      },
    ],
    architectureDesc:
      "Implements a sophisticated microservices architecture with dedicated AI inference servers. The frontend communicates with both the main application server and AI service through optimized APIs. Uses TensorFlow for model deployment and real-time inference.",
    architectureChoice:
      "Selected TensorFlow for its robust production deployment capabilities and Next.js for seamless frontend-backend integration. Implemented custom image processing pipeline for optimal AI model performance.",
    challenges: [
      {
        problem: "Large-scale AI model training with extensive image datasets",
        solution:
          "Implemented efficient data preprocessing pipeline and utilized transfer learning to reduce training time while maintaining accuracy",
      },
      {
        problem: "Real-time inference performance optimization",
        solution:
          "Developed custom model quantization and caching strategies to achieve sub-second response times",
      },
      {
        problem: "Integration of AI service with web platform",
        solution:
          "Created robust API architecture with proper error handling and fallback mechanisms",
      },
    ],
    achievements: [
      "Achieved 90%+ accuracy in plant disease detection",
      "Successfully processed over 10,000 training images",
      "Implemented efficient model deployment pipeline",
      "Reduced inference time to under 1 second",
    ],
    collaboration: [
      "Led AI model development and integration",
      "Coordinated between AI and frontend teams",
      "Managed dataset collection and preprocessing",
      "Implemented feedback loop for model improvement",
    ],
    testing: [
      "Comprehensive testing of AI model accuracy",
      "Performance testing of inference API",
      "Cross-browser compatibility testing",
      "User acceptance testing with domain experts",
    ],
    deployment: [
      "Containerized AI model deployment",
      "Automated model update pipeline",
      "Scalable inference server architecture",
      "Monitoring system for model performance",
    ],
    lessonsLearned: [
      "Importance of data quality in AI model training",
      "Value of efficient model optimization techniques",
      "Benefits of proper AI-web service integration",
      "Significance of user feedback in model improvement",
    ],
  },
  {
    title: "Pokémon Volleyball Mini Game",
    technologies: ["Python", "Pygame", "2D Graphics"],
    description:
      "An engaging Pokémon-themed volleyball mini-game built with Pygame. This project demonstrates game development fundamentals including physics simulation, sprite animation, and user input handling, all wrapped in a nostalgic Pokémon theme.",
    imageUrls: ["/images/poketmonGame/pocketmon.gif"],
    githubUrl: "https://github.com/JinLee0811/python_pygame_pj",
    liveUrl: "",
    date: "2024-04",
    featured: false,
    category: "Personal",

    projectGoal:
      "To create an entertaining mini-game while learning game development fundamentals using Python and Pygame, focusing on physics implementation and game mechanics.",
    coreValue:
      "Combines nostalgic Pokémon theme with classic volleyball gameplay mechanics for an engaging gaming experience.",
    yourRole: ["Game Developer", "Graphics Designer", "Python Developer"],
    techInfra: ["Python Environment", "Pygame Framework", "Git"],
    techDbApi: ["Pygame Physics Engine", "Sprite Management System"],
    keyFeatures: [
      {
        title: "Game Physics",
        detail: "Implemented realistic volleyball physics and collision detection",
      },
      {
        title: "Character Animation",
        detail: "Smooth sprite animations for Pokémon characters and game objects",
      },
      {
        title: "User Controls",
        detail: "Responsive keyboard controls for player movement and actions",
      },
      {
        title: "Score System",
        detail: "Real-time score tracking and game state management",
      },
    ],
    architectureDesc:
      "Built using Pygame's game development framework, implementing a game loop architecture with separate modules for physics, graphics, and input handling. Utilizes sprite-based rendering and collision detection systems.",
    architectureChoice:
      "Chose Pygame for its simplicity and Python's accessibility, making it ideal for a focused mini-game project. Implemented modular design for better code organization and maintainability.",
    challenges: [
      {
        problem: "Sprite and image size optimization",
        solution:
          "Developed custom sprite scaling and management system for consistent display across different screen sizes",
      },
      {
        problem: "Learning curve with Pygame library",
        solution:
          "Systematically studied documentation and implemented features incrementally, starting with core mechanics",
      },
      {
        problem: "Python environment management",
        solution:
          "Set up virtual environment and requirements.txt for consistent development environment",
      },
    ],
    achievements: [
      "Successfully implemented core volleyball game mechanics",
      "Created smooth character animations and physics",
      "Developed efficient collision detection system",
      "Maintained consistent frame rate and performance",
    ],
    collaboration: [
      "Solo development project with structured development phases",
      "Utilized version control for feature tracking",
      "Documented code and game mechanics",
      "Gathered and implemented user feedback",
    ],
    testing: [
      "Extensive gameplay testing for bug identification",
      "Performance optimization for smooth gameplay",
      "Cross-platform compatibility testing",
      "User experience testing with different skill levels",
    ],
    deployment: [
      "Created executable game builds",
      "Implemented proper asset management",
      "Organized project structure for easy distribution",
      "Set up version control with Git",
    ],
    lessonsLearned: [
      "Importance of game physics implementation",
      "Value of proper sprite and asset management",
      "Benefits of modular game architecture",
      "Significance of user feedback in game development",
    ],
  },
  {
    title: "Jin.Dev Portfolio 2.0",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"],
    description:
      "A modern, type-safe portfolio website showcasing my journey as a developer. Built with Next.js and TypeScript, featuring responsive design, smooth animations, and comprehensive project documentation. This is the website you're currently viewing.",
    imageUrls: [
      "/images/secondPortfolio/portfolio.png",
      "/images/secondPortfolio/Screenshot 2025-04-19 at 6.05.14 PM.png",
      "/images/secondPortfolio/Screenshot 2025-04-19 at 6.05.46 PM.png",
      "/images/secondPortfolio/Screenshot 2025-04-19 at 6.06.10 PM.png",
      "/images/secondPortfolio/Screenshot 2025-04-19 at 6.06.28 PM.png",
      "/images/secondPortfolio/Screenshot 2025-04-19 at 6.06.40 PM.png",
      "/images/secondPortfolio/Screenshot 2025-04-19 at 6.06.58 PM.png",
    ],
    githubUrl: "https://github.com/JinLee0811/JinLee_Portfolio",
    liveUrl: "https://jin-lee-portfolio.vercel.app/",
    date: "2024-08",
    featured: true,
    category: "Personal",

    projectGoal:
      "To create a modern, type-safe portfolio that effectively showcases my projects and skills while implementing best practices in web development.",
    coreValue:
      "Combining clean design with robust functionality to present a professional and engaging developer portfolio.",
    yourRole: ["Full-stack Developer", "UI/UX Designer", "Content Strategist"],
    techInfra: ["Vercel", "Git", "GitHub", "VS Code"],
    techDbApi: ["Next.js API Routes", "TypeScript Types", "Framer Motion API"],
    keyFeatures: [
      {
        title: "Type-Safe Development",
        detail: "Comprehensive TypeScript implementation for robust code quality",
      },
      {
        title: "Responsive Design",
        detail: "Tailwind CSS-powered layouts optimized for all screen sizes",
      },
      {
        title: "Smooth Animations",
        detail: "Framer Motion animations enhancing user experience",
      },
      {
        title: "Project Showcase",
        detail: "Detailed project documentation with live demos and source code links",
      },
    ],
    architectureDesc:
      "Built using Next.js 14 with TypeScript for type safety and better developer experience. Implements modern React patterns and server components for optimal performance. Styled with Tailwind CSS for maintainable and responsive design.",
    architectureChoice:
      "Selected Next.js for its powerful features and TypeScript for type safety. Chose Tailwind CSS for rapid development and consistent styling across components.",
    challenges: [
      {
        problem: "Cross-device layout consistency",
        solution:
          "Implemented responsive design system with extensive testing across different devices and screen sizes",
      },
      {
        problem: "TypeScript type management",
        solution:
          "Created comprehensive type definitions and utilized advanced TypeScript features for better type safety",
      },
      {
        problem: "Tailwind CSS customization",
        solution:
          "Developed custom utility classes and design system while maintaining Tailwind's benefits",
      },
    ],
    achievements: [
      "Created a fully responsive, type-safe portfolio",
      "Implemented modern web development best practices",
      "Achieved optimal performance scores",
      "Developed comprehensive project documentation",
    ],
    collaboration: [
      "Solo development with structured planning",
      "Implemented feedback from peer reviews",
      "Maintained clean and documented codebase",
      "Regular updates and improvements",
    ],
    testing: [
      "Comprehensive cross-browser testing",
      "Mobile responsiveness validation",
      "Performance optimization",
      "Accessibility compliance checking",
    ],
    deployment: [
      "Continuous deployment with Vercel",
      "Automated build and test pipeline",
      "Performance monitoring setup",
      "Regular backup and version control",
    ],
    lessonsLearned: [
      "Importance of responsive design testing",
      "Value of TypeScript in large projects",
      "Benefits of component-based architecture",
      "Significance of performance optimization",
    ],
  },
];
