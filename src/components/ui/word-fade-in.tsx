"use client";
import React, { useRef } from "react";
import { motion, Variants, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordFadeInProps {
  words: string;
  className?: string;
  delay?: number;
  variants?: Variants;
}

export default function WordFadeIn({
  words,
  delay = 0.15,
  variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * delay },
    }),
  },
  className,
}: WordFadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 1 });

  const _words = words.split(" ");

  return (
    <motion.h1
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(
        "font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]",
        className
      )}>
      {_words.map((word, i) => (
        <motion.span
          key={word + i}
          variants={variants}
          custom={i}
          className={cn(
            word === "Computer" || word === "Science"
              ? "text-red-500"
              : word === "Tailwind" || word === "development."
              ? "text-blue-700"
              : word === "Next.js" || word === "Express"
              ? "text-slate-400"
              : word === "React.js"
              ? "text-slate-600"
              : "text-black dark:text-white"
          )}>
          {word}{" "}
        </motion.span>
      ))}
    </motion.h1>
  );
}
