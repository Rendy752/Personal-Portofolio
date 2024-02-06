'use client';

import React from 'react';
import SectionHeading from './section_heading';
import { projectsData } from '@/lib/data';
import Project from './project';
import { useSectionInView } from '@/lib/hooks';
import { motion } from 'framer-motion';

export default function Projects() {
  const { ref } = useSectionInView('Projects', 0.2);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <SectionHeading>My Projects</SectionHeading>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </motion.div>
    </section>
  );
}
