import React from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

const Container = ({ children, className }) => {
  return (
    <div className={twMerge(clsx('max-w-7xl mx-auto px-6 md:px-12', className))}>
      {children}
    </div>
  );
};

export default Container;
