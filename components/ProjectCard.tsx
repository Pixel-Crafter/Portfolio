"use client"

import Image from "next/image"
import React from "react"

interface ProjectCardProps {
    title: string
    text: string
    image: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, text, image }) => {
    return (
        <div className="
            bg-gray-200 dark:bg-[#26252e]    /* card background changes with theme */
            text-black dark:text-white        /* text inherits automatically */
            rounded-xl
            shadow-md dark:shadow-lg
            overflow-hidden
            transition-colors duration-300
            transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20
        ">
            {/* PROJECT IMAGE */}
            <div className="relative w-full h-48 md:h-56">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>

            {/* PROJECT TEXT */}
            <div className="p-4 flex flex-col gap-2">
                <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
                <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">{text}</p>
            </div>
        </div>
    )
}

export default ProjectCard