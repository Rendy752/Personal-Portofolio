"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-grow flex flex-col sm:flex-row sm:group-even:flex-row-reverse"
        >
          <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 flex flex-col h-full flex-1">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex-1 hidden sm:block">
            <Image
              src={imageUrl}
              alt="Project I worked on"
              quality={95}
              fill
              className="object-contain rounded-t-lg shadow-2xl transition 
                group-hover:scale-[1.04] 
                group-hover:-translate-x-3 
                group-hover:translate-y-3 
                group-hover:-rotate-2 
                group-even:group-hover:translate-x-3 
                group-even:group-hover:rotate-2 
                group-even:left-0 
                group-even:object-left 
                object-right"
            />
          </div>
        </Link>
      </section>
    </motion.div>
  );
}
