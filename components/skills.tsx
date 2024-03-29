'use client';

import React from 'react';
import SectionHeading from './section_heading';
import { skillsData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView('Skills', 0.2);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <SectionHeading>My Skills</SectionHeading>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-gray-200 shadow-md borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 cursor-pointer"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              whileHover={{ scale: 1.05 }}
              viewport={{
                once: true,
              }}
              // index passed to fadeInAnimationVariants.animate
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
