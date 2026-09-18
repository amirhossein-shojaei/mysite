export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  category: string;
  technologies: string[];
  cardTechnologies?: string[];
  projectUrl?: string;
  organizationUrl?: string;
  featured?: boolean;
  status: string;
  client: string;
  problem: string;
  solution: string;
  contribution: string;
  features: string[];
  result?: string;
  type: string;
  image?: string;
  logo?: string;
}
const later = "Details will be added later.";
export const projects: Project[] = [
  {
    id: "elixia",
    title: "Elixia — AI-powered workout and nutrition planning platform",
    description:
      "Elixia is a web and PWA platform in the fitness domain that uses artificial intelligence to provide a personalized experience for workout and nutrition planning.",
    shortDescription:
      "A PWA fitness platform that uses AI to deliver personalized workout and nutrition planning.",
    category: "AI / Fitness PWA",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PWA",
      "AI Integration",
      "Responsive Design",
    ],
    cardTechnologies: [
      "React",
      "TypeScript",
      "PWA",
      "AI Integration",
    ],
    projectUrl: "https://myelixia.com/",
    featured: true,
    status: "Completed",
    client: "Elixia",
    problem:
      "Workout and diet programs are usually offered generically and are not necessarily aligned with each person's conditions, goals, and needs. The goal of the project was to transform the program-receiving process from a generic experience to a personalized and intelligent one.",
    solution:
      "In Elixia, a web platform was designed and developed that enables AI-powered capabilities in the process of suggesting workout and nutrition programs. The user can provide the required information to the system and receive suggestions appropriate to their conditions and goals.",
    contribution:
      "Full-Stack Developer — In this project, my responsibility was product development and implementing various parts of it, with the main focus on building a practical web experience and connecting AI capabilities to the product.",
    features: [
      "AI-powered workout program recommendation",
      "Nutrition program recommendation",
      "Personalizing the experience based on user information",
      "User interface suitable for daily use",
      "Responsive design",
      "Installable as PWA on mobile",
      "Providing a web-app experience instead of a typical website",
    ],
    type: "AI-powered fitness and nutrition PWA",
    image: "/projects/elixia.webp",
  },
  {
    id: "oiec",
    title: "OIEC — Enterprise product information processing and management system",
    description:
      "An enterprise application for processing and managing product information, developed to facilitate coding and conversion of existing data.",
    shortDescription:
      "An enterprise full-stack application that structures product data processing and legacy code conversion with AI assistance.",
    category: "Enterprise / AI",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "Flowise",
      "AI Integration",
      "Docker",
      "Server Deployment",
    ],
    cardTechnologies: [
      "React",
      "Node.js",
      "Flowise",
      "Docker",
    ],
    projectUrl: "https://www.oiecgroup.com",
    featured: true,
    status: "Completed",
    client: "OIEC",
    problem:
      "A large volume of old product information and codes needed to be converted to a new structure, which was a time-consuming and carefully-reviewed process. The goal was to create a software solution to centralize, process, and facilitate this workflow.",
    solution:
      "To solve this, a full-stack enterprise application was developed that manages the product information processing and conversion workflow in an integrated environment. Alongside the software logic, Flowise and AI capabilities were used to create intelligent processing flows so that part of the conversion and analysis could be done automatically.",
    contribution:
      "As a Full-Stack Developer, I was responsible for the complete application development. I implemented core system features in both Front-end and Back-end, developed data processing logic, integrated AI capabilities, and prepared the project for server deployment. I also Dockerized the project and deployed it on the server.",
    features: [
      "Management and processing of product information",
      "Conversion of old codes",
      "Intelligent processing with AI",
      "Full-stack enterprise application",
    ],
    result:
      "The result was a full-stack enterprise application for managing and processing product information that structured the coding and data conversion process and used AI capabilities to make part of this process intelligent and automated.",
    type: "Enterprise inventory/product coding system",
    image: "/projects/oiec.webp",
  },
  {
    id: "co-up",
    title: "coup — Coworking space management and reservation platform",
    description:
      "coup is a web and PWA platform for managing and reserving coworking space in Pardis Technology Park, allowing users to view available spaces, seats, and meeting rooms and reserve them online.",
    shortDescription:
      "A PWA reservation system for booking coworking seats and meeting rooms online.",
    category: "Reservation PWA",
    technologies: [
      "React",
      "Tailwind CSS",
      "Responsive Design",
      "Node.js",
      "Express.js",
      "PWA",
      "Full-Stack Web Application",
      "Online Reservation System",
      "Docker",
      "Server Deployment",
    ],
    cardTechnologies: [
      "React",
      "PWA",
      "Node.js",
      "Docker",
    ],
    projectUrl: "https://coup.davandegan.cloud/",
    organizationUrl: "https://co-up.net",
    featured: true,
    status: "Completed",
    client: "coup",
    problem:
      "Managing coworking space and reserving seats and meeting rooms required a centralized system so users could easily find and reserve the space they needed. The main challenge was creating a fast and simple experience for viewing, selecting, and reserving spaces while managing the status of reservable spaces.",
    solution:
      "For this need, a full-stack PWA application was developed that provides the coworking space reservation process online. Users can view available spaces through the app, select a seat or meeting room, and make a reservation. The app is designed responsively and uses PWA capabilities to enable installation and use on mobile devices.",
    contribution:
      "As a Full-Stack Developer, I was responsible for developing and implementing the application. In the Frontend, I developed the user interface and implemented pages and system features. In the Backend, I developed the required application logic and communication between different parts of the system. I also Dockerized the project and deployed it on the server, preparing it for real-world execution.",
    features: [
      "Online seat reservation",
      "Meeting room reservation",
      "Coworking space management",
      "Responsive user experience",
      "Installable PWA",
    ],
    result:
      "A full-stack PWA platform for managing and reserving coworking space was created that provides the process of reserving seats and meeting rooms online and centrally, enabling use on both mobile and desktop.",
    type: "Coworking space reservation PWA",
    image: "/projects/coup.webp",
  },
  {
    id: "inotex",
    title: "INOTEX — Digital exhibition and networking platform",
    description:
      "A PWA platform for delivering the INOTEX exhibition digital experience; from access to company and exhibitor information and event programs to exhibition news and content, and intelligent interaction with users through an AI-based chatbot.",
    shortDescription:
      "A PWA event platform that centralizes exhibition information, networking, and an AI chatbot for visitors.",
    category: "Event / Networking PWA",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "Node.js",
      "Express.js",
      "REST API",
      "Flowise",
      "AI Integration",
      "AI Chatbot",
      "Progressive Web App",
      "Docker",
      "Server Deployment",
    ],
    cardTechnologies: [
      "React",
      "PWA",
      "AI Chatbot",
      "Docker",
    ],
    projectUrl: "https://app.inotex.com",
    organizationUrl: "https://inotex.com",
    featured: true,
    status: "Completed",
    client: "INOTEX",
    problem:
      "In a large exhibition, a lot of information is available to visitors, and finding the required information can become a scattered process. Information about companies, exhibitors, various programs, news, and different sections of the exhibition needed to be accessible in one environment so users could quickly access the information they needed during their visit. Additionally, the large volume of information made having a natural and fast way to interact with the information valuable.",
    solution:
      "To solve this, a comprehensive PWA was developed for INOTEX that presents different informational and event sections of the exhibition in a single application. The app structure was designed so users could find information about the exhibition, companies, exhibitors, programs, and news. In addition, an AI Chatbot was integrated into the app so users could ask questions about the exhibition, companies, and available information in natural language and receive relevant answers.",
    contribution:
      "As a Full-Stack Developer, I was responsible for developing and implementing the application as a full-stack product. In the Frontend, I worked on implementing the user interface and various app pages and creating a responsive experience for users. In the Backend, I developed server-side logic, APIs, and communication between different parts of the system. I also integrated the project's chatbot with the software system so users could interact with it through the app. In addition to product development, preparing the project for real-world execution, Docker, and deployment on the server were part of the project development process.",
    features: [
      "Exhibition information",
      "Companies and exhibitors",
      "Event programs",
      "News and exhibition content",
      "AI chatbot",
      "Progressive Web App",
      "Responsive experience",
    ],
    result:
      "A digital PWA platform was developed for INOTEX that provided exhibition information, companies, exhibitors, programs, and news in an integrated environment, and with the addition of an AI chatbot, also enabled conversational interaction with exhibition information. This project provided experience working with a real, event-driven product with a significant volume of information; a product that, in addition to the usual parts of a Web Application, included PWA, Backend, API, AI Integration, Chatbot, and Deployment.",
    type: "Event & networking PWA",
    image: "/projects/inotex.webp",
  },
];
