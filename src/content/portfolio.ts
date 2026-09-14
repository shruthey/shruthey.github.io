import type { Experience, Project, School, SkillGroup, SocialLink } from "./types";

export const site = {
  url: "https://shruthey.github.io",
  name: "Shruthi Srinivasa Prasad",
  role: "Software Engineer",
  description:
    "Software engineer with 5+ years building healthcare and enterprise web applications across Vue, React, C#/.NET and Python.",
} as const;

export const greeting = {
  name: "Shruthi Srinivasa Prasad",
  title: "Hi, I'm Shruthi",
  subTitle:
    "Software engineer with 5+ years building web applications end to end — from Vue and React front ends to C#/.NET and Python services, on AWS. Most recently in regulated healthcare, where correctness, accessibility and auditability are requirements rather than nice-to-haves.",
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
    "Five years of shipping full-stack features in regulated, high-stakes domains — healthcare records, veteran identity, advance care planning.",
  highlights: [
    "Designing front-end architecture that scales: schema-driven components, shared contracts, and accessibility built into the primitives rather than retrofitted.",
    "Building backend services and APIs where correctness matters — rate limiting, session security, document pipelines, and audit trails.",
    "Migrating legacy systems without downtime, and backing changes with tests, CI/CD, and measured performance wins.",
  ],
} as const;

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      { name: "React", icon: "react" },
      { name: "Vue 3", icon: "vue" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Redux", icon: "redux" },
      { name: "Pinia", icon: "pinia" },
      { name: "Vite", icon: "vite" },
      { name: "Jest", icon: "jest" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "C# / .NET", icon: "dotnet" },
      { name: "Python", icon: "python" },
      { name: "FastAPI", icon: "fastapi" },
      { name: "Flask", icon: "flask" },
      { name: "Node.js", icon: "node" },
      { name: "Java", icon: "java" },
    ],
  },
  {
    label: "Data",
    skills: [
      { name: "SQL Server", icon: "database" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Redis", icon: "redis" },
      { name: "GraphQL", icon: "graphql" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: "aws" },
      { name: "Docker", icon: "docker" },
      { name: "Terraform", icon: "terraform" },
      { name: "Git", icon: "git" },
      { name: "Jenkins", icon: "jenkins" },
      { name: "Octopus", icon: "octopusdeploy" },
      { name: "Datadog", icon: "datadog" },
      { name: "Postman", icon: "postman" },
      { name: "Jira", icon: "jira" },
    ],
  },
  {
    label: "AI / ML",
    skills: [
      { name: "MLflow", icon: "mlflow" },
      { name: "LangGraph", icon: "langgraph" },
      { name: "RAG", icon: "rag" },
      { name: "Vector stores", icon: "vectorstore" },
    ],
  },
];

export const experiences: Experience[] = [
  {
    role: "Software Developer",
    company: "MyDirectives",
    logo: "/logos/myd-logo.png",
    date: "May 2024 – Sep 2026",
    desc: "Led front-end and backend work across an advance care planning suite, including a US Department of Veterans Affairs site serving a 6M+ VA Healthcare population.",
    bullets: [
      "Led development for a MyDirectives suite website for the US Department of Veterans Affairs, with veteran identity verification at signup and SSO, enabling choice of care access across a 6M+ VA Healthcare population.",
      "Consolidated the document generation APIs into one configurable pipeline handling generation, storage and publishing — reducing the effort to add a new document type by ~90%.",
      "Built the witness and notary signing workflow: enforced signing order, tracked document readiness through each stage, applied state-specific legal requirements and sequenced notifications, bringing completion time down ~70%.",
      "Built a schema-driven table framework for the clinician suite with columns and filters declared as config, filter state synced to the URL, and a shared server-side pagination contract — cutting the time to build a new data view by ~80%.",
      "Built sliding-window rate limiting across the public API for abuse prevention and contractual throughput limits, with per-client request records in DynamoDB retained as a compliance audit trail.",
      "Designed session security for 100K+ accounts: single active session via DynamoDB-backed tokens, plus automatic account revalidation through expiring email links.",
      "Led accessibility remediation across the suite, closing a WCAG 2.1 AA audit by centralizing ARIA labels, roles and focus behavior in shared UI components and making accessibility props required.",
    ],
    stack: ["Vue 3", "Vue 2", "C#", ".NET Core", "SQL Server", "AWS", "Pinia", "Vite"],
  },
  {
    role: "Software Engineer",
    company: "Oracle",
    logo: "/logos/oracle-cerner-logo.png",
    date: "Dec 2019 – Aug 2022",
    desc: "Migrated client-facing EHR validation applications to .NET Core with zero downtime, serving ~1,500 analysts across 1,000+ client hospitals.",
    bullets: [
      "Migrated 4 client-facing .NET Framework apps to .NET Core 3.1 ahead of end-of-support, using a reverse proxy to route traffic path-by-path and a shared Redis session store to keep users logged in across old and new — no downtime for ~1,500 analysts across 1,000+ client hospitals.",
      "Redesigned the database schema from fully normalized tables to JSON columns in SQL Server, replacing nested selects with single-row reads and moving complex operations to stored procedures — cutting query execution time ~30% and API response time up to 67%.",
      "Added synchronous editing to test scripts, allowing 10+ users to work on one script simultaneously.",
      "Wrote unit and integration tests across the migrated services, reaching 80% coverage.",
      "Implemented CI/CD pipelines for build and deployment, cutting release time by 20%.",
    ],
    stack: ["React", "Redux", "Angular", "C#", ".NET Core", "SQL Server", "Entity Framework"],
  },
];

