import { useEffect, useRef } from 'react'
import { NextSeo } from 'next-seo'
import gsap from 'gsap'

import siteMeta from '@/data/siteMeta'

export default function Contact() {
  const rootRef = useRef(null)

  useEffect(() => {
    const q = gsap.utils.selector(rootRef.current)
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.fromTo(
      q('[data-anim]'),
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 }
    )
    return () => tl.kill()
  }, [])

  return (
    <>
      <NextSeo
        title="Contact — Daali Mohammed"
        description={siteMeta.description}
        canonical={`${siteMeta.siteUrl}/contact`}
        openGraph={{
          url: `${siteMeta.siteUrl}/contact`,
          siteName: siteMeta.title,
        }}
      />

      <section ref={rootRef} className="contact-hero" aria-label="Contact">
        <div data-anim>
          <h1 className="bracket-label">
            <span className="bracket">[</span>get in touch
            <span className="bracket">]</span>
          </h1>
          <p className="section-desc">
            have a project in mind, a question, or just want to say hi? my
            inbox is always open — i&apos;ll get back to you as soon as i can.
          </p>
        </div>

        <a
          data-anim
          href={`mailto:${siteMeta.author.email}`}
          className="contact-big-link"
        >
          {siteMeta.author.email}
        </a>

        <div data-anim className="contact-meta">
          <div className="footer-links">
            <span className="footer-label">socials</span>
            <a
              href={siteMeta.author.github}
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              github ↗
            </a>
            <a
              href={siteMeta.author.linkedin}
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              linkedin ↗
            </a>
            <a
              href={siteMeta.author.instagram}
              className="footer-link"
              target="_blank"
              rel="noreferrer"
            >
              instagram ↗
            </a>
          </div>

          <div className="footer-links">
            <span className="footer-label">resume</span>
            <a href="/CV_Daali_Mohammed.pdf" download className="footer-link">
              download cv ↓
            </a>
          </div>

          <div className="footer-links">
            <span className="footer-label">status</span>
            <span className="footer-link" style={{ cursor: 'default' }}>
              available for work
            </span>
            <span className="footer-link" style={{ cursor: 'default' }}>
              based in morocco
            </span>
          </div>
        </div>
      </section>
    </>
  )
}
