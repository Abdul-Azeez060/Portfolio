"use client";

import { motion, useInView } from "framer-motion";

import { cn } from "@/lib/utils";
import { useRef } from "react";

interface BlurInProps {
  word: string;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  duration?: number;
}
const BlurIn = ({ word, className, variant, duration = 1 }: BlurInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.9 });
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-5xl lg:text-7xl md:leading-[5rem]",
        className
      )}>
      {word}
    </motion.h1>
  );
};

export default BlurIn;
