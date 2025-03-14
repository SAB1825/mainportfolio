"use client"

import { useState } from "react"
import SectionTitle from "./SectionTitle"
import ProjectCard from "./project-card"

// Import your images
// import { amazonImg, cyberImg, noorShop } from "@/public/assets";

const projectsData = [
  {
    id: 1,
    title: "Fitness Workout App",
    description:
      "A fitness Exercise app which renders workouts from Rapid Api. With the functionality to choose exercise categories and specific muscle groups, browse more than one thousand exercises with practical examples, pagination, exercise details, pull related videos from youtube, display similar exercises, and much more.",
    image: "/assets/images/fitnessApp.png", 
    tech: ["React", "Rapid API", "CSS", "Netlify Deployment"],
    github: "https://github.com/SAB1825/fitness-website",
    demo: "https://sabari-fitness.netlify.app",
    featured: false,
  },
  {
    id: 2,
    title: "Responsive Blog - Frontend",
    description:
      "A Responsive Blog which is made with HTML and CSS and some basic Javascript. It has some stunning css with multipage function.",
    image: "/assets/images/blog.png", 
    tech: ["HTML", "CSS", "Javascript", "Vercel Deployment"],
    github: "https://github.com/SAB1825/blog3-website",
    demo: "https://blog3-website.vercel.app/",
    featured: false,
  },
  {
    id: 3,
    title: "AI Video Generator",
    description:
      "An AI Video Generator which generates videos based on the text input. It uses the Remotion library to generate videos.",
    image: "/assets/images/visuAI.png", 
    tech: ["NextJS", "Clerk", "Remotion", "Typescript", "Drizzle", "Gemini API"],
    github: "https://github.com/SAB1825/VisuAI",
    demo: "https://visuai.sabaris.site/",
    featured: false,
  },
  {
    id: 4,
    title: "Image Identifier",
    description:
      "A simple image identifier app which uses the Gemini API to detect what kind of image it is.",
    image: "/assets/images/imageiq.png", 
    tech: ["Nextjs", "Gemini API", "Typescript"],
    github: "https://github.com/SAB1825/imageIQ",
    demo: "https://imageiq.sabaris.site/",
    featured: true,
  },
  {
    id: 4,
    title: "Blog Website",
    description:
      "A Blog webiste which is made with Nextjs and Tailwind CSS. It has some stunning css with multipage function.",
    image: "/assets/images/pBLog.png", 
    tech: ["Nextjs", "Typescript"],
    github: "https://github.com/SAB1825/blog2-website",
    demo: "https://blogs.sabaris.site/",
    featured: true,
  },
  {
    id: 4,
    title: "BIT Staff Quarters portal",
    description:
      "This project is build for managing the quarters detail where staff’s can create complaint and manage guest details. Where Admin can manage all the staff details.",
    image: "/assets/images/bit.png", 
    tech: ["Nextjs", "Typescript", "MongoDb", "Express", "Nodejs"],
    github: "https://github.com/SAB1825/bit-frontend",
    demo: "https://bitstaffqaurtersportal.sabaris.site/sign-in",
    featured: true,
  },
]




const ProjectsV2 = () => {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProjects =
  activeFilter === "all"
  ? projectsData
  : projectsData.filter((p) =>
      p.tech.some((t) => t.toLowerCase() === activeFilter.toLowerCase())
    );

  const filters = ["all", "react", "nextjs", "html"]

  return (
    <section id="project" className="max-w-container mx-auto px-4 lgl:px-20 py-24">
      <SectionTitle title="Some Things I have Built" titleNo="02" />

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mt-8 mb-10 justify-center">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
              activeFilter === filter ? "bg-textGreen text-bodyColor" : "bg-[#112240] text-textLight hover:bg-[#1d3a6a]"
            }`}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} variant="grid" />
        ))}
      </div>

      
      
    </section>
  )
}

export default ProjectsV2

