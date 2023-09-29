"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.8);
  return (
    <motion.section
      className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id='about'
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3 font-normal'>
        My first time having a <span className='font-bold'> PC </span>was in
        2019 the same year I learned the basics of{" "}
        <span className='font-bold'> C# </span> I was building cool tools for my
        friends, but my passion died afterward, so I decided after 3 years to
        continue my passion for programming now with the{" "}
        <span className='font-medium'> javascript </span> world. My favorite
        part of <span className='font-medium'> programming </span>
        is the problem-solving aspect. I love the feeling of finally figuring
        out a solution to a problem. My core stack is{" "}
        <span className='font-bold'>React</span>,{" "}
        <span className='font-bold'>Next.js</span> , and{" "}
        <span className='font-bold'>MongoDB</span> . I am also familiar with{" "}
        <span className='font-normal'>ORMs</span> like{" "}
        <span className='font-bold'>Prisma</span> and{" "}
        <span className='font-bold'>Mongoose</span> . I am always looking to
        learn new technologies. When I'm not coding, I enjoy playing video games
        and watching movies. I also enjoy learning new things and{" "}
        <span className='font-medium underline underline-offset-4	'>
          my goal
        </span>{" "}
        is to achieve great success in Programming.
      </p>
    </motion.section>
  );
}
