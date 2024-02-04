import React from 'react';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { CgWorkAlt } from 'react-icons/cg';
import bookAppImg from '@/public/bookAppImg.png';
import cmsPerpustakaanImg from '@/public/cmsPerpustakaanImg.png';
import mariBermusikWebImg from '@/public/mariBermusikWebImg.png';
import mariBermusikMobileImg from '@/public/mariBermusikMobileImg.png';
import mealAppImg from '@/public/mealAppImg.png';
import shopAppImg from '@/public/shopAppImg.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Full-Stack Developer',
    location: 'PT Nusantara Infrastructure Tbk',
    description:
      "During my third year of college, I toom an internship as a Full-Stack Developer at PT Nusantara Infrastructure Tbk. I'm responsible for developing application for the company's internal use.",
    icon: React.createElement(CgWorkAlt),
    date: 'Feb 2024 - June 2024',
  },
  {
    title: 'Lecturer Assistant',
    location: 'Palembang, Sumatera Selatan',
    description:
      'During my second year of college, I got a side job as a Lecturer Assistant at my own college in an Algorithms and Data Structures Class.',
    icon: React.createElement(FaChalkboardTeacher),
    date: 'Feb 2023 - June 2023',
  },
] as const;

export const projectsData = [
  {
    title: 'CMS Perpustakaan',
    description:
      'BA Simple CMS that includes CRUD operations in managing content related to library books',
    tags: ['Laravel', 'CRUD', 'MySQL-Database', 'Bootstrap5'],
    imageUrl: cmsPerpustakaanImg,
  },
  {
    title: 'Book App',
    description: 'Book themed CRUD website that utilizes open REST API',
    tags: [
      'Crud-API',
      'Axios-React',
      'Next-Typescript',
      'Next-Tailwind',
      'Nextjs14',
    ],
    imageUrl: bookAppImg,
  },
  {
    title: 'Meal App',
    description: 'Meal themed website that utilizes public API',
    tags: [
      'EsLint',
      'Vanilla-Javascript',
      'NPM-Package',
      'AJAX',
      'MaterializeCSS',
    ],
    imageUrl: mealAppImg,
  },
  {
    title: 'Mari Bermusik Web',
    description:
      'A website for Web Development Competition at SRIFOTON by Sriwijaya University',
    tags: [
      'ViteJS',
      'Typescript',
      'ExpressJS',
      'TailwindCSS',
      'SQLiteDatabase',
    ],
    imageUrl: mariBermusikWebImg,
  },

  {
    title: 'Shop App',
    description:
      'Shop themed website application that utilizes the REST API backend for authentication, goods transactions and receiving promos',
    tags: [
      'Laravel',
      'REST-API',
      'Signals',
      'Passport',
      'Nextjs14-Typescript',
      'Nextjs-Tailwind',
    ],
    imageUrl: shopAppImg,
  },
  {
    title: 'Mari Bermusik Mobile',
    description:
      'Musical instrument learning themed Mobile App that provides CRUD features in learning materials and user authentication using firebase',
    tags: [
      'Dart',
      'Flutter',
      'Copilot',
      'Flutter-Firebase-Auth',
      'Flutter-Firebase-Firestore',
    ],
    imageUrl: mariBermusikMobileImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'PHP',
  'TypeScript',
  'Laravel',
  'OOP',
  'API',
  'MySQL',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Python',
  'Figma',
  'Flutter',
  'Firebase',
] as const;
