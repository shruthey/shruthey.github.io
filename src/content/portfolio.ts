import type { Experience, Project, School, SocialLink } from "./types";

export const site = {
  url: "https://shruthey.github.io",
  name: "Shruthi Srinivas",
  role: "Full Stack Software Developer",
  description:
    "Full Stack Software Developer building scalable web applications with React, Vue, Node.js and .NET.",
} as const;

export const greeting = {
  name: "Shruthi Srinivas",
  title: "Hi, I'm Shruthi",
  subTitle:
    "A passionate Full Stack Software Developer with experience in building Web applications with JavaScript / React / Vue and other cool libraries and frameworks.",
  resumeHref: "/shruthi-srinivas-resume.pdf",
} as const;

export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/shruthey",
    handle: "@shruthey",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shruthey/",
    handle: "in/shruthey",
  },
  {
    label: "Stack Overflow",
    href: "https://stackoverflow.com/users/10336750/shrth",
    handle: "shrth",
  },
  {
    label: "Email",
    href: "mailto:shruthey98@gmail.com",
    handle: "shruthey98@gmail.com",
  },
];

export const skillsSection = {
  title: "What I Do",
  subTitle:
    "I am Full Stack Developer with expertise in building scalable and efficient applications.",
  highlights: [
    "Developing reusable UI components to enhance performance and maintainability.",
    "Building RESTful APIs and optimizing backend services for efficient data handling.",
    "Writing unit and integration tests to ensure high code quality and reliability.",
  ],
  /** `icon` keys map to the inline SVG set in components/SkillIcon.tsx. */
  softwareSkills: [
    { name: "React.js", icon: "react" },
    { name: "Vue.js", icon: "vue" },
    { name: "Node.js", icon: "node" },
    { name: "C#", icon: "csharp" },
    { name: ".NET Framework", icon: "dotnet" },
    { name: "SQL Databases", icon: "database" },
    { name: "JavaScript", icon: "javascript" },
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "Sass", icon: "sass" },
    { name: "Python", icon: "python" },
    { name: "NPM", icon: "npm" },
  ],
} as const;

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "MyDirectives",
    logo: "/logos/myd-logo.png",
    date: "May 2024 – Present",
    desc: "Developing features and functionality for an Advance Care Planning website.",
  },
  {
    role: "Software Engineer",
    company: "Oracle Cerner",
    logo: "/logos/oracle-cerner-logo.png",
    date: "Dec 2019 – Aug 2022",
    desc: "Developed an EHR tool that enables doctors, nurses, and other clinicians to efficiently manage patient lab tests and results.",
  },
];

export const schools: School[] = [
  {
    schoolName: "University of Texas at Dallas",
    logo: "/logos/utdLogo.jpeg",
    subHeader: "Master of Science in Business Analytics",
    duration: "August 2022 - May 2024",
    desc: "Course Work includes - Database Design, Natural Language Processing, Deep Learning, Design and Analysis of Algorithms",
  },
  {
    schoolName: "Christ University",
    logo: "/logos/christLogo.webp",
    subHeader: "Bachelor of Technology in Computer Science",
    duration: "August 2016 - May 2020",
    desc: "Course Work includes - Data Structures, Algorithms, Operating Systems, Database Management Systems, Software Engineering",
  },
];

export const projects: Project[] = [
  {
    slug: "pokedex",
    name: "PokeDex",
    tagline: "Collection management and peer-to-peer trading for Pokémon cards.",
    summary:
      "A web application that allows users to manage their Pokémon card collection and trade with others. The app integrates with the PokéAPI to fetch Pokémon data and display detailed information about each card. Users can create an account and log in using JWT authentication. Once authenticated, they can add cards they own to their collection, verify ownership by uploading proof, and browse other users' collections for potential trades. The platform ensures secure and seamless trading by verifying card ownership and providing a user-friendly interface.",
    problem:
      "Trading collectible cards online runs on trust. A collector browsing someone else's list has no way to confirm the cards are real or actually owned, and the usual workaround — screenshots passed around in chat threads — is both easy to fake and painful to search.",
    approach: [
      "Integrated the PokéAPI as the canonical source for card data, so every entry in a collection resolves to consistent, detailed metadata rather than user-typed text.",
      "Built account creation and login on JWT authentication, scoping each collection to its owner.",
      "Added an ownership-verification step where users upload proof for each card they add, making a listing something a trading partner can actually check.",
      "Designed browsing so collectors can explore other users' verified collections and identify trade candidates directly.",
    ],
    stack: ["React", "Node.js", "JWT", "PokéAPI", "SQL"],
    outcomes: [
      "Trades are grounded in verified ownership rather than informal trust.",
      "Card data stays consistent across every collection because it comes from one API.",
      "Collectors browse and evaluate potential trades in one interface instead of across chat threads.",
    ],
    links: [{ label: "View code", url: "https://github.com/shruthey/MyPokeDex/" }],
  },
  {
    slug: "guard-ai",
    name: "Guard AI",
    tagline: "Computer vision that spots household hazards and explains them.",
    summary:
      "A home safety application that leverages YOLOv8 object recognition to detect potentially hazardous objects in a home environment. The application integrates with the GPT API to provide safety recommendations and precautions for the detected objects. This tool is designed to assist families with children or elders requiring care by identifying risks and suggesting actionable safety measures in real-time. The frontend is built using React for an interactive user interface, while the backend is powered by Flask to handle API requests and integrate YOLOv8 and GPT functionalities.",
    problem:
      "Households with young children or elders needing care carry everyday hazards that are easy to walk past. Object detection alone only names what it sees — a list of detected objects is not advice, and a caregiver still has to work out what to actually do about it.",
    approach: [
      "Used YOLOv8 object recognition to detect potentially hazardous objects in a home environment in real time.",
      "Passed detections to the GPT API to turn raw labels into specific safety recommendations and precautions for each object found.",
      "Built the frontend in React for an interactive interface that surfaces risks as they are identified.",
      "Powered the backend with Flask, handling API requests and coordinating the YOLOv8 and GPT stages.",
    ],
    stack: ["React", "Flask", "Python", "YOLOv8", "GPT API"],
    outcomes: [
      "Detection results arrive as actionable precautions, not just object labels.",
      "Real-time analysis suits the walkthrough case — scanning a room and getting feedback immediately.",
      "Aimed squarely at families caring for children or elders, where the cost of a missed hazard is highest.",
    ],
    links: [{ label: "View code", url: "https://github.com/shruthey/Guard-AI" }],
  },
];

export const contactInfo = {
  title: "Contact Me",
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 469-686-0968",
  email: "shruthey98@gmail.com",
} as const;
