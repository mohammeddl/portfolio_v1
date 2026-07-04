import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { SkeletonImage } from '@/components/SkeletonImage'
import siteMeta, { projects } from '@/data/siteMeta'

gsap.registerPlugin(ScrollTrigger)

function Reveal({ children, className, ...props }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const anim = gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=60',
          toggleActions: 'play none none none',
        },
      }
    )
    return () => {
      anim.scrollTrigger?.kill()
      anim.kill()
    }
  }, [])

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
}

function ProjectRow({ project, index }) {
  const [shot, setShot] = useState(0)
  const shots = project.screenshots || []
  // Projects without screenshots link their media block to the GitHub repo.
  const repoHref =
    project.repository ||
    (project.link.href.includes('github.com') ? project.link.href : null)

  return (
    <Reveal>
      <article
        className="project-row"
        style={{ '--hover-color': project.accent }}
      >
        <div className="project-title-line">
          <h2 className="project-title">{project.name}</h2>
          <span className="project-index">
            /{String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {shots.length > 0 ? (
          <a
            href={project.link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.name}`}
          >
            <SkeletonImage
              key={shots[shot]}
              className="project-media"
              src={shots[shot]}
              alt={`${project.name} screenshot ${shot + 1}`}
              fill
              sizes="(max-width: 1024px) 92vw, 86vw"
              quality={80}
            />
          </a>
        ) : (
          <a
            href={repoHref || project.link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={`Open ${project.name} on GitHub`}
            className="project-media project-media-default"
          >
            {project.logo && (
              <span className="project-media-logo">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  fill
                  sizes="200px"
                />
              </span>
            )}
            <span className="project-media-cta">
              {repoHref ? 'view on github ↗' : 'view project ↗'}
            </span>
          </a>
        )}

        {shots.length > 1 && (
          <div className="tag-list" role="tablist" aria-label="Screenshots">
            {shots.map((s, i) => (
              <button
                key={s}
                type="button"
                className="tag"
                style={{
                  cursor: 'pointer',
                  background: i === shot ? 'var(--bg-soft)' : 'transparent',
                }}
                onClick={() => setShot(i)}
                aria-pressed={i === shot}
              >
                {String(i + 1).padStart(2, '0')}
              </button>
            ))}
          </div>
        )}

        <p className="project-desc">{project.description}</p>

        <div className="tag-list">
          {project.skills.split('-').map((skill) => (
            <span className="tag" key={skill}>
              {skill.trim()}
            </span>
          ))}
        </div>

        <div className="project-links">
          <a
            href={project.link.href}
            target="_blank"
            rel="noreferrer"
            className="dot-button"
          >
            {project.link.label}
          </a>
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noreferrer"
              className="dot-button"
            >
              source code
            </a>
          )}
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <>
      <NextSeo
        title="Projects — Daali Mohammed"
        description={siteMeta.description}
        canonical={`${siteMeta.siteUrl}/projects`}
        openGraph={{
          url: `${siteMeta.siteUrl}/projects`,
          siteName: siteMeta.title,
        }}
      />

      <section className="section" style={{ paddingTop: '20vh' }}>
        <Reveal>
          <h1 className="bracket-label">
            <span className="bracket">[</span>selected works
            <span className="bracket">]</span>
          </h1>
          <p className="section-desc">
            {projects.length} projects — ideas turned into code. each one is a
            blend of creativity, problem-solving, and technical craft.
          </p>
        </Reveal>

        <div>
          {projects.map((project, i) => (
            <ProjectRow key={project.name} project={project} index={i} />
          ))}
        </div>
      </section>
    </>
  )
}