export const schools: School[] = [
  {
    schoolName: "University of Texas at Dallas",
    logo: "/logos/utdLogo.jpeg",
    subHeader: "Master of Science in Business Analytics",
    duration: "August 2022 - May 2024",
    desc: "Coursework: Data Structures and Algorithms, Database Design, NLP, Deep Learning, Predictive/Prescriptive Analytics",
  },
  {
    schoolName: "Christ University",
    logo: "/logos/christLogo.webp",
    subHeader: "Bachelor of Technology in Computer Science",
    duration: "August 2016 - June 2020",
    desc: "Coursework: Programming Paradigm, Artificial Intelligence, Algorithms, Web Development, Cloud Computing, Software Engineering",
  },
];

export const projects: Project[] = [
  {
    slug: "document-sync",
    name: "Document Sync",
    tagline:
      "Real-time collaborative editing with CRDT conflict resolution, on serverless AWS.",
    summary:
      "A real-time collaborative editor where multiple users edit one document simultaneously, with changes propagating over WebSockets through API Gateway to Lambda handlers and state persisted in DynamoDB. CRDT-based conflict resolution means concurrent edits to the same region merge instead of overwriting, and deployment is automated through GitHub Actions with infrastructure defined in Terraform.",
    problem:
      "Two people editing the same document at the same time is the hard case in collaborative software. Last-write-wins silently destroys work: whoever saves second overwrites the first person's edit with no warning and no way back. Getting this right means the merge has to happen at the data-structure level, not the save button.",
    approach: [
      "Propagated changes over WebSockets through API Gateway to Lambda handlers, keeping the whole path serverless with no connection servers to run.",
      "Persisted document state in DynamoDB so sessions survive disconnects and reconnecting clients resync from durable state.",
      "Used CRDTs (via Yjs) for conflict resolution, so concurrent edits to the same region of a document merge deterministically rather than overwriting.",
      "Defined the infrastructure in Terraform and automated deployment through GitHub Actions, making the whole stack reproducible.",
    ],
    stack: [
      "React",
      "Python",
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "Yjs",
      "Terraform",
      "GitHub Actions",
    ],
    outcomes: [
      "Concurrent edits to the same region merge instead of overwriting — no silent data loss.",
      "Fully serverless: no WebSocket servers to provision, patch or scale.",
      "Infrastructure and deploys are reproducible from source via Terraform and GitHub Actions.",
    ],
    links: [],
  },
  {
    slug: "email-router",
    name: "Email Router",
    tagline:
      "Zero-shot email classification, taken from a script to a tracked, containerized service.",
    summary:
      "An email classification service built on zero-shot classification, taken from a Python script to a containerized FastAPI service with MLflow experiment tracking. An agentic architecture was prototyped alongside it, covering retrieval-augmented generation, vector stores, and graph-based agent orchestration.",
    problem:
      "Routing inbound email by category usually means either hand-written rules that rot, or a supervised model that needs a labelled dataset before it can classify anything at all. Zero-shot sidesteps the cold start — but a model in a notebook isn't a service, and without experiment tracking you can't tell whether the last change to the label set helped or hurt.",
    approach: [
      "Used zero-shot classification so the router could categorize mail without first assembling a labelled training set for every category.",
      "Moved the work from a standalone Python script into a containerized FastAPI service, giving it a real HTTP interface and a reproducible runtime.",
      "Added MLflow experiment tracking so changes to prompts, labels and model choice could be compared against each other rather than assessed by eye.",
      "Prototyped an agentic architecture alongside the classifier — retrieval-augmented generation over vector stores, with graph-based agent orchestration in LangGraph.",
    ],
    stack: [
      "Python",
      "FastAPI",
      "Docker",
      "MLflow",
      "LangGraph",
      "RAG",
      "Vector stores",
    ],
    outcomes: [
      "Classifies into new categories without a labelled dataset per category.",
      "Runs as a deployable containerized service rather than a script on someone's machine.",
      "Model and prompt changes are measured through tracked experiments, not guessed at.",
    ],
    links: [],
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
    links: [
      { label: "View code", url: "https://github.com/shruthey/MyPokeDex/" },
    ],
  },
];

export const contactInfo = {
  title: "Contact Me",
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  email: "shruthey98@gmail.com",
} as const;
