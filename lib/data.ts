import React from "react";
import { FaChalkboardTeacher } from "react-icons/fa";
import { CgWorkAlt } from "react-icons/cg";
import animeAppImg from "@/public/animeAppImg.jpg";
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
    title: "Full-Stack Developer",
    location: "PT Nusantara Infrastructure Tbk",
    description:
      "During my third year of college, I toom an internship as a Full-Stack Developer at PT Nusantara Infrastructure Tbk. I'm responsible for developing application for the company's internal use.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2024 - June 2024",
  },
  {
    title: "Lecturer Assistant",
    location: "Palembang, Sumatera Selatan",
    description:
      "During my second year of college, I got a side job as a Lecturer Assistant at my own college in an Algorithms and Data Structures Class.",
    icon: React.createElement(FaChalkboardTeacher),
    date: "Feb 2023 - June 2023",
  },
] as const;

export const projectsData = [
  {
    title: "AnimeApp",
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
    imageUrl: animeAppImg,
    link: "https://github.com/Rendy752/Anime-App",
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
    link: "https://nisa.nusantarainfrastructure.com/",
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
    link: "https://github.com/Rendy752/Discord-Clone",
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
    link: "https://github.com/PAWII-Portal-Loker/frontend",
  },
  {
    title: "CMS Perpustakaan",
    description:
      "BA Simple CMS that includes CRUD operations in managing content related to library books",
    tags: ["Laravel", "CRUD", "MySQL-Database", "Bootstrap5"],
    imageUrl: cmsPerpustakaanImg,
    link: "https://github.com/Rendy752/CMS-Perpustakaan",
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
    link: "https://github.com/Rendy752/Meal-App",
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
    link: "https://github.com/Rendy752/Shop-App",
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
    link: "https://github.com/Rendy752/Mari-Bermusik",
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
  "Flutter",
  "Kotlin",
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
