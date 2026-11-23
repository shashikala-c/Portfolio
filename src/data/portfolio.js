import {
  Braces,
  BarChart3,
  Cloud,
  Code2,
  Database,
  FileSpreadsheet,
  GitBranch,
  Layers3,
  Palette,
  Server,
} from 'lucide-react'

export const portfolio = {
  name: 'Shashikala C',
  shortName: 'Shashikala',
  initials: 'SC',
  title: 'AI & Data Science graduate',
  email: 'shashikalac558@gmail.com',
  location: 'Bengaluru, Karnataka, India',
  linkedin: 'https://www.linkedin.com/in/shashikala-c-22421425a',
  github: 'https://github.com/shashikala-c',
  titleTag: 'Shashikala C — AI & Data Science',
}

export const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certificates', href: '#certificates' },
  { label: 'Contact', href: '#contact' },
]

export const skillGroups = [
  {
    category: 'Programming & frontend',
    icon: Code2,
    skills: [
      { name: 'JavaScript', icon: Braces },
      { name: 'React.js', icon: Layers3 },
      { name: 'HTML5', icon: Code2 },
      { name: 'CSS3', icon: Palette },
      { name: 'Python', icon: Braces },
    ],
  },
  {
    category: 'Backend development',
    icon: Server,
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Express.js', icon: Layers3 },
      { name: 'REST APIs', icon: Cloud },
    ],
  },
  {
    category: 'Data & analytics',
    icon: Database,
    skills: [
      { name: 'MongoDB', icon: Database },
      { name: 'Firebase', icon: Cloud },
      { name: 'Pandas & NumPy', icon: Braces },
      { name: 'Excel', icon: FileSpreadsheet },
      { name: 'Power BI', icon: BarChart3 },
      { name: 'SQL', icon: Database },
    ],
  },
  {
    category: 'Tools & design',
    icon: GitBranch,
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'GitHub', icon: Code2 },
      { name: 'UI/UX fundamentals', icon: Palette },
    ],
  },
]

export const experience = [
  {
    role: 'Full Stack Intern',
    organization: 'Swizosoft (OPC) Pvt. Ltd.',
    dates: 'Dec 2025 — Mar 2026',
    category: 'INTERNSHIP',
    highlights: [
      'Contributed to frontend and backend application features as part of end-to-end web development.',
      'Implemented application modules, integrated backend functionality, and helped resolve defects through debugging and testing.',
      'Collaborated with the development team to improve application functionality and reliability.',
    ],
  },
  {
    role: 'AI & Machine Learning Trainee · Apprenticeship',
    organization: 'Samsung Innovation Campus',
    dates: 'Sep 2025 — Jun 2026',
    category: 'APPRENTICESHIP',
    highlights: [
      'Applied Python and machine learning techniques to hands-on projects.',
      'Worked through data preprocessing, exploratory analysis, model development, and evaluation.',
      'Built practical knowledge of AI and machine learning through project-based training.',
    ],
  },
]

export const projects = [
  {
    id: 'elderly-healthcare',
    name: 'AI-Based Elderly Healthcare Monitoring & Assistance System',
    category: 'Healthcare insights',
    summary:
      'A healthcare platform designed to monitor patient vitals and provide care teams with timely health insights.',
    details:
      'Built around ESP32 and biomedical sensors, the system monitors and stores patient vitals. The MERN-based platform includes role-based access, health analytics, medication scheduling, and Random Forest-based anomaly detection for health-risk alerts.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'ESP32', 'Random Forest'],
    githubUrl: 'https://github.com/shashikala-c/Elderly_healthcare',
    mark: '01',
    visual: 'health',
  },
  {
    id: 'study-desk',
    name: 'AI-Powered Study Desk Assistant',
    category: 'Study productivity',
    summary:
      'A study-desk assistant exploring ways to support student productivity and wellbeing through connected sensors.',
    details:
      'Designed around a Raspberry Pi and a MERN stack. The platform uses MongoDB to manage sensor data and supports automated alerts for healthier, more productive study sessions.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Raspberry Pi'],
    githubUrl: 'https://github.com/shashikala-c/Study_desk_assistant',
    mark: '02',
    visual: 'study',
  },
  {
    id: 'twitter-sentiment-analysis',
    name: 'Twitter Sentiment Analysis',
    category: 'Natural language processing',
    summary:
      'A Streamlit app that classifies tweets as positive, negative, or neutral using machine learning.',
    details:
      'This Python application applies natural language processing and TF-IDF feature extraction with a Logistic Regression classifier to analyze tweet sentiment, presented through an interactive Streamlit interface.',
    stack: ['Python', 'NLP', 'TF-IDF', 'Logistic Regression', 'Streamlit'],
    githubUrl: 'https://github.com/shashikala-c/Twitter_Sentimental_Analysis',
    mark: '03',
    visual: 'sentiment',
  },
]
