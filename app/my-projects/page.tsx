"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const page = () => {
  return (
    <div style={{backgroundColor: "#1C1B22"}} className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
        <div className='grid grid-cols-2 gap-5 max-w-[90%]'>
            {Projects.map((project, index) => (
                <ProjectCard
                    key={index}
                    title={project.name}
                    text={project.text}
                    image={project.src}
                />
            ))}
        </div>
    </div>
  )
}

export default page;