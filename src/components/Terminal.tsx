'use client';
import { useState, useRef, useEffect } from 'react';
import { VscClose, VscChevronUp, VscChevronDown, VscTrash } from 'react-icons/vsc';
import { useStore } from '../store/useStore';
import { motion, AnimatePresence } from 'framer-motion';

export default function Terminal() {
  const { isTerminalOpen, toggleTerminal, terminalHistory, addTerminalHistory } = useStore();
  const [input, setInput] = useState('');
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalHistory, isTerminalOpen]);

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const cmdString = input.trim();
      addTerminalHistory(`hemanthkumar@kernel:~$ ${cmdString}`);
      
      const args = cmdString.split(' ');
      const cmd = cmdString.toLowerCase();
      const firstWord = args[0].toLowerCase();
      const arg1 = args.slice(1).join(' ');

      if (cmd === 'clear') {
        useStore.setState({ 
          terminalHistory: [`╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║          Welcome to Hemanth Kumar's Developer Terminal       ║
║                                                              ║
║    Backend • Cloud • AI/ML | Building the Future with Code   ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

Type "help" to see all available commands.`] 
        });
      } else if (cmd === 'help') {
        addTerminalHistory(`Available Commands

about            Brief introduction
whoami           Developer profile
skills           Technical skills
stack            Complete technology stack
projects         Featured projects
experience       Professional experience
education        Academic journey
research         Research work
achievements     Hackathons & awards
certifications   Professional certifications
resume           Download resume
contact          Contact information

github           Open GitHub
linkedin         Open LinkedIn
leetcode         Open LeetCode
gfg              Open GeeksforGeeks
instagram        Open Instagram

timeline         Career timeline
hackathons       Hackathon journey
stats            Portfolio statistics
roadmap          Current learning roadmap
quote            Personal philosophy
goals            Current goals
services         What I build

neofetch         Developer system information
tree             Portfolio file structure
ls               List files
pwd              Print working directory
cat <file>       Read file
open <file>      Open portfolio section
history          Terminal history
date             Current date
clear            Clear terminal
exit             Exit terminal

Easter Eggs: coffee, matrix, sudo hire-me, fortune`);
      } else if (cmd === 'whoami') {
        addTerminalHistory(`Hi, I'm Hemanth Kumar.

Computer Science undergraduate specializing in Artificial Intelligence and Data Science.

I thrive at the intersection of Backend Development, Cloud Engineering, and Artificial Intelligence, building scalable software that solves real-world problems.

Currently focused on:
• Backend Development
• Cloud Computing
• Artificial Intelligence
• Research & Innovation

Status:
Building. Learning. Open to Opportunities.`);
      } else if (cmd === 'about') {
        useStore.getState().openFile('about.ts');
        addTerminalHistory(`Curious enough to learn.
Determined enough to build.

I'm passionate about building scalable backend systems, cloud-native applications, and intelligent AI solutions.

Every project is an opportunity to solve real-world problems while continuously learning new technologies.`);
      } else if (cmd === 'skills') {
        useStore.getState().openFile('skills.json');
        addTerminalHistory(`Languages
──────────────
Python, Java, C, JavaScript, TypeScript, SQL

Backend
──────────────
Spring Boot, Flask, REST APIs, Node.js

Artificial Intelligence
──────────────
PyTorch, TensorFlow, Scikit-learn, OpenCV, Pandas, NumPy

Cloud & DevOps
──────────────
AWS EC2, S3, IAM, VPC, Linux, Docker, Azure, GCP, CI/CD

Database
──────────────
MySQL, PostgreSQL, SQLite, Redis`);
      } else if (cmd === 'stack') {
        addTerminalHistory(`Backend Development
Cloud Engineering
Artificial Intelligence
Machine Learning
Deep Learning
Computer Vision
REST APIs
Database Design
Linux
Git
Software Architecture`);
      } else if (cmd === 'projects') {
        useStore.getState().openFile('projects.ts');
        addTerminalHistory(`Featured Projects

1. Alumni Connect Portal
   Full Stack Alumni Management System

2. PCOS Detection using Thermal Imaging
   AI + Deep Learning + Medical Imaging

3. Quantum Anomaly Detection System (QADS)
   Quantum Computing + Machine Learning

4. Smart Sericulture Management System
   AI-powered agriculture solution

Use: open projects to explore them.`);
      } else if (cmd === 'experience') {
        useStore.getState().openFile('experience.ts');
        addTerminalHistory(`Summer Research Intern
IIT (ISM) Dhanbad

Research in Explainable AI, Medical Imaging, Deep Learning

────────────────────────

Campus Ambassador
GeeksforGeeks

Promoting technical learning, community building, and developer culture.`);
      } else if (cmd === 'education') {
        useStore.getState().openFile('education.ts');
        addTerminalHistory(`Bachelor of Technology

Computer Science & Engineering (Artificial Intelligence & Data Science)

Siddartha Institute Of Science And Technology

Expected Graduation: 2027 | CGPA: 8.9 / 10`);
      } else if (cmd === 'research') {
        useStore.getState().openFile('research.ts');
        addTerminalHistory(`Current Research

Explainable AI for PCOS Detection using Thermal Imaging

Institution: Indian Institute of Technology (ISM) Dhanbad

Publication Status: Research Paper Currently in Progress 🚧`);
      } else if (cmd === 'achievements' || cmd === 'hackathons') {
        useStore.getState().openFile('achievements.ts');
        addTerminalHistory(`Hackathons

🥈 Runner-Up — Quantum Valley Hackathon 2026
⭐ Top Project — Quantum Valley Hackathon 2026
🥈 Runner-Up — Make for Madanapalle Hackathon
🏅 Finalist — Agentic AI @ IIIT Sri City
💻 Semi-Finalist — Amaravati Quantum Valley Hackathon`);
      } else if (cmd === 'certifications') {
        useStore.getState().openFile('certifications.ts');
        addTerminalHistory(`Coming Soon...

Currently pursuing industry certifications in:
• Cloud Computing (AWS / Azure)
• Artificial Intelligence
• Backend Development`);
      } else if (cmd === 'timeline') {
        addTerminalHistory(`2023 ──> Started B.Tech CSE (AI & DS)
↓
2024 ──> Campus Ambassador @ GeeksforGeeks & Built Full Stack Apps
↓
2025 ──> Multiple State-Level Hackathons & Alumni Connect Portal
↓
2026 ──> Summer Research Intern @ IIT (ISM) Dhanbad
↓
Now  ──> Building. Learning. Growing.`);
      } else if (cmd === 'roadmap') {
        addTerminalHistory(`Completed:
✔ Backend Development
✔ Machine Learning
✔ Deep Learning
✔ Cloud Fundamentals

In Progress:
→ Research Publication
→ Advanced Cloud Architecture
→ System Design

Future Goals:
→ M.Tech & Advanced AI Research
→ Global Software Engineer`);
      } else if (cmd === 'goals') {
        addTerminalHistory(`Current Goals:
• Publish Research Paper
• Master System Design
• Become Cloud Native
• Build AI Products
• Open Source Contributions
• Global Career`);
      } else if (cmd === 'services') {
        addTerminalHistory(`What I Build:
• Backend APIs & RESTful Services
• Cloud Applications & Containers
• AI/ML & Deep Learning Models
• Full Stack Web Applications
• Research Prototypes
• Automation Tools`);
      } else if (cmd === 'stats') {
        addTerminalHistory(`Developer Stats:

Projects     : 10+
Hackathons   : 5+
Research     : 1 (IIT ISM Dhanbad)
Internships  : 1
Leadership   : 1 (GeeksforGeeks)
Coffee       : ∞
Learning     : [██████████] 100%`);
      } else if (cmd === 'quote') {
        addTerminalHistory(`Curious enough to learn.
Determined enough to build.`);
      } else if (cmd === 'contact') {
        useStore.getState().openFile('contact.ts');
        addTerminalHistory(`Email    : hemanthdev753@gmail.com
LinkedIn : https://www.linkedin.com/in/hemanth-kumar-musirana-918857226/
GitHub   : https://github.com/HemanthKumarMusirana
LeetCode : https://leetcode.com/u/Hemanth_753/
Instagram: https://www.instagram.com/hemanth_k_musirana/`);
      } else if (cmd === 'github') {
        window.open('https://github.com/HemanthKumarMusirana', '_blank');
        addTerminalHistory('Opened GitHub in a new tab.');
      } else if (cmd === 'linkedin') {
        window.open('https://www.linkedin.com/in/hemanth-kumar-musirana-918857226/', '_blank');
        addTerminalHistory('Opened LinkedIn in a new tab.');
      } else if (cmd === 'leetcode') {
        window.open('https://leetcode.com/u/Hemanth_753/', '_blank');
        addTerminalHistory('Opened LeetCode in a new tab.');
      } else if (cmd === 'gfg') {
        window.open('https://www.geeksforgeeks.org/', '_blank');
        addTerminalHistory('Opened GeeksforGeeks in a new tab.');
      } else if (cmd === 'instagram') {
        window.open('https://www.instagram.com/hemanth_k_musirana/', '_blank');
        addTerminalHistory('Opened Instagram in a new tab.');
      } else if (cmd === 'resume') {
        window.open('/Hemanth_Kumar_Resume.pdf', '_blank');
        addTerminalHistory('Downloading / Opening Resume PDF...');
      } else if (cmd === 'neofetch') {
        addTerminalHistory(`                   .--.
                .-(    ).
               (___.__)__)

────────────────────────────────────────
User        : Musirana Hemanth Kumar
Role        : Backend • Cloud • AI/ML
Education   : B.Tech CSE (AI & DS)
Institute   : Siddartha Institute Of
              Science And Technology
Research    : IIT (ISM) Dhanbad
Editor      : VS Code Portfolio
Shell       : zsh / bash
OS          : Portfolio Linux
Languages   : Python, Java, C++, SQL
Backend     : Spring Boot, Flask, REST APIs
Cloud       : AWS, Azure, GCP, Docker
AI / ML     : PyTorch, Scikit-learn, OpenCV, Grad-CAM
Database    : PostgreSQL, MySQL, Redis
Git Branch  : main
Status      : Building. Learning. Open to Opportunities.`);
      } else if (cmd === 'tree' || cmd === 'ls') {
        addTerminalHistory(`.
├── home.tsx
├── about.ts
├── skills.json
├── experience.ts
├── education.ts
├── research.ts
├── projects.ts
├── achievements.ts
├── certifications.ts
├── contact.ts
└── resume.pdf`);
      } else if (cmd === 'pwd') {
        addTerminalHistory('/home/hemanthkumar/portfolio');
      } else if (cmd === 'history') {
        addTerminalHistory(terminalHistory.join('\n'));
      } else if (cmd === 'date') {
        addTerminalHistory(new Date().toString());
      } else if (cmd === 'coffee') {
        addTerminalHistory(`☕

Coffee Level
[███████████████████] 100%

Ready to Build.`);
      } else if (cmd === 'matrix') {
        addTerminalHistory(`Initializing Matrix...
Loading...
[██████████████████████] 100%

Welcome back, Hemanth.`);
      } else if (cmd === 'sudo hire-me' || cmd === 'hire-me') {
        useStore.getState().openFile('contact.ts');
        addTerminalHistory(`[sudo] password for recruiter:
********
Permission Granted.

Opening contact page...
Let's build something amazing together.`);
      } else if (cmd === 'fortune') {
        addTerminalHistory(`Every expert was once a beginner.

Keep building.
Keep learning.`);
      } else if (cmd === 'exit') {
        toggleTerminal();
      } else if (firstWord === 'cat' || firstWord === 'open') {
        if (!arg1) {
          addTerminalHistory(`${firstWord}: missing file operand`);
        } else {
          const target = arg1.toLowerCase();
          if (target.includes('home')) useStore.getState().openFile('home.tsx');
          else if (target.includes('about')) useStore.getState().openFile('about.ts');
          else if (target.includes('skill')) useStore.getState().openFile('skills.json');
          else if (target.includes('project')) useStore.getState().openFile('projects.ts');
          else if (target.includes('exp')) useStore.getState().openFile('experience.ts');
          else if (target.includes('edu')) useStore.getState().openFile('education.ts');
          else if (target.includes('res')) useStore.getState().openFile('research.ts');
          else if (target.includes('achiev') || target.includes('hack')) useStore.getState().openFile('achievements.ts');
          else if (target.includes('cert')) useStore.getState().openFile('certifications.ts');
          else if (target.includes('contact')) useStore.getState().openFile('contact.ts');
          else addTerminalHistory(`${firstWord}: ${arg1}: No such file or directory`);
        }
      } else if (cmd !== '') {
        addTerminalHistory(`bash: ${cmd}: command not found. Type 'help' for available commands.`);
      }
      
      setInput('');
    }
  };

  return (
    <AnimatePresence>
      {isTerminalOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 280, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.15, ease: "easeOut" }}
          className="border-t border-[#3c3c3c] bg-[#1e1e1e] flex flex-col shrink-0 overflow-hidden w-full z-10"
        >
          <div className="flex items-center justify-between px-4 py-2 text-[11px] text-[#cccccc] border-b border-[#2b2b2b] bg-[#1e1e1e] overflow-x-auto hide-scrollbar">
            <div className="flex space-x-6 uppercase tracking-widest font-semibold text-[#858585] whitespace-nowrap">
              <span className="cursor-pointer hover:text-[#cccccc]">Problems <span className="opacity-60 font-normal">0</span></span>
              <span className="cursor-pointer hover:text-[#cccccc]">Output</span>
              <span className="cursor-pointer hover:text-[#cccccc]">Debug Console</span>
              <span className="cursor-pointer text-[#cccccc] border-b-[1px] cursor-default border-[#007acc] pb-1">Terminal</span>
              <span className="cursor-pointer hover:text-[#cccccc]">Ports</span>
            </div>
            <div className="flex items-center space-x-3 text-base text-[#858585] ml-4 shrink-0">
              <VscTrash className="cursor-pointer hover:text-[#cccccc] transition-colors" onClick={() => useStore.setState({ terminalHistory: [] })} />
              <VscChevronUp className="cursor-pointer hover:text-[#cccccc] transition-colors" />
              <VscChevronDown className="cursor-pointer hover:text-[#cccccc] transition-colors" />
              <VscClose className="cursor-pointer hover:text-[#cccccc] transition-colors" onClick={toggleTerminal} />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 text-[13px] font-mono text-[#cccccc] leading-relaxed custom-scrollbar">
            {terminalHistory.map((line, i) => (
              <div key={i} className="whitespace-pre-wrap leading-[1.4] mb-0.5">{line}</div>
            ))}
            <div className="flex flex-wrap items-center mt-0.5">
              <span className="text-[#4af626] mr-2">hemanthkumar@kernel:~$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleCommand}
                className="flex-1 bg-transparent outline-none border-none text-[#cccccc] min-w-[200px]"
                autoFocus
                spellCheck={false}
              />
            </div>
            <div ref={bottomRef} className="h-4" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
