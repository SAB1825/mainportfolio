"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { TbBrandGithub } from "react-icons/tb"
import { RxOpenInNewWindow } from "react-icons/rx"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    tech: string[]
    github: string
    demo: string
    featured: boolean
  }
  index: number
  variant?: "grid" | "featured"
}

export default function ProjectCard({ project, index, variant = "grid" }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  if (variant === "featured") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8`}>
          {/* Project Image */}
          <div className="lg:w-3/5 relative group overflow-hidden rounded-lg">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={800}
              height={450}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-textGreen/10 group-hover:bg-transparent transition-colors duration-300"></div>

            {/* Animated Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-bodyColor/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-6 w-full">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-bodyColor/80 text-textGreen px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textLight hover:text-textGreen transition-colors"
                  >
                    <TbBrandGithub className="text-2xl" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-textLight hover:text-textGreen transition-colors"
                  >
                    <RxOpenInNewWindow className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5 flex flex-col justify-center">
            <span className="text-textGreen text-sm tracking-wider mb-1">Featured Project</span>
            <h3 className="text-2xl font-bold text-textLight mb-4">{project.title}</h3>

            <div className="bg-[#112240] p-5 rounded-lg shadow-xl mb-4 relative z-10">
              <p className="text-textDark">{project.description}</p>
            </div>

            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="self-start px-6 py-2 border border-textGreen text-textGreen rounded-md hover:bg-textGreen/10 transition-colors duration-300"
            >
              View Project
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div
          className={`absolute top-1/2 ${index % 2 === 0 ? "-right-4" : "-left-4"} w-8 h-8 border-2 border-textGreen rounded-full hidden lg:block`}
        ></div>
      </motion.div>
    )
  }

  // Grid variant
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-[#112240] rounded-lg overflow-hidden flex flex-col h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image with Overlay */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          width={500}
          height={300}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-textGreen/20 group-hover:bg-textGreen/10 transition-colors duration-300"></div>

        {/* Floating Tech Tags */}
        <div className="absolute bottom-0 left-0 right-0 p-2 flex flex-wrap gap-1 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="text-[10px] bg-bodyColor/90 text-textGreen px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Project Content */}
      <div className="flex flex-col flex-grow p-5">
        {/* Title and Featured Badge */}
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-textLight group-hover:text-textGreen transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <span className="text-[10px] bg-textGreen/20 text-textGreen px-2 py-1 rounded-full">Featured</span>
          )}
        </div>

        {/* Description */}
        <p className="text-sm text-textDark mb-4 flex-grow">{project.description}</p>

        {/* Links */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#233554]">
          <div className="flex gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textLight hover:text-textGreen transition-colors"
              aria-label="GitHub Repository"
            >
              <TbBrandGithub className="text-xl" />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-textLight hover:text-textGreen transition-colors"
              aria-label="Live Demo"
            >
              <RxOpenInNewWindow className="text-xl" />
            </a>
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-textGreen text-bodyColor px-3 py-1 rounded-full font-medium"
            >
              View Project
            </a>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

