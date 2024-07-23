import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import fileupload from "@/public/file.png";
// import MoviePlot from "@/public/movie.png";
import countdown from "@/public/countdown.png";
import blog from "@/public/blog.png";
import starterpedia from "@/public/starterpedia.PNG";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
];

export const experiencesData = [
  {
    title: "Web Dev self-study",
    location: "",
    description:
      "I've watched a lot of online courses on platforms like Udemy and YouTube. However, I've come to realize that building real projects is even more beneficial than I initially thought. I'm enthusiastic about continuing to build more projects and expand my practical experience..",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
];

export const projectsData = [
  {
    title: "Phonearmor",
    description: "Phone cases ecommerce store built with Next Js 14",
    tags: ["React", "Next.js", "Shadcn ui", "contentful"],
    imageUrl: fileupload,
    previewLink: "https://online-store-beige-nine.vercel.app/home",
    sourceLink: "https://github.com/mahdi22dev/online-store",
  },
  {
    title: "Starterpedia",
    description:
      "Starterpedia is a platform where users can share useful resource links with the community.",
    tags: ["Framer motion", "shadcn ui", "PostgreSQL", "Redux"],
    imageUrl: starterpedia,
    previewLink: "https://starterpedia.vercel.app/home",
    sourceLink: "https://github.com/mahdi22dev/",
  },
  {
    title: "Daily Life Blog",
    description: "I built this blog using Next.js and sanity.io ",
    tags: ["React", "Framer motion", "Next.js", "Sanity.io"],
    imageUrl: blog,
    previewLink: "https://blog-website-m.vercel.app/",
    sourceLink: "https://github.com/mahdi22dev/Blog",
  },
  {
    title: "Countdown Hub",
    description:
      "Users Can create custom countdown, and also count days to thier favorite upcoming show.",
    tags: ["React", "Next.js", "Prisma", "MongoDb", "daisyui"],
    imageUrl: countdown,
    previewLink: "https://countdown-phi-seven.vercel.app/",
    sourceLink: "https://github.com/mahdi22dev/countdown/",
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Framer Motion",
  "Firebase",
  "MERN",
  "EXPRESS",
];
