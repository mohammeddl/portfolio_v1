import { useState, useEffect, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { ImageCarousel } from '@/components/ImageCarousel'

export function ProjectModal({ isOpen, closeModal, project }) {
  if (!project) return null;

  const hasScreenshots = project.screenshots && project.screenshots.length > 0;
  const placeholderScreenshots = ['/api/placeholder/800/600', '/api/placeholder/800/600'];
  const screenshotsToUse = hasScreenshots ? project.screenshots : placeholderScreenshots;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white dark:bg-zinc-800 p-6 text-left align-middle shadow-xl transition-all">
                <div className="flex items-center justify-between mb-6">
                  <Dialog.Title as="h3" className="text-2xl font-bold leading-6 text-zinc-900 dark:text-zinc-100">
                    {project.name}
                  </Dialog.Title>
                  <button
                    type="button"
                    className="text-zinc-400 hover:text-zinc-500 dark:text-zinc-500 dark:hover:text-zinc-400 transition-colors"
                    onClick={closeModal}
                    aria-label="Fermer"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Aperçu du projet</h4>
                      <div className="relative">
                        <ImageCarousel 
                          images={screenshotsToUse} 
                          projectName={project.name} 
                        />
                        {!hasScreenshots && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="bg-zinc-700/80 text-white px-4 py-2 rounded-md">
                              {!hasScreenshots ? "Captures d'écran à venir" : ""}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap mt-4 gap-4 justify-center md:justify-start">
                      {project.repository && (
                        <a
                          href={project.repository}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center rounded-md py-2 px-4 text-sm font-medium bg-zinc-800 text-white hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                        >
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5 mr-2" 
                            viewBox="0 0 24 24" 
                            fill="currentColor"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Code source
                        </a>
                      )}
                      
                      <a
                        href={project.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-md py-2 px-4 text-sm font-medium bg-teal-600 text-white hover:bg-teal-500 dark:bg-teal-500 dark:hover:bg-teal-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                      >
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="h-5 w-5 mr-2" 
                          viewBox="0 0 24 24" 
                          fill="none" 
                          stroke="currentColor" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Visiter le site
                      </a>
                    </div>
                  </div>

                  {/* Informations à droite */}
                  <div className="md:col-span-1">
                    <div className="bg-zinc-50 dark:bg-zinc-700/30 p-4 rounded-lg">
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Description</h4>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.split('-').map((skill, index) => (
                            <span 
                              key={index} 
                              className="px-3 py-1 text-xs bg-zinc-200 dark:bg-zinc-600 rounded-full text-zinc-800 dark:text-zinc-200"
                            >
                              {skill.trim()}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex justify-center mt-4">
                        <Image
                          src={project.logo}
                          alt={`Logo de ${project.name}`}
                          width={80}
                          height={80}
                          className="object-contain rounded-lg"
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}