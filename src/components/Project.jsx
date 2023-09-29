"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubSquare } from "react-icons/fa";
import { IoEye } from "react-icons/io5";

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  previewLink,
  sourceLink,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className='group mb-3 sm:mb-8 last:mb-0'
    >
      <section className='bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20'>
        <div className='pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]'>
          <h3 className='text-2xl font-semibold'>{title}</h3>
          <p className='mt-1 mb-2 leading-relaxed text-gray-700 dark:text-white/70 text-base '>
            {description}
          </p>
          <ul className='flex flex-wrap mt-4 gap-2 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className='flex gap-4 mt-4 sm:mt-auto'>
            <a
              href={previewLink}
              className='flex justify-center items-center gap-1 mt-4 group bg-gray-900 text-white px-7 py-1  rounded-full outline-none hover:bg-gray-950  transition'
              target='_blank'
            >
              <IoEye />
              <span>Preview</span>
            </a>

            <a
              href={sourceLink}
              className='flex justify-center items-center gap-1 mt-4 group bg-gray-900 text-white px-7 py-3  rounded-full outline-none hover:bg-gray-950 transition'
              target='_blank'
            >
              <FaGithubSquare />
              <span>Source</span>
            </a>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt='Project I worked on'
          quality={95}
          className='absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40'
        />
      </section>
    </motion.div>
  );
}
