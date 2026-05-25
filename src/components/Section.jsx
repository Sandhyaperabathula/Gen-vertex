import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

const Section = ({ children, className, id, initial = { opacity: 0, y: 20 }, whileInView = { opacity: 1, y: 0 }, transition = { duration: 0.6, ease: "easeOut" } }) => {
  return (
    <motion.section
      id={id}
      initial={initial}
      whileInView={whileInView}
      viewport={{ once: true, margin: "-100px" }}
      transition={transition}
      className={twMerge(clsx('py-24 md:py-32 relative overflow-hidden', className))}
    >
      {children}
    </motion.section>
  );
};

export default Section;
