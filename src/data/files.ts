import { VscCode, VscJson, VscFileMedia, VscTerminalCmd, VscBook, VscVerified, VscMail, VscFileCode } from "react-icons/vsc";
import { SiTypescript, SiJavascript, SiReact, SiCss, SiHtml5, SiPython } from "react-icons/si";
import { IconType } from "react-icons";

export interface FileType {
  name: string;
  language: string;
  content: string;
  icon: IconType;
  color: string;
}

export const filesData: FileType[] = [
  {
    name: "home.tsx",
    language: "typescript",
    icon: SiReact,
    color: "#61dafb",
    content: `// Welcome to my portfolio!
// I'm Musirana Hemanth Kumar — Backend Developer, Cloud Engineer & AI/ML Specialist.

const developer = {
  name: "MUSIRANA HEMANTH KUMAR",
  roles: ["Backend Developer", "Cloud Engineer", "AI / ML Dev", "DevOps"],
  status: "Building. Learning. Open to Opportunities.",
  greeting: () => "Hello, World!"
};

export default function Home() {
  return (
    <div className="hero">
      <h1>{developer.greeting()}</h1>
      <p>I am {developer.name}, building scalable backend systems & intelligent AI solutions.</p>
    </div>
  );
}
`
  },
  {
    name: "about.ts",
    language: "typescript",
    icon: SiTypescript,
    color: "#3178c6",
    content: `/**
 * ABOUT ME
 * 
 * Hi, I'm Hemanth. I'm a Computer Science student specializing in Artificial Intelligence
 * and Data Science, with a passion for backend development, cloud engineering, and AI/ML.
 */

export const aboutMe = {
  name: "Musirana Hemanth Kumar",
  title: "Computer Science Undergraduate (AI & DS)",
  location: "Visakhapatnam, Andhra Pradesh, India",
  philosophy: "Curious enough to learn. Determined enough to build.",
  focusAreas: [
    "Cloud Architecture",
    "DevOps & CI/CD",
    "Machine Learning & AI",
    "Backend & Distributed Systems",
    "Problem Solving & DSA",
    "Database Design & Optimization"
  ]
};
`
  },
  {
    name: "skills.json",
    language: "json",
    icon: VscJson,
    color: "#cbcb41",
    content: `{
  "languages": ["Python", "Java", "C++", "C", "JavaScript", "TypeScript", "SQL"],
  "backend": ["Spring Boot", "REST APIs", "Django", "Flask", "Node.js", "Express.js"],
  "cloudDevOps": ["AWS", "Azure", "GCP", "CI/CD Pipelines", "Docker", "Linux", "Nginx"],
  "databases": ["PostgreSQL", "MySQL", "Redis", "SQLite"],
  "aiMachineLearning": ["PyTorch", "TensorFlow", "Scikit-learn", "OpenCV", "Pandas", "NumPy", "Grad-CAM", "LLM Fine-Tuning"],
  "coreConcepts": ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks", "System Design", "Computer Architecture", "Kernel Fundamentals"]
}
`
  },
  {
    name: "projects.ts",
    language: "typescript",
    icon: SiTypescript,
    color: "#3178c6",
    content: `// Featured Projects by Musirana Hemanth Kumar

export const projects = [
  {
    name: "Alumni Connect Portal",
    tag: "FULL STACK • WEB DEVELOPMENT • DATABASE",
    description: "A comprehensive alumni management platform enabling registration, mentorship opportunities, job referrals, and institutional admin management.",
    techStack: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Apache"],
    live: "http://alumni.siddharthgroup.ac.in"
  },
  {
    name: "PCOS Detection using Thermal Imaging",
    tag: "AI • DEEP LEARNING • MEDICAL IMAGING",
    description: "Summer Research Internship project at IIT (ISM) Dhanbad combining clinical parameters and thermal imaging for early PCOS detection using Explainable AI (Grad-CAM).",
    techStack: ["Python", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Grad-CAM"]
  },
  {
    name: "Smart Sericulture Management System",
    tag: "AI • IOT • AGRICULTURE",
    description: "Sericulture management platform for silkworm farmers featuring environmental monitoring and smart recommendations.",
    techStack: ["Python", "IoT Sensors", "Machine Learning", "HTML", "CSS", "JavaScript"],
    live: "https://kaiko-ken.netlify.app/"
  },
  {
    name: "Quantum Anomaly Detection System (QADS)",
    tag: "QUANTUM COMPUTING • MACHINE LEARNING",
    description: "Hybrid quantum-classical machine learning system for multi-domain anomaly detection built for the Amaravati Quantum Valley Hackathon.",
    techStack: ["Python", "Qiskit", "IBM Quantum", "Scikit-learn", "Gradio", "QSVM"],
    live: "https://fraudguardai.vercel.app/"
  }
];
`
  },
  {
    name: "experience.ts",
    language: "typescript",
    icon: SiTypescript,
    color: "#3178c6",
    content: `// Work & Leadership Experience

export const experiences = [
  {
    role: "Summer Research Intern",
    organization: "Indian Institute of Technology (ISM) Dhanbad",
    period: "May 2026 – Present",
    description: "Researching Artificial Intelligence, Deep Learning, and Explainable AI for healthcare applications (PCOS thermal imaging detection).",
    tags: ["Artificial Intelligence", "Deep Learning", "Computer Vision", "Grad-CAM", "PyTorch", "Python", "Medical Imaging"]
  },
  {
    role: "Campus Ambassador",
    organization: "GeeksforGeeks",
    period: "Dec 2024 – Dec 2025",
    description: "Promoted technical learning initiatives, coding culture, and student engagement across campus.",
    tags: ["Community Building", "Technical Events", "Leadership", "Public Speaking", "Networking"]
  }
];
`
  },
  {
    name: "education.ts",
    language: "typescript",
    icon: SiTypescript,
    color: "#3178c6",
    content: `// Academic Background

export const education = {
  institution: "Siddartha Institute Of Science And Technology",
  degree: "Bachelor of Technology (B.Tech)",
  specialization: "Computer Science & Engineering (Artificial Intelligence & Data Science)",
  period: "2023 – 2027",
  cgpa: "8.9 / 10"
};
`
  },
  {
    name: "research.ts",
    language: "typescript",
    icon: VscBook,
    color: "#10b981",
    content: `// Research & Publications

export const research = {
  title: "Explainable AI for PCOS Detection using Thermal Imaging",
  institution: "Indian Institute of Technology (ISM) Dhanbad",
  status: "🚧 Research Paper Currently in Progress",
  summary: "Developing interpretable deep learning pipelines and thermal feature extraction models for early PCOS diagnosis."
};
`
  },
  {
    name: "achievements.ts",
    language: "typescript",
    icon: VscVerified,
    color: "#fbbf24",
    content: `// Hackathons & Honors

export const achievements = [
  {
    event: "Quantum Valley Hackathon 2026",
    award: "Runner-Up 🥈 & Top Project ⭐",
    description: "Developed Quantum Anomaly Detection System (QADS) using Qiskit and IBM Quantum."
  },
  {
    event: "Make for Madanapalle Hackathon",
    award: "Runner-Up 🥈",
    description: "Built Smart Sericulture solution for silk farmers using IoT and ML."
  },
  {
    event: "Agentic AI Hackathon @ IIIT Sri City",
    award: "Finalist 🏅",
    description: "Built an AI-powered Interview Assistant in 36 hours."
  },
  {
    event: "Amaravati Quantum Valley Hackathon",
    award: "Semi-Finalist 💻",
    description: "Selected among top-performing teams for Quantum Machine Learning innovation."
  }
];
`
  },
  {
    name: "certifications.ts",
    language: "typescript",
    icon: VscVerified,
    color: "#a855f7",
    content: `// Professional Certifications

export const certificationsStatus = {
  status: "🚧 Certifications In Progress",
  note: "Actively pursuing industry certifications in Cloud Computing, Artificial Intelligence, Backend Development, and Software Engineering."
};
`
  },
  {
    name: "contact.ts",
    language: "typescript",
    icon: VscMail,
    color: "#e1306c",
    content: `// Contact Information & Links

export const contactDetails = {
  email: "hemanthdev753@gmail.com",
  github: "https://github.com/HemanthKumarMusirana",
  linkedin: "https://www.linkedin.com/in/hemanth-kumar-musirana-918857226/",
  leetcode: "https://leetcode.com/u/Hemanth_753/",
  instagram: "https://www.instagram.com/hemanth_k_musirana/"
};
`
  }
];
