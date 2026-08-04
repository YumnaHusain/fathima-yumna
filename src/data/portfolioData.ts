import { Project, SkillCategory, EducationItem, StrengthCard, CertificateItem, QuickStat } from '../types';

export const personalInfo = {
  name: "Fathima Yumna",
  title: "IT Graduate | Software Developer | Technology Enthusiast",
  email: "yumnahusain1993@gmail.com",
  phone: "0760771993",
  formattedPhone: "+94 76 077 1993",
  location: "Sri Lanka",
  status: "Open for Internship / Entry-Level IT Opportunities",
  heroSummary: "Motivated Information Technology graduate with a Higher National Diploma in Information Technology from SLIATE. Experienced in developing software solutions including POS systems, e-commerce platforms, and management applications. Passionate about software development, database management, and creating efficient technology solutions.",
  aboutStory: [
    "My journey in Information Technology started with curiosity about how software systems solve real-world problems. Through my HNDIT program at SLIATE, I developed practical experience in software development, database management, networking fundamentals, and system analysis.",
    "During my academic journey, I designed and developed multiple applications including a Mobile-Based Point of Sale System, E-Commerce Platform, and Library Management System.",
    "I enjoy transforming ideas into functional digital solutions while continuously improving my technical knowledge."
  ],
  github: "https://github.com",
  linkedin: "https://linkedin.com"
};

export const quickStats: QuickStat[] = [
  {
    id: "projects",
    value: "3+",
    label: "Academic Projects",
    sublabel: "Full Stack & Mobile Systems",
    iconName: "FaCode"
  },
  {
    id: "education",
    value: "HNDIT",
    label: "SLIATE Graduate",
    sublabel: "Higher National Diploma",
    iconName: "FaGraduationCap"
  },
  {
    id: "tech",
    value: "10+",
    label: "Technologies Used",
    sublabel: "Languages, Frameworks & Tools",
    iconName: "FaLayerGroup"
  },
  {
    id: "availability",
    value: "Open",
    label: "For Internship",
    sublabel: "Entry-Level Opportunities",
    iconName: "FaBriefcase"
  }
];

export const strengthCards: StrengthCard[] = [
  {
    id: "problem-solver",
    title: "Problem Solver",
    description: "Strong analytical thinking with the ability to identify problems and develop practical solutions.",
    iconName: "FaLightbulb"
  },
  {
    id: "fast-learner",
    title: "Fast Learner",
    description: "Quickly adapts to new technologies and continuously improves technical skills.",
    iconName: "FaRocket"
  },
  {
    id: "communication",
    title: "Communication",
    description: "Good communication skills with the ability to collaborate effectively.",
    iconName: "FaComments"
  },
  {
    id: "team-player",
    title: "Team Player",
    description: "Works effectively with teams to achieve project goals.",
    iconName: "FaUsers"
  }
];

export const educationTimeline: EducationItem[] = [
  {
    id: "hndit",
    degree: "Higher National Diploma in Information Technology (HNDIT)",
    institution: "Sri Lanka Institute of Advanced Technological Education (SLIATE) - ATI, Anuradhapura",
    period: "2023 - 2026",
    description: "Successfully completed the Higher National Diploma in Information Technology. Developed practical knowledge in software development, networking, database management, system analysis, cybersecurity fundamentals, and information technology.",
    skillsTags: [
      "Software Development",
      "Database Management",
      "Networking",
      "Cybersecurity",
      "System Analysis"
    ]
  },
  {
    id: "al",
    degree: "G.C.E Advanced Level",
    institution: "Mercy Education Campus, Puttalam",
    period: "2022",
    description: "Developed analytical thinking, communication abilities, and problem-solving skills.",
    skillsTags: ["Analytical Thinking", "Mathematics & Logic", "Problem Solving"]
  },
  {
    id: "english",
    degree: "Intermediate English Course",
    institution: "Kekirawa English Academy",
    period: "Completed 18 November 2023",
    description: "Comprehensive training in professional English communication and writing.",
    skillsTags: ["Grammar", "Speaking", "Writing", "Listening", "Reading"]
  },
  {
    id: "ol",
    degree: "G.C.E Ordinary Level",
    institution: "Department of Examinations Sri Lanka",
    period: "2019",
    description: "Foundational secondary education with strong performance in mathematics, sciences, and IT fundamentals.",
    skillsTags: ["Mathematics", "Science", "English"]
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    skills: [
      { name: "Python", level: "Advanced", iconName: "SiPython" },
      { name: "JavaScript", level: "Intermediate", iconName: "SiJavascript" },
      { name: "PHP", level: "Intermediate", iconName: "SiPhp" },
      { name: "HTML", level: "Advanced", iconName: "SiHtml5" },
      { name: "CSS", level: "Advanced", iconName: "SiCss3" }
    ]
  },
  {
    id: "backend",
    title: "Backend Development",
    skills: [
      { name: "Flask", level: "Intermediate", iconName: "SiFlask" },
      { name: "Node.js", level: "Foundational", iconName: "SiNodedotjs" },
      { name: "PHP", level: "Intermediate", iconName: "SiPhp" },
      { name: "REST APIs", level: "Intermediate", iconName: "FaServer" }
    ]
  },
  {
    id: "database",
    title: "Database",
    skills: [
      { name: "MySQL", level: "Advanced", iconName: "SiMysql" },
      { name: "Database Design", level: "Advanced", iconName: "FaDatabase" },
      { name: "SQL Queries", level: "Advanced", iconName: "FaCode" },
      { name: "Data Management", level: "Intermediate", iconName: "FaTable" }
    ]
  },
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "HTML5", level: "Advanced", iconName: "SiHtml5" },
      { name: "CSS3", level: "Advanced", iconName: "SiCss3" },
      { name: "JavaScript", level: "Intermediate", iconName: "SiJavascript" },
      { name: "Responsive Design", level: "Advanced", iconName: "FaMobileAlt" }
    ]
  },
  {
    id: "tools",
    title: "Tools",
    skills: [
      { name: "Git", level: "Intermediate", iconName: "SiGit" },
      { name: "GitHub", level: "Intermediate", iconName: "SiGithub" },
      { name: "VS Code", level: "Advanced", iconName: "SiVisualstudiocode" },
      { name: "Android Studio", level: "Intermediate", iconName: "SiAndroidstudio" }
    ]
  }
];

