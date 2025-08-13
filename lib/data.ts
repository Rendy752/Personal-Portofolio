import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import animeVibeImg from "@/public/animeVibeImg.jpg";
import bookAppImg from "@/public/bookAppImg.png";
import cmsPerpustakaanImg from "@/public/cmsPerpustakaanImg.png";
import discordCloneImg from "@/public/discordCloneImg.jpeg";
import mariBermusikWebImg from "@/public/mariBermusikWebImg.png";
import mariBermusikMobileImg from "@/public/mariBermusikMobileImg.png";
import mealAppImg from "@/public/mealAppImg.png";
import nicaImg from "@/public/nicaImg.jpeg";
import nisaImg from "@/public/nisaImg.jpeg";
import shopAppImg from "@/public/shopAppImg.png";
import uvceMappsAdminImg from "@/public/uvceMappsAdminImg.png";
import portalLokerImg from "@/public/portalLokerImg.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "FullStack Developer Intern",
    location: "PT Nusantara Infrastructure Tbk, Jakarta",
    description:
      "During my third year of college, I interned as a FullStack Developer at PT Nusantara Infrastructure Tbk. I developed internal applications, delivering an average of 2 new feature releases per month. I resolved critical user issues, reducing major bug reports by 15%. Additionally, I built interactive charts and maps to visualize over 700,000 data points, enhancing data accessibility and exploration.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - Jun 2024",
  },
  {
    title: "Vice Chairman",
    location: "Unit Kegiatan Mahasiswa Programming, Palembang",
    description:
      "As Vice Chairman of the Unit Kegiatan Mahasiswa Programming, I helped organize the 2024 Coaching Program for over 40 participants. I led and contributed to group projects independently and competed in the Programming Division at Gemastik 2024.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - May 2025",
  },
  {
    title: "Lecturer Assistant",
    location: "Universitas Multi Data Palembang",
    description:
      "During my second year of college, I worked as a Lecturer Assistant at Universitas Multi Data Palembang in the Algorithms and Data Structures class. I supported over 25 students in their learning, led a workshop on Microsoft Word templates for academic writing attended by over 40 participants, and graded quizzes for more than 25 students.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "Feb 2023 - Jun 2023",
  },
] as const;

export const projectsData = [
  {
    title: "AnimeVibe",
    description:
      "Anime themed Android App that showing anime information from recommendation, filter, detail, and episode streaming using room to store local data to minimize hit API.",
    tags: [
      "Kotlin",
      "Android",
      "Retrofit",
      "Room",
      "Coroutines",
      "MVVM",
      "Compose",
      "Exoplayer",
      "Glide",
      "Hilt",
      "Chucker",
    ],
    imageUrl: animeVibeImg,
    link: "https://play.google.com/store/apps/details?id=com.luminoverse.animevibe",
  },
  {
    title: "NISA (Nusantara Infrastructure Self Assessment Application)",
    description:
      "An internal web application for employee self-assessment to manage highway pavement and asset inspection reports and other in the company",
    tags: [
      "WinterCMS",
      "NextJS",
      "Docker",
      "MySQL",
      "Flutter",
      "Google Cloud Platform",
    ],
    imageUrl: nisaImg,
    link: "https://nisa.nusantarainfrastructure.com",
  },
  {
    title: "Discord Clone",
    description:
      "A Discord Clone that includes chat features, text, voice, video channels, user authentication using Clerk, and web socket for real-time chat",
    tags: [
      "nextjs14",
      "tailwind",
      "clerk",
      "socket.io",
      "websocket",
      "typescript",
      "axios",
      "prisma",
      "emoji-picker",
      "radix-ui",
      "livekit",
      "uploadthing",
    ],
    imageUrl: discordCloneImg,
    link: "https://rendyp-discord.vercel.app",
  },
  {
    title: "NICA (Nusantara Infrastructure Commercial Application)",
    description:
      "An internal web application for managing information of outer and inner highway to make decision making easier for the company",
    tags: ["WinterCMS", "NextJS", "MySQL", "Docker", "Google Cloud Platform"],
    imageUrl: nicaImg,
    link: "https://nica.nusantarainfrastructure.com",
  },
  {
    title: "UVCE MApps Admin",
    description:
      "An alumni information support sytem project for admin to manage user and certificate data",
    tags: [
      "Typescript",
      "ViteJS",
      "ReactJS",
      "TailwindCSS",
      "Formik",
      "Rechart",
    ],
    imageUrl: uvceMappsAdminImg,
    link: "https://uvce-admin.fanesp.online",
  },
  {
    title: "PortalLoker",
    description:
      "A job portal website that provides job vacancies and company information",
    tags: [
      "NextJS",
      "Typescript",
      "TailwindCSS",
      "ReactJS",
      "Yup",
      "framer-motion",
      "hook-form",
      "zustand",
    ],
    imageUrl: portalLokerImg,
    link: "https://portal-loker.fanesp.online",
  },
  {
    title: "CMS Perpustakaan",
    description:
      "BA Simple CMS that includes CRUD operations in managing content related to library books",
    tags: ["Laravel", "CRUD", "MySQL-Database", "Bootstrap5"],
    imageUrl: cmsPerpustakaanImg,
    link: "https://perpustakaanrendy.000webhostapp.com",
  },
  {
    title: "Book App",
    description: "Book themed CRUD website that utilizes open REST API",
    tags: [
      "Crud-API",
      "Axios-React",
      "Next-Typescript",
      "Next-Tailwind",
      "Nextjs14",
    ],
    imageUrl: bookAppImg,
    link: "https://github.com/Rendy752/Book-App",
  },
  {
    title: "Meal App",
    description: "Meal themed website that utilizes public API",
    tags: [
      "EsLint",
      "Vanilla-Javascript",
      "NPM-Package",
      "AJAX",
      "MaterializeCSS",
    ],
    imageUrl: mealAppImg,
    link: "https://rendyp-meal.vercel.app",
  },
  {
    title: "Mari Bermusik Web",
    description:
      "A website for Web Development Competition at SRIFOTON by Sriwijaya University",
    tags: [
      "ViteJS",
      "Typescript",
      "ExpressJS",
      "TailwindCSS",
      "SQLiteDatabase",
    ],
    imageUrl: mariBermusikWebImg,
    link: "https://github.com/fanesz/MariBermusik-Srifoton2023",
  },

  {
    title: "Shop App",
    description:
      "Shop themed website application that utilizes the REST API backend for authentication, goods transactions and receiving promos",
    tags: [
      "Laravel",
      "REST-API",
      "Signals",
      "Passport",
      "Nextjs14",
      "Typescript",
      "Tailwind",
    ],
    imageUrl: shopAppImg,
    link: "https://rendyp-shop.vercel.app",
  },
  {
    title: "Mari Bermusik Mobile",
    description:
      "Musical instrument learning themed Mobile App that provides CRUD features in learning materials and user authentication using firebase",
    tags: [
      "Dart",
      "Flutter",
      "Copilot",
      "Flutter-Firebase-Auth",
      "Flutter-Firebase-Firestore",
    ],
    imageUrl: mariBermusikMobileImg,
    link: "https://maribermusik-752.web.app",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "PHP",
  "TypeScript",
  "Laravel",
  "Winter CMS",
  "Dart",
  "Flutter",
  "Kotlin",
  "Jetpack Compose",
  "OOP",
  "API",
  "MySQL",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Jira",
  "Bitbucket",
  "Tailwind",
  "Firebase",
] as const;
