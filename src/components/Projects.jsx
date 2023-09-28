"use client";
import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/config/data";
import Project from "./Project";
import { useSectionInView } from "@/lib/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects");
  return (
    <section id='projects' className='scroll-mt-28 mb-28' ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => {
          return <Project key={index} {...project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
