import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { NextSeo } from 'next-seo';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { ProjectModal } from '@/components/ProjectModal'

import siteMeta, { projects } from '@/data/siteMeta'

gsap.registerPlugin(ScrollTrigger)

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    // Animate project cards on scroll
    projectRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.1, // Stagger effect
          }
        );
      }
    });
  }, []);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
  };

  const headline = "Welcome to my portfolio"
  const intro = "Where ideas come to life and code transforms into tangible solutions. Each project presented here represents a blend of creativity, problem-solving, and technical expertise."

  return (
    <>
      <NextSeo
        title="Projets - Daali Mohammed"
        description={siteMeta.description}
        canonical="https://brian.dev/projects"
        openGraph={{
          url: 'https://brian.dev/projects',
          images: [
            {
              url: `https://og.brian.dev/api/og?title=Projects&desc=${headline}`,
              width: 1200,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            }
          ],
          siteName: 'brian.dev',
        }}
      />
      
      <SimpleLayout
        title={headline}
        intro={intro}
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project, index) => (
            <Card as="li" key={project.name}>
              <div
                ref={(el) => (projectRefs.current[index] = el)}
                className="project-card h-full flex flex-col relative group cursor-pointer transition-all duration-300 hover:shadow-xl dark:hover:shadow-zinc-800/50 rounded-2xl overflow-hidden"
                onClick={() => openProjectModal(project)}
              >
                {/* Overlay with effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
                  <button className="bg-white text-teal-700 dark:bg-zinc-800 dark:text-teal-400 font-medium px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                    View project
                  </button>
                </div>

                {/* Card content */}
                <div className="p-4 flex flex-col h-full z-10 group-hover:z-0">
                  <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                    <Image
                      src={project.logo}
                      alt={`${project.name} logo`}
                      width={32}
                      height={32}
                      className="h-8 w-8 rounded-lg"
                      loading="lazy"
                      quality={85}
                    />
                  </div>
                  <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    {project.name}
                  </h2>
                  <Card.Description className="flex-grow line-clamp-3">
                    {project.description}
                  </Card.Description>

                  {/* Skills tags */}
                  <div className="mt-4 flex flex-wrap gap-1">
                    {project.skills.split('-').slice(0, 3).map((skill, index) => (
                      <span key={index} className="inline-block px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-700 rounded-full text-zinc-800 dark:text-zinc-200">
                        {skill.trim()}
                      </span>
                    ))}
                    {project.skills.split('-').length > 3 && (
                      <span className="inline-block px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-700 rounded-full text-zinc-800 dark:text-zinc-200">
                        +{project.skills.split('-').length - 3}
                      </span>
                    )}
                  </div>

                  <p className="relative z-10 mt-4 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                    <LinkIcon className="h-6 w-6 flex-none" />
                    <span className="ml-2">{project.link.label}</span>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </ul>
      </SimpleLayout>

      {/* Project modal */}
      <ProjectModal 
        isOpen={isModalOpen} 
        closeModal={closeProjectModal} 
        project={selectedProject} 
      />
    </>
  )
}