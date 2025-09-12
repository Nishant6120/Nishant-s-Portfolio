// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png'; 
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import scmLogo from './assets/company_logo/scm_logo.jpeg';
import gtrackLogo from './assets/company_logo/gtrack_logo.jpeg';
import imdslLogo from './assets/company_logo/imdsl_logo.jpeg';

// Education Section Logo's
import bvcoeLogo from './assets/education_logo/bvcoe.jpeg';
import crritLogo from './assets/education_logo/crrit_logo.jpeg';
import cbseLogo from './assets/education_logo/cbse_logo.png';

// Project Section Logo's
import scmpaymentLogo from './assets/work_logo/scm_payment.png';
import homebudgetLogo from './assets/work_logo/home_budget.png';
import PizzashopLogo from './assets/work_logo/Pizza_shop.png';
import weatherappLogo from './assets/work_logo/weather_app.png';
import imagesearchLogo from './assets/work_logo/image_search.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'Python', logo: pythonLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: scmLogo,
      role: "Web Developer Intern",
      company: "SCM Connect Pvt Ltd",
      date: "June 2025 - Aug 2025",
      desc: "Developed and deployed a full-stack Employee Task Management System, handling both admin and employee dashboards. Designed responsive web interfaces and implemented Razorpay payment integration for secure transactions. Built dynamic purchase flow components and optimized user experience across devices. Handled code deployment to live servers and performed routine production crash maintenace",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Firebase",
        "Mysql",
        "Python",
      ],
    },
    {
      id: 1,
      img: gtrackLogo,
      role: "Sr. Service Engineer & TL",
      company: "ITG Telematics Pvt. Ltd. (G-Track)",
      date: "January 2022 to July 2023",
      desc: "I led a team of seven members and successfully managed multiple projects simultaneously, ensuring timely delivery even under tight deadlines across various regions. My responsibilities included conducting requirement analysis for new projects, configuring and developing tailored solutions, coordinating with OEMs, and overseeing the complete lifecycle of initiatives—from testing and deployment to ongoing maintenance.",
      skills: [
        "PCB Design",
        "Testing and Troubleshooting",
        "Microwave Engineering",
        "Soldering",
        "Communication Skills",
        "Customer dealing",
        "Embedded",
      ],
    },
    {
      id: 2,
      img: imdslLogo,
      role: "Service Engineer",
      company: "Intense Medical & Dental System Pvt. Ltd. (IMDSL Laser)",
      date: "November 2020 to June 2021",
      desc: "As a Service Engineer in the early phases of a start-up, I handled multiple responsibilities and contributed to building reliable support operations. I provided end-to-end solutions for user issues, which included effective communication, problem analysis, root cause troubleshooting, and performing component-level repairs and configurations.",
      skills: [
        "Software calibration",
        "Customer Tech support",
        "Circuit trcaking",
        "Proble solving",
        "Figma",
        "Material UI",
        "HTML",
        "CSS",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: bvcoeLogo,
      school: "BVCOE, GGSIPU - Delhi",
      date: "Aug 2023 - May 2026",
      grade: "7.02 CGPA",
      desc: "Pursuing a B-Tech in Electronics and Communication Engineering at Bharati Vidyapeeth College of Engineering, IPU, I am gaining a strong foundation in core engineering principles. My coursework covers a wide range of subjects, including Core Electronics, Data Structures, Algorithms, Operating Systems, DBMS, and Computer Networks. This curriculum, combined with practical experience, is helping me to develop my technical skills and problem-solving abilities. I am actively working on projects that apply theoretical knowledge to real-world scenarios. My time at BVCOE is proving instrumental in shaping my technical expertise and professional growth.",
      degree: "B-Tech - Electronics and Communication Engg.(ECE)",
    },
    {
      id: 1,
      img: crritLogo,
      school: "Chhotu Ram Rural Institute of Technology, BTE - Delhi",
      date: "Aug 2018 - May 2021",
      grade: "79.98%",
      desc: "I completed my Diploma in Digital Electronics (Domain of ECE) from CRRIT College, Delhi. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of elctronics, computing and technology. From exploring core electronics Structures and Computer Networking to diving into Embedded Systems and Robotics, I gained practical insights into the world of electronics and software development. My time at CRRIT College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Diploma - Digital Electronics (ECE)",
    },
    {
      id: 2,
      img: cbseLogo,
      school: "Government Boys Senior Secondary School, Mukherjee Nagar, Delhi",
      date: "Apr 2017 - March 2018",
      grade: "60%",
      desc: "I completed my class 12 education from rnment Boys Senior Secondary School, Mukherjee Nagar, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: cbseLogo,
      school: "Government Boys Senior Secondary School, Burari, Delhi",
      date: "Apr 2015 - March 2016",
      grade: "5.8 CGPA",
      desc: "I completed my class 10 education from Government Boys Senior Secondary School, Burari, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "SCM - Payment Integration",
      description:
        "Developed and deployed a production-ready payment gateway page for SCM Connect Pvt. Ltd. using Razorpay. The project focused on integrating secure payment APIs, handling real-time transaction responses, and ensuring a seamless user experience. It is actively used for business transactions on the official company website.",
      image: scmpaymentLogo,
      tags: ["HTML", "CSS", "JavaScript", "Razorpay API", "Cpanel"],
      github: "",
      webapp: "https://scmconnect.in/payment.html",
    },
    {
      id: 1,
      title: "HomeBudget Expence Calculator",
      description:
        "The HomeBudget Web App is a CRUD (Create, Read, Update, Delete) application built with React and React Router DOM that helps users manage and track their personal finances",
      image: homebudgetLogo,
      tags: ["React JS", "API", "UI/UX", "PostgreSQL", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Nishant6120/HomeBudget--ExpenceCalculator",
      webapp: "https://home-budget-expence-calculator.vercel.app/",
    },
    {
      id: 2,
      title: "Pizza Shop Website",
      description:
        "This Pizza Shop website design aims to provide a seamless experience for users to browse the menu, place orders, manage their accounts, and find answers to frequently asked questions. The design is responsive and includes interactive elements.",
      image: PizzashopLogo,
      tags: ["Front-end", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Nishant6120/Pizza-Shop-Website",
      webapp: "https://pizza-shop-website-wheat.vercel.app/",
    },
    {
      id: 3,
      title: "Image Search App",
      description:
        "A React.js-based image search application that allows users to search and download high-quality images from the web. Built using external APIs to ensure a vast library of results for various queries.",
      image: imagesearchLogo,
      tags: ["React JS", "API", "Search Feature", "CSS", "Javascript"],
      github: "https://github.com/Nishant6120/Image-Search-App",
      webapp: "image-search-app1.vercel.app/",
    },
    {
      id: 4,
      title: "Weather-Application",
      description:
        "This repository contains a basic web application that allows users to check the current weather for a specific city. It fetches weather data from the OpenWeatherMap API and displays essential information such as temperature, city name, humidity, and wind speed, accompanied by a relevant weather icon.",
      image: weatherappLogo,
      tags: ["JavaScript", "OpenWeatherMap API", "HTML", "CSS"],
      github: "https://github.com/Nishant6120/Weather-Application",
      webapp: "https://weather-application-ebon-six.vercel.app/",
    },
  ];  