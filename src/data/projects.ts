import { Project } from "../types/project";

export const projects: Project[] = [
  {
    title: "First React Portfolio",
    thumbnailSummary: "First portfolio website built with React and Styled-components",
    technologies: ["React", "JavaScript", "Styled-components", "CSS3"],
    description:
      "My first portfolio website showcasing the journey into React development. Built with a focus on component-based architecture and styled using Styled-components, this project represents the initial steps in modern web development while highlighting project experiences and technical skills.",
    imageUrls: [
      "/images/firstPortfolio/FirstPortfolio.png",
      "/images/firstPortfolio/Firstportfolio.detail.png",
      "/images/firstPortfolio/ProjectList.png",
      "/images/firstPortfolio/SkillList.png",
    ],
    thumbnail: "/images/portfolio-thumb.jpg",
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
    thumbnailSummary: "Full-stack Netflix clone using Next.js and MongoDB",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Prisma", "MongoDB"],
    description:
      "A full-stack Netflix clone featuring user authentication (OAuth with GitHub and Google), responsive design, and comprehensive movie management functionality. Key features include wishlist management, movie playback, and mobile optimization. Built with modern tech stack including Next.js, Tailwind CSS, and Prisma, with MongoDB integration.",
    imageUrls: [
      "/images/netfilx/Login.png",
      "/images/netfilx/User.png",
      "/images/netfilx/VideoList.png",
      "/images/netfilx/Modal.png",
      "/images/netfilx/Video.png",
    ],
    thumbnail: "/images/netflix-thumb.jpg",
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
    thumbnailSummary: "Full-stack e-commerce platform built with Next.js and MongoDB",
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
    thumbnail: "/images/shopping-thumb.jpg",
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
    thumbnailSummary: "Public transportation data analysis and visualization web service",
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
    thumbnail: "/images/data-thumb.jpg",
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
    title: "AI Crop Doctor",
    thumbnailSummary: "AI-powered plant disease diagnosis and prescription platform",
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
    thumbnail: "/images/crop-doctor-thumb.jpg",
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
    thumbnailSummary: "Pokemon-themed mini game developed with Pygame",
    technologies: ["Python", "Pygame", "2D Graphics"],
    description:
      "An engaging Pokémon-themed volleyball mini-game built with Pygame. This project demonstrates game development fundamentals including physics simulation, sprite animation, and user input handling, all wrapped in a nostalgic Pokémon theme.",
    imageUrls: ["/images/poketmonGame/pocketmon.gif"],
    thumbnail: "/images/pokemon-thumb.jpg",
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
    thumbnailSummary: "Modern portfolio website with Next.js and Framer Motion",
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
    thumbnail: "/images/jin-dev-portfolio-thumb.jpg",
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
  {
    title: "University Management System",
    thumbnailSummary: "University management system built with Python and Tkinter",
    technologies: ["Python", "Tkinter", "SQLite", "Git"],
    description:
      "A comprehensive university management system featuring both command-line and graphical interfaces. The application evolved from a CLI-based system to include a GUI, demonstrating the progression from basic command-line operations to a full-fledged desktop application.",
    imageUrls: ["/images/simpleUniApp/UniApp.png"],
    thumbnail: "/images/university-management-thumb.jpg",
    githubUrl: "https://github.com/JinLee0811/UTS_TeamProject_CLIUniApp-and-GUIUniApp_by_Python",
    liveUrl: "",
    date: "2024-03",
    featured: false,
    category: "Team Projects",

    projectGoal:
      "To develop a versatile university management system that demonstrates the evolution from command-line to graphical interface while maintaining data consistency and user functionality.",
    coreValue:
      "Providing an efficient and user-friendly system for university data management through both CLI and GUI interfaces.",
    yourRole: ["Team Lead", "Core Developer", "Git Administrator"],
    techInfra: ["Python Environment", "Git", "Virtual Environment"],
    techDbApi: ["SQLite Database", "File System Operations", "Python Standard Library"],
    keyFeatures: [
      {
        title: "Dual Interface",
        detail: "Both Command Line and Graphical User Interfaces for versatile access",
      },
      {
        title: "Data Management",
        detail: "Comprehensive CRUD operations for university data handling",
      },
      {
        title: "User Authentication",
        detail: "Secure login system with role-based access control",
      },
      {
        title: "Report Generation",
        detail: "Automated report creation and data export capabilities",
      },
    ],
    architectureDesc:
      "Implemented using Python's standard library for CLI and Tkinter for GUI. Features a modular design with separate components for data handling, user interface, and business logic. Uses SQLite for persistent data storage.",
    architectureChoice:
      "Selected Python for its versatility and Tkinter for native GUI development. Implemented a layered architecture to maintain separation of concerns between CLI and GUI interfaces.",
    challenges: [
      {
        problem: "Python environment configuration issues",
        solution:
          "Implemented robust environment management using virtual environments and detailed setup documentation",
      },
      {
        problem: "Data synchronization between interfaces",
        solution: "Created a unified data layer ensuring consistency across CLI and GUI operations",
      },
      {
        problem: "Environment variable management",
        solution:
          "Developed a centralized configuration system with proper error handling and validation",
      },
    ],
    achievements: [
      "Successfully delivered both CLI and GUI versions",
      "Maintained data consistency across interfaces",
      "Implemented comprehensive error handling",
      "Created detailed documentation for setup and usage",
    ],
    collaboration: [
      "Led team development efforts",
      "Managed Git repository and version control",
      "Coordinated between CLI and GUI development teams",
      "Implemented code review processes",
    ],
    testing: [
      "Comprehensive unit testing for core functionality",
      "Integration testing between interfaces",
      "User acceptance testing for GUI features",
      "Performance testing for database operations",
    ],
    deployment: [
      "Created automated build process",
      "Implemented proper version control workflow",
      "Developed installation documentation",
      "Set up continuous integration pipeline",
    ],
    lessonsLearned: [
      "Importance of environment management in Python",
      "Value of modular design in dual-interface applications",
      "Benefits of proper version control practices",
      "Significance of thorough documentation",
    ],
  },
  {
    title: "PartTimeMate - Job Matching Platform",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "NestJS",
      "MySQL",
      "React Native",
      "Expo",
    ],
    thumbnailSummary:
      "Multilingual job matching platform connecting international students with Australian businesses",
    description:
      "A comprehensive job matching platform tailored for part-time and casual work in Australia. Designed to connect students and working holiday makers with small business owners, featuring multi-language support, real-time notifications, and advanced search capabilities.",
    imageUrls: [
      "/images/parttimeMate/431220789-8bab0778-2911-40c4-a90c-96a92f2abe33.png",
      "/images/parttimeMate/431220862-c4401b88-78a7-4c71-9292-aa5070428132.png",
      "/images/parttimeMate/431221175-e455f0ad-ab6d-4e2f-8cfd-1c64e0f399a6.png",
      "/images/parttimeMate/431221577-4dd547fa-69dd-4536-97cb-5b7f3a4e5739.png",
      "/images/parttimeMate/431222220-38cb7b93-e78a-4cbe-b68a-0d61f7b04950.png",
    ],
    thumbnail: "/images/parttime-mate-thumb.jpg",
    githubUrl: "https://github.com/JinLee0811/partTimeMate_FE",
    liveUrl: "",
    date: "2024-12",
    featured: true,
    category: "Team Projects",

    projectGoal:
      "To create an inclusive job matching platform that bridges the gap between Australian businesses and international job seekers, focusing on part-time and casual employment opportunities.",
    coreValue:
      "Simplifying the job search and hiring process while breaking down language barriers in the Australian casual job market.",
    yourRole: ["Frontend Lead", "Backend Developer", "UI/UX Designer"],
    techInfra: ["AWS", "Docker", "Vercel", "GitHub Actions"],
    techDbApi: ["NestJS API", "MySQL Database", "Redis Cache", "Firebase"],
    keyFeatures: [
      {
        title: "Multi-language Support",
        detail: "Comprehensive internationalization using react-i18next for global accessibility",
      },
      {
        title: "Advanced Job Search",
        detail: "Sophisticated filtering system by location, industry, and salary range",
      },
      {
        title: "Real-time Notifications",
        detail: "Instant updates for job postings and application status changes",
      },
      {
        title: "Mobile-First Design",
        detail: "Responsive interface optimized for both desktop and mobile users",
      },
    ],
    architectureDesc:
      "Built with a modern tech stack featuring React and TypeScript for the frontend, NestJS for a robust backend, and MySQL for data persistence. Implements real-time features using WebSocket and Redis for caching.",
    architectureChoice:
      "Chose NestJS for its TypeScript-first approach and robust architecture, React for its component reusability, and MySQL for reliable data management.",
    challenges: [
      {
        problem: "Resource optimization with limited initial resources",
        solution:
          "Implemented progressive feature rollout and efficient resource allocation strategies",
      },
      {
        problem: "Multi-language implementation complexity",
        solution: "Developed a comprehensive i18n system with dynamic content loading",
      },
      {
        problem: "Dual-audience UX design challenges",
        solution:
          "Created separate user flows for employers and job seekers while maintaining consistent UI",
      },
    ],
    achievements: [
      "Successfully implemented multi-language support",
      "Developed responsive design for all devices",
      "Created efficient job matching algorithm",
      "Established real-time notification system",
    ],
    collaboration: [
      "Led frontend development team",
      "Coordinated with backend developers",
      "Managed UI/UX implementation",
      "Facilitated cross-team communication",
    ],
    testing: [
      "Comprehensive unit and integration testing",
      "Multi-language functionality testing",
      "Cross-browser compatibility testing",
      "Performance optimization and monitoring",
    ],
    deployment: [
      "Implemented CI/CD pipeline with GitHub Actions",
      "Set up containerized deployment with Docker",
      "Configured cloud infrastructure on AWS",
      "Established monitoring and logging systems",
    ],
    lessonsLearned: [
      "Importance of scalable architecture in job platforms",
      "Value of comprehensive internationalization planning",
      "Benefits of user-centric design approach",
      "Significance of real-time feature optimization",
    ],
  },
  {
    title: "Modern Portfolio Website (Freelance)",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    thumbnailSummary: "Minimalist portfolio website with elegant animations and responsive design",
    description:
      "A sleek, modern portfolio website developed for a freelance client. Built with Next.js and TypeScript, featuring a minimalist design that emphasizes content and user experience. The project showcases the perfect balance between aesthetic appeal and technical performance.",
    imageUrls: [
      "/images/FreelanceWork/431224055-a7398c09-fceb-47c5-84a0-ad296aa085bd.png",
      "/images/FreelanceWork/431224119-aac31550-4832-4332-b466-f73674680248.png",
      "/images/FreelanceWork/431224186-b25900f7-e460-4c9c-a890-03c1c53595f3.png",
      "/images/FreelanceWork/431224281-cc385cc0-1583-4706-b83d-917da25c7471.png",
    ],
    thumbnail: "/images/modern-portfolio-thumb.jpg",
    githubUrl: "",
    liveUrl: "https://chaebin.vercel.app/",
    date: "2024-11",
    featured: false,
    category: "Personal",

    projectGoal:
      "To create a distinctive, high-performance portfolio website that effectively showcases the client's work while maintaining optimal user experience across all devices.",
    coreValue:
      "Combining minimalist design principles with modern web technologies to create a memorable and efficient online presence.",
    yourRole: ["Lead Developer", "UI/UX Designer", "Performance Optimizer"],
    techInfra: ["Vercel", "Git", "Cloudinary"],
    techDbApi: ["Next.js API Routes", "Image Optimization API", "Analytics API"],
    keyFeatures: [
      {
        title: "Responsive Design",
        detail: "Pixel-perfect layouts across all device sizes with mobile-first approach",
      },
      {
        title: "Performance Optimization",
        detail: "Optimized core web vitals and lighthouse scores for optimal user experience",
      },
      {
        title: "Custom UI Components",
        detail: "Bespoke design components created and implemented from Figma mockups",
      },
      {
        title: "SEO Enhancement",
        detail: "Implemented modern SEO practices for better search engine visibility",
      },
    ],
    architectureDesc:
      "Leverages Next.js 14's app router and server components for optimal performance. Implements a serverless architecture with static generation where possible, and server-side rendering for dynamic content.",
    architectureChoice:
      "Selected Next.js for its superior performance and SEO capabilities, combined with Tailwind CSS for rapid, consistent styling and TypeScript for code reliability.",
    challenges: [
      {
        problem: "Iterative design process with client feedback",
        solution:
          "Established clear communication channels and implemented systematic feedback incorporation process",
      },
      {
        problem: "Cross-device responsiveness",
        solution: "Developed comprehensive breakpoint system and extensive device testing protocol",
      },
      {
        problem: "Design personality balance",
        solution:
          "Created subtle animations and micro-interactions to add character while maintaining minimalism",
      },
    ],
    achievements: [
      "Achieved perfect lighthouse scores",
      "Implemented seamless responsive design",
      "Created unique, memorable UI/UX",
      "Optimized for global content delivery",
    ],
    collaboration: [
      "Direct client communication and feedback integration",
      "Regular progress updates and milestone reviews",
      "Iterative design and development process",
      "Post-launch support and maintenance",
    ],
    testing: [
      "Cross-browser compatibility testing",
      "Mobile responsiveness validation",
      "Performance benchmarking",
      "Accessibility compliance checking",
    ],
    deployment: [
      "Serverless deployment on Vercel",
      "Custom domain configuration",
      "CDN setup for global delivery",
      "Analytics and monitoring setup",
    ],
    lessonsLearned: [
      "Importance of clear client communication",
      "Value of iterative design process",
      "Benefits of performance-first development",
      "Significance of thorough device testing",
    ],
  },
  {
    title: "LUB (Let Us Build)",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Google API"],
    description:
      "A freelance request platform built with React and TypeScript, featuring automated email delivery of client project inquiries using Google API. The platform provides a user-friendly interface and professional design to create a reliable freelance service platform.",
    thumbnailSummary:
      "Streamlined freelance project request platform with automated client communication",
    imageUrls: [
      "/images/LUB/431225417-aceb5248-105f-4695-8843-23f36c837ff9.png",
      "/images/LUB/431225479-773b63df-5421-4286-9aaa-7f52ef863ea2.png",
      "/images/LUB/431225557-9d2fb9cb-dfef-443a-b8d2-255cae9620f7.png",
      "/images/LUB/431225662-c6a5ed59-c95c-4a6b-91e5-e978d3de692c.png",
    ],
    thumbnail: "/images/lub-thumb.jpg",
    githubUrl: "",
    liveUrl: "https://lub-letusbuild.vercel.app/",
    date: "2025-12",
    featured: false,
    category: "Personal",

    projectGoal:
      "To build an efficient communication platform between freelancers and clients, implementing an automated email system using Google API.",
    coreValue:
      "Providing a reliable freelance service platform through a user-friendly interface and secure project inquiry system.",
    yourRole: ["Frontend Developer", "UI/UX Designer", "API Integration Specialist"],
    techInfra: ["Vercel", "Git", "Google Cloud Platform"],
    techDbApi: ["Google OAuth API", "Email Service API", "Form Validation API"],
    keyFeatures: [
      {
        title: "Project Inquiry Form",
        detail: "Implemented robust form validation and processing system using TypeScript",
      },
      {
        title: "Email Automation",
        detail: "Automated email delivery system using Google API",
      },
      {
        title: "Responsive Design",
        detail: "UI optimized for all devices using Tailwind CSS",
      },
      {
        title: "Spam Prevention",
        detail: "Enhanced form submission system with security validation logic",
      },
    ],
    architectureDesc:
      "Implemented a frontend architecture based on React and TypeScript, integrating Google API for a secure and efficient email system. Responsive design implemented using Tailwind CSS.",
    architectureChoice:
      "Chose TypeScript for type safety and React's component-based architecture to build a robust application, utilizing Google API for a reliable email system.",
    challenges: [
      {
        problem: "Google OAuth Setup and Security",
        solution:
          "Implemented secure API integration through thorough security configuration and environment variable management",
      },
      {
        problem: "Spam Prevention and Form Security",
        solution: "Enhanced security with multiple validation steps and reCAPTCHA integration",
      },
      {
        problem: "Professional and Trustworthy Design",
        solution:
          "Implemented professional and trustworthy UI/UX design through user experience research",
      },
    ],
    achievements: [
      "Built secure and efficient project inquiry system",
      "Implemented automated email system using Google API",
      "Supported all devices with responsive design",
      "Created user-friendly UI/UX",
    ],
    collaboration: [
      "Independent project development",
      "Utilized Google API documentation",
      "Collected and incorporated user feedback",
      "Continuous performance optimization",
    ],
    testing: [
      "Form validation system testing",
      "Email delivery system testing",
      "Cross-browser compatibility verification",
      "Security vulnerability testing",
    ],
    deployment: [
      "Deployment through Vercel",
      "Established CI/CD pipeline",
      "Implemented performance monitoring system",
      "Optimized security settings",
    ],
    lessonsLearned: [
      "Understanding Google API integration complexity",
      "Recognizing form security importance",
      "Role of UI/UX in building user trust",
      "Necessity of continuous performance optimization",
    ],
  },
  {
    title: "AI Platform",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Prisma", "Stripe"],
    description:
      "A SaaS platform with AI integration, featuring subscription management, AI model integration, and payment systems. Built with Next.js and Prisma to create a modern and scalable architecture.",
    thumbnailSummary: "AI-powered SaaS platform with subscription and payment integration",
    imageUrls: ["/images/AiPlatform/Ai_platform.png"],
    thumbnail: "/images/ai-platform-thumb.jpg",
    githubUrl: "https://github.com/JinLee0811/Ai-platform-with-Next-js",
    liveUrl: "",
    date: "2024-08",
    featured: true,
    category: "Personal",

    projectGoal:
      "To build a SaaS platform with AI integration that provides advanced AI services to users and implement a subscription-based business model.",
    coreValue:
      "Combining cutting-edge AI technology with a subscription-based business model to deliver valuable services to users.",
    yourRole: ["Full-stack Developer", "AI Integration Specialist", "System Architect"],
    techInfra: ["Vercel", "Git", "Stripe", "Prisma"],
    techDbApi: ["Next.js API Routes", "Prisma ORM", "Stripe API", "AI Model APIs"],
    keyFeatures: [
      {
        title: "Subscription Management System",
        detail: "Implementing a robust subscription and payment system using Stripe",
      },
      {
        title: "AI Model Integration",
        detail: "Integrating various AI models to provide advanced AI capabilities",
      },
      {
        title: "User Dashboard",
        detail: "User-friendly interface with real-time monitoring features",
      },
      {
        title: "Scalable Architecture",
        detail: "Building a modern and scalable system using Next.js and Prisma",
      },
    ],
    architectureDesc:
      "Utilizing Next.js server components and API routes to manage frontend and backend integrally, and efficiently handling database operations through Prisma. Implementing a reliable payment system through Stripe.",
    architectureChoice:
      "Selected Next.js server components and API routes to enhance development efficiency, and implemented type-safe database operations through Prisma.",
    challenges: [
      {
        problem: "Complexity of AI model integration",
        solution: "Flexibly integrating various AI models through a modular architecture",
      },
      {
        problem: "Subscription system implementation",
        solution: "Building a robust subscription system utilizing Stripe's powerful API",
      },
      {
        problem: "Performance optimization",
        solution: "Implementing optimal performance using Next.js server components",
      },
    ],
    achievements: [
      "Built a reliable subscription and payment system",
      "Completed integration of various AI models",
      "Implemented a scalable architecture",
      "Developed a user-friendly interface",
    ],
    collaboration: [
      "Independent project development",
      "Version control through GitHub",
      "Continuous code review",
      "Documentation and test automation",
    ],
    testing: [
      "Unit test implementation",
      "Integration test automation",
      "Performance testing",
      "Security vulnerability checks",
    ],
    deployment: [
      "Deployment through Vercel",
      "CI/CD pipeline setup",
      "Monitoring system configuration",
      "Backup and recovery strategy establishment",
    ],
    lessonsLearned: [
      "Understanding the complexity of AI service integration",
      "Experience in implementing subscription-based business models",
      "Importance of designing scalable architecture",
      "Significance of payment system security",
    ],
  },
  {
    title: "Before You Go",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Gemini API",
      "React Query",
      "Zustand",
    ],
    description:
      "A global AI-powered travel tool that helps users discover and evaluate restaurants using AI-generated Google review summaries. By combining real user feedback, location-based search, and one-line user reviews, Before You Go helps travelers quickly decide where to eat without reading through dozens of reviews. Built with Next.js and Supabase, and powered by Gemini API for review analysis. Developed rapidly using AI assistance to accelerate the development process.",
    thumbnailSummary: "AI-powered restaurant discovery tool for global travelers",
    imageUrls: [
      "/images/beforeYouGo/i1.png",
      "/images/beforeYouGo/i2.png",
      "/images/beforeYouGo/i3.png",
      "/images/beforeYouGo/i4.png",
      "/images/beforeYouGo/i5.png",
      "/images/beforeYouGo/i6.png",
      "/images/beforeYouGo/i7.png",
    ],
    thumbnail: "/images/before-you-go-thumb.jpg",
    githubUrl: "https://github.com/JinLee0811/BeforeYouGO",
    liveUrl: "https://beforeyougo.vercel.app/",
    date: "2025-04",
    featured: true,
    category: "Personal",

    projectGoal:
      "To simplify restaurant discovery for travelers by providing concise AI-generated summaries of Google reviews, allowing users to avoid information overload and make quick, confident dining decisions worldwide.",
    coreValue:
      "Delivers instant AI review summaries, language-aware insights, and a clean user experience tailored for travelers who value efficiency and accuracy while exploring food options abroad.",
    yourRole: ["Founder", "Full-Stack Developer", "Product Designer"],
    techInfra: ["Vercel (Deployment)", "Supabase (Auth & DB)"],
    techDbApi: ["Supabase", "Google Places API", "Gemini (LLM API)"],

    keyFeatures: [
      {
        title: "Location-Based Restaurant Discovery",
        detail:
          "Uses GPS or Google Maps Places API to find nearby restaurants based on user's location or input.",
      },
      {
        title: "AI Review Summary",
        detail:
          "Integrates Gemini API to generate sentiment-aware summaries of real Google reviews including keywords, pros/cons, and tone.",
      },
      {
        title: "Bookmark & Personal Lists",
        detail:
          "Authenticated users can bookmark restaurants and save them into a travel-ready list for later use.",
      },
      {
        title: "One-Line Review + Rating",
        detail:
          "After visiting a restaurant, users can submit quick reviews and ratings which contribute to the platform's own review index.",
      },
    ],

    architectureDesc:
      "Built as a serverless full-stack application using Next.js for frontend and API routes, with Supabase providing authentication and data storage. Gemini API handles review summarization, and Google Maps Places API enables location-based data retrieval. Zustand and React Query manage state and async flows.",
    architectureChoice:
      "Next.js was selected for its hybrid rendering capabilities and API integration ease. Supabase provided a scalable, Firebase-like BaaS ideal for 1-person projects. Gemini was chosen for its lightweight LLM capabilities and Google ecosystem compatibility.",

    challenges: [
      {
        problem: "Handling multilingual reviews and non-standard Google review formatting",
        solution:
          "Added language tagging and fallback logic to summarize only supported languages; future support for DeepL integration.",
      },
      {
        problem: "Avoiding duplicate summaries and expensive API calls",
        solution:
          "Implemented caching and summary hash checks to reduce Gemini usage and prevent billing spikes.",
      },
    ],

    achievements: [
      "Completed working MVP and deployed live within 3 weeks.",
      "Created a flexible, scalable architecture ready for global travel use cases.",
      "Gathered initial user feedback and iterated rapidly on design and flow.",
    ],

    collaboration: [
      "Solo project managed via GitHub Projects and Notion task board.",
      "Applied CI/CD best practices using GitHub + Vercel integration.",
      "Self-reviewed all pull requests with emphasis on readability and component reusability.",
    ],

    testing: [
      "Manual testing on desktop and mobile across all user flows.",
      "Used ESLint and Prettier to maintain code consistency.",
      "Planned future integration of Cypress or Playwright for E2E testing.",
    ],

    deployment: [
      "Deployed via Vercel with automatic GitHub sync and preview branches.",
      "Environment variables securely configured for Google and Gemini APIs.",
      "Supabase Auth and DB connected using project environment settings.",
    ],

    lessonsLearned: [
      "Validated the usefulness of AI summarization in real-world travel scenarios.",
      "Learned practical aspects of full-stack scalability using Supabase + LLM APIs.",
      "Improved my ability to design intuitive UI/UX with minimal onboarding friction.",
      "Gained experience integrating AI services with traditional web platforms for practical use.",
    ],
  },
];
