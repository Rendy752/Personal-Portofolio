'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer
      className="mb-10 px-4 text-center text-gray-500"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <small className="mb-2 block text-xs">
        &copy; 2024 Rendy Pratama. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, and Vercel hosting.
      </p>
    </motion.footer>
  );
}
