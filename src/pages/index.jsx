import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { SkeletonImage } from '@/components/SkeletonImage'
import { BlurReveal } from '@/components/BlurReveal'
import { AnimatedSplit } from '@/components/AnimatedSplit'
import siteMeta, { projects, skills, interests } from '@/data/siteMeta'
import { useSite } from '@/lib/siteContext'

gsap.registerPlugin(ScrollTrigger)

const portrait = '/3L3A0403.jpeg'
const MARQUEE_TEXT = 'daali mohammed — '

function MarqueeTrack() {
  return (
    <div className="marquee-track">
      {Array.from({ length: 6 }).map((_, i) => (
        <span className="marquee-unit" key={i}>
          {MARQUEE_TEXT}
        </span>
      ))}
    </div>
  )
}

function Hero({ ready }) {
  const heroRef = useRef(null)
  const mediaRef = useRef(null)

  // Mouse parallax — lerped offsets drive --mx/--my (media transform + front
  // marquee clip window follow together, like the reference site).
  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    let raf
    const target = { x: 0, y: 0 }
    const current = { x: 0, y: 0 }

    const onMove = (e) => {
      const nx = e.clientX / window.innerWidth - 0.5
      const ny = e.clientY / window.innerHeight - 0.5
      target.x = nx * 44
      target.y = ny * 44
    }

    const loop = () => {
      current.x += (target.x - current.x) * 0.07
      current.y += (target.y - current.y) * 0.07
      hero.style.setProperty('--mx', `${current.x.toFixed(2)}px`)
      hero.style.setProperty('--my', `${current.y.toFixed(2)}px`)
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('mousemove', onMove)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Entrance once the preloader finishes.
  useEffect(() => {
    if (!ready || !heroRef.current) return
    const q = gsap.utils.selector(heroRef.current)
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(
      mediaRef.current,
      { scale: 0.6, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'expo.out' }
    )
      .fromTo(
        q('.hero-marquee-back, .hero-marquee-front'),
        { opacity: 0 },
        { opacity: 1, duration: 1 },
        '-=0.7'
      )
      .fromTo(
        q('.hero-topbar, .hero-identity'),
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, clearProps: 'all' },
        '-=0.6'
      )
    return () => tl.kill()
  }, [ready])

  return (
    <section ref={heroRef} className="hero" aria-label="Intro">
      <div className="hero-topbar">
        <span className="dim">available for work</span>
        <span className="dim">based in morocco</span>
      </div>

      <div className="hero-marquee-back" aria-hidden="true">
        <MarqueeTrack />
      </div>

      <div ref={mediaRef} className="hero-media">
        <Image
          src={portrait}
          alt="Daali Mohammed — full stack web developer"
          fill
          sizes="(max-width: 1024px) 72vw, 56vh"
          priority
          quality={85}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className="hero-marquee-front" aria-hidden="true">
        <MarqueeTrack />
      </div>

      <div className="hero-identity">
        full stack web developer — java / spring boot / react / next.js /
        angular
      </div>
    </section>
  )
}

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
          start: 'top bottom-=80',
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

export default function Home() {
  const { loaderDone } = useSite()
  const featured = projects.filter((p) => p.featured).slice(0, 4)

  return (
    <>
      <NextSeo
        title="Daali Mohammed — full stack web developer"
        description={siteMeta.description}
        canonical={siteMeta.siteUrl}
        openGraph={{
          url: siteMeta.siteUrl,
          siteName: siteMeta.title,
        }}
      />

      <Hero ready={loaderDone} />

      {/* who am i */}
      <section className="section" aria-label="About me">
        <AnimatedSplit tagName="h2" className="bracket-label">
          <span className="bracket">[</span>who am i
          <span className="bracket">]</span>
        </AnimatedSplit>
        <BlurReveal
          className="section-desc"
          text={
            "i'm daali mohammed — a full stack web developer deeply passionate about coding and creating innovative web solutions. with a dedicated focus on honing my skills, i strive to contribute meaningfully to the world of web development. what i care about: software architecture, clean code, and never stopping learning."
          }
        />
      </section>

      {/* skills */}
      <section className="section" style={{ paddingTop: 0 }} aria-label="Skills">
        <AnimatedSplit tagName="h2" className="bracket-label">
          <span className="bracket">[</span>what i work with
          <span className="bracket">]</span>
        </AnimatedSplit>
        <Reveal className="info-rows">
          {skills.map((group) => (
            <div className="info-row" key={group.label}>
              <span className="info-row-label">{group.label}</span>
              <span className="info-row-value">
                {group.items.map((item, i) => (
                  <span key={item}>
                    {item}
                    {i < group.items.length - 1 && <span className="sep">/</span>}
                  </span>
                ))}
              </span>
            </div>
          ))}
          <div className="info-row">
            <span className="info-row-label">interests</span>
            <span className="info-row-value">
              {interests.map((item, i) => (
                <span key={item}>
                  {item}
                  {i < interests.length - 1 && <span className="sep">/</span>}
                </span>
              ))}
            </span>
          </div>
        </Reveal>
      </section>

      {/* selected works */}
      <section
        className="section"
        style={{ paddingTop: 0 }}
        aria-label="Selected works"
      >
        <AnimatedSplit tagName="h2" className="bracket-label">
          <span className="bracket">[</span>selected works
          <span className="bracket">]</span>
        </AnimatedSplit>
        <BlurReveal
          className="section-desc"
          text={"a few of the things i've made."}
        />

        <div className="works-grid">
          {featured.map((project, i) => (
            <Reveal key={project.name}>
              <Link
                href="/projects"
                className="project-card"
                style={{ '--hover-color': project.accent }}
              >
                <SkeletonImage
                  className="project-media"
                  src={project.screenshots[0]}
                  alt={`${project.name} screenshot`}
                  fill
                  sizes="(max-width: 700px) 88vw, 44vw"
                  quality={80}
                />
                <div className="project-card-title-line">
                  <span className="project-card-title">{project.name}</span>
                  <span className="project-index">
                    /{String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <span className="project-card-stack">
                  {project.skills.split('-').slice(0, 3).join(' · ')}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal style={{ marginTop: '4em' }}>
          <Link href="/projects" className="dot-button">
            all projects ({projects.length})
          </Link>
        </Reveal>
      </section>
    </>
  )
}
