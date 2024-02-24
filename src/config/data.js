import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import fileupload from "@/public/file.png";
import MoviePlot from "@/public/movie.png";
import countdown from "@/public/countdown.png";
import blog from "@/public/blog.png";
import starterpedia from "@/public/starterpedia.png";
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
    title: "Starterpedia",
    description:
      "Starterpedia is a platform where users can share useful resource links with the community.",
    tags: [
      "React",
      "Framer motion",
      "Next js",
      "shadcn ui",
      "PostgreSQL",
      "Redux",
    ],
    imageUrl: starterpedia,
    previewLink: "https://vercel.com/idrissimahdi2020-gmailcom",
    sourceLink: "",
  },
  {
    title: "Daily Life Blog",
    description: "I built this blog using Next.js and sanity.io ",
    tags: ["React", "Framer motion", "Next.js", "Sanity.io"],
    imageUrl: blog,
    previewLink: "https://blog-website-m.vercel.app/",
    sourceLink: "https://github.com/mahdi22dev/Blog",
  },
  // {
  //   title: "Plot Words Game",
  //   description:
  //     "I enjoy watching movies, so I decided to include this sample project It's a game where the player guesses the movie based on plot keywords.",
  //   tags: ["React", "Framer motion"],
  //   imageUrl: MoviePlot,
  //   previewLink: "https://movies-game.vercel.app",
  //   sourceLink: "https://github.com/mahdi22dev/movies-game",
  // },
  {
    title: "Uploadupia",
    description:
      "Anonymous file uploader where users can upload files and share them, i used a fake s3 server localy to manage files",
    tags: ["React", "Next.js", "Framer motion", "AWS S3"],
    imageUrl: fileupload,
    previewLink: "https://file-uploader-project.vercel.app",
    sourceLink: "https://github.com/mahdi22dev/file_uploader_project",
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
