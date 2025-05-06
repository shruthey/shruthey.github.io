/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Shruthi Srinivas",
  title: "Hi, I'm Shruthi",
  subTitle: emoji(
    "A passionate Full Stack Software Developer with experience in building Web applications with JavaScript / React / Vue and other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true,
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/shruthey",
  linkedin: "https://www.linkedin.com/in/shruthey/",
  gmail: "shruthey98@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/10336750/shrth",
  display: true,
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "I am Full Stack Developer with expertise in building scalable and efficient applications.",
  skills: [
    emoji(
      "⚡ Developing reusable UI components to enhance performance and maintainability."
    ),
    emoji(
      "⚡ Building RESTful APIs and optimizing backend services for efficient data handling."
    ),
    emoji(
      "⚡ Writing unit and integration tests to ensure high code quality and reliability."
    ),
  ],
  softwareSkills: [
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs",
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-hashtag",
    },
    {
      skillName: ".NET Framework",
      fontAwesomeClassname: "fas fa-code",
    },
    {
      skillName: "SQL Databases",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python",
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm",
    },
  ],
  display: true,
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Texas at Dallas",
      logo: require("./assets/images/utdLogo.jpeg"),
      subHeader: "Master of Science in Business Analytics",
      duration: "August 2022 - May 2024",
      desc: "Course Work includes - Database Design, Natural Language Processing, Deep Learning, Design and Analysis of Algorithms",
    },
    {
      schoolName: "Christ University",
      logo: require("./assets/images/christLogo.webp"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "August 2016 - May 2020",
      desc: "Course Work includes - Data Structures, Algorithms, Operating Systems, Database Management Systems, Software Engineering",
    },
  ],
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "90%",
    },
    {
      Stack: "Backend",
      progressPercentage: "70%",
    },
    {
      Stack: "Programming",
      progressPercentage: "60%",
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer",
      company: "MyDirectives",
      companylogo: require("./assets/images/myd-logo.png"),
      date: "May 2024 – Present",
      desc: "Developing features and functionality for an Advance Care Planning website.",
    },
    {
      role: "Software Engineer",
      company: "Oracle Cerner",
      companylogo: require("./assets/images/oracle-cerner-logo.png"),
      date: "Dec 2019 – Aug 2022",
      desc: "Developed an EHR tool that enables doctors, nurses, and other clinicians to efficiently manage patient lab tests and results.",
    },
  ],
};

const openSource = {
  showGithubProfile: "true",
  display: false,
};

const bigProjects = {
  title: "Projects",
  // subtitle: "Some interesting projects that I have worked on",
  projects: [
    {
      projectName: "PokeDex",
      projectDesc:
        "A web application that allows users to manage their Pokémon card collection and trade with others. The app integrates with the PokéAPI to fetch Pokémon data and display detailed information about each card. Users can create an account and log in using JWT authentication. Once authenticated, they can add cards they own to their collection, verify ownership by uploading proof, and browse other users' collections for potential trades. The platform ensures secure and seamless trading by verifying card ownership and providing a user-friendly interface.",
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/shruthey/MyPokeDex/",
        },
      ],
    },
    {
      projectName: "Guard AI",
      projectDesc:
        "A home safety application that leverages YOLOv8 object recognition to detect potentially hazardous objects in a home environment. The application integrates with the GPT API to provide safety recommendations and precautions for the detected objects. This tool is designed to assist families with children or elders requiring care by identifying risks and suggesting actionable safety measures in real-time. The frontend is built using React for an interactive user interface, while the backend is powered by Flask to handle API requests and integrate YOLOv8 and GPT functionalities.",
      footerLink: [
        {
          name: "Code",
          url: "https://github.com/shruthey/Guard-AI",
        },
      ],
    },
  ],
  display: true,
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true,
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 469-686-0968",
  email_address: "shruthey98@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "shruthey",
  display: true,
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
};
