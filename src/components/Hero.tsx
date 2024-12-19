"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import Image from "next/image";
import Me from "../../assets/Me.jpeg";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className=" text-sm px-4 md:text-2xl lg:text-2xl font-bold text-neutral-600 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto flex flex-col justify-center items-center ">
        <div className="p-2">
          <Image
            src={Me}
            width={150}
            height={150}
            className=" rounded-full"
            alt=""
          />
        </div>
        <div>
          If things happen according to <br />
          how you wish
          <Highlight className="text-slate-700 dark:text-white m-1 md:m-2 lg:m-4 duration-75 delay-0 shadow-sm ">
            is good <br />
          </Highlight>
          <div className="p-4">
            If they don&apos;t
            <Highlight className="text-black dark:text-white from-green-200 to-green-400 text-xl md:text-3xl lg:text-5xl lg:m-2 m-2 delay-75 duration-700 shadow-lg px-1 md:px-2">
              {" "}
              it&apos;s even better
            </Highlight>
          </div>
        </div>
      </motion.div>
    </HeroHighlight>
  );
}
