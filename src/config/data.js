import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rmtdevImg from "@/public/rmtdev.png";
import fileupload from "@/public/file.png";
import MoviePlot from "@/public/movie.png";

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
    title: "Plot Words Game",
    description:
      "I enjoy watching movies, so I decided to include this sample project It's a game where the player guesses the movie based on plot keywords.",
    tags: ["React", "Framer motion"],
    imageUrl: MoviePlot,
    previewLink: "https://movies-game.vercel.app",
    sourceLink: "https://github.com/mahdi22dev/movies-game",
  },
  {
    title: "Uploadupia",
    description:
      " Anonymous file uploader where users can upload files and share them with a link and wesbite have a blog section too i manage it's content with contenful.",
    tags: ["React", "Framer motion", "Contenful", "Next.js"],
    imageUrl: fileupload,
    previewLink: "https://file-uploader-project.vercel.app",
    sourceLink: "https://github.com/mahdi22dev/file_uploader_project",
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
];