export const projectsData: Project[] = [
  {
    id: "pos-system",
    title: "Mobile-Based Point of Sale System",
    category: "Final Year Project",
    subtitle: "Mobile-friendly POS solution for small & medium businesses",
    description: "Designed and developed a mobile-friendly POS system for small and medium-sized businesses.",
    longDescription: "A comprehensive point of sale solution built to streamline commercial retail and hospitality operations on mobile and web viewports. Features secure role-based authentication, real-time inventory updates, seamless sales transaction processing, automated receipts, customer transaction history, and analytical reporting dashboards.",
    features: [
      "Secure authentication & user roles",
      "Inventory management & stock alerts",
      "Sales processing & transaction logs",
      "Customer management & purchase history",
      "Sales reports & performance metrics",
      "Responsive & mobile-first interface"
    ],
    techStack: ["Python Flask", "MySQL", "HTML", "CSS", "JavaScript"],
    featured: true,
    systemArchitecture: "MVC Architecture with RESTful API endpoints, Flask backend server, and MySQL database persistence.",
    highlightStat: {
      label: "Response Speed",
      value: "<100ms"
    },
    githubUrl: "https://github.com/YumnaHusain/mobile-pos-system"
  },
  {
    id: "cosmetics-ecommerce",
    title: "Cosmetics E-Commerce Platform",
    category: "Full Stack Web Application",
    subtitle: "Complete online storefront with custom admin portal",
    description: "Developed a complete e-commerce platform for a cosmetics retail business.",
    longDescription: "An end-to-end e-commerce solution tailored for cosmetic retail. Includes a dynamic product catalog, interactive cart management, client authentication, automated order tracking, and a powerful back-office admin dashboard for product and inventory control.",
    features: [
      "Product catalog with filter & search",
      "Interactive shopping cart & checkout flow",
      "User registration & secure authentication",
      "Order management & order status tracking",
      "Comprehensive Admin dashboard"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    featured: true,
    systemArchitecture: "Client-side responsive views interacting with PHP server scripts and relational MySQL database.",
    highlightStat: {
      label: "Admin Controls",
      value: "Full CRUD"
    },
    githubUrl: "https://pureorganics.vercel.app/"
  },
  {
    id: "library-system",
    title: "Library Management System",
    category: "Database & Software System",
    subtitle: "Automated circulation and cataloging management",
    description: "Created a library management solution to automate daily library operations.",
    longDescription: "An integrated library management application created to digitize member registries, book cataloging, circulation workflows, overdue fine calculations, and real-time title availability search.",
    features: [
      "Book cataloging & category management",
      "Member registration & digital ID records",
      "Automated borrowing system",
      "Returning system & fine calculator",
      "Fine management & payment records",
      "Fast multi-criteria search functionality"
    ],
    techStack: ["Database System", "Programming", "SQL", "MySQL"],
    featured: true,
    systemArchitecture: "Relational database schema with normalized tables, SQL stored queries, and management user interface.",
    highlightStat: {
      label: "Operations",
      value: "100% Automated"
    },
    githubUrl: "https://github.com/yumnahusain/library-management-system"
  }
];

export const certificatesData: CertificateItem[] = [
  {
    id: "hndit-cert",
    title: "HNDIT Completion",
    issuer: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
    year: "2026",
    description: "Higher National Diploma in Information Technology - Comprehensive program covering software engineering, database design, computer networks, and system security.",
    credentialId: "SLIATE-HNDIT-2026"
  },
  {
    id: "english-cert",
    title: "Intermediate English Certification",
    issuer: "Kekirawa English Academy",
    year: "2023",
    description: "Certified proficiency in intermediate professional English, focusing on technical writing, presentation skills, and professional workplace communication.",
    credentialId: "KEA-ENG-2023-11"
  },
  {
    id: "academic-exp",
    title: "Academic Project Experience",
    issuer: "Software Development Projects",
    year: "2023 - 2026",
    description: "Hands-on engineering verification across multiple production-ready systems including Mobile POS, E-Commerce, and Library Management Systems.",
    credentialId: "SLIATE-PROJ-EXP"
  }
];
