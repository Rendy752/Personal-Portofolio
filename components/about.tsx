'use client';
import React from 'react';
import SectionHeading from './section_heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        An <span className="font-medium">Information System</span> student who
        is <span className="italic">very enthusiastic</span> and always wants to{' '}
        <span className="italic">hone my skills</span> and{' '}
        <span className="italic">learn new things</span> by participating in{' '}
        <span className="underline">
          organizational activities, bootcamps and competitions
        </span>
        . I am currently pursuing my bachelor's degree in information technology
        at UMDP, where I have gained a{' '}
        <span className="font-medium">
          solid foundation in programming, data structures, algorithms,
          databases, and web development
        </span>
        .
      </p>
      <p>
        I am a{' '}
        <span className="italic">
          disciplined person, attentive to details, able to work individually or
          collaboratively in groups
        </span>
        . I am eager to{' '}
        <span className="underline">learn new technologies and tools</span>, and
        to{' '}
        <span className="underline">
          share my knowledge and skills with others
        </span>
        . I am looking for opportunities to implement my skill as a{' '}
        <span className="font-medium">Fullstack Web Developer</span> in a{' '}
        <span className="italic">dynamic</span> and {''}
        <span className="italic">collaborative</span> environment that values{' '}
        {''}
        <span className="italic">innovation</span> and{' '}
        <span className="italic">quality</span>.
      </p>
    </motion.section>
  );
}
